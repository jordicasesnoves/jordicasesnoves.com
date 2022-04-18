import React from 'react'
import {
  PortfolioSection,
  HeroSection,
  PostsSection,
  AboutSection,
  MusicSection
} from '../components/Sections'
import Head from 'next/head'
import { databaseId, getDatabase } from '../lib/notion'
import { GetStaticProps } from 'next'

function IndexPage({ posts }: any): JSX.Element {
  return (
    <>
      <Head>
        <title>Jordi Casesnoves - Front-end lover and design enthusiast</title>
        <meta
          name="description"
          content="Front-end lover and design enthusiast from Valencia, Spain."
        />
        <meta property="og:title" content="Home" />
        <meta
          property="og:description"
          content="Front-end lover and design enthusiast from Valencia, Spain."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@jordicasesnoves" />
        <meta name="twitter:title" content="Home" />
        <meta
          name="twitter:description"
          content="Front-end lover based in Valencia (Spain)"
        />
        <meta
          name="keywords"
          content="jordicasesnoves, jordi casesnoves, front-end developer, front-end, frontend, react.js, next.js, vercel, tailwindcss"
        />
      </Head>
      <div className="pt-10 lg:pt-12">
        <HeroSection />
        <PostsSection posts={posts} />
        {/* <PortfolioSection className="" /> */}
        {/* <TechnologiesSection className="my-8 py-16" /> */}
        <AboutSection />
        <MusicSection />
      </div>
    </>
  )
}

export default IndexPage

export const getStaticProps: GetStaticProps = async () => {
  const database = await getDatabase(databaseId)
  return {
    props: {
      posts: database
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1 // In seconds
  }
}
