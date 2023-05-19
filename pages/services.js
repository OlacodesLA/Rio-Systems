import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesNavbar from "../components/ServicesNavbar";
import Services from "../components/Services";
import Transition from "../components/Transition";

const services = () => {
  const servicesData = [
    {
      bg: "/solar-panel.jpeg",
    },
    {
      bg: "/solar.jpeg",
    },
  ];
  return (
    <Transition>
      <div className="dark:bg-white">
        <Navbar />
        <ServicesNavbar servicesData={servicesData} name="Services" />
        <Services />
        <Footer />
      </div>
    </Transition>
  );
};

export default services;
