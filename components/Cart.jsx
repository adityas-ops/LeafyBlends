import React from 'react';
import { IoBagHandleOutline } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';
import { FiMinus, FiPlus } from 'react-icons/fi';
import useCartStore from '../store/cartStore';

const Cart = () => {
  const { 
    cart, 
    isCartOpen, 
    toggleCart, 
    removeFromCart, 
    updateQuantity, 
    getTotalItems, 
    getTotalPrice 
  } = useCartStore();

  if (!isCartOpen) return null;

  // Only show on desktop/tablet, not on mobile
  return (
    <div className="hidden tablet:block">
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={toggleCart}
        />
        
        {/* Cart Panel */}
        <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
          <div className="flex h-full flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center">
                <IoBagHandleOutline className="text-2xl mr-2" />
                <h2 className="text-lg font-semibold">Your Cart</h2>
                <span className="ml-2 text-sm text-gray-500">({getTotalItems()} items)</span>
              </div>
              <button
                onClick={toggleCart}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <RxCross2 className="text-xl" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-4">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-gray-500">
                  <IoBagHandleOutline className="text-4xl mb-4" />
                  <p>Your cart is empty</p>
                  <p className="text-sm">Add some tea to get started!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                        <p className="text-sm font-semibold">€{item.price}</p>
                      </div>
                      <div className="flex flex-col items-end space-y-2">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <RxCross2 className="text-sm" />
                        </button>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-gray-100 rounded"
                          >
                            <FiMinus className="text-xs" />
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-gray-100 rounded"
                          >
                            <FiPlus className="text-xs" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="border-t p-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold">Total:</span>
                  <span className="text-lg font-semibold">€{getTotalPrice().toFixed(2)}</span>
                </div>
                <button className="w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors">
                  Proceed to Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart; 