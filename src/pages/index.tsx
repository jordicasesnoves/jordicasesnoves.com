import React from 'react'

import PortfolioSection from '../components/Sections/PortfolioSection'
import { HeroSection } from '../components/Sections/HeroSection'
import { AboutSection } from '../components/Sections/AboutSection'
import Head from 'next/head'

function IndexPage(): JSX.Element {
  return (
    <>
      <Head>
        <title>Jordi Casesnoves</title>
      </Head>
      <div className="my-2 md:my-16">
        <HeroSection />
        <PortfolioSection className="" />
        {/* <TechnologiesSection className="my-8 py-16" /> */}
        <AboutSection className="" />
      </div>
    </>
  )
}

export default IndexPage
