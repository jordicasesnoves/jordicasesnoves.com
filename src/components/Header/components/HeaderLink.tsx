import Link from 'next/link'

type HeaderLinkProps = {
  href: string
  children: React.ReactNode
}

const HeaderLink = ({ href, children }: HeaderLinkProps): JSX.Element => {
  return (
    <Link href={href}>
      <a
        className={`uppercase tracking-widest font-medium 
        text-primary-dark hover:text-accent 
          transition-colors duration-200 ease-in-out`}
      >
        {children}
      </a>
    </Link>
  )
}

export default HeaderLink
