import { React, useState, useEffect, Fragment } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import { useTheme } from "next-themes";
import { FaPhone } from "react-icons/fa";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Menu } from "@headlessui/react";

const Navbar = () => {
  const [IsOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [logo, setLogo] = useState(false);
  const [clientWindowHeight, setClientWindowHeight] = useState("");
  const [backgroundTransparacy, setBackgroundTransparacy] = useState(400);
  const [padding, setPadding] = useState(4);
  const [boxShadow, setBoxShadow] = useState(0);
  const [ourcolor, setColor] = useState("#000");

  const router = useRouter();

  const { systemTheme, theme, setTheme } = useTheme();
  const [mount, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mount) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return;
    }
  };
  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    const changeBackground = () => {
      if (window.pageYOffset >= 10) {
        setNavbar(true);
        setLogo(true);
      } else {
        setNavbar(false);
        setLogo(false);
      }
    };
    // AOS.init();
    // AOS.refresh();
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 100;

    if (backgroundTransparacyVar < 20) {
      let paddingVar = 20 - backgroundTransparacyVar * 250;
      let boxShadowVar = backgroundTransparacyVar * 0.01;
      let mycolor = "#0066ff";
      setBackgroundTransparacy(backgroundTransparacyVar);
      setPadding(paddingVar);
      setBoxShadow(boxShadowVar);
      setColor(mycolor);
    }
  }, [clientWindowHeight]);

  return (
    <nav className="fixed  w-full z-50">
      <div className="w-full">
        <div
          style={{
            background: `rgb(255, 255, 255, ${backgroundTransparacy})`,
            display: `flex`,
            justifyContent: `center`,
            boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 5px 3px`,
            color: `#000`,
          }}
        >
          <div className="flex items-center sm:mx-10 md:mx-20 justify-between w-full pt-3 pb-3 ">
            <div className="flex justify-center items-center flex-shrink-0 h-14 ml-4 md:ml-0 z-50 ">
              <Link href="/">
                {router.asPath === "/" && (
                  <img src="/RioLogo.png" className="w-52" alt="" />
                )}
                {logo === true && router.asPath !== "/" && (
                  <img src="/RioLogo.png" className="w-52" alt="" />
                )}
                {logo === false && router.asPath !== "/" && (
                  <img src="/RioLogoWhite.png" className="w-52" alt="" />
                )}
              </Link>
            </div>
            <div className="hidden lg:block">
              <div className={navbar ? "text-best" : "text-white"}>
                <div className="ml-10 flex items-baseline font-medium font-inter  text-[17px] space-x-10">
                  <div
                    className=""
                    data-aos="fade-down"
                    data-aos-duration="500"
                  >
                    <Link
                      activeClass="Home"
                      to="home"
                      href="/"
                      smooth={true}
                      offset={50}
                      duration={500}
                      className="cursor-pointer py-2 px-3"
                    >
                      Home
                    </Link>
                  </div>
                  <div
                    className=""
                    data-aos="fade-down"
                    data-aos-duration="700"
                  >
                    {" "}
                    <Link
                      activeClass="About"
                      to="about"
                      href="/about"
                      smooth={true}
                      offset={50}
                      duration={500}
                      className="cursor-pointer py-2 px-3 "
                    >
                      About
                    </Link>
                  </div>
                  <div
                    className=""
                    data-aos="fade-down"
                    data-aos-duration="900"
                  >
                    <div className="relative flex flex-col cursor-pointer ">
                      <div className="">
                        <div className="flex peer">
                          <span className={navbar ? "text-best" : "text-white"}>
                            Services
                          </span>
                          <ChevronDownIcon className="text-primary w-5 pt-1" />
                        </div>
                        <div className="hidden peer-hover:flex hover:flex absolute gap-1  flex-col bg-primary text-sm rounded-md drop-shadow-lg w-64">
                          <Link
                            href="/services/solar-system"
                            className="px-5 py-2  hover:text-primary hover:bg-white w-full text-white"
                          >
                            <span>Solar System</span>
                          </Link>
                          <Link
                            href="/services/video-surveillance"
                            className="px-5 py-2  hover:text-primary hover:bg-white w-full text-white"
                          >
                            <span>Video Surveillance</span>
                          </Link>
                          <Link
                            href="/services/access-control-system"
                            className="px-5 py-2  hover:text-primary hover:bg-white w-full text-white"
                          >
                            <span>Access Control System</span>
                          </Link>
                          <Link
                            href="/services/environmental-monitoring-system"
                            className="px-5 py-2  hover:text-primary hover:bg-white w-full text-white"
                          >
                            <span>Environmental Monitoring System (EMS)</span>
                          </Link>
                          <Link
                            href="/services/burglar-and-fire-alarm-system"
                            className="px-5 py-2  hover:text-primary hover:bg-white w-full text-white"
                          >
                            <span>Burglar & Fire Alarm System</span>
                          </Link>
                          <Link
                            href="/services/intercom-system"
                            className="px-5 py-2  hover:text-primary hover:bg-white w-full text-white"
                          >
                            <span>Intercom System</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div
                    className=""
                    data-aos="fade-down"
                    data-aos-duration="900"
                  >
                    {" "}
                    <Link
                      activeClass="estore"
                      to="estore"
                      href="/e-store"
                      smooth={true}
                      offset={50}
                      duration={500}
                      className="cursor-pointer py-2 px-3 "
                    >
                      E-Store
                    </Link>
                  </div> */}
                  <div
                    className=""
                    data-aos="fade-down"
                    data-aos-duration="1300"
                  >
                    {" "}
                    <Link
                      activeClass="Contact"
                      to=""
                      href="/career-opportunities"
                      smooth={true}
                      offset={50}
                      duration={500}
                      className="cursor-pointer py-2 px-3 "
                    >
                      Career Opportunities
                    </Link>
                  </div>
                  <div
                    className=""
                    data-aos="fade-down"
                    data-aos-duration="1300"
                  >
                    {" "}
                    <Link
                      activeClass="Contact"
                      to="contact"
                      href="/contact"
                      smooth={true}
                      offset={50}
                      duration={500}
                      className="cursor-pointer py-2 px-3 "
                    >
                      Contact
                    </Link>
                  </div>
                  <a href="tel:+2348030724285">
                    <div className={navbar ? "text-white" : "text-primary"}>
                      <div
                        className=""
                        data-aos="fade-down"
                        data-aos-duration="1300"
                      >
                        {navbar ? (
                          <div className="pulse">
                            <FaPhone className="text-[14px]" />
                          </div>
                        ) : (
                          <div className="pulsedark">
                            <FaPhone className="text-[14px]" />
                          </div>
                        )}
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mr-5 flex justify-center items-center lg:hidden">
            <div className="pulse mr-8">
              <FaPhone className="text-[14px] text-white" />
            </div>
            {navbar ? (
              <button
                onClick={() => setIsOpen(!IsOpen)}
                style={{ backgroundColor: `#4900EE` }}
                className="text-white h-8 w-8 flex justify-center items-center rounded-md focus:outline-none focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Click to open menu</span>

                {/*Mobile Functionality */}

                {!IsOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http:/www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24 "
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http:/www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24 "
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            ) : (
              <button
                onClick={() => setIsOpen(!IsOpen)}
                style={{ backgroundColor: `#4900EE` }}
                className=" text-white h-8 w-8 flex justify-center items-center rounded-md focus:outline-none focus:ring-white "
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Click to open menu</span>

                {/*Mobile Functionality */}

                {!IsOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http:/www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24 "
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http:/www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24 "
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            )}
          </div>
        </div>
        <Transition
          as={Fragment}
          show={IsOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="lg:hidden" id="mobile-menu">
            <div
              style={{ backgroundColor: `#fff` }}
              className=" shadow-sm font-semibold rounded-lg text-best flex flex-col mx-4 pt-4 pb-4 px-6 space-y-3"
            >
              <Link
                activeClass="Home"
                to="home"
                href="/"
                smooth={true}
                offset={50}
                duration={500}
                className="px-3  hover:bg-primary hover:text-white rounded-md py-[6px] cursor-pointer "
              >
                <span className="">Home</span>
              </Link>

              <Link
                activeClass="About"
                to="About"
                href="/about"
                smooth={true}
                offset={50}
                duration={500}
                className="px-3 hover:bg-primary hover:text-white rounded-md py-[6px] cursor-pointer "
                passhref
              >
                <span className="">About</span>
              </Link>

              <Menu>
                <span className="px-3 hover:bg-primary hover:text-white rounded-md py-[6px]  cursor-pointer ">
                  <Menu.Button className="w-full flex items-center justify-start">
                    Services <IoIosArrowDropdownCircle className="mt-1 ml-1" />
                  </Menu.Button>
                  <Menu.Items className="flex flex-col text-sm text-white ml-5 mt-3 space-y-1 rounded-md">
                    <Link
                      className="hover:bg-primary hover:text-white"
                      href="/services/solar-system"
                    >
                      <Menu.Item className="py-[6px] pl-5 rounded-md hover:bg-white hover:text-best">
                        <div>Solar System</div>
                      </Menu.Item>
                    </Link>
                    <Link
                      className="hover:bg-primary hover:text-white"
                      href="/services/access-control-system"
                    >
                      <Menu.Item className="py-[6px] pl-5 rounded-md hover:bg-white hover:text-best">
                        <div>Access Control System</div>
                      </Menu.Item>
                    </Link>
                    <Link
                      className="hover:bg-primary hover:text-white"
                      href="/services/video-surveillance"
                    >
                      <Menu.Item className="py-[6px] pl-5 rounded-md hover:bg-white hover:text-best">
                        <div>Video Surveillance</div>
                      </Menu.Item>
                    </Link>
                    <Link
                      className="hover:bg-primary hover:text-white"
                      href="/services/environmental-monitoring-system"
                    >
                      <Menu.Item className="py-[6px] pl-5 rounded-md hover:bg-white hover:text-best">
                        <div>EnvironmentaL Monitoring System (EMS)</div>
                      </Menu.Item>
                    </Link>
                    <Link
                      className="hover:bg-primary hover:text-white"
                      href="/services/burglar-and-fire-alarm-system"
                    >
                      <Menu.Item className="py-[6px] pl-5 rounded-md hover:bg-white hover:text-best">
                        <div>Burglar & Fire Alarm System</div>
                      </Menu.Item>
                    </Link>
                    <Link
                      className="hover:bg-primary hover:text-white"
                      href="/services/intercom-system"
                    >
                      <Menu.Item className="py-[6px] pl-5 rounded-md hover:bg-white hover:text-best">
                        <div>Intercom System</div>
                      </Menu.Item>
                    </Link>
                  </Menu.Items>
                </span>
              </Menu>

              {/* <Link
                activeClass="estore"
                to="estore"
                href="/e-store"
                smooth={true}
                offset={50}
                duration={500}
                className="px-3 hover:bg-primary hover:text-white rounded-md py-[6px] cursor-pointer "
              >
                <span className=" ">E-Store</span>
              </Link> */}

              <Link
                activeClass="CareerOpportunity"
                to="career-opportunities"
                href="/career-opportunities"
                smooth={true}
                offset={50}
                duration={500}
                className="px-3 hover:bg-primary hover:text-white rounded-md py-[6px] cursor-pointer "
              >
                <span className="">Contact</span>
              </Link>
              <Link
                activeClass="Contact"
                to="contact"
                href="/contact"
                smooth={true}
                offset={50}
                duration={500}
                className="px-3 hover:bg-primary hover:text-white rounded-md py-[6px] cursor-pointer "
              >
                <span className="">Contact</span>
              </Link>
            </div>
          </div>
        </Transition>
      </div>
    </nav>
  );
};

export default Navbar;
