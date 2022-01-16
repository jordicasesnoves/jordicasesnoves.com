import React, { useState, useEffect, useRef } from 'react'
import { Button, Icon } from '../index'
import Link from 'next/link'
import { CrossIcon, HamburguerIcon } from '../../icons'
import HeaderLink from './components/HeaderLink'

function Header(): JSX.Element {
  const headerEl = useRef(null)
  const [showShadow, setShowShadow] = useState(false)
  const [isExpanded, toggleExpansion] = useState(false)

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
                <HeaderLink href="/blog">Blog</HeaderLink>
              </li>
              <li>
                <HeaderLink href="/#about">About</HeaderLink>
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
                <Button
                  href="mailto:jordicasesnoves@gmail.com"
                  as="a"
                  size="small"
                >
                  Contact Me
                </Button>
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
