import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Not from "../components/404";
import Transition from "../components/Transition";

const NotFound = () => {
  return (
    <Transition>
      <div>
        <Navbar />
        <Not />
        <Footer />
      </div>
    </Transition>
  );
};

export default NotFound;
