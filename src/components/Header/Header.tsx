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

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return (): void => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header ref={headerEl}>
      <div className="bg-white">
        <Container>
          <div className="flex items-center h-20 mx-auto">
            <ul className="flex h-full items-center tracking-wider space-x-12">
              <li>
                <Link href="/">
                  <a className="flex items-center">
                    <span>Home</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>About</a>
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </header>
  )
}

export default Header
