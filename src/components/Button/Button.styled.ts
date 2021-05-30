import React from 'react'
import tw, { styled, TwStyle } from 'twin.macro'

export type ButtonVariants = 'primary' | 'secondary'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants
  active?: boolean
  icon?: React.FC
}

export const StyledButton = styled.button<ButtonProps>`
  /* Common styles */
  ${tw`focus:outline-none`}

  /* Primary variant icon */
  ${({ variant, icon }): TwStyle =>
    variant === 'primary' &&
    icon &&
    tw`flex items-center justify-center h-6 w-6 rounded-full text-xl`}

  /* Primary variant non icon */
    ${({ variant, icon }): TwStyle =>
    variant === 'primary' && !icon && tw`px-2 py-1 rounded-full text-xl`}

  /* Primary variant disabled state */
  ${({ variant, disabled }): TwStyle =>
    variant === 'primary' && disabled && tw`text-grey-40 bg-grey-10`}

  /* Primary variant active state */
  ${({ variant, active }): TwStyle =>
    variant === 'primary' && active && tw`text-white bg-darkblue`}
     
  /* Primary variant default state (non active & non disabled state) */
  ${({ variant, active, disabled }): TwStyle =>
    variant === 'primary' &&
    !active &&
    !disabled &&
    tw`text-darkblue bg-white hover:bg-darkblue hover:text-white  
    border border-transparent active:border-darkblue active:bg-white active:text-darkblue active:shadow-xl`}

  /* Secondary variant */
  ${({ variant }): TwStyle =>
    variant === 'secondary' && tw`px-2 py-1 rounded text-xl`}

  /* Secondary variant with icon */
  ${({ variant, icon }): TwStyle =>
    variant === 'secondary' &&
    icon &&
    tw`flex items-center justify-center h-6 space-x-1`}

  /* Secondary variant disabled state */
  ${({ variant, disabled }): TwStyle =>
    variant === 'secondary' && disabled && tw`text-grey-40 bg-grey-10`}

  /* Secondary variant not disabled state */
  ${({ variant, disabled }): TwStyle =>
    variant === 'secondary' &&
    !disabled &&
    tw`text-white bg-darkblue hover:bg-light-blue-tint-1 hover:text-darkblue  
    active:bg-light-blue active:text-darkblue active:shadow-xl`}

  /* Tertiary variant common styles */
  ${({ variant }): TwStyle =>
    variant.includes('tertiary') && tw`text-m hover:underline`}

  /* Tertiary variant default state */
  ${({ variant, disabled }): TwStyle =>
    variant.includes('tertiary') && !disabled && tw`text-darkblue`}

  /* Tertiary variant disabled state */
  ${({ variant, disabled }): TwStyle =>
    variant.includes('tertiary') && disabled && tw`text-grey-40`}

  /* Tertiary settings and link */
  ${({ variant }): TwStyle =>
    (variant === 'tertiary-link' || variant === 'tertiary-settings') &&
    tw`flex items-center justify-center space-x-1`} 
    
  /* Tertiary link */
  ${({ variant }): TwStyle => variant === 'tertiary-link' && tw`font-bold`}
`
