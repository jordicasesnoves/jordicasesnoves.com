import Link from 'next/link'
import React from 'react'

type HeaderLinkProps = {
  href: string
  children: React.ReactNode
  onClick: any
}

const HeaderLink = ({
  href,
  children,
  onClick
}: HeaderLinkProps): JSX.Element => {
  return (
    <Link href={href}>
      <a
        onClick={onClick}
        onKeyDown={onClick}
        className={`uppercase tracking-widest font-medium 
        text-primary-dark hover:text-accent 
          transition-colors duration-200 ease-in-out w-full`}
      >
        {children}
      </a>
    </Link>
  )
}

export default HeaderLink
