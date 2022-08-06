import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import { Post } from '../../models/post'
import { databaseId, isProd, isProdFilterObject, notion } from './config'
import { getPageProperties } from './page'

export const getPost = async (postPageId: string): Promise<Post> => {
  const page = (await notion.pages.retrieve({
    page_id: postPageId
  })) as PageObjectResponse

  const pageId = postPageId
  const {
    description,
    title,
    readTime,
    publicationDate,
    categories,
    coverUrl
  } = await getPageProperties(page, pageId)

  return {
    pageId,
    title,
    description,
    readTime,
    publicationDate,
    categories,
    coverUrl
  }
}

export const getPosts = async (): Promise<Post[]> => {
  const pages = []
  let cursor = undefined

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const { results, next_cursor } = await notion.databases.query({
      database_id: databaseId,
      start_cursor: cursor,
      ...(isProd && isProdFilterObject)
    })
    pages.push(...results)
    if (!next_cursor) {
      break
    }
    cursor = next_cursor
  }
  const posts: Post[] = []
  for (const page of pages) {
    const pageId = page.id
    const {
      title,
      description,
      readTime,
      publicationDate,
      categories,
      coverUrl
    } = await getPageProperties(page, pageId)
    posts.push({
      pageId,
      description,
      title,
      readTime,
      publicationDate,
      categories,
      coverUrl
    })
  }
  return posts
}
