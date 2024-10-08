import React from 'react'
import {
  PortfolioSection,
  HeroSection,
  PostsSection,
  AboutSection,
  MusicSection
} from '../components/Sections'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import { getPosts } from '../lib/notion'

type Props = {
  posts: any
}

function IndexPage({ posts }: Props): JSX.Element {
  return (
    <>
      <Head>
        <title>Jordi Casesnoves - Front-end lover and design enthusiast</title>
        <meta
          name="description"
          content="Front-end lover and design enthusiast from Valencia, Spain."
        />
        <meta
          property="og:title"
          content="Jordi Casesnoves - Front-end lover and design enthusiast"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://jordicasesnoves.com`} />
        <meta
          property="og:description"
          content="Front-end lover and design enthusiast from Valencia, Spain."
        />
        <meta
          property="og:image"
          content={'https://jordicasesnoves.com/jordi.png'}
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@jordicasesnoves" />
        <meta
          name="twitter:title"
          content="Jordi Casesnoves - Front-end lover and design enthusiast"
        />
        <meta
          name="twitter:description"
          content="Front-end lover based in Valencia (Spain)"
        />
        <meta
          name="twitter:image"
          content={'https://jordicasesnoves.com/jordi.png'}
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
  const posts = await getPosts()

  return {
    props: {
      posts
    }
  }
}
