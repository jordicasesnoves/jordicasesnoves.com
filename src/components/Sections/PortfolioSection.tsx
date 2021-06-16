import React from 'react'
import Button from '../Button/Button'
import { Projects } from '../../../content/Projects'
import TextLink from '../Link/Link'
import getExternalLink from '../../utils/getExternalLink'
import SectionWrapper from './SectionWrapper'
import { AngleRightBIcon, GithubIcon } from '../../icons'
import SectionHeader from './components/SectionHeader'

const PortfolioSection = (props: any): JSX.Element => {
  const handleClick = (event, buttonName): void => {
    event.stopPropagation()
    window.analytics.track(`${buttonName} button clicked`)
  }
  return (
    <SectionWrapper title="My Projects">
      <div className="mt-10">
        <SectionHeader>My Projects</SectionHeader>
        <ul className="md:grid md:grid-cols-2 md:gap-8">
          {Projects.map((project, index) => {
            return (
              <li key={`${project}-${index + 1}`} className="mb-3 md:mb-0 ">
                <div
                  className={`flex flex-col project${
                    index + 1
                  } py-3 justify-between border rounded-lg border-gray-200 shadow-xl space-y-4 items-start`}
                >
                  <div className="flex-1 space-y-4 py-2">
                    <div className=" border-gray-200 px-6">
                      <div className="text-sm tracking-widest text-gray-400">
                        {project.type.toUpperCase()} PROJECT
                      </div>
                      <div className="text-3xl font-bold mt-0 text-main-text">
                        {project.title}
                      </div>
                    </div>
                    <div className="px-6 text-secondary-text">
                      <p>{project.description}</p>
                      <p className="italic">
                        Technologies:{' '}
                        {project.technologies.map((tech, index, arr) => {
                          return (
                            <span key={`${project.title}-${tech}`}>
                              <TextLink
                                href={getExternalLink(tech)}
                                className="cursor-pointer"
                              >
                                {tech}
                              </TextLink>
                              {index + 1 !== arr.length ? ', ' : '.'}
                            </span>
                          )
                        })}
                      </p>
                    </div>
                  </div>

                  <div className="w-full justify-end flex flex-wrap md:flex-no-wrap md:px-0 px-6">
                    {project.github && (
                      <Button
                        onClick={(e): void => handleClick(e, 'View Code')}
                        target="_blank"
                        href={project.github}
                        color="secondary"
                        icon={GithubIcon}
                        className="md:mr-3 mb-3 md:mb-0 justify-center inline-flex w-full md:w-auto"
                      >
                        View Code
                      </Button>
                    )}

                    {project.demo && (
                      <Button
                        target="_blank"
                        onClick={(e): void => handleClick(e, 'Live Demo')}
                        href={project.demo}
                        icon={AngleRightBIcon}
                        className="md:mr-3 mb-3 md:mb-0 justify-center inline-flex w-full md:w-auto"
                      >
                        Live Demo
                      </Button>
                    )}
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </SectionWrapper>
  )
}

export default PortfolioSection
