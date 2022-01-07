import React, { useState, useEffect, useRef } from 'react'
import { Container, Icon } from '../index'
import Link from 'next/link'
import { HeaderIcon, HeaderLink } from './Header.styled'
import { CrossIcon, HamburguerIcon } from '../../icons'
import { SocialMediaLinks } from '../../../content/Links'

const links = [
  {
    route: `#portfolio`,
    title: `Portfolio`
  },
  {
    route: `#about`,
    title: `About`
  }
]

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

  const linkClasses = `uppercase tracking-widest font-medium 
  text-primary-dark hover:text-accent transition-colors duration-200 ease-in-out`

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return (): void => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className="sticky top-0 z-50" ref={headerEl}>
      <div
        className={`${
          showShadow ? 'bg-white' : 'bg-transparent'
        } transition-colors ease-in-out duration-500`}
      >
        <div className="max-w-7xl h-20 px-4 mx-auto md:px-8">
          <div className="h-full w-full flex items-center justify-between ">
            <ul className="flex-1 hidden md:flex items-center gap-x-12">
              <li>
                <Link href="/blog">
                  <a className={linkClasses}>Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className={linkClasses}>About</a>
                </Link>
              </li>
            </ul>
            <div className="whitespace-nowrap">
              <Link href="/">
                <a
                  className={`font-bold text-2xl tracking-normal ${
                    showShadow ? 'text-accent' : 'text-primary-dark'
                  } transition-colors ease-in-out duration-500`}
                >
                  Jordi Casesnoves
                </a>
              </Link>
            </div>
            <ul className="flex-1 hidden md:flex justify-end gap-x-12">
              <li>
                <button
                  className=" 
          bg-primary-dark hover:bg-white font-medium transition-all duration-200 hover:text-primary-dark text-primary-light 
          rounded-full tracking-wide px-6 py-3"
                >
                  Contact Me
                </button>
              </li>
            </ul>
            <div className="flex-1 flex md:hidden justify-end">
              <button onClick={(): void => toggleExpansion(!isExpanded)}>
                <Icon size="large" icon={HamburguerIcon} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
