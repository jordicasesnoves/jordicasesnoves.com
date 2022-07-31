import Link from 'next/link'
import slugify from 'slugify'
import { Typography } from '..'
import { Post } from '../../models/post'

const PostCard = ({
  title,
  readTime,
  categories,
  coverUrl,
  publicationDate
}: Post): JSX.Element => {
  const formattedDate = new Date(publicationDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  const slug = slugify(title).toLowerCase()

  return (
    <li className="group">
      <Link href={`/blog/${slug}`}>
        <a>
          <div className="h-64 sm:h-96 mb-6 overflow-hidden">
            <img
              src={coverUrl}
              alt="post cover"
              className="
                h-full w-full object-cover object-center 
                transition-transform duration-200 ease-in-out transform group-hover:scale-110
              "
            />
          </div>
          <div className="space-y-3">
            <ul className="flex">
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
            <Typography
              variant="h4"
              serif
              className="group-hover:underline clamp-1"
            >
              {title}
            </Typography>
            <p>
              <Typography variant="small-body" className="text-primary-medium">
                {formattedDate} · {readTime} min read
              </Typography>
            </p>
          </div>
        </a>
      </Link>
    </li>
  )
}

export default PostCard
