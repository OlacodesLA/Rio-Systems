import { React, useRef } from "react";
import { useInView, Variants, motion, AnimatePresence } from "framer-motion";

const AboutContent = () => {
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
      <section class="bg-white dark:bg-gray-900 pb-20">
        <div
          ref={ref}
          class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6"
        >
          <div class=" text-gray-500 sm:text-lg dark:text-gray-400">
            <h2
              className="max-w-lg mb-6 font-dm text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-300 sm:text-4xl sm:leading-none"
              style={{
                transform: isInView ? "none" : "translateY(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              <br className="hidden md:block" />
              Unlimited, Uninterrupted Power supply and adequate security are
              Achievable
            </h2>
            <p
              class="mb-4"
              style={{
                transform: isInView ? "none" : "translateY(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              We are a fully registered and licensed company providing quality,
              top-class products and services with a view of making profit, thus
              adding value to its cooperate clients through effective and
              efficient delivery of its wide – varying services.
            </p>
            <p
              style={{
                transform: isInView ? "none" : "translateY(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              'We are in the business of creating comfort through supply of
              Uninterrupted power, using renewable energy and using technology
              to provide security' with us, “Unlimited, Uninterrupted Power
              supply and adequate security are achievable”
            </p>
          </div>
          <div class="grid gap-2 grid-cols-2 gap-2 ">
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
                  class="w-full h-[400px] object-cover rounded-lg"
                  src="./images/crew.jpg"
                  alt="office content 1"
                />
              </motion.div>
            </AnimatePresence>
            <AnimatePresence>
              <motion.div
                key="modal"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.9 }}
                className=""
              >
                <motion.img
                  variants={cardVariants2}
                  class="w-full  h-[400px] object-cover rounded-lg"
                  src="/happy-workers.png"
                  alt="Rio System Happy Workers"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutContent;
