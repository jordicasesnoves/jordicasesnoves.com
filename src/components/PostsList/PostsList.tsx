import { PostCard } from '..'

const PostsList = ({ posts }: any): JSX.Element => {
  return (
    <ol>
      {posts?.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </ol>
  )
}

export default PostsList
