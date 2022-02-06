import React from 'react'
import SectionWrapper from './components/SectionWrapper'
import { Typography } from '..'

export const AboutSection = (props: any): JSX.Element => {
  const handleClick = (event, buttonName): void => {
    event
      .stopPropagation()(window as any)
      .analytics.track(`${buttonName} button clicked`)
  }
  return (
    <>
      <SectionWrapper title="about">
        <Typography variant="h2" serif className="text-primary-dark mb-12">
          About myself
        </Typography>
        <div className="flex">
          <div className="space-y-4 text-primary-dark">
            <p>
              <Typography variant="small-body">
                Currently working at Capgemini as a <i> front-end</i> developer.
                Based in Valencia (Spain). I've always been a self-taught
                learning person; that's how I learnt front-end.
              </Typography>
            </p>
            <p>
              <Typography variant="small-body">
                Interested in the logical part of the web, and also its visual
                side. Although I mainly do front-end, I love UX/UI and that's
                why I've studied the basics. My main focus is to provide
                user-centered solutions, always meeting the client needs, and
                allowing their apps to scale.
              </Typography>
            </p>
            <p>
              <Typography variant="small-body">
                Aside from tech, some of my hobbies are travelling around the
                world, dancing, reading and meditating.
              </Typography>
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-white">
        <div className="text-center">
          <Typography serif variant="h2" className="mb-3">
            Want to get in touch?
          </Typography>
          <Typography variant="medium-body">
            Email{' '}
            <a
              className="text-accent font-medium underline underline-offset-4"
              href="mailto:jordicasesnoves@gmail.com"
            >
              jordicasesnoves@gmail.com
            </a>
          </Typography>
        </div>
      </SectionWrapper>
    </>
  )
}
