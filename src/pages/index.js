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
      <HeroSection className="pb-16 pt-8" />

      <PortfolioSection className="my-24 py-8" />
      <TechnologiesSection />
    </Layout>
  );
}

export default IndexPage;
