import { ExternalLinks } from '../../content/Links'
export default function getExternalLink(keyword: string): string {
  let href = ''
  href = ExternalLinks.filter(
    (link) => link.name.toLowerCase() === keyword.toLowerCase()
  )[0].href
  return href.length > 0 ? href : ''
}
