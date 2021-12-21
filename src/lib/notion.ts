import { Client } from '@notionhq/client'

export const databaseId = process.env.NOTION_DATABASE_ID

const notion = new Client({
  auth: process.env.NOTION_TOKEN
})

export const getDatabase = async (databaseId): Promise<any> => {
  const response = await notion.databases.query({
    database_id: databaseId
  })
  return response.results
}

export const getPage = async (pageId): Promise<any> => {
  const response = await notion.pages.retrieve({ page_id: pageId })
  return response
}

export const getBlocks = async (blockId): Promise<any> => {
  const response = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 50
  })
  return response.results
}
