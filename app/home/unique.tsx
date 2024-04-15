import React from "react";

const Unique = () => {
  return (
    <div className="w-full bg-[#F9EFE4]  flex flex-col md:flex-row h-[1170px] pa:h-[1200px] md:h-[829px] ">
        <img src="/dotted.svg" className="ml-1 w-[50px] md:w-[89.71px] md:h-[113.2px] opacity-0 md:opacity-100 mt-20"/>
        <div className="md:w-[1230.66px] md:h-[668.18px] h-[1100px] flex flex-col md:flex-row mx-auto gap-20">
      <div className="w-full max-w-[1220px] mx-auto md:w-[699px] md:h-[608px] margin padding">
      <div className="mx-auto md:flex flex-col justify-between md:w-[699px] md:h-[150px]">
        <h4 className="heading text-black font-semibold font-mona-sans wording md:w-[663px] md:h-[63px]">
          What Makes Host<span className="text-orange-500">Buddy </span>
          Unique?
        </h4>
       
      </div>
      <div className="mt-10">
        <div className="relative flex md:flex-row md:w-[497px] md:h-[150px] group hover:bg-white rounded-2xl shadow-solid transition-all duration-300 border-gradient">
          <div className="ml-8 flex md:flex-row">
            <div className="w-[48px] h-[54px] flex justify-center items-center mt-6 md:mt-8 rounded-xl transition-all duration-300">
              <img src="/uniquecar2.svg" alt="unique" width="36px" height="48px" className="group-hover:bg-orange-500" />
            </div>
            <div className="transition-all duration-300 cursor-pointer md:w-[369px] md:h-[86px] m-8 md:gap-6 text-[#16191C]">
              <h2 className="md:w-[369px] md:h-[30px] text-[24px] font-bold opacity-1 mb-4 text-[#16191C] group-hover:text-orange-500">
                24/7 & 365  Support
              </h2>
              <p className="md:w-[369px] md:h-[48px] opacity-70 hover:opacity-100 font-mona-sans text-[16px] font-normal leading-normal text-left">
                Euismod egestas suspendisse aliquet amet ultrices faucibus mauris sit odio.
              </p>
            </div>
          </div>

        </div>
        <div className=" border-t border-dotted border-gray-400 md:w-[497px]"></div>

        <div className="relative flex md:flex-row md:w-[497px] md:h-[150px] group hover:bg-white rounded-2xl shadow-solid transition-all duration-300 border-gradient">
          <div className="ml-8 flex md:flex-row">
          <div className="w-[48px] h-[54px] flex justify-center items-center mt-6 md:mt-8 rounded-xl transition-all duration-300">
              <img src="/uniquecar2.svg" alt="unique" width="36px" height="48px" className="group-hover:bg-orange-500" />
            </div>
            <div className="transition-all duration-300 cursor-pointer md:w-[369px] md:h-[86px] m-8 md:gap-6 text-[#16191C]">
              <h2 className="md:w-[369px] md:h-[30px] text-[24px] font-bold opacity-1 mb-4 text-[#16191C] group-hover:text-orange-500">
                24/7 & 365  Support
              </h2>
              <p className="md:w-[369px] md:h-[48px] opacity-70 hover:opacity-100 font-mona-sans text-[16px] font-normal leading-normal text-left">
                Euismod egestas suspendisse aliquet amet ultrices faucibus mauris sit odio.
              </p>
            </div>
          </div>
        </div>
        {/* Dotted line */}
        <div className=" border-t border-dotted border-gray-400 md:w-[497px]"></div>
        {/* End of dotted line */}
        <div className="relative flex md:flex-row md:w-[497px] md:h-[150px] group hover:bg-white rounded-2xl shadow-solid transition-all  duration-300 border-gradient">
          <div className="ml-8 flex md:flex-row">
          <div className="w-[48px] h-[54px] flex justify-center items-center mt-6 md:mt-8 rounded-xl transition-all duration-300">
              <img src="/uniquecar2.svg" alt="unique" width="36px" height="48px" className="group-hover:bg-orange-500" />
            </div>
            <div className="transition-all duration-300 cursor-pointer md:w-[369px] md:h-[86px] m-8 md:gap-6 text-[#16191C]">
              <h2 className="md:w-[369px] md:h-[30px] text-[24px] font-bold opacity-1 mb-4 text-[#16191C] group-hover:text-orange-500">
                24/7 & 365  Support
              </h2>
              <p className="md:w-[369px] md:h-[48px] opacity-70 hover:opacity-100 font-mona-sans text-[16px] font-normal leading-normal text-left">
                Euismod egestas suspendisse aliquet amet ultrices faucibus mauris sit odio.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div className="w-[270px] md:w-[418.92px] md:h-[668.18px] relative visible margin pa:-mt-10 md:mt-20"> 
    <img src="/manjumping.jpg" className="scale-x-[-1] opacity-100 z-10 relative  grayscale ml-10 md:ml-0 pa:-mt-1 pa:ml-60"/>
    {/* <img src="/manlowerjumping.svg" className="md:-mt-60 pa:-mt-40 pa:ml-72 ml-0  relative z-20 w-[200px] md:w-[328.11px]  "/> */}
    <img src="/manlowerjumping.svg" className="md:-mt-60 ml-24 pa:ml-80 md:ml-28 relative z-20 w-[200px] md:w-[328.11px] pa:-mt-40   "/>
  <img src="/manupperjumping.svg" className="pa:-mt-[230px] md:-mt-[380px]  pa:ml-52 md:-ml-24 relative z-20 w-[150px] md:w-[271.4px]"/>
    {/* // Circle image with eraser */}
    <div className="absolute inset-0 z-0 pa:ml-40 md:ml-0 pa:-mt-12 md:mt-0" style={{ width: "400px", height: "400px", transform: "translate(10%, 20%)" }}>
        <svg width="100%" height="100%" viewBox="0 0 400 400">
            <defs>
                <mask id="mask" x="0" y="0" width="400" height="400">
                    {/* Circle shape */}
                    <circle cx="200" cy="200" r="200" fill="#fff"/> 
                    {/* Eraser */}
                     <circle cx="200" cy="200" r="160" fill="#000"/> 
                </mask> 
            </defs>
            <image href="/mancirclejumping.svg" x="0" y="0" width="400" height="400" mask="url(#mask)"/>
        </svg> 
    </div> 
</div> 
</div>


    </div>
  );
};

export default Unique;
