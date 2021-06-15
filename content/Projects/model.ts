export interface Project {
  id: number
  name: string
  type: 'frontend' | 'backend' | 'fullstack'
  title: string
  description: string
  technologies: string[]
  demo?: string
  github?: string
}
