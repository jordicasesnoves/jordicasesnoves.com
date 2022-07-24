import React, { useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const [isExpanded, toggleExpansion] = useState<boolean>(false)
  return (
    <>
      <div className="relative bg-primary-light  flex flex-col min-h-screen font-sans theme-light bg-background text-main-text">
        {/* Dark overlay to darken the app when responsive menu opens */}
        <div
          className={`transition-all ease-in-out duration-300 absolute top-0 w-full h-full bg-black z-20 ${
            isExpanded ? 'opacity-80 visible ' : 'opacity-0 invisible'
          }`}
        />
        <Header isExpanded={isExpanded} toggleExpansion={toggleExpansion} />
        <main className="flex-1 w-full">{children}</main>

        <Footer />
      </div>
    </>
  )
}

export default Layout
