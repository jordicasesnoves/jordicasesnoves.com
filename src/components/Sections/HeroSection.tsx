import React from 'react'
import Button from '../Button/Button'
import { AngleRightBIcon, MessageIcon, WavingHandIcon } from '../../icons'
import SectionWrapper from './SectionWrapper'
import SectionHeader from './components/SectionHeader'

export const HeroSection = (
  props: React.HTMLProps<HTMLElement>
): JSX.Element => {
  const handleClick = (event, buttonName: string): void => {
    event.stopPropagation()
    window.analytics.track(`${buttonName} button clicked`)
  }

  return (
    <SectionWrapper title="Hola!" {...props}>
      <div className="flex items-center space-x-24">
        <div>
          <SectionHeader>Hola!</SectionHeader>
          <h2 className="text-left text-lg leading-loose text-gray-600 mb-6">
            My name is Jordi. I'm a <strong>front-end developer</strong> based
            in Valencia (Spain). My goal is to provide{' '}
            <strong>user-centered web solutions</strong>.
          </h2>
          <div className="flex lg:flex-row flex-col items-center lg:items-start">
            <Button
              onClick={(e): void => handleClick(e, 'Check My Work')}
              href="#portfolio"
              size="lg"
              icon={AngleRightBIcon}
              className="lg:mr-4 mb-3 justify-center inline-flex w-full lg:w-auto"
            >
              Check My Work
            </Button>
            <Button
              onClick={(e): void => handleClick(e, 'Contact Me')}
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
        <div className="mx-auto hidden md:block w-full max-w-sm">
          <img
            alt="jordi's face"
            className="rounded-full shadow-xl"
            src="/jordi.png"
          />
        </div>
      </div>
    </SectionWrapper>
  )
}
