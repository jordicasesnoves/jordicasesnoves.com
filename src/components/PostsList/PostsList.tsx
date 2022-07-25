import { PostCard, Typography } from '..'

const PostsList = ({ posts }: any): JSX.Element => {
  if (posts.length < 1)
    return <Typography>No posts for now. Stay tuned!</Typography>

  return (
    <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
      {posts?.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </ol>
  )
}

export default PostsList
