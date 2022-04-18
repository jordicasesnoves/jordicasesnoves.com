import { GetStaticProps } from 'next'
import Head from 'next/head'
import {
  Container,
  PageContainer,
  PostsList,
  Typography
} from '../../components'
import { databaseId, getDatabase } from '../../lib/notion'

const BlogPage = ({ posts }: any): JSX.Element => {
  return (
    <>
      <Head>
        <title>Blog - Jordi Casesnoves</title>
        <meta property="og:title" content={'Blog'} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@jordicasesnoves" />
        <meta name="twitter:title" content={'Blog'} />
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
