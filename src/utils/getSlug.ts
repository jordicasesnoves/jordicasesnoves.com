import slugify from 'slugify'

const getSlug = (postTitle: string): string => slugify(postTitle).toLowerCase()

export default getSlug
