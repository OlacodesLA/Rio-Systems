import React from "react";
import { useInView, Variants, motion, AnimatePresence } from "framer-motion";
import { blogData } from "../components/data";

const Blog = () => {
  const cardVariants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 50,
      //   rotate: 7,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  return (
    <div className="dark:bg-gray-900">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="">
          <h2 className="mb-6  font-dm text-4xl font-bold tracking-tight text-center dark:text-gray-300 text-gray-900 sm:text-4xl sm:leading-none">
            <span className="relative px-1 ">
              <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-indigo-400" />
              <span className="relative inline-block text-deep-purple-accent-400 ">
                Our Blog
              </span>
            </span>
          </h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-3 mx-auto max-w-sm sm:max-w-sm sm:mx-auto lg:max-w-full">
          {blogData.map((mydata, index) => {
            const { image, description, date, title, content, button } = mydata;
            return (
              <div key={index}>
<motion.div 
initial="offscreen"
   whileInView="onscreen"
  viewport={{ once: true, amount: 0.8 }}
  exit="onscreen" >
<motion.div
   variants={cardVariants} className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
<a href="#" aria-label="blog">
    <img class="rounded-t-lg" style={{height:"200px", width:"100%", objectFit:"cover"}} className="h-[200px] w-full object-cover" src={image} alt=""/>
</a>
<div class="p-5">
    <a href="#">
        <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">{title}</h5>
    </a>
    <p class="font-normal text-gray-700 mb-3">{content}</p>
    <a class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="#">
        Read more
    </a>
</div>
</motion.div>
</motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;

