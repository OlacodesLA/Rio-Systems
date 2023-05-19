
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from "next/router";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { AnimatePresence, motion, useInView } from "framer-motion";


// import required modules
import { Pagination, Autoplay } from "swiper";

const ServicesNavbar = ({servicesData, name, service}) => {
  const router = useRouter()
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className=" w-full md:h-[400px] h-[250px] bg-slate-800/60 backdrop-brightness-75">
  <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
    pagination={{
      dynamicBullets: true,
    }}
    modules={[Autoplay, Pagination]}
    className="w-full h-full"
  >

    {servicesData?.map((data, index)=>{
      const {bg} = data
      return(
        <SwiperSlide key={index} className="w-full h-full">
        <div style={{
      backgroundImage: `url(${bg})`,
    }}
            class={`w-full h-full  bg-cover bg-center`}>
            <div 
            class="w-full h-full bg-slate-800/60 backdrop-brightness-75 flex flex-col justify-center items-center backdrop-blur-sm">
              <h3 style={{
              transform: isInView ? "none" : "translateY(150px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
             className="pt-10 text-center md:text-4xl text-2xl text-white font-bold">{name}</h3>
              <p 
              style={{
              transform: isInView ? "none" : "translateY(150px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }} className="text-lg text-center text-gray-200 max-w-xl pt-3">{service}</p>
            </div>
        </div>
        </SwiperSlide>
      )
    })}

    {/* <SwiperSlide className="w-full h-full">
        <h1 className="text-center">Text Center</h1>
    </SwiperSlide>
    <SwiperSlide className="w-full h-full">
        <h1 className="text-center">Text Center</h1>
    </SwiperSlide> */}

  </Swiper>
  </div>
  )
};

export default ServicesNavbar;
