import React from "react";

const Form = ({ heading, action }) => {
  return (
    <div>
      <div className="mb-4">
        <p className="lg:text-lg text-base ">
          {heading === "Intership" && "Apply for Internship"}
          {heading === "Graduate" && "Apply as a Graduate"}
        </p>
      </div>

      <form action={action} method="POST" class="space-y-8">
        <div>
          <label
            for="subject"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="FullName"
            class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="Your Full Name"
            required
          />
        </div>
        <div>
          <label
            for="Email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your Email
          </label>

          <input
            type="email"
            id="email"
            name="Email"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="Your Email"
            required
          />
        </div>
        <div class="sm:col-span-2 mb-3">
          <label
            for="file_input"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            CV
          </label>
          <input
            class="block w-full rounded-lg  file:rounded-l-lg file:border-none file:p-2.5  file:bg-primary file:text-white file-border-none text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="file_input"
            type="file"
          />
        </div>
        <button
          type="submit"
          class="py-3  px-5 text-sm font-medium text-center text-white rounded-lg bg-primary sm:w-fit hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary"
        >
          Apply
        </button>
      </form>
    </div>
  );
};
export default Form;
