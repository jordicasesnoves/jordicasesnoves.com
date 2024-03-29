import { Project } from './model'

export const Projects: Project[] = [
  {
    id: 1,
    name: "Marmeus's Website",
    type: 'frontend',
    title: 'Next.js Blog',
    description:
      "Friend of mine's website done with Next.js and SSR-SSG combined.",
    technologies: ['React.js', 'Next.js', 'TailwindCSS'],
    demo: 'https://marmeus.com'
  },
  {
    id: 2,
    name: 'NekoFilm',
    type: 'frontend',
    title: 'Movie & TV Show searcher',
    description:
      'Create an account, search any movie or TV show, read some specific info about it, and even watch the trailer between thousands of media.',
    technologies: ['React.js', 'Apollo GraphQL', 'TailwindCSS'],
    github: 'https://github.com/jordicasesnoves/NekoFilm',
    demo: 'https://nekofilm.now.sh/'
  },
  {
    id: 3,
    name: "NekoFilm's Server",
    type: 'backend',
    title: 'Apollo GraphQL Server + Auth (JWT)',
    description:
      'Back-end side for the movie & tv show searcher project. Apollo Server for wrapping the API Rest, combined with mutations and JWT for managing auth.',
    technologies: ['Apollo GraphQL', 'JWT', 'MongoDB', 'Node.js'],
    github: 'https://github.com/jordicasesnoves/NekoFilm-api',
    demo: 'https://nekofilm-api.now.sh/graphql'
  },
  {
    id: 4,
    name: 'iCrypto',
    type: 'frontend',
    title: 'Cryptography Data Visualization',
    description:
      "Visualize the 24hr top crypto's charts in real time with real data. Also developed the dashboard UI, but the real data is only used on the charts.",
    technologies: ['Vue.js', 'ApexCharts.js', 'TailwindCSS'],
    github: 'https://github.com/jordicasesnoves/icrypto',
    demo: 'https://icrypto.netlify.app/'
  }
]
