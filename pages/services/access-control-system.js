import React from "react";
import { useRef } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import ServicesNavbar from "../../components/ServicesNavbar";
import Section3 from "../../components/Section3";
import SolarPanel from "../../components/Services/SolarPanel";
import Navigation from "../../components/helpers/Navigation";
import Footer from "../../components/Footer";
import Quote from "../../components/Quote";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { services } from "../../components/data";

import Transition from "../../components/Transition";

const accesscontrol = () => {
  const servicesData = [
    {
      bg: "/images/access-3.png",
    },
    {
      bg: "/images/access-control-rio-system.png",
    },
    {
      bg: "/images/access-2.jpg",
    },

    {
      bg: "/images/access-1.jpg",
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
            name="Access Control System"
          />
          <Navigation name="Access Control System" />

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

              <div className="px-4 py-10 mx-auto w-screen  flex justify-between gap-10 text-black  lg:text-black max-w-full  sm:max-w-[1200px] md:px-24 lg:px-10 lg:py-10">
                <div className="flex font-dm text-text">
                  <div
                    ref={ref}
                    style={{
                      transform: isInView ? "none" : "translateY(150px)",
                      opacity: isInView ? 1 : 0,
                      transition:
                        "all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                    }}
                    className="flex flex-col justify-center  "
                  >
                    <p className="text-2xl font-bold underline pb-4 text-primary">
                      Overview
                    </p>
                    <div className="flex">
                      <div className="">
                        <p className="md:text-xl text-base font-light leading-8 ">
                          Gaining Access to your business and home should be
                          easy for employees, occupants and impossible for
                          intruders. With our access control security systems
                          services, you get the comfort of knowing your property
                          and information are protected, so you can focus on
                          what is most important at work, running your business.
                          At Rio-System, we have variety of access control
                          solutions customized to what works best for your
                          particular business and residential needs. Access
                          control systems controls and monitor intruders.
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center w-full">
                      <img
                        className="object-cover w-[400px] flex justify-center my-10 h-64  rounded shadow-lg"
                        src="/images/acess.jpg"
                        alt=""
                      />
                    </div>
                    <div className="flex">
                      <div>
                        <h6 className="mb-10 md:text-2xl text-lg font-semibold border-l-4 border-primary pl-2 text-primary leading-9">
                          THERE AREN’T ANY SHORT CUT WHEN IT COMES TO YOUR
                          SAFETY DOOR ENTRY & KEY CARD ACCESS SYSTEMS
                        </h6>
                        <p className="md:text-xl text-base font-light mb-10 leading-8">
                          Make your location easily accessible to employees
                          while keeping your property protected. Our door entry
                          systems can be tailored to fit the needs of your
                          business, no matter its size. We offer access card
                          systems as well as keypad systems, biometric systems
                          for various access points throughout a building, such
                          as strong rooms, sensitive data storage, in addition
                          to entrances and exits to your property.
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center w-full">
                      <img
                        className="object-cover w-[350px] flex justify-center mb-10 h-64  rounded shadow-lg"
                        src="/images/access-2.jpg"
                        alt=""
                      />
                    </div>
                    <div className="flex">
                      <div className="mb-10">
                        {/* <h6 className="mb-2 font-semibold leading-5">
                          Tell them I hate them
                        </h6> */}
                        <p className="md:text-xl text-base font-light leading-8">
                          With the installation of our key card and biometric
                          access systems, your business will never have to
                          question who has been in and out. You will be able to
                          know who had access, the timing of their entry and
                          exit, and where the entrance occurred. All of this
                          information will lead to a better managed business,
                          and ultimately, more control over your property and
                          the information you work so hard to get everyday. Our
                          key card access systems also alleviates the need for
                          traditional keys, eliminating trips to the hardware
                          store every time one is inevitably lost, or the early
                          morning or late night call you get when you have to
                          let someone who forgot their keys into the building.
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center w-full">
                      <img
                        className="object-cover w-[300px]  flex justify-center mb-10 h-80  rounded shadow-lg"
                        src="/images/access-1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="flex">
                      <div className="mb-10">
                        {/* <h6 className="mb-2 font-semibold leading-5">
                          Tell them I hate them
                        </h6> */}
                        <p className="md:text-xl text-base font-light leading-8">
                          We are available for on site installation and
                          maintenance; our number one priority is that your
                          system is reliable and held to the highest standards,
                          day in and day out. Contact us today for more
                          information.
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

export default accesscontrol;
