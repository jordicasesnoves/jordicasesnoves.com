import { PostCard } from '..'

const PostsList = ({ posts }: any): JSX.Element => {
  return (
    <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
      {posts?.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </ol>
  )
}

export default PostsList
