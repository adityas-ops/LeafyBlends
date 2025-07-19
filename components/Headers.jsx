import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiMenu } from "react-icons/fi";
import { BsFillPersonFill, BsSearch } from "react-icons/bs";
import { IoBagHandleOutline } from "react-icons/io5";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import useCartStore from "../store/cartStore";
import Cart from "./Cart";
import { FiMinus, FiPlus } from "react-icons/fi";

function Headers() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeader, setHeader] = useState(true);
  const [showCartInMobile, setShowCartInMobile] = useState(false);
  const { 
    cart, 
    toggleCart, 
    getTotalItems, 
    removeFromCart, 
    updateQuantity, 
    getTotalPrice 
  } = useCartStore();
  
  const isOpened = () => {
    setIsMenuOpen(true);
    setHeader(false);
  };
  const isClosed = () => {
    setIsMenuOpen(false);
    setHeader(true);
    setShowCartInMobile(false);
  };

  const toggleMobileCart = () => {
    setShowCartInMobile(!showCartInMobile);
  };
  
  return (
    <>
      <div className="flex fixed  top-0 bg-white justify-center items-center w-full h-[60px] tablet:h-[108px]">
        <div className={`${isHeader ? "flex":"none"} w-[95%] h-[48px]  items-center `}>
          <div className=" flex-[20%]  w-full h-full flex justify-center items-center ">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Picture of the author"
                width={200}
                height={200}
              />
            </Link>
          </div>
          <div className="flex-[80%] w-full h-full  hidden tablet:flex  ">
            <div className="flex-[70%]  flex justify-evenly items-center">
              <Link
                href="/collections"
                className=" text-sm cursor-pointer hover:text-Outline"
              >
                TEA COLLECTIONS
              </Link>
              <Link
                href="/accessories"
                className=" text-sm cursor-pointer hover:text-Outline"
              >
                ACCESSORIES
              </Link>
              <Link
                href="/blog"
                className=" text-sm cursor-pointer hover:text-Outline"
              >
                BLOG
              </Link>
              <Link
                href="/contact"
                className=" text-sm cursor-pointer hover:text-Outline"
              >
                CONTACT US
              </Link>
            </div>
            <div className="flex-[30%] flex justify-center items-center h-full ">
              <div className="flex justify-evenly w-[80%]  h-full items-center">
                <Link
                  href="/"
                  className=" text-sm cursor-pointer hover:text-Outline"
                >
                  <BsSearch className="text-[18px]" />
                </Link>
                <Link
                  href="/"
                  className=" text-sm cursor-pointer hover:text-Outline"
                >
                  <BsFillPersonFill className="text-2xl" />
                </Link>
                <div className="relative">
                  <button
                    onClick={toggleCart}
                    className=" text-sm cursor-pointer hover:text-Outline"
                  >
                    <IoBagHandleOutline className="text-2xl" />
                  </button>
                  <Link href="/cart">
                    <button className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center hover:bg-red-600 transition-colors">
                      {getTotalItems()}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex-[30%] w-full h-full  flex justify-end items-center tablet:hidden ">
            <button onClick={isOpened}>
              <FiMenu className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } z-[1035] border-2  fixed top-0 right-0 w-[350px] h-[100%] bg-white  transition-right duration-800 ease-in overflow-y-auto`}
      >
        <div className=" w-[95%] h-full mx-auto py-4">
          <div className="w-full h-[60px]  flex items-center justify-end">
            <button onClick={isClosed}>
              <RxCross2 className="text-3xl" />
            </button>
          </div>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg
                className="h-8 w-8 ml-5 fill-current text-gray-500"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 12a5.5 5.5 0 1 1 3.914-1.622l3.956 3.956-.88.88-3.956-3.956A5.47 5.47 0 0 1 6.5 12zm0-10a4.5 4.5 0 1 0 4.5 4.5A4.505 4.505 0 0 0 6.5 2z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="SEARCH PRODUCTS"
              className="  py-2 pl-8 pr-4 w-full border-2 h-[60px]  text-center"
            />
          </div>
          <div className="mt-4 w-full h-[60px] flex justify-center items-center ">
            <div className="flex-[10%]">
              <BsFillPersonFill className="text-4xl ml-2" />
            </div>
            <div className="flex-[90%] flex justify-start flex-col items-center ml-2 ">
              <div className=" w-full text-[14px] text-start font-regular  flex justify-start ">
                USER PROFILE
              </div>
              <div className="w-full text-[12px] font-light text-start flex justify-start text-Outline ">
                {" "}
                We Know You as a guest user
              </div>
            </div>
          </div>
          <button 
            onClick={toggleMobileCart}
            className="mt-2 w-full h-[60px] flex justify-center items-center cursor-pointer hover:bg-gray-50 rounded"
          >
            <div className="flex-[10%]">
              <IoBagHandleOutline className="text-4xl ml-2" />
            </div>
            <div className="flex-[90%] flex justify-start flex-col items-center ml-2 ">
              <div className=" w-full text-[14px] text-start font-regular  flex justify-start ">
                YOUR BAG
              </div>
              <div className="w-full text-[12px] font-light text-start flex justify-start text-Outline ">
                ({getTotalItems()}) Items have been added{" "}
              </div>
            </div>
          </button>
          {/* horizotal line start */}
          <hr className="text-black mt-4" />
          {/* horizotal line end */}
          
          {/* Mobile Cart Section */}
          {showCartInMobile && (
            <div className="w-full mt-4 mb-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-3">Your Cart ({getTotalItems()} items)</h3>
                
                {cart.length === 0 ? (
                  <div className="text-center py-4 text-gray-500">
                    <p>Your cart is empty</p>
                    <p className="text-sm">Add some tea to get started!</p>
                  </div>
                ) : (
                  <div className="space-y-3 max-h-60 overflow-y-auto">
                    {cart.map((item) => (
                      <div key={item.id} className="flex items-center space-x-3 p-3 bg-white rounded border">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm truncate">{item.name}</h4>
                          <p className="text-xs text-gray-600 truncate">{item.description}</p>
                          <p className="text-sm font-semibold">€{item.price}</p>
                        </div>
                        <div className="flex flex-col items-end space-y-1">
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-700 text-xs"
                          >
                            <RxCross2 className="text-sm" />
                          </button>
                          <div className="flex items-center space-x-1">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 hover:bg-gray-100 rounded text-xs"
                            >
                              <FiMinus />
                            </button>
                            <span className="w-6 text-center text-sm font-semibold">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 hover:bg-gray-100 rounded text-xs"
                            >
                              <FiPlus />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {cart.length > 0 && (
                  <div className="mt-4 pt-3 border-t">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-semibold">Total:</span>
                      <span className="font-semibold">€{getTotalPrice().toFixed(2)}</span>
                    </div>
                    <Link href="/cart">
                      <button 
                        onClick={isClosed}
                        className="w-full bg-black text-white py-2 px-4 rounded text-sm hover:bg-gray-800 transition-colors"
                      >
                        View Full Cart
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
          
          {/* Navigation Menu */}
          <div className="flex flex-col justify-center items-center w-full h-[150px] ">
            <div className="flex flex-col justify-evenly w-[90%] h-[150px] ">
              <Link
                href="/collections"
                className=" text-sm cursor-pointer hover:text-Outline"
                onClick={isClosed}
              >
                TEA COLLECTIONS
              </Link>
              <Link
                href="/accessories"
                className=" text-sm cursor-pointer hover:text-Outline"
                onClick={isClosed}
              >
                ACCESSORIES
              </Link>
              <Link
                href="/blog"
                className=" text-sm cursor-pointer hover:text-Outline"
                onClick={isClosed}
              >
                BLOG
              </Link>
              <Link
                href="/contact"
                className=" text-sm cursor-pointer hover:text-Outline"
                onClick={isClosed}
              >
                CONTACT US
              </Link>
            </div>
          </div>
          <div className="mt-8">
            <div className="h-[70px] w-full flex justify-start items-center">
              <Image
                src="/images/logo.png"
                alt="Picture of the author"
                width={150}
                height={150}
                className="ml-4"
              />
            </div>
            <div className="text-sm p-4 text-[14px] leading-6 font-light text-black-50">
              We offer loose tea leaves of the best quality for your business. With a choice of more than 450 different kinds of loose tea, we can make a sophisticated selection that fits exactly in your kind of establishment. 
            </div>
            <div className="text-sm p-4 text-[14px] leading-6 font-light text-Outline">
              ALL RIGHTS RESEREVED BY Brand Name Company
            </div>
          </div>
        </div>
      </div>
      <Cart />
    </>
  );
}

export default Headers;
