import React, { ReactNode } from 'react'
import { ButtonProps, StyledButton } from './Button.styled'

interface ButtonComponentProps extends ButtonProps {
  children?: ReactNode
  href?: string
  target?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonComponentProps>(
  (props, ref): JSX.Element => {
    const { children, className, variant = 'primary', size = 'normal' } = props
    return (
      <StyledButton
        variant={variant}
        size={size}
        className={'text-center w-full md:w-auto inline-block ' + className}
        ref={ref}
        {...props}
      >
        {children}
      </StyledButton>
    )
  }
)
Button.displayName = 'Button'

export default Button
