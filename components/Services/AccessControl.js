import React from "react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
import "swiper/css/effect-fade";
import {
  EffectCards,
  EffectFade,
  Autoplay,
  Pagination,
  EffectCreative,
} from "swiper";
import { AnimatePresence, motion, useInView } from "framer-motion";
const AccessControl = ({ page }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div>
      {" "}
      <div>
        <section ref={ref} className="w-full">
          <div className="overflow-hidden pt-36 w-full">
            <div className="container  w-full  ">
              <div className="flex lg:w-screen lg:flex-row flex-col justify-center lg:justify-between lg:items-start ">
                <div className="w-auto md:px-10">
                  <h2
                    style={{
                      transform: isInView ? "none" : "translateX(-200px)",
                      opacity: isInView ? 1 : 0,
                      transition:
                        "all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                    }}
                    className="mb-6  font-dm text-4xl font-bold tracking-tight text-center text-gray-900 sm:text-5xl sm:leading-none"
                  >
                    <span className="relative px-1 ">
                      <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-indigo-400" />
                      <span className="relative inline-block text-deep-purple-accent-400 ">
                        {page}
                      </span>
                    </span>
                  </h2>
                  <p>{page}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AccessControl;
