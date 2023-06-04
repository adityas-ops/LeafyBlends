import Link from "next/link";
import React from "react";
import { GoLocation } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

function Footers() {
    const collection  = ["Black tea","Green tea","White tea","Herbal tea","Matcha","Chai","Olang","Rooibos","teaWare"]
    const learn = ["About us","About our tea","Tea Academy"]
    const customer_service = ["Ordering and Payments"," Delivery","Privacy and Policy","Terms & Conditions"]
  return (
    <>
      <div className="w-full bg-Outline pb-10">
        <div className="grid grid-cols-2 tablet:grid-cols-3 gap-4 pt-7">
          <div className="col-span-1  w-30">
            <div className="h-full flex items-center justify-center flex-col">
              <div className="w-[50%] h-full flex flex-col items-start ">
                <p className="">COLLECTIONS</p>
                {
                    collection.map((item,index)=>{
                        return(
                            <Link
                            href="/"
                            className="text-sm font-thin m-1 hover:text-slate-100"
                            key={index}
                          >
                            {item}
                          </Link>
                        )})}
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="grid grid-cols-1 tablet:grid-cols-2 gap-4">
                <div className="col-span-1">
                 <div className="w-full h-full flex items-center justify-center flex-col">
                 <div className="w-[100%] h-full flex flex-col items-start ">
                 <p className="">LEARNS</p>
                 {
                    learn.map((item,index)=>{
                        return(
                            <Link
                            href="/"
                            className="text-sm font-thin m-1 hover:text-slate-100"
                            key={index}
                          >
                            {item}
                          </Link>
                        )})}
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="w-full h-full flex items-center justify-center flex-col">
              <div className="w-[100%] h-full flex flex-col items-start ">
                <p className="">CUSTOMER SERVICE</p>
                {
                    customer_service.map((item,index)=>{
                        return(
                            <Link
                            href="/"
                            className="text-sm font-thin m-1 hover:text-slate-100"
                            key={index}
                          >
                            {item}
                          </Link>
                        )})}
              </div>
            </div>
            </div>
            </div>
            </div>
          <div className="col-span-2 tablet:col-span-1 p-5 pl-10 tablet:pl-0 tablet:p-0">
            <div className="w-full h-full flex items-center justify-center flex-col">
              <div className=" w-full  tablet:w-[70%] h-full flex flex-col items-start  ">
                <p className="">CONTACT US</p>
                <Link
                  href="/"
                  className="text-sm font-thin m-1 hover:text-slate-100"
                >
                  <div className="flex w-full justify-center">
                    <GoLocation className="text-xl mr-2" />
                    <p className="">
                      {" "}
                      3 Falahi, Falahi St, Pasdaran Ave, Shiraz, Fars Provieence
                      Iran
                    </p>
                  </div>
                </Link>
                <Link
                  href="/"
                  className="text-sm font-thin m-1 hover:text-slate-100"
                >
                 <div className="flex w-full  justify-center">
                    <AiOutlineMail className="text-xl mr-2" />
                    <p className="">
                      {" "}
                     Email: amoopur@gmail.com
                    </p>
                  </div>
                </Link>
                <Link
                  href="/"
                  className="text-sm font-thin m-1 hover:text-slate-100"
                >
                  <div className="flex w-full  justify-center">
                    <BsTelephone className="text-xl mr-2" />
                    <p className="">
                      {" "}
                     Tel: +98 9173038406 
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footers;
