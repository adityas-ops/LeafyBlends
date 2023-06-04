import Head from "next/head";
import Image from "next/image";

  const mobile = "540px"

export default function Home() {
  return (
   <>
   <div className="w-full h-full flex tablet:flex-row  flex-col">
    <div className="flex-1/2 w-full h-full">
      <Image
        src={
            mobile ? "/images/landing/intro.jpg" : "/images/landing/intro.jpg"
        }
        alt="Picture of the author"
        width={mobile ? 400 : 600}
        height={ mobile? 400:600}
      />
    </div>
    <div className="flex-1/2 flex justify-start items-center w-full h-[600px] ">
      <div className='w-[600px] h-[400px]  flex flex-col justify-evenly '>
        <p className="font-Prosto text-5xl pl-5 pr-5 leading-[60px]">
        Every day is unique, just like our tea
        </p>
        <p className="text-xl pl-5 pr-5 font-thin leading-9">
        Lorem ipsum dolor sit amet consectetur. Orci nibh nullam risus adipiscing odio. Neque lacus nibh eros in.
Lorem ipsum dolor sit amet consectetur. Orci nibh nullam risus adipiscing odio. Neque lacus nibh eros in.
        </p>
        <div className="p-5">
        <button
        className="w-[350px] h-14 text-[18px] font-thin border-2  border-black hover:bg-black hover:text-white">
          browes teas
        </button>
        </div>
      </div>

    </div>
   </div>
   </>
  )
}
