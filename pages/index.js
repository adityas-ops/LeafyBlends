import { RiCupLine } from "react-icons/ri";

import { BsTag } from "react-icons/bs";
import { MdRedeem, MdLocalShipping } from "react-icons/md";
export default function Home() {
  const collections = [
    "blacktea.png",
    "greentea.png",
    "whitetea.png",
    "matcha.png",
    "herbaltea.png",
    "chai.png",
    "oolging.png",
    "robios.png",
    "teaware.png",
  ];
  const collectionsName = [
    "black tea",
    "green tea",
    "white tea",
    "matcha",
    "herbal tea",
    "chai",
    "oolong",
    "roobios",
    "teaware",
  ];
  return (
    <>
      <div className="w-full h-full flex tablet:flex-row  flex-col mt-[60px] tablet:mt-[108px]">
        <div className="flex-1/2 w-full h-full">
          <img
            src="/images/landing/intro.png"
            alt="Picture of the author"
            className="h-[600px] w-[600px]"
          />
        </div>
        <div className="flex-1/2 flex justify-start  w-full h-fit tablet:h-[600px] mt-4  items-start tablet:items-center ">
          <div className="w-[600px] h-fit  tablet:h-[400px]  flex flex-col justify-evenly  ">
            <p className="font-Prosto text-3xl tablet:text-5xl pl-5 pr-5 tablet:leading-[60px]">
              Every day is unique, just like our tea
            </p>
            <p className="text-xl pl-5 pr-5 font-thin leading-9">
              Lorem ipsum dolor sit amet consectetur. Orci nibh nullam risus
              adipiscing odio. Neque lacus nibh eros in. Lorem ipsum dolor sit
              amet consectetur. Orci nibh nullam risus adipiscing odio. Neque
              lacus nibh eros in.
            </p>
            <div className="p-5">
              <button className="tablet:w-[350px] w-[150px] h-14 text-[18px] font-thin border-2  border-black hover:bg-black hover:text-white">
                browes teas
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* start */}
      <div className="w-full h-full bg-[#F4F4F4] mt-10 pb-12 tablet:pb-0 tablet:mt-[100px] flex justify-center items-center ">
        <div className="w-[95%] tablet:w-[80%]  h-[200px]  flex flex-col items-center justify-evenly">
          <div className="w-full ">
            <div className="grid grid-cols-2 tablet:grid-cols-4 gap-4">
              <div className="flex col-span-1 justify-center">
                <RiCupLine className="text-2xl mr-2" />
                450+ KIND OF LOOSEF TEA
              </div>
              <div className="flex col-span-1 justify-center">
                <MdRedeem className="text-2xl mr-2" />
                CERTIFICATED ORGANIC TEAS
              </div>
              <div className="flex col-span-1 justify-center">
                <MdLocalShipping className="text-2xl mr-2" />
                FREE DELIVERY
              </div>
              <div className="flex col-span-1 justify-center">
                <BsTag className="text-2xl mr-2" />
                SAMPLE FOR ALL TEAS
              </div>
            </div>
          </div>
          <div className="">
            <button className="w-[250px]  text-[16px] border-2 p-2 mt-5  border-black hover:bg-black hover:text-white">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
      {/* new session */}
      <div className="h-full  w-full p-10 ">
        <div className="text-center">
          <p className="font-Prosto text-2xl">OUR COLLECTIONS</p>
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <div className="grid grid-cols-2 tablet:grid-cols-3 gap-4 w-full h-full mt-10">
            {collections.map((item, index) => {
              return (
                <div className="flex flex-col justify-center items-center h-full w-full  tablet:">
                  <img
                    src={`/images/landing/${item}`}
                    alt=""
                    className="w-[270px] h-[200px] tablet:w-[400px] tablet:h-[400px]"
                  />
                  <p className="tablet:text-xl mt-5 mb-10 uppercase">
                    {collectionsName[index]}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* start bloging */}
      <div className="w-full h-full flex justify-center items-center flex-col bg-[#F4F4F4]">
        <div className="text-center p-10">
          <p className="font-Prosto font-bold text-2xl">Last Blog Posts</p>
        </div>
        <div className="grid grid-cols-1 tablet:grid-cols-2  w-[85%]">
          <div className=" flex  justify-evenly flex-row items-start">
            <div>
              <img
                src="/images/landing/steeptea.png"
                alt="Picture of the author"
                className="h-[315px] w-[100%] tablet:h-[350px] tablet:w-[300px]"
              />
            </div>
            <div className="flex flex-col w-[60%] tablet:w-[40%] justify-center   tablet:justify-start pl-4 tablet:p-0">
              <p className="text-2xl">How to steep tea like a pro</p>
              <p className="mt-2 tablet:mt-5 tablet:leading-1 text-sm tablet:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. In
                dictum non consectetur a erat nam at. Risus nec feugiat in
                fermentum posuere urna nec tincidunt praesent.{" "}
              </p>
              <div className="w-full h-full flex justify-start">
                <button className="hover:text-gray-600 tablet:mt-4">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className=" flex justify-evenly flex-row-reverse tablet:flex-row items-start mt-10 tablet:mt-0">
            <div>
              <img
                src="/images/landing/allabouttea.png"
                alt="Picture of the author"
                className="h-[315px] w-[100%] tablet:h-[350px] tablet:w-[300px]"
              />
            </div>
            <div className="flex flex-col w-[60%] tablet:w-[40%] justify-center   tablet:justify-start pl-4 tablet:p-0 ">
              <p className="text-2xl w-[100%] tablet:w-[70%]">All about tea aromas</p>
              <p className="mt-2 tablet:mt-5 tablet:leading-1 text-sm tablet:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. In
                dictum non consectetur a erat nam at. Risus nec feugiat in
                fermentum posuere urna nec tincidunt praesent.{" "}
              </p>
              <div className="w-full h-full flex justify-start">
                <button className="hover:text-gray-600 tablet:mt-4">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
