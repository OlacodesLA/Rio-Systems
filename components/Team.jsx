import React from "react";
import Link from "next/link";

const Team = () => {
  const data = [
    {
      name: "Ogunbiyi Ifeoluwa",
      role: "Founder",
      image: "/images/founder.jpg",
      tw: "https://ng.linkedin.com/in/ogunbiyi-ifeoluwa-94607746",
      fb: "https://www.facebook.com/ogunbiyiIfe?mibextid=ZbWKwL",
      li: "https://ng.linkedin.com/in/ogunbiyi-ifeoluwa-94607746",
      in: "https://instagram.com/mikkieoguns?igshid=YmMyMTA2M2Y=",
    },
    {
      name: "Dr Boluwatife Victor",
      role: "Co-Founder / Managing Director",
      image: "/team-2.jpeg",
      tw: "https://twitter.com/MikkieOguns",
      fb: "https://www.facebook.com/ogunbiyi.bolu?mibextid=ZbWKwL",
      li: "https://ng.linkedin.com/in/boluogunbiyi",
      in: "https://instagram.com/mikkieoguns?igshid=YmMyMTA2M2Y=",
    },
  ];
  return (
    <div>
      <section class="bg-white dark:bg-gray-900 py-10">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2 class="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white font-text">
              Our Team
            </h2>
            <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Get Connected with our team members here at Rio-Systems Solutions
            </p>
          </div>
          <div class="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {data?.map((data) => {
              const { name, role, image, fb, tw, li } = data;
              return (
                <div class="text-center text-gray-500 dark:text-gray-400">
                  <img
                    class="mx-auto mb-4 w-36 h-36 rounded-full object-cover object-top"
                    src={image}
                    alt="Bonnie Avatar"
                  />
                  <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {name}
                  </h3>
                  <p>{role}</p>
                  <ul class="flex justify-center mt-4 space-x-4">
                    <Link href={fb} passHref>
                      <li>
                        <a
                          target="_blank"
                          class="text-[#39569c] hover:text-gray-900 dark:hover:text-white"
                        >
                          <svg
                            class="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                    </Link>
                    <Link href={tw} passHref>
                      <li>
                        <a
                          target="_blank"
                          class="text-[#00acee] hover:text-gray-900 dark:hover:text-white"
                        >
                          <svg
                            class="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                      </li>
                    </Link>
                    <Link href={li} passHref>
                      <li>
                        <a
                          target="_blank"
                          class="text-[#00acee] hover:text-gray-900 dark:hover:text-white"
                        >
                          <svg
                            class="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>
                      </li>
                    </Link>
                    <Link href={data?.in} passHref>
                      <li>
                        <a
                          target="_blank"
                          class="text-[#00acee] hover:text-gray-900 dark:hover:text-white"
                        >
                          <svg
                            fill="currentColor"
                            class="bi bi-instagram w-6 h-6"
                            viewBox="0 0 16 16"
                            id="IconChangeColor"
                          >
                            {" "}
                            <path
                              d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                              id="mainIconPathAttribute"
                              fill="#cd3232"
                              stroke="#dd5555"
                              stroke-width="0"
                            ></path>{" "}
                          </svg>
                        </a>
                      </li>
                    </Link>
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
