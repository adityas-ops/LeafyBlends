import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import useCartStore from '../store/cartStore';

const DB_NAME = 'LeafyBlendsCheckout';
const STORE_NAME = 'userInfo';

function openDB() {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function getUserInfo() {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);
    const req = store.get(1);
    req.onsuccess = () => resolve(req.result);
    req.onerror = reject;
  });
}

function Payment() {
  const router = useRouter();
  const { cart, getTotalPrice, clearCart } = useCartStore();
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [orderSummary, setOrderSummary] = useState({
    subtotal: 0,
    shipping: 0,
    tax: 0,
    total: 0
  });

  useEffect(() => {
    const loadUserInfo = async () => {
      try {
        const info = await getUserInfo();
        setUserInfo(info);
        
        // Calculate order summary
        const subtotal = getTotalPrice();
        const shipping = subtotal > 500 ? 0 : 50; // Free shipping above ₹500
        const tax = subtotal * 0.18; // 18% GST
        const total = subtotal + shipping + tax;
        
        setOrderSummary({
          subtotal,
          shipping,
          tax,
          total
        });
      } catch (error) {
        console.error('Error loading user info:', error);
        toast.error('Failed to load user information');
      } finally {
        setLoading(false);
      }
    };

    loadUserInfo();
  }, [getTotalPrice]);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve();
      script.onerror = () => {
        toast.error('Failed to load Razorpay');
        resolve();
      };
      document.body.appendChild(script);
    });
  };

  const createOrder = async () => {
    try {
      const response = await fetch('/api/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: Math.round(orderSummary.total * 100), // Convert to paise and ensure it's an integer
          currency: 'INR',
          receipt: `receipt_${Date.now()}`,
        }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        console.error('API Error Response:', data);
        throw new Error(data.error || 'Failed to create order');
      }

      return data;
    } catch (error) {
      console.error('Error creating order:', error);
      throw error;
    }
  };

  const verifyPayment = async (paymentData) => {
    try {
      const response = await fetch('/api/verify-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Payment verification failed');
      }

      return data;
    } catch (error) {
      console.error('Error verifying payment:', error);
      throw error;
    }
  };

  const handlePayment = async () => {
    if (!userInfo) {
      toast.error('Please complete checkout first');
      router.push('/checkout');
      return;
    }

    if (cart.length === 0) {
      toast.error('Your cart is empty');
      router.push('/');
      return;
    }

    // Check if Razorpay key is configured
    const razorpayKey = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
    if (!razorpayKey || razorpayKey === 'rzp_test_YOUR_TEST_KEY_ID') {
      toast.error('Razorpay is not configured. Please set up your API keys.');
      console.error('Razorpay key not configured. Please create a .env.local file with your Razorpay keys.');
      return;
    }

    setProcessing(true);

    try {
      // Load Razorpay script
      await loadRazorpayScript();

      // Create order
      const orderData = await createOrder();

      // Configure Razorpay options
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_test_YOUR_TEST_KEY_ID',
        amount: orderData.amount,
        currency: orderData.currency,
        name: 'LeafyBlends',
        description: 'Premium Tea Collection',
        order_id: orderData.orderId,
        prefill: {
          name: userInfo.name,
          email: userInfo.email,
          contact: userInfo.mobile,
        },
        notes: {
          address: `${userInfo.city}, ${userInfo.state}, ${userInfo.country}`,
        },
        theme: {
          color: '#000000',
        },
        // Add callback URLs for localhost testing
        callback_url: `${window.location.origin}/payment-success`,
        cancel_url: `${window.location.origin}/payment-cancelled`,
        handler: async function (response) {
          try {
            // Verify payment
            const verificationResult = await verifyPayment({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            });

            if (verificationResult.success) {
              toast.success('Payment successful!');
              clearCart();
              // Redirect to success page or show success message
              setTimeout(() => {
                router.push('/');
              }, 2000);
            } else {
              toast.error('Payment verification failed');
            }
          } catch (error) {
            toast.error('Payment verification failed');
          }
        },
        modal: {
          ondismiss: function () {
            setProcessing(false);
            toast.error('Payment cancelled');
          },
        },
      };

      // Initialize Razorpay
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error('Payment error:', error);
      toast.error(error.message || 'Payment failed');
    } finally {
      setProcessing(false);
    }
  };

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center mt-[60px] tablet:mt-[108px]">
        <div className="text-center">
          <div className="w-12 h-12 mx-auto border-b-2 border-black rounded-full animate-spin"></div>
          <p className="mt-4">Loading payment details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex tablet:flex-row flex-col mt-[60px] tablet:mt-[108px] p-4">
      <div className="w-full tablet:w-2/3 tablet:pr-8">
        {/* Order Summary */}
        <div className="p-6 mb-6 bg-white rounded-lg shadow-md">
          <h2 className="mb-4 text-2xl font-bold">Order Summary</h2>
          
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between py-2 border-b">
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600">Qty: {item.quantity}</p>
              </div>
              <p className="font-semibold">₹{(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
          
          <div className="mt-4 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>₹{orderSummary.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping:</span>
              <span>{orderSummary.shipping === 0 ? 'Free' : `₹${orderSummary.shipping.toFixed(2)}`}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax (18% GST):</span>
              <span>₹{orderSummary.tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between pt-2 text-lg font-bold border-t">
              <span>Total:</span>
              <span>₹{orderSummary.total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Shipping Information */}
        {userInfo && (
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="mb-4 text-2xl font-bold">Shipping Information</h2>
            <div className="space-y-2">
              <p><strong>Name:</strong> {userInfo.name}</p>
              <p><strong>Email:</strong> {userInfo.email}</p>
              <p><strong>Phone:</strong> {userInfo.mobile}</p>
              <p><strong>Address:</strong> {userInfo.city}, {userInfo.state}, {userInfo.country}</p>
            </div>
          </div>
        )}
      </div>

      {/* Payment Section */}
      <div className="w-full mt-6 tablet:w-1/3 tablet:pl-4 tablet:mt-0">
        <div className="sticky p-6 bg-white rounded-lg shadow-md top-4">
          <h2 className="mb-4 text-2xl font-bold">Payment</h2>
          
          <div className="mb-6">
            <p className="mb-4 text-gray-600">
              Secure payment powered by Razorpay
            </p>
            <div className="p-4 rounded-lg bg-gray-50">
              <p className="mb-2 text-sm text-gray-600">Test Card Details:</p>
              <p className="text-xs text-gray-500">Card: 4111 1111 1111 1111</p>
              <p className="text-xs text-gray-500">Expiry: Any future date</p>
              <p className="text-xs text-gray-500">CVV: Any 3 digits</p>
            </div>
          </div>

          <button
            onClick={handlePayment}
            disabled={processing || !userInfo || cart.length === 0}
            className="w-full px-4 py-3 font-semibold text-white transition-colors bg-black rounded-lg hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {processing ? 'Processing...' : `Pay ₹${orderSummary.total.toFixed(2)}`}
          </button>

          <p className="mt-4 text-xs text-center text-gray-500">
            By clicking "Pay", you agree to our terms and conditions
          </p>
        </div>
      </div>
    </div>
  );
}

export default Payment;