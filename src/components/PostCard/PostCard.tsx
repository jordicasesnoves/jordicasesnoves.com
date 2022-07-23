import Link from 'next/link'
import slugify from 'slugify'
import { Typography } from '..'
import { NotionPage } from '../../models/notion'

const PostCard = ({ properties, cover }: NotionPage): JSX.Element => {
  const postTitle = properties.name.title[0].plain_text
  const coverUrl =
    cover.type === 'external' ? cover?.external?.url : cover?.file?.url
  const categories = Object.values(properties.categories.multi_select)
  const publicationDate = properties.publication_date?.date?.start
  const readTime = properties?.read_time.number

  const formattedDate = new Date(publicationDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  const slug = slugify(postTitle).toLowerCase()

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
              {postTitle}
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
