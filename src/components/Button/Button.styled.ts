import React from 'react'
import tw, { styled, TwStyle } from 'twin.macro'

export type ButtonVariants = 'primary' | 'secondary'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants
  size?: 'small' | 'normal'
}

const sizes = {
  small: tw`px-6 py-4`,
  normal: tw`px-12 py-5`
}

export const StyledButton = styled.button<ButtonProps>`
  /* Common styles */
  ${tw`focus:outline-none cursor-pointer select-none`}

  /* Sizes */
  ${({ size }): TwStyle => sizes[size]}

  /* Primary variant */
  ${({ variant }): TwStyle =>
    variant === 'primary' &&
    tw`bg-primary-dark hover:bg-white font-medium transition-all duration-200 hover:text-primary-dark text-primary-light 
    rounded-full tracking-wide`}

  /* Primary variant disabled state */
  ${({ variant, disabled }): TwStyle =>
    variant === 'primary' &&
    disabled &&
    tw`text-gray-800 bg-gray-100 hover:bg-gray-100 cursor-not-allowed`}
`
