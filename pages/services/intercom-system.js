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

const Intercom = () => {
  const servicesData = [
    {
      bg: "/doorbell-1.jpeg",
    },
    {
      bg: "/doorbell-2.jpeg",
    },
    {
      bg: "/doorbell-3.jpeg",
    },
    {
      bg: "/doorbell-4.jpeg",
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
            name="Intercom System"
          />
          <Navigation name="Intercom System" />
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
                          A private branch exchange (PBX) is a telephone
                          exchange or switching system that serves an
                          organization and performs concentration of central
                          office lines or trunks and provides intercommunication
                          between a large number of telephone stations in the
                          organization.
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center w-full">
                      <img
                        className="object-cover md:w-[600px] w-full flex justify-center my-10 h-64  rounded shadow-lg"
                        src="/doorbell-4.jpeg"
                        alt=""
                      />
                    </div>
                    <div className="flex">
                      <div className="mb-10">
                        {/* <h6 className="mb-2 font-semibold leading-5">
                          Tell them I hate them
                        </h6> */}
                        <p className="md:text-xl text-base font-light leading-8">
                          We also Supply and setup key phone system also one of
                          subsystem for the system integration. Keyphone or PBX
                          in wired and wireless which can be connected in
                          various formation such as incoming call, intercom,
                          voice over internet protocol, video call, video
                          conferencing and others. We do provide solution in
                          designing and implementation on setting up the system.
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center w-full">
                      <img
                        className="object-cover md:w-[500px] w-full flex justify-center my-10 h-64  rounded shadow-lg"
                        src="/doorbell-1.jpeg"
                        alt=""
                      />
                    </div>
                    {/* <div className="flex justify-center w-full">
                <img
                  className="object-cover md:w-[600px] w-full flex justify-center mb-10 h-64  rounded shadow-lg"
                  src="/solar.jpeg"
                  alt=""
                />
              </div> */}
                    <div className="flex">
                      <div>
                        {/* <h6 className="mb-10 md:text-2xl text-lg font-semibold border-l-4 border-primary pl-2 text-primary leading-9">
                    THERE AREN’T ANY SHORT CUT WHEN IT COMES TO YOUR SAFETY DOOR
                    ENTRY & KEY CARD ACCESS SYSTEMS
                  </h6> */}
                        <p className="md:text-xl text-base font-light mb-10 leading-8">
                          A wireless home security systems is better than the
                          traditional system in many ways. First, it does not
                          require any installation that might cost more than the
                          gadget itself. The setup is simple to use, so
                          contractors would not be needed anyhow. There would be
                          no wirings involved, so it means the fewer risks.
                          Wireless security systems for homes can either be
                          battery-operated or power outlet-dependent. Bear in
                          mind that battery-operated ones are better used when
                          blackouts are frequent; however, the batteries could
                          be costly. Wireless intercom system that rely on power
                          outlets are cheaper and have the same efficiency as a
                          battery operated ones.
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center w-full">
                      <img
                        className="object-cover md:w-[400px] w-full flex justify-center mb-10 h-96  rounded shadow-lg"
                        src="/doorbell-2.jpeg"
                        alt=""
                      />
                    </div>
                    <div className="flex">
                      <div className="mb-10">
                        {/* <h6 className="mb-2 font-semibold leading-5">
                          Tell them I hate them
                        </h6> */}
                        <p className="md:text-xl text-base font-light leading-8">
                          There are a lot of intercoms models on the market.
                          Selecting the right one for your house should require
                          proper planning. Make sure that the signal in the home
                          or workplace is safe. Just like smartphones, these
                          systems are vulnerable to interference. If you have
                          metal walls or any blockades, discuss the layout of
                          your homes to the intercom service provider. You
                          should also take note of the wireless range of the
                          product, as well as the maximum no. of devices it can
                          be connected with. The warranty and price should also
                          be considered.
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center w-full">
                      <img
                        className="object-cover md:w-[600px] w-full flex justify-center mb-10 h-64  rounded shadow-lg"
                        src="/doorbell-3.jpeg"
                        alt=""
                      />
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

export default Intercom;
