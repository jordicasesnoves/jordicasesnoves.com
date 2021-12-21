import { PostsList } from '..'
import SectionHeader from './components/SectionHeader'
import SectionWrapper from './components/SectionWrapper'

const PostsSection = ({ posts }): JSX.Element => {
  return (
    <SectionWrapper title="portfolio">
      <SectionHeader className="mb-4">Blog</SectionHeader>
      <PostsList posts={posts} />
    </SectionWrapper>
  )
}

export default PostsSection
