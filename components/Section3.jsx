import React from "react";
import { FaPhone } from "react-icons/fa";

const Section3 = () => {
  return (
    <div className="dark:bg-gray-900 pt-20">
      <div className="relative ">
        <img
          src="https://i.ibb.co/gWkk61r/Build-The-Perfect-Alarm-System-Ever.webp"
          className="absolute inset-0 object-cover  w-full h-full"
          alt=""
        />
        <div className="relative bg-opacity-75 bg-slate-800 ">
          {/* <svg 
          className="absolute inset-x-0 bottom-0 text-white"
          viewBox="0 0 1160 163"
        >
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          />
        </svg> */}
          <div className="pb-16">
            <div className="">
              <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                  <h2 className="max-w-lg mb-6 font-dm text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                      <svg
                        viewBox="0 0 52 24"
                        fill="currentColor"
                        className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-white lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                      >
                        <defs>
                          <pattern
                            id="dc223fcc-6d72-4ebc-b4ef-abe121034d6e"
                            x="0"
                            y="0"
                            width=".135"
                            height=".30"
                          >
                            <circle cx="1" cy="1" r=".7" />
                          </pattern>
                        </defs>
                        <rect
                          fill="url(#dc223fcc-6d72-4ebc-b4ef-abe121034d6e)"
                          width="52"
                          height="24"
                        />
                      </svg>
                    </span>
                    Protect Your Home Or Business With Our Unique Solutions
                  </h2>
                  <p className="text-base text-white md:text-lg">
                    From large enterprises to local business security platforms,
                    from simple camera solutions for small offices to complex
                    enterprise-class video systems for large campuses.
                  </p>
                </div>
                <div className="flex gap-9 items-center sm:justify-center">
                  <a
                    href="/about"
                    className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
                  >
                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-primary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                      Discover More Info
                    </span>
                  </a>

                  <a href="tel:2349090909090">
                    <div className="">
                      <div className="pulse">
                        <FaPhone className="text-[14px] text-white" />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="relative px-4 sm:px-0">
              <div className="absolute inset-0 bg-gray-100 h-1/2" />
              <div className="relative grid mx-auto overflow-hidden bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
