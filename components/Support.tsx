// import { FiHeadphones } from "react-icons/fi";
import React from "react";
import Image from "next/image";
const Support = () => {
  return (
     <div className="flex flex-col gap-10  bg-gradient-to-b from-gray-800 to-gray-900 p-6 sm:p-10">
      {/* <div className="border-b-2 border-gray-400 bg-gray-100">Top Boundary</div> */}
      <div className="flex flex-col gap-5 justify-center item">
        <div className="flex flex-row  justify-between mx-auto relative gap-x-96  mb-20 mt-20">
          <div>
          <h2 className="text-4xl sm:text-6xl text-white font-semibold mx-auto ">Why Choose HostBuddy</h2>
          </div>
          <div className="item-center justify-center"> 
          <p className="text-white text-sm sm:text-base mt-2 sm:w-8/12 mx-auto ">
            Lorem ipsum dolor sit amet consectetur. Sit placerat pellentesque lacus elementum bibendum. Vitae tortor scelerisque maecenas amet sit.
          </p>
          </div>
          {/* Orange line below "Why Choose HostBuddy" */}
          <div className="absolute w-1/12 h-1 bg-orange-500  top-11 sm:top-16 left-0"></div>
        </div>
        <div className="flex flex-col sm:flex-row gap-6">
          {[1, 2, 3].map((index) => (
            <div key={index} className="relative flex-1">
              <div className="absolute -top-7 left-9 bg-white w-14 h-14 flex justify-center items-center rounded-xl transition-all duration-300">
                <Image src="/headphones.svg" alt="logo" width={18} height={18} className="object-contain" />{" "}
              </div>
              <div className="bg-[#3C3C3C] shadow-solid-orange rounded-2xl group hover:bg-[#F9EFE4] text-[#FFFFFF] hover:text-[#16191C] p-6 sm:p-8 transition-all duration-300 cursor-pointer">
                <h2 className="text-lg font-bold mt-4">Support 24x7x365</h2>
                <p className="text-sm sm:text-base">
                  Maximize your site loading speed, response times and core web vital score. We offer 100% SSD NVMe storage, HTTP/2 & Litespeed server as a
                  standard.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="border-t-2 border-gray-400 bg-gray-100 p-4">Bottom Boundary</div> */}
    </div>
  );
};
export default Support;