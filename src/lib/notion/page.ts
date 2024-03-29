import {
  PageObjectResponse,
  PropertyItemListResponse
} from '@notionhq/client/build/src/api-endpoints'
import { notion } from './config'

/**
 * If property is paginated, returns an array of property items.
 *
 * Otherwise, it will return a single property item.
 *
 */

type getPagePropertyValueProps = {
  pageId: string
  propertyId: string
}

export const getPagePropertyValue = async ({
  pageId,
  propertyId
}: getPagePropertyValueProps): Promise<any> => {
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

export const getPageProperties = async (
  page: PageObjectResponse,
  pageId: string
): Promise<{
  title: string
  description: string
  readTime: number
  categories: any[]
  publicationDate: string
  coverUrl: string
}> => {
  const titlePropertyId = page.properties['name'].id
  const descriptionPropertyId = page.properties['description'].id
  const readTimePropertyId = page.properties['read_time'].id
  const categoriesPropertyId = page.properties['categories'].id
  const publicationDatePropertyId = page.properties['publication_date'].id
  const [
    titlePropertyItems,
    descriptionPropertyItems,
    readTimePropertyItem,
    publicationDatePropertyItem,
    categoriesPropertyItem
  ] = await Promise.all([
    getPagePropertyValue({
      pageId,
      propertyId: titlePropertyId
    }),
    getPagePropertyValue({
      pageId,
      propertyId: descriptionPropertyId
    }),
    getPagePropertyValue({
      pageId,
      propertyId: readTimePropertyId
    }),
    getPagePropertyValue({
      pageId,
      propertyId: publicationDatePropertyId
    }),
    getPagePropertyValue({
      pageId,
      propertyId: categoriesPropertyId
    })
  ])

  const title = titlePropertyItems
    .map((propertyItem) => propertyItem.title.plain_text)
    .join('')
  const description = descriptionPropertyItems
    .map((propertyItem) => propertyItem.rich_text.plain_text)
    .join('')
  const readTime = readTimePropertyItem.number
  const publicationDate = publicationDatePropertyItem.date.start
  const categories = categoriesPropertyItem.multi_select
  const pageCover = page.cover
  const coverUrl =
    pageCover.type === 'external'
      ? pageCover?.external?.url
      : pageCover?.file?.url

  return { title, description, readTime, publicationDate, categories, coverUrl }
}
