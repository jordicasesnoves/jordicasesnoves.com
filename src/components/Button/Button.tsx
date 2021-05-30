import React from 'react'
import { Icon } from '../index'

const default_classes =
  'relative shadow hover:shadow-xl rounded-md font-medium focus:outline-none focus:shadow-outline duration-200 ease-in-out transition-all'

const colors = {
  primary:
    'text-white bg-green-500 hover:bg-white hover:text-green-500 border border-green-500',
  secondary:
    'text-green-500 bg-white hover:bg-green-500 hover:text-white border-primary border',
  white: 'text-black bg-white hover:bg-black hover:text-white',
  black: 'text-white bg-black hover:bg-white hover:text-black',
  red: 'text-white bg-red-600 hover:bg-red-500'
}

const sizes = {
  sm: 'px-5 py-2',
  md: 'px-6 py-3',
  lg: 'px-8 py-4'
}

const getTextMargin = (icon, iconPos) => {
  if (icon) {
    if (iconPos === 'right') {
      return 'mr-2'
    } else {
      return 'ml-2'
    }
  } else {
    return ''
  }
}

const Button = ({
  href = '#',
  size = 'md', // default button size
  loading = false,
  type = 'button', // button, submit...
  fullWidth = false,
  className,
  color = 'primary',
  icon,
  iconPosition = 'right',
  ...props
}: any): JSX.Element => {
  const anchorSize = sizes[size]
  // Dynamic TailwindCSS classes
  className = [
    default_classes,
    colors[color],
    fullWidth ? 'w-full' : '',
    className
  ].join(' ')

  return (
    <button {...props} type={type} className={className}>
      <a
        target={props.target === '_blank' ? '_blank' : ''}
        href={href}
        className={`${anchorSize} w-full inline-flex justify-center items-center`}
      >
        {loading ? (
          <div className="items-center flex">
            <div className="flex-1">
              <svg
                className={'w-6 h-4 mx-auto '}
                version="1.1"
                id="L4"
                x="0px"
                y="0px"
                viewBox="0 0 50 100"
              >
                <circle fill="#fff" stroke="none" cx="6" cy="50" r="6">
                  <animate
                    attributeName="opacity"
                    dur="1s"
                    values="0;1;0"
                    repeatCount="indefinite"
                    begin="0.1"
                  />
                </circle>
                <circle fill="#fff" stroke="none" cx="26" cy="50" r="6">
                  <animate
                    attributeName="opacity"
                    dur="1s"
                    values="0;1;0"
                    repeatCount="indefinite"
                    begin="0.2"
                  />
                </circle>
                <circle fill="#fff" stroke="none" cx="46" cy="50" r="6">
                  <animate
                    attributeName="opacity"
                    dur="1s"
                    values="0;1;0"
                    repeatCount="indefinite"
                    begin="0.3"
                  />
                </circle>
              </svg>
            </div>
          </div>
        ) : (
          <>
            {icon && iconPosition === 'left' ? (
              <Icon icon={icon} size="small" />
            ) : (
              ''
            )}
            <span className={getTextMargin(icon, iconPosition)}>
              {props.children}
            </span>
            {icon && iconPosition === 'right' ? (
              <Icon icon={icon} size="small" />
            ) : (
              ''
            )}
          </>
        )}
      </a>
    </button>
  )
}

export default Button
