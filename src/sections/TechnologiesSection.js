import { GraphqlIcon, ReactIcon, TailwindIcon } from "../icons";
import React from "react";

export const TechnologiesSection = (props) => {
  return (
    <section {...props}>
      <div className="lg:text-center">
        <p className="text-base leading-6 text-green-600 font-semibold tracking-wide uppercase">
          SPECIALIZED IN
        </p>
        <h3 className=" mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          My technology stack
        </h3>
        <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-600 lg:mx-auto">
          These are the main technologies that I'm focused on.
        </p>
      </div>
      <div className="mt-10">
        <ul className="md:grid md:grid-cols-3 md:col-gap-8 md:row-gap-10">
          <li className="">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white">
                  <ReactIcon className="w-6 h-6" />
                </div>
              </div>
              <div className="ml-4">
                <h5 className="text-lg leading-6 font-medium text-gray-900">
                  React
                </h5>
                <p className="mt-2 text-base leading-6 text-gray-600">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </p>
              </div>
            </div>
          </li>
          <li className="mt-10 md:mt-0">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white">
                  <GraphqlIcon className="w-6 h-6" />
                </div>
              </div>
              <div className="ml-4">
                <h5 className="text-lg leading-6 font-medium text-gray-900">
                  GraphQL
                </h5>
                <p className="mt-2 text-base leading-6 text-gray-600">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </p>
              </div>
            </div>
          </li>
          <li className="mt-10 md:mt-0">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white">
                  <TailwindIcon className="w-6 h-6" />
                </div>
              </div>
              <div className="ml-4">
                <h5 className="text-lg leading-6 font-medium text-gray-900">
                  TailwindCSS
                </h5>
                <p className="mt-2 text-base leading-6 text-gray-600">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
