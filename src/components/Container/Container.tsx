import React from 'react'

const Container = ({
  children
}: React.HTMLProps<HTMLDivElement>): JSX.Element => {
  return <div className="max-w-5xl px-4 mx-auto md:px-8">{children}</div>
}

export default Container
