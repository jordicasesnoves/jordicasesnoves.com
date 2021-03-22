import React from 'react'

import Layout from '../components/Layout'
import { PortfolioSection } from '../sections/PortfolioSection'
import { TechnologiesSection } from '../sections/TechnologiesSection'
import { HeroSection } from '../sections/HeroSection'
import { AboutSection } from '../sections/AboutSection'

function IndexPage(): JSX.Element {
  return (
    <Layout>
      <HeroSection />
      <PortfolioSection className="py-16" />
      <TechnologiesSection className="my-8 py-16" />
      <AboutSection className="my-8 py-16" />
    </Layout>
  )
}

export default IndexPage
