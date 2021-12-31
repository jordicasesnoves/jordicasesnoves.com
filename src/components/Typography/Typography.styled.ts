import tw, { styled, TwStyle } from 'twin.macro'
import { theme } from '../../../tailwind.config'

export interface BodyProps {
  underline?: boolean
  italic?: boolean
  uppercase?: boolean
  bold?: boolean
}

export interface HeadingProps {
  serif?: boolean
  className?: string
}

const baseStyles = tw` antialiased `

/*
  HEADINGS
*/
export const H1 = styled.h1<HeadingProps>`
  ${tw`font-medium text-5xl md:text-6xl`}
  ${({ serif }): TwStyle => serif && tw`font-serif`}
`

export const H2 = styled.h2<HeadingProps>`
  ${baseStyles}
  ${tw`font-medium text-4xl md:text-5xl`}
  ${({ serif }): TwStyle => serif && tw`font-serif`}
`

export const H3 = styled.h3<HeadingProps>`
  ${baseStyles}
  ${tw`font-bold text-3xl md:text-4xl`}
  ${({ serif }): TwStyle => serif && tw`font-serif`}
`

/*
  BODY TEXTS
*/
const BaseBody = styled.span<BodyProps>`
  ${baseStyles}
  ${({ bold }): TwStyle => bold && tw`font-bold`}
  ${({ italic }): TwStyle => italic && tw`italic`}
  ${({ underline }): TwStyle => underline && tw`underline`}
  ${({ uppercase }): TwStyle => uppercase && tw`uppercase`}
`

export const MediumBodySizes = `
@media only screen and (min-width: ${theme.screens.xs}) {
  font-size: 18px;
  line-height: 32px;
}
@media only screen and (min-width: ${theme.screens.sm}) {
  font-size: 20px;
  line-height: 32px;
}
`

export const SmallBodySizes = `
@media only screen and (min-width: ${theme.screens.xs}) {
  font-size: 15px;
  line-height: 24px;
}
@media only screen and (min-width: ${theme.screens.sm}) {
  font-size: 16px;
  line-height: 24px;
}
@media only screen and (min-width: ${theme.screens.md}) {
  font-size: 16px;
  line-height: 24px;
}
`

export const Body = styled(BaseBody)`
  ${MediumBodySizes}
`

export const SmallBody = styled(BaseBody)`
  ${SmallBodySizes}
`

export const ButtonText = styled(BaseBody)`
  font-size: 20px;
  line-height: 32px;
`
