import { Fragment } from 'react'
import { BlockRenderer, Container, Text } from '../../components'
import { databaseId, getBlocks, getDatabase } from '../../lib/notion'
import { NotionPage, NotionBlock } from '../../models/notion'
import slugify from 'slugify'
import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next'

type PostProps = {
  page: NotionPage
  blocks: NotionBlock[]
}

const Post = ({ page, blocks }: PostProps): JSX.Element => {
  if (!page || !blocks) {
    return <Container>Post not found!</Container>
  }
  return (
    <>
      <Head>
        <title>
          {page.properties.name.title[0].plain_text} - Jordi Casesnoves
        </title>
      </Head>
      <article>
        <Container>
          <h1 className="text-5xl font-bold">
            <Text text={page.properties.name.title} />
          </h1>
          <section className="space-y-8">
            {blocks.map((block) => (
              <Fragment key={block.id}>
                <BlockRenderer {...block} />
              </Fragment>
            ))}
          </section>
        </Container>
      </article>
    </>
  )
}

export default Post

export const getStaticPaths: GetStaticPaths = async () => {
  const database = await getDatabase(databaseId)
  return {
    paths: database.map((page: NotionPage) => ({
      params: {
        slug: slugify(page.properties.name.title[0].plain_text).toLowerCase()
      }
    })),
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params
  const database = await getDatabase(databaseId)
  const page: NotionPage = database.find(
    (page) =>
      slugify(page.properties.name.title[0].plain_text).toLowerCase() === slug
  )
  const blocks: NotionBlock[] = await getBlocks(page.id)

  // Retrieve block children for nested blocks (one level deep), for example toggle blocks
  // https://developers.notion.com/docs/working-with-page-content#reading-nested-blocks
  const childBlocks = await Promise.all(
    blocks
      .filter((block) => block.has_children)
      .map(async (block) => {
        return {
          id: block.id,
          children: await getBlocks(block.id)
        }
      })
  )
  const blocksWithChildren = blocks.map((block: NotionBlock) => {
    // Add child blocks if the block should contain children but none exists
    if (block.has_children && !block[block.type].children) {
      block[block.type]['children'] = childBlocks.find(
        (x: NotionBlock) => x.id === block.id
      )?.children
    }
    return block
  })

  return {
    props: {
      page,
      blocks: blocksWithChildren
    },
    revalidate: 1
  }
}
