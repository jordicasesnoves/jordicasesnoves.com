import React from 'react'

const TextLink = (props) => {
  return (
    <a
      target="_blank"
      href={props.href}
      className="cursor-pointer text-accent hover:text-green-900 transition-all duration-200 font-medium "
    >
      {props.children}
    </a>
  )
}

export default TextLink
