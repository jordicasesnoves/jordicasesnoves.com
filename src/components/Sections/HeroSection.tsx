import React from 'react'
import { Typography } from '..'
import SectionWrapper from './components/SectionWrapper'

export const HeroSection = (
  props: React.HTMLProps<HTMLElement>
): JSX.Element => {
  const handleClick = (event, buttonName: string): void => {
    event.stopPropagation()
    window.analytics.track(`${buttonName} button clicked`)
  }

  return (
    <SectionWrapper title="hero" className="pt-16">
      <div className="flex flex-col lg:flex-row items-center relative">
        <div className="block lg:absolute top-0 bottom-0 right-0 w-full max-w-[240px] lg:max-w-none lg:w-3/6">
          <div className="relative">
            <img
              className="rounded w-full h-full relative z-10"
              src="/jordi.png"
              alt="Jordi Casesnoves"
            />
            <img
              alt="decorative dots z-0"
              src="/pattern1.svg"
              className="w-12 lg:w-16 h-auto absolute -right-4 md:-right-6 lg:-right-8 -top-6 lg:-top-8"
            />
          </div>
        </div>
        <div className="py-6 z-10 lg:max-w-2xl text-center lg:text-left">
          <Typography variant="h1" serif>
            Front-end developer and also a design enthusiast.
          </Typography>
          <p className="mt-4 lg:mt-6 max-w-md text-primary-dark">
            <Typography variant="medium-body">
              Hey, It&apos;s Jordi! Welcome to my temple. Here you will find my
              latest thoughts and also you can get in touch with me.
            </Typography>
          </p>
          <button
            className="mt-8 lg:mt-12 
          bg-primary-dark hover:bg-white font-medium transition-all duration-200 hover:text-primary-dark text-primary-light 
          rounded-full tracking-wide px-12 py-5"
          >
            Contact Me
          </button>
        </div>
      </div>
    </SectionWrapper>
  )
}
