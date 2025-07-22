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
    getTotalPrice,
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
      <div className="flex z-50 fixed  top-0 bg-white justify-center items-center w-full h-[60px] tablet:h-[108px]">
        <div
          className={`${
            isHeader ? "flex" : "none"
          } w-[95%] h-[48px]  items-center `}
        >
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
                className="text-sm cursor-pointer hover:text-Outline"
              >
                TEA COLLECTIONS
              </Link>
              <Link
                href="/accessories"
                className="text-sm cursor-pointer hover:text-Outline"
              >
                ACCESSORIES
              </Link>
              <Link
                href="/blog"
                className="text-sm cursor-pointer hover:text-Outline"
              >
                BLOG
              </Link>
              <Link
                href="/contact"
                className="text-sm cursor-pointer hover:text-Outline"
              >
                CONTACT US
              </Link>
            </div>
            <div className="flex-[30%] flex justify-center items-center h-full ">
              <div className="flex justify-end w-[80%]  h-full items-center">
                <div className="relative">
                  <button
                    onClick={toggleCart}
                    className="text-sm cursor-pointer hover:text-Outline"
                  >
                    <IoBagHandleOutline className="text-2xl" />
                  </button>
                  <Link href="/cart">
                    <button className="absolute flex items-center justify-center w-5 h-5 text-xs text-white transition-colors bg-red-500 rounded-full -top-2 -right-2 hover:bg-red-600">
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

          <button
            onClick={toggleMobileCart}
            className="mt-2 w-full h-[60px] flex justify-center items-center cursor-pointer hover:bg-gray-50 rounded"
          >
            <div className="flex-[10%]">
              <IoBagHandleOutline className="ml-2 text-4xl" />
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
          <hr className="mt-4 text-black" />
          {/* horizotal line end */}

          {/* Mobile Cart Section */}
          {showCartInMobile && (
            <div className="w-full mt-4 mb-4">
              <div className="p-4 rounded-lg bg-gray-50">
                <h3 className="mb-3 text-lg font-semibold">
                  Your Cart ({getTotalItems()} items)
                </h3>

                {cart.length === 0 ? (
                  <div className="py-4 text-center text-gray-500">
                    <p>Your cart is empty</p>
                    <p className="text-sm">Add some tea to get started!</p>
                  </div>
                ) : (
                  <div className="space-y-3 overflow-y-auto max-h-60">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center p-3 space-x-3 bg-white border rounded"
                      >
                        <Image
                          src={item.image}
                          alt={item.name}
                          height={48}
                          width={48}
                          className="object-cover w-12 h-12 rounded"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium truncate">
                            {item.name}
                          </h4>
                          <p className="text-xs text-gray-600 truncate">
                            {item.description}
                          </p>
                          <p className="text-sm font-semibold">€{item.price}</p>
                        </div>
                        <div className="flex flex-col items-end space-y-1">
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-xs text-red-500 hover:text-red-700"
                          >
                            <RxCross2 className="text-sm" />
                          </button>
                          <div className="flex items-center space-x-1">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="p-1 text-xs rounded hover:bg-gray-100"
                            >
                              <FiMinus />
                            </button>
                            <span className="w-6 text-sm font-semibold text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="p-1 text-xs rounded hover:bg-gray-100"
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
                  <div className="pt-3 mt-4 border-t">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-semibold">Total:</span>
                      <span className="font-semibold">
                        €{getTotalPrice().toFixed(2)}
                      </span>
                    </div>
                    <Link href="/cart">
                      <button
                        onClick={isClosed}
                        className="w-full px-4 py-2 text-sm text-white transition-colors bg-black rounded hover:bg-gray-800"
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
                className="text-sm cursor-pointer hover:text-Outline"
                onClick={isClosed}
              >
                TEA COLLECTIONS
              </Link>
              <Link
                href="/accessories"
                className="text-sm cursor-pointer hover:text-Outline"
                onClick={isClosed}
              >
                ACCESSORIES
              </Link>
              <Link
                href="/blog"
                className="text-sm cursor-pointer hover:text-Outline"
                onClick={isClosed}
              >
                BLOG
              </Link>
              <Link
                href="/contact"
                className="text-sm cursor-pointer hover:text-Outline"
                onClick={isClosed}
              >
                CONTACT US
              </Link>
            </div>
          </div>
          <div className="mt-8">
            <div className="text-sm p-4 text-[14px] leading-6 font-light text-black-50">
              We offer loose tea leaves of the best quality for your business.
              With a choice of more than 450 different kinds of loose tea, we
              can make a sophisticated selection that fits exactly in your kind
              of establishment.
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
