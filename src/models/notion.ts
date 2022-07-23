export type NotionPage = {
  object: string
  id: string
  created_time?: string
  last_edited_time?: string
  archived?: boolean
  icon?: EmojiType & FileType
  cover?: FileType
  properties?: {
    [key in keyof PropertyValues]: {
      id?: string
      type?: PropertyValues
      title?: RichTextType
      multi_select?: {
        id?: string
        name?: string
        color?: string
      }[]
      number?: number
      date?: {
        end?: string
        start?: string
        time_zone?: string
      }
    }
  }
  parent?: {
    type?: string
    database_id?: string
    page_id?: string
    workspace?: boolean
  }
}

export type NotionBlock = {
  object?: string
  id: string
  type?: BlocksEnum
  created_time?: string
  last_edited_time?: string
  archived?: boolean
  has_children?: boolean
  // Block definitions not defined in the schema
  // TODO: https://developers.notion.com/reference/block
  [key: string]: any
}

type RichTextType = {
  plain_text?: string
  href?: string
  annotations?: {
    bold?: boolean
    italic?: boolean
    strikethrough?: boolean
    underline?: boolean
    code?: boolean
    color?: ColorsEnum
  }
  type?: RichTextTypeEnum
}

type EmojiType = {
  type?: string
  emoji?: string
}

type FileType = {
  type?: string
  expiry_time?: string
  file?: {
    url?: string
  }
  external?: {
    url?: string
  }
}

export enum BlocksEnum {
  paragraph = 'paragraph',
  heading_1 = 'heading_1',
  heading_2 = 'heading_2',
  heading_3 = 'heading_3',
  bulleted_list_item = 'bulleted_list_item',
  numbered_list_item = 'numbered_list_item',
  to_do = 'to_do',
  toggle = 'toggle',
  child_page = 'child_page',
  child_database = 'child_database',
  embed = 'embed',
  image = 'image',
  video = 'video',
  file = 'file',
  pdf = 'pdf',
  bookmark = 'bookmark',
  callout = 'callout',
  quote = 'quote',
  equation = 'equation',
  divider = 'divider',
  table_of_contents = 'table_of_contents',
  column = 'column',
  column_list = 'column_list',
  link_preview = 'link_preview',
  synced_block = 'synced_block',
  template = 'template',
  link_to_page = 'link_to_page',
  unsupported = 'unsupported'
}

enum RichTextTypeEnum {
  text,
  mention,
  equation
}

enum ColorsEnum {
  default,
  gray,
  brown,
  orange,
  yellow,
  green,
  blue,
  purple,
  pink,
  red,
  gray_background,
  brown_background,
  orange_background,
  yellow_background,
  green_background,
  blue_background,
  purple_background,
  pink_background,
  red_background
}

type PropertyValues = typeof PageTypes & typeof CustomPropertyValues

enum PageTypes {
  'rich_text',
  'number',
  'select',
  'multi_select',
  'date',
  'formula',
  'relation',
  'rollup',
  'title',
  'people',
  'files',
  'checkbox',
  'url',
  'email',
  'phone_number',
  'created_time',
  'created_by',
  'publication_date',
  'creation_date',
  'last_edited_time',
  'last_edited_by'
}

enum CustomPropertyValues {
  'name',
  'categories',
  'read_time'
}

enum DatabaseTypes {
  'rich_text',
  'number',
  'select',
  'multi_select',
  'date',
  'people',
  'files',
  'checkbox',
  'url',
  'email',
  'phone_number',
  'formula',
  'relation',
  'rollup',
  'created_time',
  'created_by',
  'last_edited_time',
  'last_edited_by'
}
