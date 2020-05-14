import externalLinks from "../../content/externallinks.json";
export default function getExternalLink(keyword) {
  var href = "";
  href = externalLinks.filter(
    (link) => link.name.toLowerCase() === keyword.toLowerCase()
  )[0].href;
  return href.length > 0 ? href : "";
}
