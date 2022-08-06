import { Fragment } from 'react'
import {
  BlockRenderer,
  Container,
  PageContainer,
  Typography
} from '../../../components'
import { getBlocks, getPost, getPosts } from '../../../lib/notion'
import { NotionBlock } from '../../../models/notion'
import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next'
import SectionWrapper from '../../../components/Sections/components/SectionWrapper'
import { Post as PostType } from '../../../models/post'
import getSlug from '../../../utils/getSlug'

type PostProps = {
  post: PostType
  slug: string
  blocks: NotionBlock[]
}

const Post = ({ post, blocks, slug }: PostProps): JSX.Element => {
  if (!post || !blocks) {
    return <Container>Post not found!</Container>
  }
  const {
    title: postTitle,
    description: postDescription,
    coverUrl: postCover,
    publicationDate,
    readTime,
    categories
  } = post
  const formattedDate = new Date(publicationDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  const title = `${postTitle} - Jordi Casesnoves`

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={postTitle} />
        <meta
          property="og:description"
          content={postDescription && postDescription}
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://jordicasesnoves.com/blog/${slug}`}
        />
        <meta property="og:image" content={postCover} />
        <meta property="article:author" content="Jordi Casesnoves" />
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
        {/* End of article section */}
        <SectionWrapper className="bg-white">
          <div className="text-center">
            <Typography serif variant="h2" className="mb-3">
              Was it good? Found any typing error?
            </Typography>
            <Typography variant="medium-body">
              Send me a message on Twitter{' '}
              <a
                className="text-accent font-medium underline underline-offset-4"
                href="https://twitter.com/jordicasesnoves"
                target="_blank"
                rel="noreferrer"
              >
                @jordicasesnoves
              </a>{' '}
              for letting me know.
            </Typography>
          </div>
        </SectionWrapper>
      </article>
    </>
  )
}

export default Post

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts()
  return {
    paths: posts.map((post: PostType) => ({
      params: {
        slug: getSlug(post.title),
        postId: post.pageId
      }
    })),
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug, postId } = context.params
  const post: PostType = await getPost(postId as string)
  /* Redirect to 404 */
  if (!post) return { notFound: true }

  const blocks: NotionBlock[] = await getBlocks(postId as string)

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
      post,
      slug,
      blocks: blocksWithChildren
    },
    revalidate: 1
  }
}
