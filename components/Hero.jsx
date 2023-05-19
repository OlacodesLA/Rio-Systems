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
import Link from "next/link";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div>
      <section ref={ref} className="w-full">
        <div className="overflow-hidden pt-36 w-full">
          <div className="container  w-full px-3 md:px-10 lg:mx-10">
            <div className="flex lg:w-screen lg:flex-row flex-col justify-center lg:justify-between lg:items-start text-best ">
              <div className="w-auto  ">
                <AnimatePresence>
                  <motion.div
                    // layout
                    // initial={{ x: "-200px", opacity: 0 }}
                    // animate={{ x: "0px", opacity: 1 }}
                    // transition={{
                    //   ease: "easeInOut",
                    //   duration: 1,
                    // }}
                    style={{
                      transform: isInView ? "none" : "translateY(200px)",
                      opacity: isInView ? 1 : 0,
                      transition:
                        "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                    }}
                    className="inline-block mb-6 px-2 py-1 font-semibold bg-blue-100 rounded-full"
                  >
                    <div className="flex flex-wrap justify-start items-center lg:-m-1">
                      <div className="w-auto p-1">
                        <Link className="text-sm " href="/contact">
                          &#x1F44B; Get in touch with us.
                        </Link>
                      </div>

                      <div className="w-auto p-1">
                        <svg
                          width="15"
                          height="15"
                          viewbox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.66667 3.41675L12.75 7.50008M12.75 7.50008L8.66667 11.5834M12.75 7.50008L2.25 7.50008"
                            stroke="black"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
                <h1
                  className="mb-6 text-3xl md:text-4xl font-bold font-dm   md:max-w-xl leading-none"
                  style={{
                    transform: isInView ? "none" : "translateY(200px)",
                    opacity: isInView ? 1 : 0,
                    transition:
                      "all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                  }}
                >
                  Rio-system solutions is a renewable and electronic security
                  systems company.
                </h1>
                <p
                  className="mb-11 text-lg text-gray-700 font-normal tl:font-medium  font-dm md:max-w-md"
                  style={{
                    transform: isInView ? "none" : "translateY(200px)",
                    opacity: isInView ? 1 : 0,
                    transition:
                      "all 1.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                  }}
                >
                  We are in the business of creating comfort through supply of
                  uninterrupted power, using renewable energy and using
                  technology to provide adequate security.
                </p>
                <div
                  className="flex flex-wrap -m-2.5 mb-20"
                  style={{
                    transform: isInView ? "none" : "translateY(200px)",
                    opacity: isInView ? 1 : 0,
                    transition:
                      "all 1.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                  }}
                >
                  <div className="w-full md:w-auto p-2.5">
                    <Link href="/services" className="w-full block">
                      <button
                        className="py-4 px-6 w-full text-white font-semibold border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200 z-20"
                        type="button"
                      >
                        Our Services
                      </button>
                    </Link>
                  </div>
                  <div className="w-full md:w-auto p-2.5">
                    <Link  href="tel:+2348030724285">
                    <div className="block">
                      <button
                        className="py-4 px-9 w-full font-semibold border border-gray-300 hover:border-gray-400 rounded-xl focus:ring focus:ring-gray-50 bg-transparent hover:bg-gray-100 transition ease-in-out duration-200"
                        type="button"
                      >
                        <div className="flex flex-wrap justify-center items-center -m-1">
                          <div className="w-auto p-1">
                            <svg
                              width="19"
                              height="18"
                              viewbox="0 0 19 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2.75 3.75C2.75 2.92157 3.42157 2.25 4.25 2.25H6.70943C7.03225 2.25 7.31886 2.45657 7.42094 2.76283L8.5443 6.13291C8.66233 6.48699 8.50203 6.87398 8.1682 7.0409L6.47525 7.88737C7.30194 9.72091 8.77909 11.1981 10.6126 12.0247L11.4591 10.3318C11.626 9.99796 12.013 9.83767 12.3671 9.9557L15.7372 11.0791C16.0434 11.1811 16.25 11.4677 16.25 11.7906V14.25C16.25 15.0784 15.5784 15.75 14.75 15.75H14C7.7868 15.75 2.75 10.7132 2.75 4.5V3.75Z"
                                stroke="black"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg>
                          </div>
                          <div className="w-auto p-1">
                            <span>Book a call</span>
                          </div>
                        </div>
                      </button>
                    </div>
                    </Link>
                  </div>
                </div>
              </div>
              {/* <div className="w-full md:w-1/2 p-8">
                <img
                  className="transform hover:-translate-y-16 transition ease-in-out duration-1000"
                  src="https://i.ibb.co/0QyB6hg/Whats-App-Image-2022-12-13-at-12-19-58-PM.jpg"
                  alt=""
                />
              </div> */}{" "}
              <div className=" w-full lg:w-1/2 h-full">
                <div className="w-full h-full">
                  <Swiper
                    effect={"fade"}
                    grabCursor={true}
                    modules={[EffectFade, Autoplay, Pagination]}
                    pagination={false}
                    loop={true}
                    // creativeEffect={{
                    //   prev: {
                    //     shadow: false,
                    //     translate: [0, 0, -400],
                    //   },
                    //   next: {
                    //     shadow: false,
                    //     translate: ["100%", 0, 0],
                    //   },
                    // }}
                    autoplay={{
                      delay: 7500,
                      disableOnInteraction: false,
                    }}
                    className="h-full "
                  >
                    <SwiperSlide className="">
                      <div className="w-full md:pr-20">
                        <div className="flex items-center justify-center"           >
                          <div className="flex flex-col items-end px-1  md:px-3">
                            <img
                              className="object-cover mb-6 rounded shadow-lg h-40 sm:h-48 xl:h-56 w-40 sm:w-48 xl:w-56"
                              src="/hero-1.jpg"
                              alt=""
                              style={{
                                transform: isInView ? "none" : "translateY(200px)",
                                opacity: isInView ? 1 : 0,
                                transition:
                                  "all 1.0s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                              }}
                            />
                            <img
                              className="object-cover w-36 h-36 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                              src="/hero-2.jpg"
                              alt=""
                              style={{
                                transform: isInView ? "none" : "translateY(200px)",
                                opacity: isInView ? 1 : 0,
                                transition:
                                  "all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                              }}
                            />
                          </div>
                          <div className="px-3">
                            <img
                              className="object-cover w-48 h-48 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                              src="/hero-3.jpg"
                              alt=""
                              style={{
                                transform: isInView ? "none" : "translateY(200px)",
                                opacity: isInView ? 1 : 0,
                                transition:
                                  "all 1.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    {/* https://i.ibb.co/Xx7M8p3/Whats-App-Image-2022-12-13-at-12-19-39-PM.jpg
                    https://i.ibb.co/T1WCxzm/Whats-App-Image-2022-12-13-at-12-19-40-PM-1.jpg
                    https://i.ibb.co/99BN3Fb/Whats-App-Image-2022-12-13-at-12-19-45-PM.jpg */}
                    <SwiperSlide className="">
                      <div className="w-full md:pr-20">
                        <div className="flex items-center justify-center">
                          <div className="flex flex-col items-end px-1  md:px-3">
                            <img
                              className="object-cover mb-6 rounded shadow-lg h-40 sm:h-48 xl:h-56 w-40 sm:w-48 xl:w-56"
                              src="/acess-1.jpeg"
                              alt=""
                              style={{
                                transform: isInView ? "none" : "translateY(200px)",
                                opacity: isInView ? 1 : 0,
                                transition:
                                  "all 1.0s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                              }}
                            />
                            <img
                              className="object-cover w-36 h-36 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                              src="/images/access-2.jpg"
                              alt=""
                              style={{
                                transform: isInView ? "none" : "translateY(200px)",
                                opacity: isInView ? 1 : 0,
                                transition:
                                  "all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                              }}
                            />
                          </div>
                          <div className="px-3">
                            <img
                              className="object-cover w-48 h-48 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                              src="/images/access-3.png"
                              alt=""
                              style={{
                                transform: isInView ? "none" : "translateY(200px)",
                                opacity: isInView ? 1 : 0,
                                transition:
                                  "all 1.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="">
                      <div className="w-full md:pr-20">
                        <div className="flex items-center justify-center">
                          <div className="flex flex-col items-end px-1  md:px-3">
                            <img
                              className="object-cover mb-6 rounded shadow-lg h-40 sm:h-48 xl:h-56 w-40 sm:w-48 xl:w-56"
                              src="/cctv-1.jpeg"
                              alt=""
                              style={{
                                transform: isInView ? "none" : "translateY(200px)",
                                opacity: isInView ? 1 : 0,
                                transition:
                                  "all 1.0s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                              }}
                            />
                            <img
                              className="object-cover w-36 h-36 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                              src="https://i.ibb.co/8YTW9KM/Whats-App-Image-2022-12-13-at-12-19-48-PM-1.jpg"
                              alt=""
                              style={{
                                transform: isInView ? "none" : "translateY(200px)",
                                opacity: isInView ? 1 : 0,
                                transition:
                                  "all 1.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                              }}
                            />
                          </div>
                          <div className="px-3">
                            <img
                              className="object-cover w-48 h-48 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                              src="/solar-panel.jpeg"
                              alt=""
                              style={{
                                transform: isInView ? "none" : "translateY(200px)",
                                opacity: isInView ? 1 : 0,
                                transition:
                                  "all 1.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    {/* <SwiperSlide className="">
                      <div className="w-full el bg-hero-cctv z-30 pr-20"></div>
                    </SwiperSlide>
                    <SwiperSlide className="drop-shadow-none">
                      <div className="w-full  shadow-none drop-shadow-none  el bg-hero-solar z-30"></div>
                    </SwiperSlide> */}
                  </Swiper>
                  {/* <div className="flex items-center justify-center">
                  <div className="flex flex-col items-end px-3">
                    <img
                      className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                      src="https://i.ibb.co/cbThk9y/Whats-App-Image-2022-12-13-at-12-19-44-PM.jpg"
                      alt=""
                    />
                    <img
                      className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                      src="https://i.ibb.co/8YTW9KM/Whats-App-Image-2022-12-13-at-12-19-48-PM-1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="px-3">
                    <img
                      className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                      src="https://i.ibb.co/g9fvSwn/photovoltaics-solar-power-station-energy-from-natural-1.jpg"
                      alt=""
                    />
                  </div>
                </div> */}
                </div>
              </div>
              {/* <svg
                className="fill-current w-12 rotate-90 text-gray-300 absolute -bottom-5 left-[50%]"
                viewBox="0 0 33.64 83.19"
              >
                <defs></defs>
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <g class="cls-1">
                      <rect class="cls-2" y="19.5" width="3.46" height="3.46" />
                      <rect
                        class="cls-2"
                        x="10.06"
                        y="19.5"
                        width="3.46"
                        height="3.46"
                      />
                      <rect
                        class="cls-2"
                        x="20.12"
                        y="19.5"
                        width="3.46"
                        height="3.46"
                      />
                      <rect
                        class="cls-2"
                        x="30.18"
                        y="19.5"
                        width="3.46"
                        height="3.46"
                      />
                      <rect
                        class="cls-2"
                        y="29.54"
                        width="3.46"
                        height="3.46"
                      />
                      <rect
                        class="cls-2"
                        x="10.06"
                        y="29.54"
                        width="3.46"
                        height="3.46"
                      />
                      <rect
                        class="cls-2"
                        x="20.12"
                        y="29.54"
                        width="3.46"
                        height="3.46"
                      />
                      <rect
                        class="cls-2"
                        x="30.18"
                        y="29.54"
                        width="3.46"
                        height="3.46"
                      />
                      <rect
                        class="cls-2"
                        y="39.58"
                        width="3.46"
                        height="3.46"
                      />
                      <rect
                        class="cls-2"
                        x="10.06"
                        y="39.58"
                        width="3.46"
                        height="3.46"
                      />
                      <rect
                        class="cls-2"
                        x="20.12"
                        y="39.58"
                        width="3.46"
                        height="3.46"
                      />
                      <rect
                        class="cls-2"
                        x="30.18"
                        y="39.58"
                        width="3.46"
                        height="3.46"
                      />
                      <rect
                        class="cls-2"
                        y="49.62"
                        width="3.46"
                        height="3.46"
                      />
                      <rect
                        class="cls-2"
                        x="10.06"
                        y="49.62"
                        width="3.46"
                        height="3.46"
                      />
                      <rect
                        class="cls-2"
                        x="20.12"
                        y="49.62"
                        width="3.46"
                        height="3.46"
                      />
                      <rect
                        class="cls-2"
                        x="30.18"
                        y="49.62"
                        width="3.46"
                        height="3.46"
                      />
                      <rect
                        class="cls-2"
                        y="59.66"
                        width="3.46"
                        height="3.46"
                      />
                      <rect
                        class="cls-2"
                        x="10.06"
                        y="59.66"
                        width="3.46"
                        height="3.46"
                      />
                      <rect
                        class="cls-2"
                        x="20.12"
                        y="59.66"
                        width="3.46"
                        height="3.46"
                      />
                      <rect
                        class="cls-2"
                        x="30.18"
                        y="59.66"
                        width="3.46"
                        height="3.46"
                      />
                      <rect class="cls-2" y="69.7" width="3.46" height="3.46" />
                      <rect
                        class="cls-2"
                        x="10.06"
                        y="69.7"
                        width="3.46"
                        height="3.46"
                      />
                      <rect
                        class="cls-2"
                        x="20.12"
                        y="69.7"
                        width="3.46"
                        height="3.46"
                      />
                      <rect
                        class="cls-2"
                        x="30.18"
                        y="69.7"
                        width="3.46"
                        height="3.46"
                      />
                      <rect
                        class="cls-2"
                        y="79.73"
                        width="3.46"
                        height="3.46"
                      />
                      <rect
                        class="cls-2"
                        x="10.06"
                        y="79.73"
                        width="3.46"
                        height="3.46"
                      />
                      <rect
                        class="cls-2"
                        x="20.12"
                        y="79.73"
                        width="3.46"
                        height="3.46"
                      />
                      <rect
                        class="cls-2"
                        x="30.18"
                        y="79.73"
                        width="3.46"
                        height="3.46"
                      />
                      <rect class="cls-2" y="9.75" width="3.46" height="3.46" />
                      <rect
                        class="cls-2"
                        x="10.06"
                        y="9.75"
                        width="3.46"
                        height="3.46"
                      />
                      <rect
                        class="cls-2"
                        x="20.12"
                        y="9.75"
                        width="3.46"
                        height="3.46"
                      />
                      <rect
                        class="cls-2"
                        x="30.18"
                        y="9.75"
                        width="3.46"
                        height="3.46"
                      />
                      <rect class="cls-2" width="3.46" height="3.46" />
                      <rect
                        class="cls-2"
                        x="10.06"
                        width="3.46"
                        height="3.46"
                      />
                      <rect
                        class="cls-2"
                        x="20.12"
                        width="3.46"
                        height="3.46"
                      />
                      <rect
                        class="cls-2"
                        x="30.18"
                        width="3.46"
                        height="3.46"
                      />
                    </g>
                  </g>
                </g>
              </svg>
              <svg
                className="fill-current w-16 text-gray-300 absolute left-[63%]"
                viewBox="0 0 33.7 23"
              >
                <defs></defs>
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <g class="cls-1">
                      <rect class="cls-2" y="19.5" width="3.5" height="3.5" />
                      <rect
                        class="cls-2"
                        x="10.1"
                        y="19.5"
                        width="3.5"
                        height="3.5"
                      />
                      <rect
                        class="cls-2"
                        x="20.1"
                        y="19.5"
                        width="3.5"
                        height="3.5"
                      />
                      <rect
                        class="cls-2"
                        x="30.2"
                        y="19.5"
                        width="3.5"
                        height="3.5"
                      />
                      <rect class="cls-2" y="9.8" width="3.5" height="3.5" />
                      <rect
                        class="cls-2"
                        x="10.1"
                        y="9.8"
                        width="3.5"
                        height="3.5"
                      />
                      <rect
                        class="cls-2"
                        x="20.1"
                        y="9.8"
                        width="3.5"
                        height="3.5"
                      />
                      <rect
                        class="cls-2"
                        x="30.2"
                        y="9.8"
                        width="3.5"
                        height="3.5"
                      />
                      <rect class="cls-2" width="3.5" height="3.5" />
                      <rect class="cls-2" x="10.1" width="3.5" height="3.5" />
                      <rect class="cls-2" x="20.1" width="3.5" height="3.5" />
                      <rect class="cls-2" x="30.2" width="3.5" height="3.5" />
                    </g>
                  </g>
                </g>
              </svg>
              <svg
                className="fill-current w-16 text-gray-300 absolute top-[50%]  left-[50%]"
                viewBox="0 0 80.6 11.8"
              >
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <polyline
                      class="cls-1"
                      points="79.6 10.8 69.7 1 59.9 10.8 59.9 10.8 50.1 1 40.3 10.8 40.3 10.8 30.4 1 20.6 10.8 20.6 10.8 10.8 1 1 10.8"
                    />
                  </g>
                </g>
              </svg> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
