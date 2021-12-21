import React from 'react'
import Button from '../Button/Button'
import TextLink from '../Link/Link'
import getExternalLink from '../../utils/getExternalLink'
import { MessageIcon } from '../../icons'
import SectionWrapper from './components/SectionWrapper'
import SectionHeader from './components/SectionHeader'

export const AboutSection = (props: any): JSX.Element => {
  const handleClick = (event, buttonName): void => {
    event
      .stopPropagation()(window as any)
      .analytics.track(`${buttonName} button clicked`)
  }
  return (
    <SectionWrapper title="about">
      <SectionHeader>About Me</SectionHeader>
      <div className="space-y-4">
        <div className="text-lg leading-8 text-gray-500">
          <p>
            I am front-end developer based in Valencia (Spain). I have always
            been a self-taught learning person; that is how I learnt front-end.
            Currently working at{' '}
            <TextLink href={getExternalLink('Capgemini')}>Capgemini</TextLink>.
          </p>
          <p className="mt-4">
            Interested in the logical part of the web, and also its visual side.
            Although I mainly do front-end, I love UX/UI and that's why I've
            studied the basics. My main focus is to provide user-centered
            solutions, always meeting the client needs, and allowing their apps
            to scale.
          </p>
          <p className="mt-4">
            Aside from tech, some of my hobbies are travelling around the world,
            dancing, reading and meditating.
          </p>
        </div>
        <Button
          onClick={(e): void => handleClick(e, 'Contact Me')}
          href={'mailto:jordicasesnoves@gmail.com'}
          className="w-full md:w-auto"
          size="lg"
          icon={MessageIcon}
        >
          Contact Me
        </Button>
      </div>
    </SectionWrapper>
  )
}
