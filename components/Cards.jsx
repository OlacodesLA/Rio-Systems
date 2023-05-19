import { useRef } from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { RiCustomerService2Line, RiCustomerServiceLine } from "react-icons/ri";
import { MdPriceCheck } from "react-icons/md";
import { GiNewShoot } from "react-icons/gi";
import { IoDiamondSharp } from "react-icons/io5";
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

const Cards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section className="dark:bg-gray-900">
      <div class="max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className=" mb-14 font-dm text-2xl font-bold tracking-tight  text-center text-gray-900 dark:text-gray-300 sm:text-4xl sm:leading-none">
          <br className="hidden md:block" />
          At{" "}
          <span className="relative px-1">
            <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 " />
            <span className="relative inline-block text-deep-purple-accent-400">
              Rio-systems
            </span>
          </span>{" "}
          we are,
        </h2>
        <div
          ref={ref}
          class="flex w-full justify-between items-center lg:flex-row flex-col gap-8  gap-y-8 "
        >
          {/* <div className="bg-hero-pattern bg-cover bg-center bg-blend-overlay bg-slate-400 w-full md:h-[370px]  h-[230px] rounded-md"></div> */}
          <div className=" lg:w-[45%] w-full md:h-[370px]  h-[230px] rounded-md">
            <Swiper
              effect={"fade"}
              grabCursor={true}
              modules={[EffectFade, Autoplay, Pagination]}
              pagination={true}
              loop={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              className="h-full "
              style={{
                transform: isInView ? "none" : "translateY(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              <SwiperSlide>
                <div className="bg-hero-motion bg-cover bg-bottom  w-full  md:h-[370px]  h-[230px] rounded-md"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-hero-mini bg-cover bg-center  w-full md:h-[370px]  h-[230px] rounded-md"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-hero-battery bg-cover bg-bottom  w-full md:h-[370px]  h-[230px] rounded-md"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-hero-ir bg-cover bg-center  w-full md:h-[370px]  h-[230px] rounded-md"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-hero-night bg-cover bg-center  w-full md:h-[370px]  h-[230px] rounded-md"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-hero-room bg-cover bg-bottom  w-full md:h-[370px]  h-[230px] rounded-md"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-hero-room bg-cover bg-bottom  w-full md:h-[370px]  h-[230px] rounded-md"></div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div
              class="block rounded-xl border border-gray-200 p-4 shadow-sm hover:border-primary hover:ring-1 hover:ring-primary focus:outline-none focus:ring cursor-pointer"
              href="/accountant"
              style={{
                transform: isInView ? "none" : "translateY(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              <span class="inline-block rounded-lg bg-gray-50 p-3">
                <RiCustomerServiceLine className="md:text-5xl text-3xl text-primary" />
              </span>

              <h2 class="mt-2 md:text-base text-sm font-bold">
                Customer Eccentricity
              </h2>
            </div>

            <div
              class="block rounded-xl border border-gray-200 p-4 shadow-sm hover:border-primary hover:ring-1 hover:ring-primary focus:outline-none focus:ring cursor-pointer"
              href="/accountant"
              style={{
                transform: isInView ? "none" : "translateY(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 1.0s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              <span class="inline-block rounded-lg bg-gray-50 p-3">
                <MdPriceCheck className="md:text-5xl text-3xl text-primary" />
              </span>

              <h2 class="mt-2 md:text-base text-sm font-bold">
                Pricing and Affordability
              </h2>
            </div>

            <div
              class="block rounded-xl border border-gray-200 p-4 shadow-sm hover:border-primary hover:ring-1 hover:ring-primary focus:outline-none focus:ring cursor-pointer"
              href="/accountant"
              style={{
                transform: isInView ? "none" : "translateY(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              <span class="inline-block rounded-lg bg-gray-50 p-3">
                <IoDiamondSharp className="md:text-5xl text-3xl text-primary" />
              </span>

              <h2 class="mt-2 md:text-base text-sm font-bold ">
                Reputation Associated with luxury and class
              </h2>
            </div>

            <div
              class="block rounded-xl border border-gray-200 p-4 shadow-sm hover:border-primary hover:ring-1 hover:ring-primary focus:outline-none focus:ring cursor-pointer"
              href="/accountant"
              style={{
                transform: isInView ? "none" : "translateY(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              <span class="inline-block rounded-lg bg-gray-50 p-3">
                <GiNewShoot className="md:text-5xl text-3xl text-primary" />
              </span>

              <h2 class="mt-2 md:text-base text-sm font-bold">
                Unique Experience and Newness
              </h2>
            </div>

            <div
              class="block rounded-xl border border-gray-200 p-4 shadow-sm hover:border-primary hover:ring-1 hover:ring-primary focus:outline-none focus:ring cursor-pointer"
              href="/accountant"
              style={{
                transform: isInView ? "none" : "translateY(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 1.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              <span class="inline-block rounded-lg bg-gray-50 p-3">
                <BsShieldFillCheck className="md:text-5xl text-3xl text-primary" />
              </span>

              <h2 class="mt-2 md:text-base text-sm font-bold">
                Safety Intergrity and Accessiblity
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
