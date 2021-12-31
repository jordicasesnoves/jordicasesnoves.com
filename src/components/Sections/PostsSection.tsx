import { PostsList, Typography } from '..'
import SectionWrapper from './components/SectionWrapper'

const PostsSection = ({ posts }): JSX.Element => {
  return (
    <SectionWrapper title="blog" className="bg-secondary-light">
      <Typography variant="h2" serif className="text-primary-dark mb-12">
        Latest publications
      </Typography>
      <PostsList posts={posts} />
    </SectionWrapper>
  )
}

export default PostsSection
