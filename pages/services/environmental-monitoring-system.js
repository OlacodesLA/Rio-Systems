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

const Environmental = () => {
  const servicesData = [
    {
      bg: "/env-8.jpeg",
    },
    {
      bg: "/emergency.jpeg",
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
            name="Environmental Monitoring System"
          />
          <Navigation name="Environmental Monitoring System" />

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
                          In order to manage and minimize the impact that your
                          business has on the environment, you first need to be
                          able to quantify it before deciding on an appropriate
                          course of action. You may also need to monitor your
                          environmental impact for legal reasons, or to ensure
                          compliance with emissions and other regulations.
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center w-full">
                      <img
                        className="object-cover md:w-[500px] w-full flex justify-center my-10 h-96  rounded shadow-lg"
                        src="/env-8.jpeg"
                        alt=""
                      />
                    </div>
                    <div className="flex">
                      <div className="mb-10">
                        {/* <h6 className="mb-2 font-semibold leading-5">
                          Tell them I hate them
                        </h6> */}
                        <p className="md:text-xl text-base leading-8 font-bold">
                          Why choose environmental monitoring services from
                          Rio-Systems? Our environmental monitoring services
                          will help you to:
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
                              Quantify accurately the effects of your activities
                              on the environment.
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
                            <span>Manage your environmental impact.</span>
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
                              Make planning decisions to eliminate environmental
                              impact.
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
                            <span>Manage environmental risks.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex justify-center w-full">
                      <img
                        className="object-cover md:w-[600px] w-full flex justify-center my-10 h-72  rounded shadow-lg"
                        src="/emergency.jpeg"
                        alt=""
                      />
                    </div>
                    <div className="flex">
                      <div className="mb-10">
                        {/* <h6 className="mb-2 font-semibold leading-5">
                          Tell them I hate them
                        </h6> */}
                        <p className="md:text-xl text-base leading-8 font-bold">
                          Our Environment Monitoring solutions comes with the
                          following features.
                        </p>
                        <ul className="md:text-xl text-base space-y-3 pt-3">
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
                            <span>Remote Site Monitoring.</span>
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
                            <span>Motion Detection with image capture.</span>
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
                            <span>Adaptable Trigger Logic.</span>
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
                            <span>Fire Alarm panel Integration.</span>
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
                            <span>Security Light and siren Control.</span>
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
                            <span>Multiple Entrance Detection.</span>
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
                            <span>Ingress/Egress Log with Images.</span>
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
                            <span>SMS Text, SNMP Trap and Email Alarm.</span>
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
                            <span>Time Based Security: Out Of Hours.</span>
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
                              Reliable security throughout with immediate alarm
                              notification direct to you.
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <div className="flex justify-center w-full">
                  <img
                    className="object-cover md:w-[600px] w-full flex justify-center my-10 h-72  rounded shadow-lg"
                    src="/env-5.jpeg"
                    alt=""
                  />
                </div> */}
                    <div className="flex">
                      <div className="mb-10">
                        {/* <h6 className="mb-2 font-semibold leading-5">
                          Tell them I hate them
                        </h6> */}
                        <p className="md:text-xl text-base  leading-8 font-bold">
                          We also have a wide range of sensors available. These
                          include .
                        </p>
                        <ul className="md:text-xl text-lg space-y-3 pt-3">
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
                            <span>Temperature Sensor.</span>
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
                            <span>Humidity Sensor.</span>
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
                            <span>Power Failure Sensor.</span>
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
                            <span>UPS Monitoring.</span>
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
                            <span>Security Light and siren Control.</span>
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
                            <span>Current Measure.</span>
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
                            <span>Smoke Sensor.</span>
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
                            <span>Carbon Monoxide Sensor.</span>
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
                            <span>Movement Sensor.</span>
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
                            <span>Video Capture camera.</span>
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
                            <span>Water Spillage Sensor.</span>
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
                            <span>Oil/Fuel level Sensor.</span>
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
                              Automatic Notification ( on E-Mail, SMS, Voice
                              Message, Audible/Visual Alert or On-Screen Alert)
                              and many more.
                            </span>
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

export default Environmental;
