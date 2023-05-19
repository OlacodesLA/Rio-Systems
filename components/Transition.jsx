import React from "react";
import {motion} from "framer-motion"

const Transition = ({children}) => {
  return (
    <div className="overflow-x-hidden">
  <motion.div     
  initial={{ x: 300, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  exit={{ x: 300, opacity: 0 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20,
    duration:4,
  }} className="">
{children}
  </motion.div>
  </div>)
};

export default Transition;
