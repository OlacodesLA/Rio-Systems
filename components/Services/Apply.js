import { React, useRef } from "react";
import { useInView, Variants, motion, AnimatePresence } from "framer-motion";
import Form from "../Form";

const Apply = () => {
  const cardVariants1 = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 50,
      rotate: 7,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  const cardVariants2 = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 50,
      rotate: 7,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.2,
      },
    },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div>
      <section class="bg-white dark:bg-gray-900 mb-20">
        <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div ref={ref} class=" text-gray-500 sm:text-lg dark:text-gray-400">
            <h2
              className="max-w-lg mb-6 font-dm text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-4xl sm:leading-none"
              style={{
                transform: isInView ? "none" : "translateY(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              <br className="hidden md:block" />
              Application Process
            </h2>
            <ul className="px-4 sm:mx-0 list-disc marker:text-xl md:marker:text-2xl marker:text-primary">
              <li
                class="mb-3 "
                style={{
                  transform: isInView ? "none" : "translateY(200px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
              >
                Be a graduate with a minimum of second class upper division from
                an accredited University
              </li>
              <li
                class="mb-3"
                style={{
                  transform: isInView ? "none" : "translateY(200px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
              >
                Have completed the compulsory NYSC and possess NYSC certificate
              </li>
              <li
                class="mb-3"
                style={{
                  transform: isInView ? "none" : "translateY(200px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
              >
                Have completed WAEC/NECO with at least 5 credits including
                Mathematics and English, at no more than two (2) sittings
              </li>
              <li
                class="mb-3"
                style={{
                  transform: isInView ? "none" : "translateY(200px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
              >
                Must be no more than twenty-six (27) years of age
              </li>
            </ul>
          </div>
          <div class="grid grid-cols-2 gap-2 ">
            <AnimatePresence>
              <motion.div
                key="modal"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                exit="onscreen"
                className=""
              >
                <motion.img
                  variants={cardVariants1}
                  class="w-full rounded-lg"
                  src="./images/career.jpg"
                  alt="office content 1"
                />
              </motion.div>
            </AnimatePresence>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 1 }}
              className=""
            >
              <motion.img
                variants={cardVariants2}
                class="w-full rounded-lg h-full object-cover"
                src="/images/cctv-worker-rio-system.avif"
                alt="office content 2"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Apply;
