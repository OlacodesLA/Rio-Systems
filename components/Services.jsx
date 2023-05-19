import React from "react";
import { useInView, Variants, motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { services } from "../components/data";
const Services = () => {
  const cardVariants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 50,
      //   rotate: 7,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  return (
    <div>
      <div className="dark:bg-gray-900">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <h2 className=" mb-8 font-dm text-2xl font-bold tracking-tight  text-center text-gray-900 dark:text-gray-300 sm:text-4xl sm:leading-none">
            <br className="hidden md:block" />
            Our{" "}
            <span className="relative px-1">
              <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12" />
              <span className="relative inline-block text-deep-purple-accent-400">
                Services
              </span>
            </span>
          </h2>
          <div className="grid gap-8 lg:grid-cols-3 mx-auto max-w-sm sm:max-w-sm sm:mx-auto lg:max-w-full">
            {services?.map((mydata, index) => {
              const { name, details, image, link } = mydata;
              return (
                <div key={index}>
                  <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    exit="onscreen"
                  >
                    <motion.div
                      variants={cardVariants}
                      className="group  bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5 overflow-hidden "
                    >
                      <div className="overflow-hidden h-[200px] w-full bg-white">
                        <img
                          class="rounded-t-lg"
                          className="group-hover:scale-110 duration-200 transition-all h-[200px] ease-in w-full rounded-t-lg object-cover"
                          src={image}
                          alt=""
                        />
                      </div>
                      <div class="p-5">
                        <a href="#">
                          <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                            {name}
                          </h5>
                        </a>
                        <p class="font-normal text-gray-700 mb-3">{details}</p>
                        <Link
                          href={link}
                          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                        >
                          Read more
                        </Link>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
