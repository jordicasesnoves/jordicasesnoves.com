import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Image from "../components/Image";

import { NewsletterSection } from "../sections/NewsletterSection";

import { ReactIcon, TailwindIcon, GraphqlIcon, AngleRightB } from "../icons";
import { Button } from "../components/Button";
import { PortfolioSection } from "../sections/PortfolioSection";
import { TechnologiesSection } from "../sections/TechnologiesSection";
import { HeroSection } from "../sections/HeroSection";

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
        ]}
        title="Home"
      />
      <HeroSection className="mb-48 mt-16" />
      <TechnologiesSection className="mb-48" />
      <PortfolioSection />
    </Layout>
  );
}

export default IndexPage;
