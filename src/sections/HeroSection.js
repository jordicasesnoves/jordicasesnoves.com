import React from "react";
import { Button } from "../components/Button";
import Image from "../components/Image";
import { Container } from "../components/Container";

export const HeroSection = (props) => {
  const handleClick = (event, buttonName) => {
    event.stopPropagation();
    window.analytics.track(`${buttonName} button clicked`);
  };
  return (
    <section {...props}>
      <Container>
        <div className="relative text-center flex lg:flex-row flex-col-reverse justify-between items-center z-10">
          <div className="text-left lg:mr-24 w-full mx-auto">
            <h2 className="mb-1 mt-4 lg:mt-0 lg:text-6xl text-4xl font-bold ">
              Hola.
            </h2>

            <p className="fadeIn leading-loose text-xl text-md lg:mb-10 mb-5">
              My name is Jordi. I'm a <strong>front-end developer</strong> based
              in Valencia (Spain). My goal is to provide{" "}
              <strong>user-centered web solutions</strong>.
            </p>
            <div className="flex lg:flex-row flex-col items-center lg:items-start">
              <Button
                onClick={(e) => handleClick(e, "Check My Work")}
                href="#portfolio"
                size="lg"
                icon="AngleRightBIcon"
                className="lg:mr-4 mb-3 justify-center inline-flex w-full lg:w-auto"
              >
                Check My Work
              </Button>
              <Button
                onClick={(e) => handleClick(e, "Contact Me")}
                href={"mailto:jordicasesnoves@gmail.com"}
                size="lg"
                color="secondary"
                icon="MessageIcon"
                className="justify-center inline-flex w-full lg:w-auto"
              >
                <span>Contact Me</span>
              </Button>
            </div>
          </div>
          <div className="mx-auto w-64 lg:w-full max-w-sm">
            <Image className="rounded-full shadow-xl" imageName="jordi.png" />
          </div>
        </div>
      </Container>
    </section>
  );
};
