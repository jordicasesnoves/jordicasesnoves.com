import React from 'react'
import { Button, Container, Typography } from '..'

export const HeroSection = (
  props: React.HTMLProps<HTMLElement>
): JSX.Element => {
  const handleClick = (event, buttonName: string): void => {
    event.stopPropagation()
    window.analytics.track(`${buttonName} button clicked`)
  }

  return (
    <div className="pb-6 lg:pb-36 mt-6 lg:mt-12">
      <Container>
        <div className="flex flex-col lg:flex-row items-center relative">
          <div className="block lg:absolute top-0 bottom-0 right-0 w-full max-w-[240px] lg:max-w-none lg:w-3/6">
            <div className="relative">
              <img
                className="rounded-lg w-full h-full relative z-10"
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
              Front-end lover and design enthusiast.
            </Typography>
            <p className="mt-4 lg:mt-6 lg:max-w-md text-primary-dark">
              <Typography variant="medium-body">
                Hey, It&apos;s Jordi! Welcome to my temple. Here you will find
                my latest thoughts and also you can get in touch with me.
              </Typography>
            </p>
            <div className="mt-8 lg:mt-12">
              <Button as="a" href="mailto:jordicasesnoves@gmail.com">
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
