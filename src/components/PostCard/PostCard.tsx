import Link from 'next/link'
import slugify from 'slugify'
import { NotionPage } from '../../models/notion'

const PostCard = ({ properties, icon }: NotionPage): JSX.Element => {
  const postTitle = properties.name.title[0].plain_text
  return (
    <li>
      <Link href={`/blog/${slugify(postTitle).toLowerCase()}`}>
        {postTitle}
      </Link>
    </li>
  )
}

export default PostCard
