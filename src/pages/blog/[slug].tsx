import { Fragment } from 'react'
import {
  BlockRenderer,
  Container,
  PageContainer,
  Text,
  Typography
} from '../../components'
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
  const postTitle = page.properties.name.title[0].plain_text
  const postCover = page.cover?.external?.url
  const publicationDate = page.properties.publication_date?.date?.start
  const readTime = page.properties?.read_time.number
  const categories = Object.values(page.properties.categories.multi_select)
  const formattedDate = new Date(publicationDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  const slug = slugify(postTitle).toLowerCase()

  return (
    <>
      <Head>
        <title>{postTitle} - Jordi Casesnoves</title>
        <meta property="og:title" content={postTitle} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://jordicasesnoves.com/blog/${slug}`}
        />
        <meta property="og:image" content={postCover} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@jordicasesnoves" />
        <meta name="twitter:title" content={postTitle} />
        <meta name="twitter:image" content={postCover} />
      </Head>
      <article>
        <PageContainer>
          <Container>
            <div className="text-center space-y-3 mb-12">
              <ul className="flex text-center items-center justify-center">
                {categories.map((category, index) => (
                  <li style={{ letterSpacing: '0.2rem' }} key={category.id}>
                    <Typography uppercase variant="medium-body">
                      {category.name}
                    </Typography>
                    {/* add a coma */}
                    {index !== categories.length - 1 && (
                      <span className="text-primary-dark pr-2">,</span>
                    )}
                  </li>
                ))}
              </ul>
              <Typography variant="h1" serif>
                {postTitle}
              </Typography>
              <div>
                <Typography
                  variant="medium-body"
                  className="text-primary-medium"
                >
                  {formattedDate} · {readTime} min read
                </Typography>
              </div>
            </div>
            <img
              alt="post cover"
              className=" max-h-[460px] w-full object-cover mb-24"
              src={postCover}
            />
            <section className="space-y-8 lg:space-y-12 max-w-3xl mx-auto">
              {blocks.map((block) => (
                <Fragment key={block.id}>
                  <BlockRenderer {...block} />
                </Fragment>
              ))}
            </section>
          </Container>
        </PageContainer>
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
