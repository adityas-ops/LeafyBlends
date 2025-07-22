import React from 'react';
import { IoBagHandleOutline } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';
import { FiMinus, FiPlus } from 'react-icons/fi';
import useCartStore from '../store/cartStore';
import Image from 'next/image';

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
        <div className="absolute top-0 right-0 w-full h-full max-w-md bg-white shadow-xl">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center">
                <IoBagHandleOutline className="mr-2 text-2xl" />
                <h2 className="text-lg font-semibold">Your Cart</h2>
                <span className="ml-2 text-sm text-gray-500">({getTotalItems()} items)</span>
              </div>
              <button
                onClick={toggleCart}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <RxCross2 className="text-xl" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 p-4 overflow-y-auto">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-gray-500">
                  <IoBagHandleOutline className="mb-4 text-4xl" />
                  <p>Your cart is empty</p>
                  <p className="text-sm">Add some tea to get started!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center p-4 space-x-4 border rounded-lg">
                      <Image
                        src={item.image}
                        alt={item.name}
                        height={64}
                        width={64}
                        className="object-cover w-16 h-16 rounded"
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
                            className="p-1 rounded hover:bg-gray-100"
                          >
                            <FiMinus className="text-xs" />
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 rounded hover:bg-gray-100"
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
              <div className="p-4 border-t">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-semibold">Total:</span>
                  <span className="text-lg font-semibold">€{getTotalPrice().toFixed(2)}</span>
                </div>
                <button className="w-full px-4 py-3 text-white transition-colors bg-black rounded-lg hover:bg-gray-800">
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