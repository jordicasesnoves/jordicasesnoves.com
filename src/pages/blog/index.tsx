import { GetStaticProps } from 'next'
import {
  Container,
  PageContainer,
  PostsList,
  Typography
} from '../../components'
import { databaseId, getDatabase } from '../../lib/notion'

const BlogPage = ({ posts }: any): JSX.Element => {
  return (
    <PageContainer>
      <Container>
        <Typography serif variant="h2" className="mb-12">
          My thoughts
        </Typography>
        <PostsList posts={posts} />
      </Container>
    </PageContainer>
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
