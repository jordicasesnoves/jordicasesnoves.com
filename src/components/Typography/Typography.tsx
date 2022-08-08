import React, { ReactNode } from 'react'

enum TypographyTypes {
  'h1' = 'h1',
  'h2' = 'h2',
  'h3' = 'h3',
  'h4' = 'h4',
  'medium-body' = 'medium-body',
  'post-body' = 'post-body',
  'small-body' = 'small-body'
}

interface TypographyProps {
  className?: string
  children: ReactNode
  variant?: keyof typeof TypographyTypes
  bold?: boolean
  italic?: boolean
  underline?: boolean
  uppercase?: boolean
  serif?: boolean
  id?: string
}

const Typography = ({
  children,
  variant,
  className,
  bold,
  italic,
  underline,
  uppercase,
  serif,
  id,
  ...props
}: TypographyProps): JSX.Element => {
  const TypographyComponents: { [key in TypographyTypes]: JSX.Element } = {
    h1: (
      <h1
        className={`font-medium text-5xl md:text-6xl ${
          serif && 'font-serif'
        } ${className}`}
      >
        {children}
      </h1>
    ),
    h2: (
      <h2
        className={`font-medium text-4xl md:text-5xl ${
          serif && 'font-serif'
        } ${className}`}
        id={id}
      >
        {children}
      </h2>
    ),
    h3: (
      <h3
        className={`font-medium text-3xl md:text-4xl ${
          serif && 'font-serif'
        } ${className}`}
        id={id}
      >
        {children}
      </h3>
    ),
    h4: (
      <h4
        className={`font-medium text-2xl md:text-3xl ${
          serif && 'font-serif'
        } ${className}`}
      >
        {children}
      </h4>
    ),
    'medium-body': (
      <span
        className={
          `leading-normal lg:leading-8 text-lg md:text-xl 
          ${serif && 'font-serif'}
          ${uppercase && 'uppercase'}
          ` + className
        }
      >
        {children}
      </span>
    ),
    'post-body': (
      <span
        className={
          `leading-normal lg:leading-relaxed text-xl lg:text-2xl
          ${serif && 'font-serif'}
          ${uppercase && 'uppercase'}
          ` + className
        }
      >
        {children}
      </span>
    ),
    'small-body': (
      <span
        className={
          `text-base md:text-lg ${serif && 'font-serif'}
      ${uppercase && 'uppercase'} ` + className
        }
      >
        {children}
      </span>
    )
  }

  return TypographyComponents[variant] || TypographyComponents['medium-body']
}

export default Typography
