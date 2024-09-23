import React from 'react'
import SectionWrapper from './components/SectionWrapper'
import { Button, Typography } from '..'
import Link from 'next/link'

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
        <div className="flex flex-col mb-16">
          <div className="space-y-4 text-primary-dark">
            <p>
              <Typography variant="medium-body">
                In the last years, I've been developing myself as a{' '}
                <b>software engineer</b> with basic UX/UI knowledge. I
                specialize in front-end. Interested in the web's logical part
                and its visual side. Although I mainly do front-end, I love
                UX/UI, so I've studied the basics. I love collaborating with the
                design teams: Integrating Figma screens, coding UI components
                from scratch, and discussing different solutions. Born and
                raised in Spain. Aside from tech, some of my hobbies are
                traveling, movies, reading, and meditating.
              </Typography>
            </p>
          </div>
        </div>
        <div>
          <Link passHref href="https://www.linkedin.com/in/jordicasesnoves/">
            <Button target="_blank" as="a">
              Check out my CV
            </Button>
          </Link>
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
