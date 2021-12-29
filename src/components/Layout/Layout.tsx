import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className="relative bg-primary-light  flex flex-col min-h-screen font-sans theme-light bg-background text-main-text">
      <Header />

      <main className="flex-1 w-full">{children}</main>

      {/* <Footer /> */}
    </div>
  )
}

export default Layout
