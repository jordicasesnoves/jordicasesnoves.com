import React from 'react'
import Button from '../Button/Button'
import { AngleRightBIcon, MessageIcon, WavingHandIcon } from '../../icons'
import SectionWrapper from './components/SectionWrapper'
import SectionHeader from './components/SectionHeader'
import { Container } from '..'

export const HeroSection = (
  props: React.HTMLProps<HTMLElement>
): JSX.Element => {
  const handleClick = (event, buttonName: string): void => {
    event.stopPropagation()
    window.analytics.track(`${buttonName} button clicked`)
  }

  return (
    <section className="py-8" {...props}>
      <Container>
        <div className="flex items-center relative">
          <div className="absolute top-0 bottom-0 right-0 w-3/6">
            <div>
              <img
                className="rounded w-full h-full relative z-10"
                src="/jordi.png"
                alt="Jordi Casesnoves"
              />
              <img
                alt="decorative dots z-0"
                src="/pattern1.svg"
                className="w-16 h-auto absolute -right-10 -top-8"
              />
            </div>
          </div>
          <div className="py-6 z-10 max-w-2xl">
            <h1 className="text-6xl text-primary-dark font-serif font-light leading-tight">
              Front-end developer and also a design <br /> enthusiast.
            </h1>
            <h2 className="text-xl max-w-md text-primary-dark font-light mt-6">
              Hey, It&apos;s Jordi! Welcome to my temple. Here you will find my
              latest thoughts and also you can get in touch with me.
            </h2>
            <button className="mt-12 bg-primary-dark hover:bg-white transition-colors duration-200 hover:text-primary-dark text-primary-light rounded-full tracking-wide px-12 py-5">
              Contact Me
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}
