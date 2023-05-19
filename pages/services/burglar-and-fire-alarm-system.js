import React from "react";
import { useRef } from "react";
import Navbar from "../../components/Navbar";
import ServicesNavbar from "../../components/ServicesNavbar";
import Section3 from "../../components/Section3";
import SolarPanel from "../../components/Services/SolarPanel";
import Navigation from "../../components/helpers/Navigation";
import Footer from "../../components/Footer";
import Quote from "../../components/Quote";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Transition from "../../components/Transition";
import Link from "next/link";
import { services } from "../../components/data";

const Burglar = () => {
  const servicesData = [
    {
      bg: "/images/emergency-rio-system.png",
    },
    {
      bg: "/images/emergency-rio-system.png",
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
            name="Burglar & Fire Alarm System"
          />
          <Navigation name="Burglar & Fire Alarm System" />

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
              <div className="px-4 py-16 mx-auto w-screen  flex justify-between gap-10 text-black  lg:text-black max-w-full  sm:max-w-[1200px] md:px-24 lg:px-10 lg:py-20">
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
                          Early fire detection and burglar alarms can save your
                          life, and protect your family and property. Don’t be
                          left in a dangerous situation without the protection
                          of both a fire alarm and burglar alarm system. Unlike
                          a calculating burglar or a dishonest employee, a fire
                          does not discriminate. Anyone or anything can be a
                          target of its destructive powers.
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center w-full">
                      <img
                        className="object-cover md:w-[400px] w-full flex justify-center my-10 h-64  rounded shadow-lg"
                        src="/images/emergency-rio-system.png"
                        alt=""
                      />
                    </div>
                    <div className="flex">
                      <div>
                        <h6 className="mb-10 uppercase  md:text-2xl text-lg font-semibold border-l-4 border-primary pl-2 text-primary leading-9">
                          Don’t go without 24-Hour alarm monitoring for added
                          protection.There is no doubt that smoke detectors save
                          lives.
                        </h6>
                        <p className="md:text-xl text-base font-light mb-10 leading-8">
                          Fire is especially terrifying to a family member who
                          may need special assistance to get out of the home.
                          Home fire & burglar alarms give you 24-hour
                          protection, when you are at home or far away.
                        </p>
                      </div>
                    </div>
                    {/* <div className="flex justify-center w-full">
                <img
                  className="object-cover md:w-[600px] w-full flex justify-center mb-10 h-64  rounded shadow-lg"
                  src="/solar.jpeg"
                  alt=""
                />
              </div> */}
                    <div className="flex">
                      <div className="mb-10">
                        <p className="md:text-xl text-base font-light leading-8">
                          While your home might already have a battery-operated
                          smoke detectors or even hard-wired detectors, they are
                          not monitored by a 24-hour monitoring center.
                          Monitoring ensures that whether you are at home or
                          away, your home and family is protected in the event
                          of fire.
                        </p>
                      </div>
                    </div>
                    {/* <div className="flex justify-center w-full">
                <img
                  className="object-cover md:w-[600px] w-full flex justify-center mb-10 h-64  rounded shadow-lg"
                  src="/images/solar-system.png"
                  alt=""
                />
              </div> */}
                    <div className="flex">
                      <div className="mb-10">
                        {/* <h6 className="mb-2 font-semibold leading-5">
                          Tell them I hate them
                        </h6> */}
                        <p className="md:text-xl text-base  leading-8 font-bold">
                          Some of the additions you can make to your new or
                          existing security system are:
                        </p>
                        <ul className="md:text-xl text-base font-light space-y-3 pt-3">
                          <li class="flex items-center space-x-3">
                            <svg
                              class="flex-shrink-0 w-5 h-5 text-primary"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            <span>
                              Carbon Monoxide detection and monitoring.
                            </span>
                          </li>
                          <li class="flex items-center space-x-3">
                            <svg
                              class="flex-shrink-0 w-5 h-5 text-primary"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            <span>Heat detection and monitoring.</span>
                          </li>
                          <li class="flex items-center space-x-3">
                            <svg
                              class="flex-shrink-0 w-5 h-5 text-primary"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            <span>Smoke detection and monitoring.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="mb-10">
                        {/* <h6 className="mb-2 font-semibold leading-5">
                          Tell them I hate them
                        </h6> */}
                        <p className="md:text-xl text-base leading-8 font-bold space-y-4">
                          We also provide inspection and maintenance services
                          such as:
                        </p>
                        <ul className="md:text-xl text-base font-light space-y-3 pt-3">
                          <li class="flex items-center space-x-3">
                            <svg
                              class="flex-shrink-0 w-5 h-5 text-primary"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            <span>
                              Battery replacement on your battery-operated smoke
                              detectors.
                            </span>
                          </li>
                          <li class="flex items-center space-x-3">
                            <svg
                              class="flex-shrink-0 w-5 h-5 text-primary"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            <span>
                              {" "}
                              Annual preventive maintenance services to ensure
                              your security and fire detection devices are
                              working in optimal condition
                            </span>
                          </li>
                          <li class="flex items-center space-x-3">
                            <svg
                              class="flex-shrink-0 w-5 h-5 text-primary"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            <span>Smoke detection and monitoring.</span>
                          </li>
                        </ul>
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

export default Burglar;
