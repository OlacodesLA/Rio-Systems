import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesNavbar from "../components/ServicesNavbar";
import Services from "../components/Services";
import Transition from "../components/Transition";
import Logo from "../public/Logo.png";
import Head from "next/head";

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
      <Head>
        <title>Rio-Systems | Services</title>
        <meta
          name="description"
          content="We are in the business of creating comfort through supply of Uninterrupted power, using renewable energy and using technology to provide security' with us..."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Rio-Systems | Services" />
        <meta property="og:image" content={Logo} />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="We are in the business of creating comfort through supply of uninterrupted power."
        />
      </Head>
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
