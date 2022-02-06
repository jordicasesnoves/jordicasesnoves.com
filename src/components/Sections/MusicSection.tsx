import useSWR from 'swr'
import { Button, Typography } from '..'
import fetcher from '../../lib/fetcher'
import SectionWrapper from './components/SectionWrapper'
import Link from 'next/link'

const MusicSection = (): JSX.Element => {
  const { data } = useSWR<any>('/api/on-repeat', fetcher)
  const { tracks } = data || { tracks: [] }
  return (
    <SectionWrapper className="bg-secondary-dark" title="music">
      <Typography variant="h2" serif className="text-primary-dark mb-12">
        Music I love right now
      </Typography>
      <ol className="flex flex-col gap-y-6 justify-start items-start mb-16">
        {tracks.map((track: any, index) => (
          <a
            className="flex-1 w-full group"
            key={track.id}
            href={track.songUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="flex gap-x-6 items-center">
              <span className="w-3">
                <Typography>{index + 1}</Typography>
              </span>
              <img src={track.cover} alt={track.name} className="w-16 h-16" />
              <div className="flex flex-col">
                <Typography
                  variant="medium-body"
                  className="text-primary-dark font-medium group-hover:underline underline-offset-4 line-clamp-2"
                >
                  {track.title}
                </Typography>

                <Typography
                  variant="small-body"
                  italic
                  className="text-primary-dark"
                >
                  {track.artist}
                </Typography>
              </div>
            </li>
          </a>
        ))}
      </ol>
      <div className="text-center">
        <Link
          passHref
          href="https://open.spotify.com/playlist/37i9dQZF1EpyWbOFurGqWd?si=15952baefcb347ce"
        >
          <Button target="_blank" as="a">
            Check out the full playlist
          </Button>
        </Link>
      </div>
    </SectionWrapper>
  )
}

export default MusicSection
