const EmbeddedVideo = ({ url }): JSX.Element => {
  if (!url) return null

  // extract youtube video id
  const videoId = url.split('v=')[1]
  const ampersandPosition = videoId.indexOf('&')
  const videoIdToDisplay =
    ampersandPosition === -1 ? videoId : videoId.substring(0, ampersandPosition)

  return (
    <div>
      <iframe
        width="100%"
        className="h-64 lg:h-[432px]"
        src={`https://www.youtube.com/embed/${videoIdToDisplay}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}

export default EmbeddedVideo
