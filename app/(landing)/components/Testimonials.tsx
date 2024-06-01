"use client";

import { Star } from "@/components/svgs";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import { testimonials } from "../../(landing)/components/constants/testimonials";
import { motion } from "framer-motion";

export default function Testimonials() {
  const initializeColumns = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth > 1024) {
        return 3;
      } else if (window.innerWidth > 640 && window.innerWidth < 1024) {
        return 2;
      } else {
        return 1;
      }
    }
    return 3; // Default value for server-side rendering
  };

  const [columns, setColumns] = useState(initializeColumns() || 3);
  const [viewAll, setViewAll] = useState(false);
  const visibleTestimonials = viewAll ? testimonials : testimonials.slice(0, 9);

  useEffect(() => {
    const resizeListener = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth > 1024) {
          setColumns(3);
        } else if (window.innerWidth > 640 && window.innerWidth < 1024) {
          setColumns(2);
        } else {
          setColumns(1);
        }
      }
    };

    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  const boxVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 2 } },
  };

  return (
    <div className="p-4 relative bg-gradient-to-b from-[#292E34] to-[#16191C] mx-auto flex flex-col w-full items-center justify-center pt-10 2xl:pt-20 ">
      <div className="max-w-[1360px] mx-auto">
        <div className="flex flex-col 2xl:flex-row gap-y-10 2xl:items-center justify-between">
          <h2 className="text-[22px] 2xl:text-[42px] leading-normal font-bold text-white w-full 2xl:max-w-xl">
            Featured Client <span className="pb-4 border-b-4 border-orange-500">Testimonials </span> 👏
          </h2>
          <p className="w-full text-white text-[14px] 2xl:text-[16px] leading-loose max-w-3xl">
            Lorem ipsum dolor sit amet consectetur. Ornare et amet lobortis ornare. Ullamcorper accumsan donec eu condimentum diam a augue arcu.
          </p>
        </div>
        <div className={`flex flex-col gap-4 mt-16 overflow-hidden testimonial-scroll-container ${viewAll ? "view-all" : ""}`}>
          <div className="testimonial-scrolling-content">
            {[...Array(2)].map((_, idx) => (
              <div key={idx} className="testimonial-row-wrapper flex flex-row gap-4">
                {Array.from({ length: columns }, (_, columnIndex) => (
                  <motion.div key={columnIndex} className="flex flex-col w-full gap-4" variants={boxVariants} initial="hidden" animate="visible">
                    {visibleTestimonials.map(
                      (testimonial, index) =>
                        index % columns === columnIndex && (
                          <div key={index} className="group relative bg-[#F9EFE4] px-8 py-10 rounded-2xl space-y-5">
                            <Image src={testimonial.author.image_url} alt="download" width={100} height={100} className="select-none" draggable={false} />
                            <h1 className="font-bold text-2xl">{testimonial.author.names}</h1>
                            <p className="leading-relaxed text-lg">{testimonial.testimonial}</p>
                            <div className="space-y-3">
                              <div className="flex gap-x-1">
                                {[...Array(5)].map((_, index) => (
                                  <Star key={index} className={index < testimonial.rating ? "text-yellow-500" : "text-gray-300"} />
                                ))}
                              </div>
                              <p>{testimonial.date}</p>
                            </div>
                          </div>
                        )
                    )}
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <img src="/fog2.svg" className="absolute top-48 rotate-180 2xl:flex hidden   select-none" draggable={false} />

      <div className="w-full h-40 bg-gradient-to-b from-[#171B1E00] via-[#181B1E]/80 to-[#181B1E] absolute bottom-0 left-0 right-0 flex justify-center items-center">
        <div className="relative z-[5] max-w-fit flex flex-row group mt-5" onClick={() => setViewAll(!viewAll)}>
          <div className="flex items-center gap-x-3 pb-2">
            <p className="text-[16px] font-bold text-orange-500">{viewAll ? "View Less" : "View All Testimonials"}</p>
            <BiChevronRight className="text-orange-500" size={20} />
          </div>
          <div className="bg-orange-500 h-0.5 absolute -bottom-1 left-0 w-0 group-hover:w-full transition-all duration-500" />
        </div>
        <img src="/fog.svg" className="absolute bottom-0 select-none" draggable={false} />
      </div>
      <style jsx>{`
        @keyframes scrollUp {
          0% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        .testimonial-scroll-container {
          height: 1200px; /* Adjust the height for initial state */
          position: relative;
          overflow: hidden;
          transition: height 0.5s ease-in-out;
        }

        .testimonial-scroll-container.view-all {
          height: 1600px; /* Height for 'View All' state */
        }

        .testimonial-scrolling-content {
          animation: scrollUp 20s linear infinite;
          display: flex;
          flex-direction: column;
          gap:2px;
        }

        .testimonial-scroll-container.view-all .testimonial-scrolling-content {
          animation: scrollUp 10s linear infinite; /* Faster animation when viewing all */
        }

        .testimonial-row-wrapper {
          display: flex;
          flex-direction: row;
          gap: 16px; /* Adjust the gap between columns if needed */
        }
      `}</style>
    </div>
  );
}
