import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesNavbar from "../components/ServicesNavbar";
import Transition from "../components/Transition";
import Head from "next/head";
import Logo from "../public/Logo.png";

const contact = () => {
  const servicesData = [
    {
      bg: "/images/access-3.png",
    },
  ];
  return (
    <Transition>
      <div className="dark:bg-white">
        <Head>
          <title>Rio-Systems | Contact</title>
          <meta
            name="description"
            content="Rio-Systems Address: 34 Razak Balogun street, off adebola street, adeniran ogunsanya road,shitta, surulere Lagos, Email: info@riosystems.com.ng"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:title" content="Rio-Systems | Contact" />
          <meta property="og:image" content={Logo} />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="We are in the business of creating comfort through supply of uninterrupted power."
          />
        </Head>

        <Navbar />
        <ServicesNavbar
          servicesData={servicesData}
          service="Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know."
          name="Contact Us"
        />
        <section class="bg-white dark:bg-gray-900">
          <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <form action="#" class="space-y-8">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="name@rio-system.com"
                  required
                />
              </div>
              <div>
                <label
                  for="subject"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div class="sm:col-span-2">
                <label
                  for="message"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary sm:w-fit hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary"
              >
                Send message
              </button>
            </form>
          </div>
        </section>
        <Footer />
      </div>
    </Transition>
  );
};

export default contact;
