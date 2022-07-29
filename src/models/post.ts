export type Post = {
  pageId: string
  title: string
  description: string
  readTime: number
  categories: {
    id: string
    name: string
    color: string
  }[]
  coverUrl: string
  publicationDate: string
}
