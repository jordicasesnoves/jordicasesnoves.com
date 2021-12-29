import { PostsList } from '..'
import SectionHeader from './components/SectionHeader'
import SectionWrapper from './components/SectionWrapper'

const PostsSection = ({ posts }): JSX.Element => {
  return (
    <SectionWrapper title="portfolio" className="bg-secondary-light py-24">
      <SectionHeader className="mb-4 font-serif">
        Latest publications
      </SectionHeader>
      <PostsList posts={posts} />
    </SectionWrapper>
  )
}

export default PostsSection
