import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About/About";
import AboutContent from "../components/About/AboutContent";
import ServicesNavbar from "../components/ServicesNavbar";
import Footer from "../components/Footer";
import Transition from "../components/Transition";
import Logo from "../public/Logo.png";
import Head from "next/head";

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
      <Head>
        <title>Rio-Systems | About</title>
        <meta
          name="description"
          content="We are a fully registered and licensed company providing quality, top-class products and services with a view of making profit, thus adding value to its cooperate clients through..."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Rio-Systems | About" />
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
          service=""
          name="About Us"
        />
        <AboutContent />
        <Footer />
      </div>
    </Transition>
  );
};

export default about;
