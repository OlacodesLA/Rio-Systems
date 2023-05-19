import React from "react";

const ServicesContent = () => {
  return (
    <div>
      <div className="container  px-6 mx-auto">
        <section className="mb-32 text-gray-800">
          <div className="flex flex-wrap mb-12">
            <div className="text-[18px] grow-0 shrink-0 basis-auto w-full lg:w-6/12 ">
              <p className="text-white mb-6  first-letter:text-4xl first-letter:text-primary text-justify">
                We would like to take this opportunity to welcome you to {""}
                <span className="text-primary">
                  Damfast Agro-Allied Company
                </span>
                , where our mission is to serve as a resource for people who own
                agricultural businesses, wholesalers, retailers, and consumers
                interested in purchasing farm produce or other items related to
                the industry.
              </p>
              <p className="text-gray-500">
                We have a physical farmland and an online business where we
                produce all of the goods we offer for sale.
              </p>
            </div>
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0">
              <div
                className="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg about-position"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <img
                  src="https://i.ibb.co/PTSH7MD/dl-beatsnoop-com-high-36c008a0c52ee888f9.jpg"
                  className="full"
                  alt="Damfast Plantain Plantation"
                />
                <a href="#!">
                  <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 about-bg hover:opacity-100 transition duration-300 ease-in-out"></div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicesContent;
