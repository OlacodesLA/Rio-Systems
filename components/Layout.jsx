import React from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import Link from "next/link";


const Layout = ({ children }) => {
  return (
    <div    
 className="">
      <div className="w-full h-full">
      <div className="fixed md:bottom-10 bottom-5 md:right-10 right-5 z-50">
        <Link href="https://wa.me/2348030724285" className="w-full ">
        <div className="md:w-16 md:h-16 h-12 w-12 rounded-full bg-primary flex justify-center items-center">
        <AiOutlineWhatsApp className="item-center md:text-4xl text-2xl text-white"/>
      </div>
        </Link>

    </div>
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
