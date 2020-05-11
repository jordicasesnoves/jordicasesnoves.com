import React from "react";
import { Button } from "./Button";

export const NewsletterSection = (props) => {
  return (
    <section className="w-full bg-gray-100">
      <div className="max-w-screen-xl mx-auto py-6 px-4 sm:px-6 lg:py-12 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <div>
          <h2 className="text-3xl leading-9 font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Subscribe to the newsletter.
          </h2>
          <span className="mt-6 text-green-600">
            Front-end news, tech, and much more...
          </span>
        </div>

        <div className="max-w-lg xl:ml-64 lg:ml-16 md:ml-0 mt-8 flex flex-col lg:flex-shrink-0 lg:mt-0 flex-1 lg:justify-end">
          <div className="flex-1 flex">
            <div className="inline-flex flex-1 rounded-md shadow mr-3">
              <input
                placeholder="Insert your email"
                className="inline-flex w-full flex-1  items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md bg-white focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
              />
            </div>
            <div className="inline-flex  rounded-md shadow">
              <Button href="https://jordicasesnoves.com">Notify Me</Button>
            </div>
          </div>
          <div className="mt-3 text-gray-600">
            You can check the Privacy Policy.
          </div>
        </div>
      </div>
    </section>
  );
};
