import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import dogIllustration from "../images/dog-illustration.svg";
import { Button } from "../components/Button";

function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />

      <section className="flex text-center justify-center items-end md:flex-row">
        <Button size="sm" color="red" className="mx-2">
          Contact Me
        </Button>
        <Button icon="CrossIcon" size="md" className="mx-2">
          Contact Me
        </Button>
        <Button icon="CrossIcon" size="lg" className="mx-2">
          Contact Me
        </Button>
      </section>
    </Layout>
  );
}

export default AboutPage;
