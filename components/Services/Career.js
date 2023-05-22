import React from "react";
import { useRef } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { services } from "../../components/data";

import Transition from "../../components/Transition";
import Form from "../Form";

const Career = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="">
      <div className="flex lg:flex-row flex-col-reverse pt-12 px-3 sm:px-5  md:px-10 lg:px-16   items-center lg:items-start">
        <div className="px-4 py-10 mx-auto w-screen  flex justify-between gap-10 text-black  lg:text-black max-w-full  sm:max-w-[1200px] md:px-24 lg:px-10 lg:py-10">
          <div className="flex font-dm text-text">
            <div
              ref={ref}
              style={{
                transform: isInView ? "none" : "translateY(150px)",
                opacity: isInView ? 1 : 0,
                transition: "all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
              className="flex flex-col justify-center  "
            >
              <p className="text-2xl font-bold underline pb-4 text-primary">
                Internship, Graduate
              </p>
              <div className="flex">
                <div className="mb-10">
                  <p className="md:text-xl text-base font-light leading-8 ">
                    If your desire is to work in an institution where learning
                    is encouraged, skills are developed and passion is rewarded,
                    Rio-Systems might be exactly what you are looking for.
                    Explore below to find out more about graduate, internship
                    opportunities.
                  </p>
                </div>
              </div>
              {/* <div className="flex justify-center w-full">
                <img
                  className="object-cover w-[400px] flex justify-center my-10 h-64  rounded shadow-lg"
                  src="/images/acess.jpg"
                  alt=""
                />
              </div> */}
              {/* <div className="flex">
                <div>
                  <h6 className="mb-10 md:text-2xl text-lg font-semibold border-l-4 border-primary pl-2 text-primary leading-9">
                    THERE AREN’T ANY SHORT CUT WHEN IT COMES TO YOUR SAFETY DOOR
                    ENTRY & KEY CARD ACCESS SYSTEMS
                  </h6>
                  <p className="md:text-xl text-base font-light mb-10 leading-8">
                    Make your location easily accessible to employees while
                    keeping your property protected. Our door entry systems can
                    be tailored to fit the needs of your business, no matter its
                    size. We offer access card systems as well as keypad
                    systems, biometric systems for various access points
                    throughout a building, such as strong rooms, sensitive data
                    storage, in addition to entrances and exits to your
                    property.
                  </p>
                </div>
              </div> */}
              {/* <div className="flex justify-center w-full">
                <img
                  className="object-cover w-[350px] flex justify-center mb-10 h-64  rounded shadow-lg"
                  src="/images/access-2.jpg"
                  alt=""
                />
              </div> */}
              <p className="text-2xl font-bold underline pb-4 text-primary">
                Internship
              </p>
              <div className="flex">
                <div className="mb-10">
                  <p className="md:text-xl text-base font-light leading-8">
                    At Rio-systems, emphasis is placed on growing talents. We
                    offer internship opportunities for students and graduates to
                    learn from a world-class organization. Our internship
                    programmes will enable you to gather technical expertise and
                    personal skills which will enable you to make an impact in
                    your career and benefit from vital on-the-job experience.
                    Its a great way to explore the career choices that lie ahead
                    of you.
                  </p>
                </div>
              </div>
              <Form
                heading="Internship"
                action="https://formsubmit.co/389a7b73a731955d4d05b92a79b198b6"
              />
              <p className="text-2xl font-bold underline my-10 text-primary">
                Graduate
              </p>
              <div className="flex">
                <div className="mb-10">
                  <p className="md:text-xl text-base font-light leading-8">
                    Our entry level training programme is an exciting platform
                    to launch your career as we provide and create a world-class
                    training environment.
                  </p>
                </div>
              </div>
              <Form
                heading="Graduate"
                action="https://formsubmit.co/389a7b73a731955d4d05b92a79b198b6"
              />
              <div className="flex">
                <div className="my-10">
                  {/* <h6 className="mb-2 font-semibold leading-5">
                          Tell them I hate them
                        </h6> */}
                  <p className="md:text-xl text-base font-light leading-8">
                    We are available for on site installation and maintenance;
                    our number one priority is that your system is reliable and
                    held to the highest standards, day in and day out. Contact
                    us today for more information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
