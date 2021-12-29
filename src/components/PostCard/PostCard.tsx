import Link from 'next/link'
import slugify from 'slugify'
import { NotionPage } from '../../models/notion'

const PostCard = ({ properties, cover }: NotionPage): JSX.Element => {
  const postTitle = properties.name.title[0].plain_text
  const coverUrl = cover?.external?.url
  const categories = Object.values(properties.categories.multi_select)

  return (
    <li className="group">
      <Link href={`/blog/${slugify(postTitle).toLowerCase()}`}>
        <a>
          <div className="h-96 mb-6 overflow-hidden">
            <img
              src={coverUrl}
              alt="post cover"
              className="
                h-full w-full object-cover object-center 
                transition-transform duration-200 ease-in-out transform hover:scale-110
              "
            />
          </div>
          <div className="space-y-3">
            <ul className="flex">
              {categories.map((category, index) => (
                <li
                  style={{ letterSpacing: '0.2rem' }}
                  className="uppercase text-lg"
                  key={category.id}
                >
                  <span>{category.name}</span>
                  {/* add a coma */}
                  {index !== categories.length - 1 && (
                    <span className="text-primary-dark pr-2">,</span>
                  )}
                </li>
              ))}
            </ul>
            <h4 className="text-3xl font-serif group-hover:underline">
              {postTitle}
            </h4>
          </div>
        </a>
      </Link>
    </li>
  )
}

export default PostCard
