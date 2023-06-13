import React from "react";
import { FaPhone } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocation } from "react-icons/io5";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";

const Quote = () => {
  return (
    <div className="dark:bg-gray-900 px-2 md:px-10 pb-20">
      <div className=" h-full bg-quote flex flex-col justify-between items-start md:flex-row w-full rounded-lg p-6 md:p-12">
        <div className="flex flex-col items-start text-gray-100 w-full md:w-1/2">
          <div className="pb-12 md:pb-24">
            <p className="md:text-4xl text-2xl font-bold text-white ">
              Get a Quote
            </p>
            <p className="md:text-lg text-base  text-gray-300 pt-2">
              Fill the form and our team will get back to you within 24hrs
            </p>
          </div>
          <div className="text-base md:text-lg">
            <div className=" flex flex-col justify-between gap-2">
              <div className="flex justify-start items-center gap-4 pr-5 py-3 border-2 border-transparent rounded-lg hover:border-primary cursor-pointer">
                <FaPhone className="text-primary" />{" "}
                <p>+2347048356453, +2348124621977</p>
              </div>
              <div className="flex justify-start items-center gap-4 pr-5 py-3 border-2 border-transparent rounded-lg hover:border-primary cursor-pointer ">
                <HiOutlineMail className="text-primary text-xl" />
                <p>info@riosystem.com</p>
              </div>
              <div className="flex justify-start items-center gap-4 pr-5 py-3 border-2 border-transparent rounded-lg hover:border-primary cursor-pointer">
                <IoLocation className="text-primary text-xl" />
                <p>Ikeja, Lagos, Nigeria.</p>
              </div>
            </div>
          </div>
          <div className="pt-10 md:pt-20 pl-2 flex gap-4">
            <div className="group  ">
              <div className="p-4 group-hover:bg-primary rounded-full cursor-pointer">
                <FaFacebookF className="text-lg text-white " />
              </div>
            </div>
            <div className="group  ">
              <div className="p-4 group-hover:bg-primary rounded-full cursor-pointer">
                <FaTwitter className="text-lg text-white " />
              </div>
            </div>
            <div className="group  ">
              <div className="p-4 group-hover:bg-primary rounded-full cursor-pointer">
                <BsWhatsapp className="text-lg text-white " />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[40%] md:mt-0 mt-10 h-full bg-white rounded-lg">
          <div className="w-full h-full">
            <form
              action="https://formsubmit.co/389a7b73a731955d4d05b92a79b198b6"
              method="POST"
              className="w-full h-full py-10 text-best px-5 flex flex-col gap-5"
            >
              <div className=" ">
                <p className="pb-1">Name</p>
                <div className="relative ">
                  <input
                    type="text"
                    className="h-[45px] dark:bg-white pl-10 w-full rounded-lg peer focus:outline-primary border-gray-400  border-2 border-solid"
                    name="name"
                    id=""
                  />
                  <AiOutlineUser className="absolute text-gray-400 peer-focus:text-primary text-xl left-3 top-[13px]" />
                </div>
              </div>
              <div className=" ">
                <p className="pb-1">Company Name</p>
                <div className="relative ">
                  <input
                    type="text"
                    className="h-[45px] dark:bg-white pl-10 w-full rounded-lg peer focus:outline-primary border-gray-400  border-2 border-solid"
                    name="company-name"
                    id=""
                  />
                  <FaUsers className="absolute text-gray-400 peer-focus:text-primary text-xl left-3 top-[13px]" />
                </div>
              </div>
              <div className="">
                <p className="pb-1">E-Mail</p>
                <div className="relative ">
                  <input
                    type="email"
                    className="h-[45px] dark:bg-white pl-10 w-full rounded-lg peer focus:outline-primary border-gray-400  border-2 border-solid"
                    name="email"
                    id=""
                  />
                  <HiOutlineMail className="absolute text-gray-400 peer-focus:text-primary text-xl left-3 top-[13px]" />
                </div>
              </div>
              <div className=" ">
                <p className="pb-1">Phone Number</p>
                <div className="relative ">
                  <input
                    type="text"
                    className="h-[45px] dark:bg-white pl-10 w-full rounded-lg peer focus:outline-primary border-gray-400  border-2 border-solid"
                    name="phone-number"
                    id=""
                  />
                  <AiOutlinePhone className="absolute text-gray-400 peer-focus:text-primary text-xl left-3 top-[13px]" />
                </div>
              </div>
              <div className="">
                <p className="pb-1">Message</p>
                <div className="relative ">
                  <textarea
                    type="text"
                    className="h-56 dark:bg-white px-3 pt-2 w-full rounded-lg peer focus:outline-primary border-gray-400  border-2 border-solid"
                    name="message"
                    id=""
                    placeholder="Message"
                  />
                </div>
              </div>
              <div className="flex justify-end w-full">
                <button
                  type="submit"
                  class="w-32 rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-indigo-600 active:shadow-none shadow-lg bg-gradient-to-l from-indigo-600 to-indigo-600   border-primary text-white"
                >
                  <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                  <span class="relative">Submit</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
