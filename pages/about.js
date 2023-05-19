import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About/About";
import AboutContent from "../components/About/AboutContent";
import ServicesNavbar from "../components/ServicesNavbar"
import Footer from "../components/Footer"
import Transition from "../components/Transition";

const about = () => {
  const servicesData = [
    {
      bg: "/images/access-3.png",
      
    },
    {
      bg: "/solar.jpeg",
    },

  ];
  return (
    <Transition>
    <div className="dark:bg-white">
      <Navbar />
      <ServicesNavbar servicesData={servicesData} service="" name="About Us"/>
      <AboutContent/>
      <Footer/>
    </div>
    </Transition>
  );
};

export default about;
