"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const HeroHosting = () => {
  const [displayText, setDisplayText] = useState("");
  const [imageVisible, setImageVisible] = useState(false);

  useEffect(() => {
    let index = 0;
    const text = "";
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.substring(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 15); // Adjust the typing speed here (milliseconds)

    // Set imageVisible to true after a delay
    const delay = setTimeout(() => {
      setImageVisible(true);
    }, 1000); // Adjust the delay time as needed

    return () => {
      clearInterval(interval);
      clearTimeout(delay);
    };
  }, []);

  return (
    <section className="h-full 2xl:min-h-[80vh] overflow-hidden relative bg-black flex items-center justify-center">
      <img src="/home.jpg" width={1920} height={1080} alt="" className="w-full absolute inset-0 h-full opacity-30 object-cover bg-blend-color-dodge !z-[1]" />
      <div className="max-w-[800px] xl:max-w-[1250px] 2xl:max-w-[1250px] mx-auto text-white px-4 pt-20 2xl:pt-40 pb-10   2xl:py-40">
      <div className="h-full flex items-center relative !z-[2] flex-col md:flex-row bl:flex-row lg:flex-row xl:flex=row 2xl:flex-row justify-center gap-20">
      <div className="relative w-full flex flex-col justify-start space-y-5 animate-left-to-right">
          <div className='relative w-full flex flex-col justify-start space-y-0'><h2 className="font-mono-sans text-sm font-light italic leading-relaxed text-left">
                <span className="text-orange-500 font-bold ">Plesk Hosting</span>
              </h2>
              <h1 className="font-mono-sans font-semibold xl:text-[52px]  text-[32px] 2xl:text-[62px] leading-normal  2xl:text-left"> 
              Web Hosting 
with Plesk
              </h1>
            </div>
            <p className="font-mono-sans text-[14px] 2xl:text-[18px] font-light leading-loose text-left text-[#EBEBEB]">
            Lorem ipsum dolor sit amet consectetur. Lacus viverra a sed morbi a ornare risus imperdiet. Ut aliquam pellentesque at amet eros ut. Amet mauris id aliquam in.            </p>
                    <div className="cursor-pointer flex flex-row justify-start !mt-10">

              <div className="h-[56px] flex item-center justify-center bg-orange-500 rounded-xl py-4 w-auto px-6 gap-x-3 transition-transform duration-300 ">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="2" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 12C19.333 16.667 16 19 12 19C8 19 4.667 16.667 2 12C4.667 7.333 8 5 12 5C16 5 19.333 7.333 22 12" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h2 className="font-mona-sans text-[18px] font-semibold leading-[21.6px] text-left  ">Get Started</h2>
              </div>
            </div>
            <p className="flex  xl:mx-auto 2xl:mx-0 gap-2 underline justify-start  text-[#FFFFFF]">
              <Image src="/tick2.svg" alt="tick" width={11.41} height={8.27} />
              <span className='opacity-80 capitalize items-start justify-start text-left text-[14px] leading-[26px] font-light  '> 30 day money back guarantee</span>
            </p>
          </div>

          <div className="w-full item-center justify-center animate-slide-from-rightdirection">
            <Image src="/plenk/hero.svg" alt="" width={500} height={500} className="item-center justify-center mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroHosting;
