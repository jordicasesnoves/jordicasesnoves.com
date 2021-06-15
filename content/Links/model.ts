export interface Link {
  name: string
  href: string
}

export interface SocialMediaLink extends Link {
  icon: React.FC
}
