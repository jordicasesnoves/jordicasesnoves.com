import { Client } from '@notionhq/client'

export const databaseId = process.env.NOTION_DATABASE_ID
export const notion = new Client({
  auth: process.env.NOTION_TOKEN
})

export const isProd: boolean = process.env.NODE_ENV === 'production'
export const isProdFilterObject = {
  filter: {
    property: 'published',
    checkbox: {
      equals: true
    }
  }
}
