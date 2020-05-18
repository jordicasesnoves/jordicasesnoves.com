import { GraphqlIcon, ReactIcon, TailwindIcon } from "../icons";
import React from "react";
import { TextLink } from "../components/Link";
import getExternalLink from "../utils/getExternalLink";

export const TechnologiesSection = (props) => {
  return (
    <section id="specialized" {...props}>
      <div className="lg:text-center">
        <p className="text-base leading-6 text-secondary font-semibold tracking-wide uppercase">
          SPECIALIZED IN
        </p>
        <h3 className=" mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          My technology stack
        </h3>
        <p className="mt-4 max-w-2xl text-xl leading-7 text-secondary-text lg:mx-auto">
          These are the main technologies that I'm focused on.
        </p>
      </div>
      <div className="mt-10">
        <ul className="md:grid md:grid-cols-3 md:col-gap-20 md:row-gap-0">
          <li className="">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <ReactIcon className="w-6 h-6" />
                </div>
              </div>
              <div className="ml-4">
                <h5 className="text-lg leading-6 font-medium ">React</h5>
                <p className="mt-2 text-base leading-6 text-secondary-text">
                  This is the main JavaScript framework that I'm currently
                  using, and also the one that I dominate the most, although I
                  first learned Vue.js.
                </p>
                <p className="mt-2 text-base leading-6 text-secondary-text">
                  Rocking with{" "}
                  <TextLink href={getExternalLink("React Hooks")}>
                    React Hooks
                  </TextLink>{" "}
                  in all my React projects.
                </p>
              </div>
            </div>
          </li>
          <li className="mt-10 md:mt-0">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <GraphqlIcon className="w-6 h-6" />
                </div>
              </div>
              <div className="ml-4">
                <h5 className="text-lg leading-6 font-medium">GraphQL</h5>
                <p className="mt-2 text-base leading-6 text-secondary-text">
                  I use the Apollo's GraphQL implementations:{" "}
                  <TextLink href={getExternalLink("Apollo GraphQL")}>
                    Apollo Client
                  </TextLink>{" "}
                  for React and{" "}
                  <TextLink href={getExternalLink("Apollo GraphQL")}>
                    Apollo Server{" "}
                  </TextLink>
                  for Node.js.
                </p>
                <p className="mt-2 text-base leading-6 text-secondary-text">
                  I also use a lot of REST API's, sometimes even wrap them up
                  with Apollo Server.
                </p>
              </div>
            </div>
          </li>
          <li className="mt-10 md:mt-0">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md  bg-primary text-white">
                  <TailwindIcon className="w-6 h-6" />
                </div>
              </div>
              <div className="ml-4">
                <h5 className="text-lg leading-6 font-medium">TailwindCSS</h5>
                <p className="mt-2 text-base leading-6 text-secondary-text">
                  Thanks to the utility-first TailwindCSS 'framework', I build
                  clear and responsive interfaces for the web.
                </p>
                <p className="mt-2 text-base leading-6 text-secondary-text">
                  I always use it as a{" "}
                  <TextLink href={getExternalLink("PostCSS")}>PostCSS</TextLink>{" "}
                  plugin, so I can reduce a lot the CSS bundle size.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
