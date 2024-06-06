import Image from 'next/image';
import React from 'react';

const HeroHosting = () => {
  return (
    <section className="h-full relative flex items-center justify-center">
      <div className="max-w-[1300px] mx-auto text-white">  
        <div className="shakeRotate">
          <Image src="/12.gif" width={800} height={800} alt="404" />
        </div>
        <div className="space-y-4 2xl:space-y-8 flex flex-col text-black mx-auto items-center justify-center">
          <h2 className="text-[24px] 2xl:text-[30px] font-semibold leading-[30px]">There's NOTHING Here...</h2>
          <p className="font-light text-[16px] 2xl:text-[20px] leading-[24px]">You didn't break the internet, but you can't find what you are looking for.</p>
        </div>
        <div className="px-72 mt-20">
          <div className="group w-full h-[52px] text-white bg-orange-500 text-xl rounded-xl group-hover:bg-[#FF7500] ring-1 ring-[#FFFFFF] group-hover:ring-[#16191C] 
            transition-all duration-300 hover:shadow-2xl ring-inset hover:ring-0 font-bold flex items-center justify-center">
            <h4 className="w-99 h-19 top-16 left-115 font-monasans font-bold text-base leading-[19.2px]">Back to Home Page</h4>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHosting;
