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
      <HeroSection className="pb-16 pt-8" />

      <PortfolioSection className="my-32 py-8" />
      <TechnologiesSection className="my-32 py-8" />

      <AboutSection className="py-8" />
    </Layout>
  );
}

export default IndexPage;
