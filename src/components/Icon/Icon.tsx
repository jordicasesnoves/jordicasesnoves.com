import React from 'react'
import { IconWrapper, IconWrapperProps } from './Icon.styled'

interface IconProps extends IconWrapperProps {
  icon?: React.FC
}

const Icon = ({ icon, size = 'medium' }: IconProps): JSX.Element => {
  const SVGIcon = icon
  return (
    <>
      <IconWrapper size={size}>
        <SVGIcon />
      </IconWrapper>
    </>
  )
}

export default Icon
