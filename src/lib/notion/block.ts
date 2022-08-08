import { notion } from './config'

export const getBlocks = async (blockId: string): Promise<any> => {
  const blocks = []
  let cursor = undefined

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const { results, next_cursor } = await notion.blocks.children.list({
      block_id: blockId,
      start_cursor: cursor,
      page_size: 50
    })
    blocks.push(...results)
    if (!next_cursor) {
      break
    }
    cursor = next_cursor
  }

  return blocks
}
