import Link from 'next/link'
import { PostsList, Typography } from '..'
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
            <a
              className="h-20
          bg-primary-dark hover:bg-white font-medium transition-all duration-200 hover:text-primary-dark text-primary-light 
          rounded-full tracking-wide px-12 py-5"
            >
              Browse all articles
            </a>
          </Link>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default PostsSection
