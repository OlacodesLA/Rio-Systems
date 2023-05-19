import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About/About";
import AboutContent from "../components/About/AboutContent";
import ServicesNavbar from "../components/ServicesNavbar";
import Footer from "../components/Footer";
import Transition from "../components/Transition";
import Career from "../components/Services/Career";
import Apply from "../components/Services/Apply";

const CareerOpportunities = () => {
  const servicesData = [
    {
      bg: "/images/career.jpg",
    },
  ];
  return (
    <Transition>
      <div className="dark:bg-white">
        <Navbar />
        <ServicesNavbar
          servicesData={servicesData}
          service="Intership, Graduate"
          name="Career Opportunities"
        />
        <Career />
        <Apply />
        <Footer />
      </div>
    </Transition>
  );
};

export default CareerOpportunities;
