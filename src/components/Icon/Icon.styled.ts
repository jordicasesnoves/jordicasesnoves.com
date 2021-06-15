import React from 'react'
import tw, { styled, TwStyle } from 'twin.macro'

export interface IconWrapperProps {
  size?: 'small' | 'medium' | 'large'
}

export const IconWrapper = styled.div<IconWrapperProps>`
  ${tw`flex items-center justify-center`}

  ${({ size }): TwStyle => size === 'small' && tw`w-5 h-5`}
  ${({ size }): TwStyle => size === 'medium' && tw`w-6 h-6`}
  ${({ size }): TwStyle => size === 'large' && tw`w-7 h-7`}
`
