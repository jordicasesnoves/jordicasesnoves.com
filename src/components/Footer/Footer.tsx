import React from 'react'
import { Link, Icon } from '../index'
import { SocialMediaLinks } from '../../../content/Links'
import getExternalLink from '../../utils/getExternalLink'

const Footer = (): JSX.Element => {
  return (
    <footer className="relative z-10 bg-secondary-light font-medium">
      {/* <NewsletterSection /> */}
      <nav className="flex flex-col text-primary-dark justify-center items-center max-w-6xl p-4 mx-auto ">
        <div className="my-1 md:my-3 ">
          <nav
            className={`
             flex flex-col md:flex-row flex-wrap md:flex-no-wrap flex-1
              items-center w-full `}
          >
            {[
              {
                route: `/blog`,
                title: `Blog`
              },
              {
                route: `/#about`,
                title: `About`
              }
            ].map((link) => (
              <a
                className="transition-all uppercase tracking-widest duration-200 hover:text-accent text-center mx-auto px-8 py-1 no-underline"
                key={link.title}
                href={link.route}
              >
                {link.title}
              </a>
            ))}
          </nav>
        </div>
        <div className="my-1 md:my-3 ">
          {SocialMediaLinks.map((link, index, array) => (
            <a
              className={
                `transition-all  duration-200 hover:text-accent mt-4 no-underline inline-flex md:inline-block md:mt-0 truncate ` +
                (index + 1 < array.length ? `mr-6` : '')
              }
              key={link.name}
              href={link.href}
            >
              <Icon icon={link.icon} />
            </a>
          ))}
        </div>
        <div className="my-3 text-center text-md">
          © {new Date().getFullYear()} — Web designed & coded by Jordi
          Casesnoves using{' '}
          <Link href={getExternalLink('React.js')}>React.js</Link> +{' '}
          <Link href={getExternalLink('Next.js')}>Next.js</Link>
        </div>
      </nav>
    </footer>
  )
}

export default Footer
