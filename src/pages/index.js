import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { PortfolioSection } from "../sections/PortfolioSection";
import { TechnologiesSection } from "../sections/TechnologiesSection";
import { HeroSection } from "../sections/HeroSection";
import { AboutSection } from "../sections/AboutSection";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[
          `jordicasesnoves`,
          `jordi casesnoves`,
          `front-end developer`,
          `front-end`,
          `frontend`,
          `react.js`,
          `gatsby.js`,
        ]}
        title="Home"
      />
      <HeroSection className="py-16" />
      <PortfolioSection className="my-8 py-32" />
      <TechnologiesSection className="my-8 py-32" />
      <AboutSection className="my-8 py-32" />
    </Layout>
  );
}

export default IndexPage;
