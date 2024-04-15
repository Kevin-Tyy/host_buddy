import React from "react";

const Awards = () => {
  return (
    <div className="md:w-[1220px] md:h-[406.92px] flex flex-col md:gap-16 mx-auto mt-20 mb-20">
      <div className="md:w-[1218px]  md:h-[78px] flex  flex-col md:flex-row mx-auto items-center justify-between  ">
        <div className="w-full md:w-[528px] md:h-[63px] margin">
          <h4 className="heading text-center text-black font-semibold font-mona-sans wording">
            Our Awards & Recognition
            <div className="w-[180px] md:w-36 pa:w-28 h-1 bg-orange-500 md:mt-2  ml-[105px] md:ml-[90px] pa:ml-[62px] "></div>
          </h4>
        </div>
        <div className="md:w-[244px] md:h-[24px] flex flex-row mt-5 items-center justify-center visible">
          <h2 className="text-[16px] wording font-bold text-orange-500">
            See All Awards & Recognition{" "}
          </h2>
          <img src="/arrowright.svg" className="w-[14px] h-[10px] "/>
        </div>
      </div>
     
  
        <div className="w-full md:w-[1220px] md:h-[288.92px] mx-auto bg-[#F5F5F5] rounded-2xl mb-2">
        
        <div className="flex flex-wrap justify-between md:flex-row  md:items-center md:mx-auto md:justify-evenly mt-10 mb-10 padding">
  <div className="w-[40%] mb-4 md:w-[202.14px] md:h-[207.25px]">
    <img src="/awards1.svg" className="w-full" alt="Client 1" />
  </div>
  <div className="w-[40%] mb-4 md:w-[202.14px] md:h-[207.25px]">
    <img src="/awards2.svg" className="w-full" alt="Client 2" />
  </div>
  <div className="w-[40%] md:w-[202.14px] md:h-[207.25px]">
    <img src="/awards3.svg" className="w-full" alt="Client 3" />
  </div>
  <div className="w-[40%] md:w-[202.14px] md:h-[207.25px]">
    <img src="/awards4.svg" className="w-full" alt="Client 4" />
  </div>
</div>
        
      </div>
      <div className="md:w-[244px] md:h-[24px] flex flex-row mt-5 items-center justify-center md:opacity-0 ">
          <h2 className="text-[16px] wording font-bold text-orange-500">
            See All Awards & Recognition{" "}
          </h2>
          <img src="/arrowright.svg" className="w-[14px] h-[10px] "/>
        </div>
    </div>
  );
};

export default Awards;
