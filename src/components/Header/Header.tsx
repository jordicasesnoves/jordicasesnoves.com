import React, { useState, useEffect, useRef } from 'react'
import { Icon } from '../index'
import Link from 'next/link'
import { HeaderIcon, HeaderLink } from './Header.styled'
import { CrossIcon, HamburguerIcon } from '../../icons'
import { SocialMediaLinks } from '../../../content/Links'

function Header(): JSX.Element {
  const headerEl = useRef(null)
  const [showShadow, setShowShadow] = useState(false)
  const [isExpanded, toggleExpansion] = useState(false)

  const handleResponsiveLink = (): void => {
    toggleExpansion(false)
  }

  const handleScroll = (): void => {
    const initialOffsetTop = '16'
    if (headerEl.current.offsetTop > initialOffsetTop) {
      setShowShadow(true)
    } else {
      setShowShadow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return (): void => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      ref={headerEl}
      className={
        'sticky mt-4 top-0 bg-white z-50 transition-all duration-200 ' +
        (isExpanded ? ' ' : ' ') +
        (showShadow ? ' shadow-lg ' : ' ')
      }
    >
      <div
        className={`flex flex-wrap relative justify-start items-center max-w-6xl px-4 py-5 mx-auto md:px-8`}
      >
        <div className="flex flex-1 items-center ">
          <nav
            className={`flex-1 inline-flex justify-between font-medium   md:items-center w-full `}
          >
            <Link href="/">
              <a className="mr-8">
                <h1 className="flex items-center no-underline">
                  <span className="text-xl font-medium tracking-tight truncate">
                    Jordi Casesnoves
                  </span>
                </h1>
              </a>
            </Link>
            <div className="hidden md:flex">
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
                <Link key={link.title} href={link.route} passHref>
                  <HeaderLink>{link.title}</HeaderLink>
                </Link>
              ))}
            </div>
            <div className="hidden md:flex space-x-6">
              {SocialMediaLinks.map((link) => (
                <HeaderIcon key={link.name} href={link.href}>
                  <Icon icon={link.icon} />
                </HeaderIcon>
              ))}
            </div>
          </nav>

          <button
            className="absolute right-0 flex items-center px-4 py-2 rounded md:hidden"
            onClick={(): void => toggleExpansion(!isExpanded)}
          >
            {isExpanded ? (
              <Icon icon={CrossIcon} />
            ) : (
              <Icon icon={HamburguerIcon} />
            )}
          </button>
        </div>
        <div
          className={
            (showShadow ? 'shadow-xl ' : ' ') +
            (isExpanded
              ? 'border-b absolute overlay mt-16 pb-6 h-auto items-center left-0 top-0 w-full bg-white '
              : ' hidden ')
          }
        >
          <div className="flex flex-col font-medium">
            {[
              {
                route: `#portfolio`,
                title: `Portfolio`
              },
              {
                route: `#about`,
                title: `About`
              }
            ].map((link) => (
              <a
                className="transition-all duration-200 text-secondary-text hover:text-hover-text block mt-4 no-underline md:inline-block md:mt-0 mx-4"
                key={link.title}
                href={link.route}
                onClick={handleResponsiveLink}
              >
                {link.title}
              </a>
            ))}
            <div className="ml-4">
              {SocialMediaLinks.map((link, index, array) => (
                <a
                  className={
                    `transition-all duration-200  text-secondary-text hover:text-hover-text mt-4 no-underline inline-block md:mt-0 ` +
                    (index + 1 !== array.length ? `mr-6` : '')
                  }
                  key={link.name}
                  href={link.href}
                  onClick={handleResponsiveLink}
                >
                  <Icon icon={link.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
