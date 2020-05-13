import React from "react";
import { Button } from "../components/Button";
import { GithubIcon, GraphqlIcon, ReactIcon, TailwindIcon } from "../icons";
//import "../css/portfolio.css";
import { Icon } from "../components/Icon";
import projectsJSON from "../../content/projects.json";
import { TextLink } from "../components/Link";
import Image from "../components/Image";

export const AboutSection = (props) => {
  return (
    <section id="about" {...props}>
      <div className="mt-10">
        <div className="md:flex">
          <Image
            style={{ maxHeight: "600px" }}
            className="rounded-md shadow-xl flex-1 w-full h-64 md:h-full"
            imageName="me.jpg"
          />

          <div className="mt-4 flex-1 flex-col flex items-start justify-between md:ml-8 md:mt-0 lg:mt-0">
            <div>
              <p className="text-base leading-6 text-secondary font-semibold tracking-wide uppercase">
                ABOUT ME
              </p>
              <h3 className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                Who I am
              </h3>
              <div className="mt-4 max-w-2xl text-lg leading-8 text-secondary-text lg:mx-auto">
                <p>
                  {" "}
                  I am front-end developer based in Valencia (Spain). I've
                  always been a self-taught learning person; that's how I learnt
                  front-end. Currently working at{" "}
                  <TextLink href="https://dedalusgs.com">Dedalus</TextLink>, a
                  healthcare-tech company.
                </p>
                <p className="mt-4">
                  Interested in the logical part of the web, and also its visual
                  side. My main focus is to provide user-centered solutions,
                  always meeting the client needs, and allowing their apps to
                  scale.
                </p>
                <p className="mt-4">
                  Aside from tech, some of my hobbies are travelling around the
                  world, dancing, reading and meditating.
                </p>
              </div>
            </div>
            <GithubIcon className="w-8 text-secondary" />
            <Button className="mt-8 " size="lg" icon="MessageIcon">
              <span>Contact Me</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
