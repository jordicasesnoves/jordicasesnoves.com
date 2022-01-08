import React from 'react'

const TextLink = (props: React.HTMLProps<HTMLAnchorElement>): JSX.Element => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={props.href}
      className="cursor-pointer underline underline-offset-4 text-accent font-medium"
    >
      {props.children}
    </a>
  )
}

export default TextLink
