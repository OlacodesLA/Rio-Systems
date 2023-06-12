import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Cards from "../components/Cards";
import Team from "../components/Team";
import Blog from "../components/Blog";
import Section3 from "../components/Section3";
import Quote from "../components/Quote";
import Trusted from "../components/Trusted";
import Transition from "../components/Transition";
import Services from "../components/Services";
import Head from "next/head";
import Logo from "../public/Logo.png";

export default function Home() {
  return (
    <Transition>
      <div className="dark:bg-white">
        <div className="lg:bg-gradient-to-l from-[#4900EE] to-indigo-600 ">
          <div className=" lg:bg-hero-svg  w-full h-full bg-cover bg-center relative overflow-hidden pb-10">
            <svg
              viewBox="0 0 29.31 4.29"
              className="text-gray-300 fill-current absolute w-20 top-[89%] right-10"
            >
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path d="M4.29,2.15A2.15,2.15,0,1,1,2.15,0,2.14,2.14,0,0,1,4.29,2.15Z" />
                  <path d="M12.63,2.15A2.15,2.15,0,1,1,10.48,0,2.14,2.14,0,0,1,12.63,2.15Z" />
                  <path d="M21,2.15A2.15,2.15,0,1,1,18.82,0,2.14,2.14,0,0,1,21,2.15Z" />
                  <path d="M29.31,2.15A2.15,2.15,0,1,1,27.16,0,2.15,2.15,0,0,1,29.31,2.15Z" />
                </g>
              </g>
            </svg>
            <Head>
              <title>Rio-Systems | Home</title>
              <meta
                name="description"
                content="We are in the business of creating comfort through supply of uninterrupted power, using renewable energy and using technology to provide adequate security."
              />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
              />

              <meta
                property="og:url"
                content="https://riosystems.com.ng"
              ></meta>
              <meta property="og:title" content="Rio-Systems | Home" />
              <meta property="og:image" content={Logo} />
              <meta property="og:type" content="website" />
              <meta
                property="og:description"
                content="We are in the business of creating comfort through supply of uninterrupted power."
              />
            </Head>

            {/* <div className="absolute -bottom-32 text-gray border-indigo-600 -left-40 w-80 h-80 border-4 rounded-full border-opacity-60 border-t-8"></div>
          <div className="absolute -bottom-40 -left-20 border-indigo-600 w-80 h-80 border-4 rounded-full border-opacity-60 border-t-8"></div>
          <div className="absolute -top-40 text-gray-300 border-gray-200 -right-0 w-80 h-80 border-4 rounded-full border-opacity-70 border-t-8"></div>
          <div className="absolute -top-20 -right-20 w-80 border-gray-200 h-80 border-4 rounded-full border-opacity-70 border-t-8"></div> */}
            <Navbar />
            <Hero />
          </div>
        </div>
        <Cards />

        <Services />
        <Section2 />
        <Section3 />
        <Trusted />
        <Team />
        <Quote />
        {/* <Blog /> */}
        {/* <Section1 /> */}
        <Footer />
      </div>
    </Transition>
  );
}
