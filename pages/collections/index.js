import React from "react";
// import {use}
import { useRouter } from "next/router";
import Accordion from "@/components/collections/Accordion";
import Boxes from "@/components/collections/Boxes";
import Origins from "@/components/collections/Origins";
import Flavour from "@/components/collections/Flavour";
import Quality from "@/components/collections/Quality";
import Caffein from "@/components/collections/Caffein";
import Allerg from "@/components/collections/Allerg";

function collections() {
  const router = useRouter();
  const pathname = router.pathname;
  const images = ["1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png"]
  return (
    <>
      <div className="w-full h-full mt-[60px] tablet:mt-[108px]">
        {/* banner */}
        <div className="w-full h-[300px]">
          <img
            src="images/collection/intro.png"
            alt=""
            className="w-full h-full object-cover hidden tablet:block"
          />
          <img
            src="images/collection/intro-mobile.png"
            alt=""
            className="w-full h-full object-cover tablet:hidden"
          />
        </div>
        <div className="w-full h-full pr-10 pl-10 mt-6">
          {/*  breadcrumbs  */}
          <div className="w-full h-full   uppercase mb-10">Home {pathname}</div>
          {/* main page start  */}
          <div className="w-full h-full flex">
            <div className="flex-[25%] h-full mb-10 hidden tablet:flex justify-center">
              <div className="bg-white w-[80%] ">
                <Accordion title="COLLECTIONS" content={<Boxes/>} />
                <Accordion title="ORIGINS" content={<Origins />} />
                <Accordion title="FLAVORS" content={<Flavour />} />
                <Accordion title="QUALITIES" content={<Quality />} />
                <Accordion title="CAFFEINE" content={<Caffein />} />
                <Accordion title="ALERGENS" content={<Allerg/>} />
              </div>
            </div>
            <div className="tablet:flex-[75%] flex-[100%] flex justify-center ">
              <div className="grid grid-cols-2 w-[95%] h-full tablet:grid-cols-3 gap-4">
                {
                    images.map((items,index)=>{
                      return(
                        <>
                        <div key={index} className="h-full w-full flex flex-col justify-center items-center mb-10">
                        <img
                         alt={items}
                         src={`images/collection/${items}`}
                         className="object-cover w-[400px]"
                         />
                          <p className="font-thin text-sm tablet:text-base">Ceylon Ginger</p>
                        <p className="font-thin text-sm tablet:text-base">Cinnamon chai tea</p>
                        <p className="text-sm tablet:text-base"><span className="font-bold">€4.85 </span>/ 50 g</p>
                        </div>
                       

                        </>
                      )
                    })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default collections;
