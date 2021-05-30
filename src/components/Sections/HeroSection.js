import React from 'react'
import Button from '../Button/Button'
import Container from '../Container/Container'
import { AngleRightBIcon, MessageIcon, WavingHandIcon } from '../../icons'

export const HeroSection = (props) => {
  const handleClick = (event, buttonName) => {
    event.stopPropagation()
    window.analytics.track(`${buttonName} button clicked`)
  }
  return (
    <section {...props}>
      <Container>
        <div className="relative text-center flex lg:flex-row flex-col-reverse justify-between items-center z-10">
          <div className="text-left lg:mr-24 w-full mx-auto flex flex-col space-y-6">
            <div className="flex items-center justify-start">
              <WavingHandIcon className="w-24 h-24 mr-4 -ml-4" />
              <h2 className="mt-4 lg:mt-0 lg:text-7xl text-6xl font-bold ">
                Hola!
              </h2>
            </div>

            <p className="fadeIn leading-loose text-xl text-md">
              My name is Jordi. I'm a <strong>front-end developer</strong> based
              in Valencia (Spain). My goal is to provide{' '}
              <strong>user-centered web solutions</strong>.
            </p>
            <div className="flex lg:flex-row flex-col items-center lg:items-start">
              <Button
                onClick={(e) => handleClick(e, 'Check My Work')}
                href="#portfolio"
                size="lg"
                icon={AngleRightBIcon}
                className="lg:mr-4 mb-3 justify-center inline-flex w-full lg:w-auto"
              >
                Check My Work
              </Button>
              <Button
                onClick={(e) => handleClick(e, 'Contact Me')}
                href={'mailto:jordicasesnoves@gmail.com'}
                size="lg"
                color="secondary"
                icon={MessageIcon}
                className="justify-center inline-flex w-full lg:w-auto"
              >
                <span>Contact Me</span>
              </Button>
            </div>
          </div>
          <div className="mx-auto w-64 lg:w-full max-w-sm">
            <img className="rounded-full shadow-xl" src="/jordi.png" />
          </div>
        </div>
      </Container>
    </section>
  )
}
