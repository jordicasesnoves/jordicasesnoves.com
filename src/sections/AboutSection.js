import React from "react";
import { Button } from "../components/Button";
import { TextLink } from "../components/Link";
import Image from "../components/Image";
import getExternalLink from "../utils/getExternalLink";
import { Container } from "../components/Container";

export const AboutSection = (props) => {
  const handleClick = (event, buttonName) => {
    event.stopPropagation();
    window.analytics.track(`${buttonName} button clicked`);
  };
  return (
    <section id="about" {...props}>
      <Container>
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
                    always been a self-taught learning person; that's how I
                    learnt front-end.
                  </p>
                  <p className="mt-4">
                    Currently working at{" "}
                    <TextLink href={getExternalLink("Dedalus")}>
                      Dedalus
                    </TextLink>
                    , a healthcare-tech company.
                  </p>
                  <p className="mt-4">
                    Interested in the logical part of the web, and also its
                    visual side. Although I mainly do front-end, I love UX/UI
                    and that's why I've studied the basics. My main focus is to
                    provide user-centered solutions, always meeting the client
                    needs, and allowing their apps to scale.
                  </p>
                  <p className="mt-4">
                    Aside from tech, some of my hobbies are travelling around
                    the world, dancing, reading and meditating.
                  </p>
                </div>
              </div>
              <Button
                onClick={(e) => handleClick(e, "Contact Me")}
                href={"mailto:jordicasesnoves@gmail.com"}
                className="mt-8 justify-center inline-flex w-full md:w-auto"
                size="lg"
                icon="MessageIcon"
              >
                <span>Contact Me</span>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
