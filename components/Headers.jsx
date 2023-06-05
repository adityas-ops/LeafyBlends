import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiMenu } from "react-icons/fi";
import { BsFillPersonFill, BsSearch } from "react-icons/bs";
import { IoBagHandleOutline } from "react-icons/io5";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

function Headers() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeader, setHeader] = useState(true);
  const isOpened = () => {
    setIsMenuOpen(true);
    setHeader(false);
  };
  const isClosed = () => {
    setIsMenuOpen(false);
    setHeader(true);
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
                href="/collection"
                className=" text-sm cursor-pointer hover:text-Outline"
              >
                TEA COLLECTIONS
              </Link>
              <Link
                href="/"
                className=" text-sm cursor-pointer hover:text-Outline"
              >
                ACCESSORIES
              </Link>
              <Link
                href="/"
                className=" text-sm cursor-pointer hover:text-Outline"
              >
                BLOG
              </Link>
              <Link
                href="/"
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
                <Link
                  href="/"
                  className=" text-sm cursor-pointer hover:text-Outline"
                >
                  <IoBagHandleOutline className="text-2xl" />
                </Link>
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
        } z-[1035] border-2  fixed top-0 right-0 w-[350px] h-[100%] flex justify-center items-center bg-white  transition-right duration-800 ease-in`}
      >
        <div className=" w-[95%] h-full  flex justify-center items-center flex-col">
          <div className="w-[95%] h-full ">
            <div className="w-full h-[60px]  flex items-center justify-end">
              <button onClick={isClosed}>
                <RxCross2 className="text-3xl" />
              </button>
            </div>
            <div class="relative">
              <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg
                  class="h-8 w-8 ml-5 fill-current text-gray-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.5 12a5.5 5.5 0 1 1 3.914-1.622l3.956 3.956-.88.88-3.956-3.956A5.47 5.47 0 0 1 6.5 12zm0-10a4.5 4.5 0 1 0 4.5 4.5A4.505 4.505 0 0 0 6.5 2z" />
                </svg>
              </span>
              <input
                type="text"
                placeholder="SEARCH PRODUCTS"
                class="  py-2 pl-8 pr-4 w-full border-2 h-[60px]  text-center"
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
            <div className="mt-2 w-full h-[60px] flex justify-center items-center ">
              <div className="flex-[10%]">
                <IoBagHandleOutline className="text-4xl ml-2" />
              </div>
              <div className="flex-[90%] flex justify-start flex-col items-center ml-2 ">
                <div className=" w-full text-[14px] text-start font-regular  flex justify-start ">
                  YOUR BAG
                </div>
                <div className="w-full text-[12px] font-light text-start flex justify-start text-Outline ">
                  (3) Items have been added{" "}
                </div>
              </div>
            </div>
            {/* horizotal line start */}
            <hr className="text-black mt-4" />
            {/* horizotal line end */}
            <div className="flex flex-col justify-center items-center w-full h-[150px] ">
              <div className="flex flex-col justify-evenly w-[90%] h-[150px] ">
                <Link
                  href="/collection"
                  className=" text-sm cursor-pointer hover:text-Outline"
                >
                  TEA COLLECTIONS
                </Link>
                <Link
                  href="/"
                  className=" text-sm cursor-pointer hover:text-Outline"
                >
                  ACCESSORIES
                </Link>
                <Link
                  href="/"
                  className=" text-sm cursor-pointer hover:text-Outline"
                >
                  BLOG
                </Link>
                <Link
                  href="/"
                  className=" text-sm cursor-pointer hover:text-Outline"
                >
                  CONTACT US
                </Link>
              </div>
            </div>
            <div className="h-[300px] w-full  absolute bottom-0 left-1">
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
      </div>
    </>
  );
}

export default Headers;
