import { Client } from '@notionhq/client'
import { PropertyItemListResponse } from '@notionhq/client/build/src/api-endpoints'
import { Post } from '../models/post'

export const databaseId = process.env.NOTION_DATABASE_ID

const notion = new Client({
  auth: process.env.NOTION_TOKEN
})

export const getDatabase = async (databaseId: string): Promise<any> => {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: 'published',
      checkbox: {
        equals: true
      }
    }
  })
  return response
}

export const getPosts = async (): Promise<Post[]> => {
  const pages = []
  let cursor = undefined

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const { results, next_cursor } = await notion.databases.query({
      database_id: databaseId,
      start_cursor: cursor,
      filter: {
        property: 'published',
        checkbox: {
          equals: true
        }
      }
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
    const titlePropertyId = page.properties['name'].id
    const titlePropertyItems = await getPropertyValue({
      pageId,
      propertyId: titlePropertyId
    })
    const title = titlePropertyItems
      .map((propertyItem) => propertyItem.title.plain_text)
      .join('')
    const descriptionPropertyId = page.properties['description'].id
    const descriptionPropertyItems = await getPropertyValue({
      pageId,
      propertyId: descriptionPropertyId
    })
    const description = descriptionPropertyItems
      .map((propertyItem) => propertyItem.rich_text.plain_text)
      .join('')
    const readTimePropertyId = page.properties['read_time'].id
    const readTimePropertyItem = await getPropertyValue({
      pageId,
      propertyId: readTimePropertyId
    })
    const readTime = readTimePropertyItem.number
    const publicationDatePropertyId = page.properties['publication_date'].id
    const publicationDatePropertyItem = await getPropertyValue({
      pageId,
      propertyId: publicationDatePropertyId
    })
    const publicationDate = publicationDatePropertyItem.date.start
    const categoriesPropertyId = page.properties['categories'].id
    const categoriesPropertyItem = await getPropertyValue({
      pageId,
      propertyId: categoriesPropertyId
    })
    const categories = categoriesPropertyItem.multi_select
    const pageCover = page.cover
    const coverUrl =
      pageCover.type === 'external'
        ? pageCover?.external?.url
        : pageCover?.file?.url

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

export const getPage = async (pageId: string): Promise<any> => {
  const response = await notion.pages.retrieve({ page_id: pageId })
  return response
}

export const getBlocks = async (blockId: string): Promise<any> => {
  const response = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 50
  })
  return response.results
}

const getPropertyValue = async ({ pageId, propertyId }): Promise<any> => {
  const propertyItem = await notion.pages.properties.retrieve({
    page_id: pageId,
    property_id: propertyId
  })
  if (propertyItem.object === 'property_item') {
    return propertyItem
  }

  // Property is paginated.
  let nextCursor = propertyItem.next_cursor
  const results = propertyItem.results

  while (nextCursor !== null) {
    const propertyItem = await notion.pages.properties.retrieve({
      page_id: pageId,
      property_id: propertyId,
      start_cursor: nextCursor
    })

    nextCursor = (propertyItem as PropertyItemListResponse).next_cursor
    results.push(...(propertyItem as PropertyItemListResponse).results)
  }

  return results
}
