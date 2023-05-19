import React from "react";
import Navbar from "../../components/Navbar";
import ServicesNavbar from "../../components/ServicesNavbar";
import Section3 from "../../components/Section3";
import SolarPanel from "../../components/Services/SolarPanel";
import Navigation from "../../components/helpers/Navigation";
import Footer from "../../components/Footer";
import Quote from "../../components/Quote";
import { useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Transition from "../../components/Transition";
import Link from "next/link";
import { services } from "../../components/data";

const solarsystem = () => {
  const servicesData = [
    {
      bg: "/solar-panel.jpeg",
    },
    {
      bg: "/solar-img.jpg",
    },
    {
      bg: "/solar-img-1.jpg",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <Transition>
      <div>
        <div className="dark:bg-white">
          <Navbar />
          <ServicesNavbar
            servicesData={servicesData}
            service="Service"
            name="Solar System"
          />
          <Navigation name="Solar System" />
          <div className="">
            <div className="flex lg:flex-row flex-col-reverse pt-12 px-3 sm:px-5  md:px-10 lg:px-16   items-center lg:items-start">
              <div
                ref={ref}
                style={{
                  transform: isInView ? "none" : "translateY(150px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
                className="flex flex-col w-[300px]  sm:w-96 lg:w-[600px] my-10 lg:mt-10   gap-5 p-5 bg-best rounded-md"
              >
                <p className="text-2xl text-center font-bold w-full text-white">
                  Services
                </p>
                {services?.map((data) => {
                  return (
                    <Link href={data.link}>
                      <div
                        href="#_"
                        className="px-5 py-2.5 relative rounded group overflow-hidden font-medium w-full bg-white text-best inline-block"
                      >
                        <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-primary group-hover:h-full opacity-90"></span>
                        <span className="relative group-hover:text-white">
                          {data.name}
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
              <div className="px-4 py-16 mx-auto w-screen  flex justify-between gap-10 text-black  lg:text-black  sm:max-w-[1200px] md:px-24 lg:px-10 lg:py-20">
                <div className="flex font-dm text-text">
                  <div
                    ref={ref}
                    style={{
                      transform: isInView ? "none" : "translateY(150px)",
                      opacity: isInView ? 1 : 0,
                      transition:
                        "all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                    }}
                    className="flex flex-col justify-center "
                  >
                    <p className="text-2xl font-bold underline pb-4 text-primary">
                      Overview
                    </p>
                    <div className="flex">
                      <div className="">
                        <p className="md:text-xl text-base font-light leading-8 ">
                          Rio-System Solutions is a leading renewable
                          energy/solar and power company in Nigeria.
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center w-full">
                      <img
                        className="object-cover md:w-[600px] w-full flex justify-center my-10 h-64  rounded shadow-lg"
                        src="/solar-panel.jpeg"
                        alt=""
                      />
                    </div>
                    <div className="flex">
                      <div>
                        {/* <h6 className="mb-10 md:text-2xl text-lg font-semibold border-l-4 border-primary pl-2 text-primary leading-9">
                    THERE AREN’T ANY SHORT CUT WHEN IT COMES TO YOUR SAFETY DOOR
                    ENTRY & KEY CARD ACCESS SYSTEMS
                  </h6> */}
                        <p className="md:text-xl text-base font-light mb-10 leading-8">
                          We specialise in the design, procurement,
                          construction, installation and maintenance of solar
                          power system in Nigeria.
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center w-full">
                      <img
                        className="object-cover md:w-[400px] w-full flex justify-center mb-10 h-[340px]  rounded shadow-lg"
                        src="/solar-img.jpg"
                        alt=""
                      />
                    </div>
                    <div className="flex">
                      <div className="mb-10">
                        {/* <h6 className="mb-2 font-semibold leading-5">
                          Tell them I hate them
                        </h6> */}
                        <p className="md:text-xl text-base font-light leading-8">
                          Solar Power has enormous benefits over petrol and
                          diesel generators with increasing fuel costs and
                          epileptic power supply, switching to solar gives your
                          home or business affordable reliable 24-hours power.
                          Put an end to the inconvenience and expense of running
                          a generator set. A solar home system will transform
                          your life.
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center w-full">
                      <img
                        className="object-cover md:w-[600px] w-full flex justify-center mb-10 h-64  rounded shadow-lg"
                        src="/images/solar-system.png"
                        alt=""
                      />
                    </div>
                    <div className="flex">
                      <div className="mb-10">
                        {/* <h6 className="mb-2 font-semibold leading-5">
                          Tell them I hate them
                        </h6> */}
                        <p className="md:text-xl text-base font-light leading-8">
                          A Solar Home System guarantees constant and reliable
                          electricity. It's that simple. Get ready to enjoy the
                          peace of mind and productivity this will bring to your
                          life.
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center w-full">
                      <img
                        className="object-cover md:w-[400px] w-full flex justify-center mb-10 h-[380px]  rounded shadow-lg"
                        src="/solar-img-1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="flex">
                      <div className="mb-10">
                        {/* <h6 className="mb-2 font-semibold leading-5">
                          Tell them I hate them
                        </h6> */}
                        <p className="md:text-xl text-base font-light leading-8">
                          One of the biggest disadvantages of running a
                          generator set is constant exposure to toxic exhaust
                          fumes and noise pollution. Go solar and eliminate the
                          pollution in your immediate environment, increasing
                          your health and well being.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Quote />
          <Section3 />

          <Footer />
        </div>
      </div>
    </Transition>
  );
};

export default solarsystem;
