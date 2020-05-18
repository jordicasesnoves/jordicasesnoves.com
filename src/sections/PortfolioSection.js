import React from "react";
import { Button } from "../components/Button";
import projectsJSON from "../../content/projects.json";
import { TextLink } from "../components/Link";
import getExternalLink from "../utils/getExternalLink";

export const PortfolioSection = (props) => {
  return (
    <section id="portfolio" {...props}>
      <div className="lg:text-center">
        <p className="text-base leading-6 text-secondary font-semibold tracking-wide uppercase">
          PORTFOLIO
        </p>
        <h3 className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          My Projects
        </h3>
        <p className="mt-4 max-w-2xl text-xl leading-7 text-secondary-text lg:mx-auto">
          Last projects that I am working or have been working on.
        </p>
      </div>
      <div className="mt-10">
        <ul className="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
          {projectsJSON.map((project, index) => {
            return (
              <li key={`${project}-${index + 1}`} className="mb-3 md:mb-0 ">
                <div
                  className={`flex flex-col project${
                    index + 1
                  } py-3 justify-between border rounded-lg border-gray-200 shadow-xl  items-start`}
                >
                  <div className="flex-1 ">
                    <div className="border-b border-gray-200 px-6 py-3">
                      <div className="text-sm tracking-widest text-secondary-text">
                        {project.type.toUpperCase()} PROJECT
                      </div>
                      <div className="text-3xl font-bold mt-0 text-main-text">
                        {project.title}
                      </div>
                    </div>
                    <div className="px-6 mt-4 text-secondary-text">
                      <p>{project.description}</p>
                      <p className="italic">
                        Technologies:{" "}
                        {project.technologies.map((tech, index, arr) => {
                          return (
                            <span key={`${project.title}-${tech}`}>
                              <TextLink
                                href={getExternalLink(tech)}
                                className="cursor-pointer"
                              >
                                {tech}
                              </TextLink>
                              {index + 1 !== arr.length ? ", " : "."}
                            </span>
                          );
                        })}
                      </p>
                    </div>
                  </div>

                  <div className="w-full justify-end flex flex-wrap md:flex-no-wrap mt-6 md:px-0 px-6">
                    {project.github && (
                      <Button
                        href={project.github}
                        color="secondary"
                        icon="GithubIcon"
                        className="md:mr-3 mb-3 md:mb-0 justify-center inline-flex w-full md:w-auto"
                      >
                        View Code
                      </Button>
                    )}

                    {project.demo && (
                      <Button
                        href={project.demo}
                        icon="AngleRightBIcon"
                        className="md:mr-3 mb-3 md:mb-0 justify-center inline-flex w-full md:w-auto"
                      >
                        Live Demo
                      </Button>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

{
  /*<div className="inline-flex items-center  w-full mt-3">
                <div className="flex flex-col items-center mr-4">
                  <Icon icon="ReactIcon" className="w-10 h-10"/>
                  <span className="text-xs mt-1">
                    <i>React</i>
                  </span>
                </div>
                <div className="flex flex-col items-center mr-4">
                  <Icon icon="ApolloIcon" className="w-10 h-10"/>
                  <span className="text-xs mt-1">
                    {" "}
                    <i>Apollo</i>
                  </span>
                </div>

                <div className="flex flex-col items-center mr-4">
                  <Icon icon="GraphqlIcon" className="w-10 h-10"/>
                  <span className="text-xs mt-1">
                    {" "}
                    <i>GraphQL</i>
                  </span>
                </div>
                <div className="flex flex-col items-center mr-4">
                  <Icon icon="JwtIcon" className="w-10 h-10"/>
                  <span className="text-xs mt-1">
                    {" "}
                    <i>JWT</i>
                  </span>
                </div>
              </div>*/
}
