import React, { ReactNode } from 'react'
import { ButtonProps, StyledButton } from './Button.styled'

interface ButtonComponentProps extends ButtonProps {
  children?: ReactNode
  href?: string
  target?: string
}

const Button = ({
  children,
  className,
  variant = 'primary',
  size = 'normal',
  ...props
}: ButtonComponentProps): JSX.Element => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      {...props}
      className={'text-center w-full md:w-auto block md:inline ' + className}
    >
      {children}
    </StyledButton>
  )
}

export default Button
