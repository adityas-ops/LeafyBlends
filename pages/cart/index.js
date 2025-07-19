import React from "react";
import { useRouter } from "next/router";
import { FiMinus, FiPlus, FiArrowLeft } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import useCartStore from "../../store/cartStore";

function Cart() {
  const router = useRouter();
  const { 
    cart, 
    removeFromCart, 
    updateQuantity, 
    getTotalItems, 
    getTotalPrice,
    clearCart 
  } = useCartStore();

  const handleCheckout = () => {
    // Here you would typically redirect to a checkout page
    alert("Proceeding to checkout...");
  };

  if (cart.length === 0) {
    return (
      <div className="w-full h-full mt-[60px] tablet:mt-[108px]">
        <div className="w-full h-full pr-10 pl-10 mt-6">
          <div className="w-full h-full uppercase mb-10">Home {router.pathname}</div>
          
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <div className="text-6xl mb-4">🛒</div>
            <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-8 max-w-md">
              Looks like you haven't added any items to your cart yet. 
              Start shopping to discover our amazing tea collection!
            </p>
            <div className="space-x-4">
              <Link href="/collections">
                <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                  Browse Tea Collections
                </button>
              </Link>
              <Link href="/accessories">
                <button className="border border-black text-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition-colors">
                  Shop Accessories
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full mt-[60px] tablet:mt-[108px]">
      <div className="w-full h-full pr-10 pl-10 mt-6">
        <div className="w-full h-full uppercase mb-10">Home {router.pathname}</div>
        
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Link href="/collections">
              <button className="flex items-center text-gray-600 hover:text-black transition-colors mr-4">
                <FiArrowLeft className="mr-2" />
                Continue Shopping
              </button>
            </Link>
          </div>
          <button
            onClick={clearCart}
            className="text-red-600 hover:text-red-800 transition-colors"
          >
            Clear Cart
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <h1 className="text-2xl font-bold mb-6">Shopping Cart ({getTotalItems()} items)</h1>
            
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                    <p className="text-lg font-semibold mt-1">€{item.price}</p>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <RxCross2 className="text-lg" />
                    </button>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 hover:bg-gray-100 rounded-full"
                      >
                        <FiMinus className="text-sm" />
                      </button>
                      <span className="w-12 text-center font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-gray-100 rounded-full"
                      >
                        <FiPlus className="text-sm" />
                      </button>
                    </div>
                    <p className="text-lg font-bold">€{(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal ({getTotalItems()} items)</span>
                  <span>€{getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>€{(getTotalPrice() * 0.21).toFixed(2)}</span>
                </div>
                <hr className="my-3" />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>€{(getTotalPrice() * 1.21).toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors font-semibold"
              >
                Proceed to Checkout
              </button>

              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">
                  Free shipping on orders over €50
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart; 