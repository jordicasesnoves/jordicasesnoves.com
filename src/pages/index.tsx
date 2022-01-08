import React from 'react'
import {
  PortfolioSection,
  HeroSection,
  PostsSection,
  AboutSection
} from '../components/Sections'
import Head from 'next/head'
import { databaseId, getDatabase } from '../lib/notion'
import { GetStaticProps } from 'next'

function IndexPage({ posts }: any): JSX.Element {
  return (
    <>
      <Head>
        <title>Jordi Casesnoves</title>
      </Head>
      <div className="pt-10 lg:pt-12">
        <HeroSection />
        <PostsSection posts={posts} />
        {/* <PortfolioSection className="" /> */}
        {/* <TechnologiesSection className="my-8 py-16" /> */}
        <AboutSection className="" />
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
