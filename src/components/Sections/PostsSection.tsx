import Link from 'next/link'
import { Button, PostsList, Typography } from '..'
import SectionWrapper from './components/SectionWrapper'

const PostsSection = ({ posts }): JSX.Element => {
  return (
    <SectionWrapper title="blog" className="bg-secondary-light">
      <Typography variant="h2" serif className="text-primary-dark mb-12">
        Latest publications
      </Typography>
      <div className="mb-12 lg:mb-24">
        <PostsList posts={posts} />
      </div>
      <div className="flex flex-col space-y-12 text-center">
        <div>
          <Typography serif variant="h3">
            Want to read more?
          </Typography>
        </div>
        <div>
          <Link href="/blog" passHref>
            <Button as="a">Browse all articles</Button>
          </Link>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default PostsSection
