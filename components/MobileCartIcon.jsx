import React from 'react';
import Link from 'next/link';
import { IoBagHandleOutline } from 'react-icons/io5';
import useCartStore from '../store/cartStore';

const MobileCartIcon = () => {
  const { getTotalItems } = useCartStore();
  const totalItems = getTotalItems();

  // Only show the icon if there's at least one item in cart
  if (totalItems === 0) {
    return null;
  }

  return (
    <div className="fixed z-50 bottom-6 right-6 tablet:hidden">
      <Link href="/cart">
        <div className="relative">
          <div className="flex items-center justify-center text-white transition-colors duration-200 bg-black rounded-full shadow-lg w-14 h-14 hover:bg-gray-800">
            <IoBagHandleOutline className="text-2xl" />
          </div>
          <div className="absolute flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full -top-2 -right-2">
            {totalItems}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MobileCartIcon; 