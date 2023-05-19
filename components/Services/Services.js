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

const Services = ({ page }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div>
      <section ref={ref} className="w-full">
        <div className="overflow-hidden pt-36 w-full">
          <div className="container  w-full px-6 md:px-10 lg:mx-10">
            <div className="flex lg:w-screen lg:flex-row flex-col justify-center lg:justify-between lg:items-start ">
              <div className="w-auto">
                <h2
                  style={{
                    transform: isInView ? "none" : "translateX(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition:
                      "all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                  }}
                  className="mb-6  font-dm text-4xl font-bold tracking-tight text-center text-gray-900 sm:text-4xl sm:leading-none"
                >
                  <span className="relative px-1 ">
                    <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-indigo-400" />
                    <span className="relative inline-block text-deep-purple-accent-400 ">
                      Services
                    </span>
                  </span>
                </h2>
                <p>{page}</p>
              </div>
            </div>
            <div className="container   mx-auto">
              <section className="mb-32 text-gray-800">
                <div className="flex flex-wrap mb-12">
                  <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0">
                    <div
                      className="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg about-position"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      <img
                        src="https://i.ibb.co/PTSH7MD/dl-beatsnoop-com-high-36c008a0c52ee888f9.jpg"
                        className="w-full"
                        alt="Damfast Plantain Plantation"
                      />
                      <a href="#!">
                        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 about-bg hover:opacity-100 transition duration-300 ease-in-out"></div>
                      </a>
                    </div>
                  </div>

                  <div className="text-[18px] grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6">
                    <p className="text-gray-500 mb-6  first-letter:text-4xl first-letter:text-primary">
                      We would like to take this opportunity to welcome you to{" "}
                      {""}
                      <span className="text-primary">
                        Damfast Agro-Allied Company
                      </span>
                      , where our mission is to serve as a resource for people
                      who own agricultural businesses, wholesalers, retailers,
                      and consumers interested in purchasing farm produce or
                      other items related to the industry.
                    </p>
                    <p className="text-gray-500">
                      We have a physical farmland and an online business where
                      we produce all of the goods we offer for sale.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
