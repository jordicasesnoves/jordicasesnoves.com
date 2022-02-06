import type { NextApiRequest, NextApiResponse } from 'next'
import { getOnRepeatPlaylist } from '../../lib/spotify'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await getOnRepeatPlaylist()
  const { tracks } = await response.json()

  const items = tracks.items.slice(0, 10).map(({ track }) => ({
    id: track.id,
    cover: track.album.images[0].url,
    artist: track.artists.map((_artist) => _artist.name).join(', '),
    songUrl: track.external_urls.spotify,
    title: track.name
  }))

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=43200'
  )

  return res.status(200).json({ tracks: items })
}
