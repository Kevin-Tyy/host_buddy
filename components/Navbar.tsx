"use client";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { AiOutlineGlobal } from "react-icons/ai";
import { SetStateAction, useEffect, useState } from "react";
import MobileSidebar from "../components/MobileSidebar";
import { motion } from "framer-motion";
import Logo from "./shared/Logo";
import Image from "next/image";

interface NavLink {
  href: string;
  label: string;
  options: Option[];
}

interface Option {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  {
    href: "/homepages/dedicated",
    label: "Home",
    options: [
      { label: "Home Dedicated Server", href: "/homepages/dedicated" },
      { label: "Home Video", href: "/homepages/homevideo" },
      { label: "Home 3D", href: "/homepages/3d" },
      { label: "Home Gaming", href: "/homepages/gamingpage" },
      { label: "Home Phones", href: "/homepages/phone" },
      { label: "Home Cloud Reseller", href: "/homepages/cloud" },
      { label: "Home IPTV Premium Services", href: "/homepages/premiumservices" },
    ],
  },
  {
    href: "/hostingpages/hostingbar",
    label: "Hosting",
    options: [
      { label: "Shared Hosting", href: "/hostingpages/hostingbar" },
      { label: "Reseller Hosting", href: "/hostingpages/reseller" },
      { label: "Window Hosting", href: "/hostingpages/window" },
      { label: "VPS Hosting", href: "/hostingpages/vpshosting" },
      { label: "WordPress Hosting", href: "/hostingpages/wordpresshosting" },
      { label: "cPanel Hosting", href: "/hostingpages/cpanel" },
      { label: "Plenk Hosting", href: "/hostingpages/Plenk" },
    ],
  },
  {
    href: "/pages/dedicatedserver",
    label: "Pages",
    options: [
      { label: "India Dedicated Server", href: "/pages/dedicatedserver" },
      { label: "Website Builder", href: "/pages/websitebuilder" },
      { label: "Microsoft 365", href: "/pages/microsoft" },
      { label: "Sitelock", href: "/pages/sitelock" },
      { label: "Google Workspace", href: "/pages/google" },
      { label: "Professional Email", href: "/pages/Professional" },
      { label: "CodeGuard", href: "/pages/CodeGuard" },
      { label: "SSL Certificates", href: "/pages/ssl" },
      { label: "Transfer Domain Name", href: "/pages/transfer" },
      { label: "Domain Name Search", href: "/pages/domain" },
      { label: "Game Server", href: "/pages/gameserver" },
    ],
  },
  {
    href: "/features/payment",
    label: "Features",
    options: [
      { label: "Payment Methods", href: "/features/payment" },
      { label: "Affiliate Program", href: "/features/affiliate" },
      { label: "Empty Page", href: "/features/empty" },
      { label: "Special Promos", href: "/features/special" },
      { label: "Black Friday Sale", href: "/features/friday" },
    ],
  },
  {
    href: "#",
    label: "Pricing",
    options: [
      { label: "Hosting", href: "/hosting" },
    ],
  },
];

const NavBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [optionsData, setOptionsData] = useState<Option[]>([]);
  const [showOptionsIndex, setShowOptionsIndex] = useState<number | null>(null);
  let timer: NodeJS.Timeout;

  const handleMouseEnter = (index: number, options: Option[]) => {
    setOptionsData(options);
    setShowOptionsIndex(index);
    clearTimeout(timer);
  };

  const handleMouseLeave = () => {
    timer = setTimeout(() => {
      setShowOptionsIndex(null);
    }, 500); // Adjust this value as needed to persist for a longer time
  };

  useEffect(() => {
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <header className="absolute top-0 sp:w-full w-full px-4 py-4 z-[5]">
      <div className="w-full item-center justify-center mx-auto">
        <MobileSidebar onClose={() => setIsExpanded(false)} isOpen={isExpanded} />

        <nav className="w-full sm:w-full 2xl:w-[1220.25px] xl:w-[1220.25px] bl:w-full flex items-center 2xl:justify-center mx-auto  justify-between">
          <div className="w-full">
            <div className="justify-center md:mr-0 group ">
              <span className="font-semibold text-[29.27px] text-white inline-block transition-transform transform rotate-0 group-hover:rotate-180">H</span>
              <span className="font-semibold text-[29.27px] text-orange-500 inline-block transition-transform transform rotate-0 group-hover:rotate-180">o</span>
              <span className="font-semibold text-white text-[29.27px] inline-block transition-transform transform rotate-0 group-hover:rotate-180">s</span>
              <span className="font-semibold text-[29.27px] text-white inline-block transition-transform transform rotate-0 group-hover:rotate-180">t</span>
              <span className="font-semibold text-[29.27px] text-white inline-block transition-transform transform rotate-0 group-hover:rotate-180">Buddy</span>
            </div>
          </div>
          <div className="w-10 grid place-content-center ml-6 bl:hidden">
            <div
              className="flex flex-col items-end justify-center rounded-md transition duration-100 p-2 space-y-[7px] cursor-pointer group"
              onClick={() => setIsExpanded(true)}
            >
              <span
                className={`w-5 relative h-[2px] bg-[#c4c8d4] block transition rounded-full duration-300 ${
                  isExpanded && "rotate-[135deg] translate-y-[9px] w-5"
                }`}
              ></span>
              <span
                className={`w-4 relative h-[2px] bg-[#c4c8d4] transition rounded-full duration-100 opacity-100 ${
                  isExpanded && "opacity-0 invisible"
                }`}
              ></span>
              <span
                className={`w-5 relative h-[2px] bg-[#c4c8d4] rounded-full transition duration-300 ${
                  isExpanded && "-rotate-[135deg] -translate-y-[9px] w-5"
                }`}
              ></span>
            </div>
          </div>
          <div className="hidden bl:flex justify-center w-full">
            <ul className="text-white flex gap-x-10">
              {navLinks.map((link, index) => (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(index, link.options)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link href={link.href}>
                    <div className={`flex flex-col gap-[10px] items-center cursor-pointer`} style={{ position: 'relative' }}>
                      <h1 className="whitespace-nowrap hover:text-orange-500 font-mono-sans text-[16px] leading-[24px] hover:font-bold">
                        {link.label}
                      </h1>
                      {/* Underline effect */}
                      <div className="absolute w-8 bg-red-500 -bottom-2 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-4"></div>
                    </div>
                  </Link>
                  {showOptionsIndex === index && (
                    <div
                      className="absolute -left-8 top-10 bg-white shadow-md rounded-xl py-4 px-6 w-72 mr-0"
                      onMouseEnter={() => clearTimeout(timer)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {optionsData.map((option, optionIndex) => (
                        <Link key={optionIndex} href={option.href}>
                          <div className="flex flex-col pt-4 pb-2">
                            <h2 className="block font-medium text-gray-800 hover:text-orange-500 text-xl">
                              {option.label}
                            </h2>
                            <div className="border-t-2 border-gray-100 opacity-1 w-[100%] transition-transform duration-400 hover:scale-110 mt-2"></div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </ul>
          </div>
       <div className=" hidden 2xl:flex xl:flex  justify-end space-x-4 w-full">
  <div
    className="text-white flex flex-row items-center justify-center bg-transparent border border-white rounded-xl px-4 py-2 outline-none cursor-pointer hover:scale-120"
   
  >

    English
  </div>
  <div
    className="text-white flex flex-row items-center justify-center bg-orange-500 hover:bg-orange-600 rounded-xl px-4 py-0 hover:scale-120"
  >
    Sign Up
 

  </div>
</div>

      </nav>
    </div>
  </header>
  );
};

export default NavBar;
