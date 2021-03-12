import React from 'react'

import Header from './header'
import Footer from './footer'

const Layout = ({ children }): JSX.Element => {
  return (
    <div className="relative flex flex-col min-h-screen font-sans theme-light bg-background text-main-text">
      <Header />

      <main className="flex-1 w-full">{children}</main>

      <Footer />
    </div>
  )
}

export default Layout
