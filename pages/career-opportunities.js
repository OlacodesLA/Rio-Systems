import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About/About";
import AboutContent from "../components/About/AboutContent";
import ServicesNavbar from "../components/ServicesNavbar";
import Footer from "../components/Footer";
import Transition from "../components/Transition";
import Career from "../components/Services/Career";
import Apply from "../components/Services/Apply";
import Head from "next/head";
import Logo from "../public/Logo.png";

const CareerOpportunities = () => {
  const servicesData = [
    {
      bg: "/images/career.jpg",
    },
  ];
  return (
    <Transition>
      <Head>
        <title>Rio-Systems | Career Opportunities</title>
        <meta
          name="description"
          content="If your desire is to work in an institution where learning is encouraged, skills are developed and passion is rewarded, Rio-Systems might be exactly what you are looking for."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Rio-Systems | Career Opportunities"
        />
        <meta property="og:image" content={Logo} />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="We are in the business of creating comfort through supply of uninterrupted power."
        />
      </Head>
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
