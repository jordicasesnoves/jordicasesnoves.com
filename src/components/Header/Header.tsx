import React, { useState, useEffect, useRef } from 'react'
import { Button, Icon } from '../index'
import Link from 'next/link'
import { CrossIcon, HamburguerIcon } from '../../icons'
import HeaderLink from './components/HeaderLink'

function Header(): JSX.Element {
  const headerEl = useRef(null)
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [showShadow, setShowShadow] = useState<boolean>(false)
  const [isExpanded, toggleExpansion] = useState<boolean>(false)

  const handleScroll = (): void => {
    if (isMobile) return
    const initialOffsetTop = '16'
    const shouldDisplayShadow = headerEl?.current?.offsetTop > initialOffsetTop
    setShowShadow(shouldDisplayShadow)
  }

  const handleSwitchMobile = (): void => {
    toggleExpansion(!isExpanded)
  }

  const handleClick = (): void => {
    if (isMobile) toggleExpansion(false)
  }

  const handleResize = (): void => {
    headerEl?.current?.offsetWidth < 976
      ? setIsMobile(true)
      : setIsMobile(false)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return (): void => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (headerEl) handleResize()
  }, [headerEl])

  useEffect(() => {
    if (isMobile) setShowShadow(true)
    window.addEventListener('scroll', handleScroll)
    return (): void => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isMobile])

  const HeaderItems = (
    <>
      <li>
        <HeaderLink onClick={handleClick} href="/blog">
          Blog
        </HeaderLink>
      </li>
      <li>
        <HeaderLink onClick={handleClick} href="/#about">
          About
        </HeaderLink>
      </li>
    </>
  )

  return (
    <header className="sticky top-0 z-50" ref={headerEl}>
      <div
        className={`${
          showShadow ? 'bg-white' : 'bg-transparent'
        } transition-colors ease-in-out duration-500`}
      >
        <div className="max-w-7xl h-16 md:h-20 px-4 mx-auto md:px-8">
          <div className="h-full w-full flex items-center justify-between ">
            <ul className="flex-1 hidden md:flex items-center gap-x-12">
              {HeaderItems}
            </ul>
            <div className="whitespace-nowrap">
              <Link href="/">
                <a
                  onClick={handleClick}
                  onKeyDown={handleClick}
                  className={`font-bold text-xl md:text-2xl tracking-normal ${
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
              <button onClick={handleSwitchMobile}>
                <Icon
                  size="large"
                  icon={isExpanded ? CrossIcon : HamburguerIcon}
                />
              </button>
            </div>
          </div>
        </div>
        {isExpanded && (
          <div
            className={`transition-colors ease-in-out duration-500 bg-white px-4 pb-4`}
          >
            <ul className="space-y-4 flex flex-col">{HeaderItems}</ul>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
