import { PostCard, Typography } from '..'

const PostsList = ({ posts }: any): JSX.Element => {
  const publishedPosts = posts.filter(
    (post: any) => post.properties.published.checkbox
  )
  if (publishedPosts.length < 1) return <Typography>No posts found</Typography>

  return (
    <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
      {publishedPosts?.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </ol>
  )
}

export default PostsList
