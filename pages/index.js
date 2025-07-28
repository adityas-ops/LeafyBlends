import { RiCupLine } from "react-icons/ri";

import { BsTag } from "react-icons/bs";
import { MdRedeem, MdLocalShipping } from "react-icons/md";
import Image from "next/image";
import {  useRouter } from "next/router";
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
    const router = useRouter();
  return (
    <>
      <div className="w-full h-full flex tablet:flex-row  flex-col mt-[60px] tablet:mt-[108px]">
        <div className="w-full h-[300px] tablet:h-[600px] flex-1/2 relative">
          <Image
            src="/images/landing/intro.png"
            alt="Picture of the author"
            fill
            className="object-cover tablet:object-contain"
            sizes="(max-width: 768px) 100vw, 600px"
            priority
          />
        </div>
        <div className="flex-1/2 flex justify-start  w-full h-fit tablet:h-[600px] mt-4  items-start tablet:items-center ">
          <div className="w-full tablet:w-[600px] h-fit  tablet:h-[400px]  flex flex-col justify-evenly  ">
            <p className="font-Prosto text-2xl tablet:text-5xl pl-5 pr-5 tablet:leading-[60px]">
              Every day is unique, just like our tea
            </p>
            <p className="pl-5 pr-5 text-lg leading-7 tablet:text-xl tablet:leading-9">
              Lorem ipsum dolor sit amet consectetur. Orci nibh nullam risus
              adipiscing odio. Neque lacus nibh eros in. Lorem ipsum dolor sit
              amet consectetur. Orci nibh nullam risus adipiscing odio. Neque
              lacus nibh eros in.
            </p>
            <div className="p-5">
              <button
              onClick={()=>{
                router.push("/collections")
              }}
               className="tablet:w-[350px] w-full h-12 tablet:h-14 text-[16px] tablet:text-[18px] border-2  border-black hover:bg-black hover:text-white">
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
            <div className="grid grid-cols-2 gap-2 tablet:gap-4 tablet:grid-cols-4">
              <div className="flex justify-center col-span-1 text-xs tablet:text-base">
                <RiCupLine className="mr-1 text-lg tablet:mr-2 tablet:text-2xl" />
                450+ KIND OF LOOSEF TEA
              </div>
              <div className="flex justify-center col-span-1 text-xs tablet:text-base">
                <MdRedeem className="mr-1 text-lg tablet:mr-2 tablet:text-2xl" />
                CERTIFICATED ORGANIC TEAS
              </div>
              <div className="flex justify-center col-span-1 text-xs tablet:text-base">
                <MdLocalShipping className="mr-1 text-lg tablet:mr-2 tablet:text-2xl" />
                FREE DELIVERY
              </div>
              <div className="flex justify-center col-span-1 text-xs tablet:text-base">
                <BsTag className="mr-1 text-lg tablet:mr-2 tablet:text-2xl" />
                SAMPLE FOR ALL TEAS
              </div>
            </div>
          </div>
          <div className="">
            <button className="w-[200px] tablet:w-[250px]  text-[14px] tablet:text-[16px] border-2 p-2 mt-5  border-black hover:bg-black hover:text-white">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
      {/* new session */}
      <div className="w-full h-full p-5 tablet:p-10 ">
        <div className="text-center">
          <p className="text-xl tablet:text-2xl font-Prosto">OUR COLLECTIONS</p>
        </div>
        <div className="flex items-center justify-center w-full h-full">
          <div className="grid w-full h-full grid-cols-2 gap-3 mt-6 tablet:gap-4 tablet:mt-10 tablet:grid-cols-3">
            {collections.map((item, index) => {
              return (
                <div key={index} className="flex flex-col items-center justify-center w-full h-full">
                  <div className="relative w-full aspect-square max-w-[200px] tablet:max-w-[400px]">
                    <Image
                      src={`/images/landing/${item}`}
                      alt={collectionsName[index]}
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 400px"
                    />
                  </div>
                  <p className="mt-3 mb-6 text-sm text-center uppercase tablet:mt-5 tablet:mb-10 tablet:text-xl">
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
        <div className="p-5 text-center tablet:p-10">
          <p className="text-xl font-bold tablet:text-2xl font-Prosto">Last Blog Posts</p>
        </div>
        <div className="grid grid-cols-1 tablet:grid-cols-2  w-[95%] tablet:w-[85%] gap-6 tablet:gap-0">
          <div className="flex flex-col items-start tablet:flex-row justify-evenly">
            <div className="relative h-[200px] tablet:h-[350px] w-full tablet:w-[300px] mb-4 tablet:mb-0">
              <Image
                src="/images/landing/steeptea.png"
                alt="Picture of the author"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </div>
            <div className="flex flex-col w-full tablet:w-[40%] justify-center tablet:justify-start tablet:p-0">
              <p className="mb-2 text-lg tablet:text-2xl tablet:mb-0">How to steep tea like a pro</p>
              <p className="text-sm leading-6 tablet:text-base tablet:leading-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. In
                dictum non consectetur a erat nam at. Risus nec feugiat in
                fermentum posuere urna nec tincidunt praesent.{" "}
              </p>
              <div className="flex justify-start w-full h-full mt-2 tablet:mt-4">
                <button className="text-sm hover:text-gray-600 tablet:text-base">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start mt-6 tablet:flex-row tablet:mt-0 justify-evenly">
            <div className="relative h-[200px] tablet:h-[350px] w-full tablet:w-[300px] mb-4 tablet:mb-0">
              <Image
                src="/images/landing/allabouttea.png"
                alt="Picture of the author"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </div>
            <div className="flex flex-col w-full tablet:w-[40%] justify-center tablet:justify-start">
              <p className="mb-2 text-lg tablet:text-2xl tablet:mb-0">All about tea aromas</p>
              <p className="text-sm leading-6 tablet:text-base tablet:leading-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. In
                dictum non consectetur a erat nam at. Risus nec feugiat in
                fermentum posuere urna nec tincidunt praesent.{" "}
              </p>
              <div className="flex justify-start w-full h-full mt-2 tablet:mt-4">
                <button className="text-sm hover:text-gray-600 tablet:text-base">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="w-full h-full flex  tablet:flex-row flex-col-reverse mt-[60px] tablet:mt-[108px] pb-20">
        <div className="flex-1/2 flex   w-full h-fit tablet:h-[600px] mt-4 tablet:mt-0  justify-end  tablet:items-center ">
          <div className="w-full tablet:w-[600px] h-fit  tablet:h-[400px]  flex flex-col justify-evenly  ">
            <p className="font-Prosto text-2xl tablet:text-5xl pl-5 pr-5 tablet:leading-[60px] mt-5 tablet:mt-0">
            FOR WHOLESALERS
            </p>
            <p className="pl-5 pr-5 text-lg leading-7 tablet:text-xl tablet:leading-9">
            We offer loose tea leaves of the best quality for your business. With a choice of more than 450 different kinds of loose tea, we can make a sophisticated selection that fits exactly in your kind of establishment. 
            </p>
            <div className="p-5">
              <button className="tablet:w-[350px] w-full h-12 tablet:h-14 text-[16px] tablet:text-[18px] border-2  border-black hover:bg-black hover:text-white uppercase">
              get A free consultation
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-end w-full h-full flex-1/2 ">
          <div className="relative h-[600px] w-[600px] hidden tablet:block">
            <Image
              src="/images/landing/wholeseller.png"
              alt="Picture of the author"
              fill
              className="object-cover"
              sizes="600px"
            />
          </div>
          <div className="relative h-[300px] tablet:h-[400px] w-full block tablet:hidden">
            <Image
              src="/images/landing/mobileware.png"
              alt="Picture of the author"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </div>
    </>
  );
}
