import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Image from "../components/Image";

import { NewsletterSection } from "../components/newsletter";

import { ReactIcon, TailwindIcon, GraphqlIcon, AngleRightB } from "../icons";
import { Button } from "../components/Button";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[
          `jordicasesnoves`,
          `jordi casesnoves`,
          `front-end developer`,
          `front-end`,
          `frontend`,
        ]}
        title="Home"
      />

      <section className="relative text-center flex lg:flex-row flex-col-reverse justify-between items-center z-10">
        <div className="lg:text-left lg:mr-24 w-full mx-auto">
          <h2 className="mb-1 mt-4 lg:mt-0 lg:text-6xl text-4xl font-bold ">
            Jordi <br /> Casesnoves.
          </h2>

          <p className="text-gray-600 fadeIn leading-loose lg:text-xl text-md lg:mb-10 mb-5">
            Hi, my name is Jordi. I'm a <strong>front-end developer</strong>{" "}
            based in Valencia (Spain). My goal is to provide user-centered web
            solutions.
          </p>
          <div className="flex lg:flex-row flex-col items-center lg:items-start">
            <Button size="lg" icon="AngleRightBIcon" className="lg:mr-4 mb-3">
              Check My Work
            </Button>
            <Button size="lg" color="secondary" icon="MessageIcon">
              <span>Contact Me</span>
            </Button>
          </div>
        </div>
        <div className="mx-auto w-64 lg:w-full max-w-sm">
          <Image className="rounded-full shadow-xl" imageName="jordi.png" />
        </div>
      </section>

      <section className="lg:my-48 my-24">
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
    </Layout>
  );
}

export default IndexPage;
