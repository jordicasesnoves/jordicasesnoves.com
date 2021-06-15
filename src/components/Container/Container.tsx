import React from 'react'

const Container = ({
  children
}: React.HTMLProps<HTMLDivElement>): JSX.Element => {
  return (
    <div className="max-w-6xl px-4 py-8 mx-auto md:px-8 md:py-16">
      {children}
    </div>
  )
}

export default Container
