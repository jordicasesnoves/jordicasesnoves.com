import { notion } from './config'

export const getBlocks = async (blockId: string): Promise<any> => {
  const response = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 50
  })
  return response.results
}
