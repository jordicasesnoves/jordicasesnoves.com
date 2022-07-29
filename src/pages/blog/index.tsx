import { GetStaticProps } from 'next'
import Head from 'next/head'
import {
  Container,
  PageContainer,
  PostsList,
  Typography
} from '../../components'
import { getPosts } from '../../lib/notion'

type Props = {
  posts: any
}

const BlogPage = ({ posts }: Props): JSX.Element => {
  return (
    <>
      <Head>
        <title>Blog - Jordi Casesnoves</title>
        <meta property="og:title" content={'Blog'} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@jordicasesnoves" />
        <meta name="twitter:title" content={'Blog - Jordi Casesnoves'} />
      </Head>
      <PageContainer>
        <Container>
          <Typography serif variant="h2" className="mb-12">
            My thoughts
          </Typography>
          <PostsList posts={posts} />
        </Container>
      </PageContainer>
    </>
  )
}

export default BlogPage

export const getStaticProps: GetStaticProps = async () => {
  const database = await getPosts()
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
