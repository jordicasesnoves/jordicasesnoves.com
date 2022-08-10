import slugify from 'slugify'

const getSlugId = (text: string): string => {
  const regEx = /[*+~.()'"!:@/]/g
  return slugify(text, {
    remove: regEx,
    lower: true
  })
}

export default getSlugId
