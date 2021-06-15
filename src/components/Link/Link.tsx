import React from 'react'

const TextLink = (props: React.HTMLProps<HTMLAnchorElement>): JSX.Element => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={props.href}
      className="cursor-pointer text-green-500 hover:text-green-900 transition-all duration-200 font-medium"
    >
      {props.children}
    </a>
  )
}

export default TextLink
