import React from 'react'
import { Link, Icon } from '../index'
import { SocialMediaLinks } from '../../../content/Links'
import getExternalLink from '../../utils/getExternalLink'

const Footer = (): JSX.Element => {
  return (
    <footer className="relative z-10 mt-32 border-t border-gray-200">
      {/* <NewsletterSection /> */}
      <nav className="flex flex-col text-gray-400 justify-center items-center max-w-6xl p-4 mx-auto ">
        <div className="my-1 md:my-3 ">
          <nav
            className={`
             flex flex-col md:flex-row flex-wrap  md:flex-no-wrap flex-1 font-medium items-center w-full `}
          >
            {[
              {
                route: `#portfolio`,
                title: `Portfolio`
              },
              {
                route: `#specialized`,
                title: `Specialized In`
              },
              {
                route: `#about`,
                title: `About Me`
              }
            ].map((link) => (
              <a
                className="transition-all duration-200 hover:text-gray-900 text-center mx-auto px-8 py-1 no-underline"
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
                `transition-all duration-200 hover:text-gray-900 block mt-4 no-underline inline-flex md:inline-block md:mt-0 truncate ` +
                (index + 1 < array.length ? `mr-6` : '')
              }
              key={link.name}
              href={link.href}
            >
              <Icon icon={link.icon} />
            </a>
          ))}
        </div>
        <div className="my-3 text-center">
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
