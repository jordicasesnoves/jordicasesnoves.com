import React from 'react'
import { SectionTitle } from '../Sections.styled'

const SectionHeader = ({ children, icon, ...props }: any): JSX.Element => {
  const Icon = icon
  return (
    <SectionTitle className="h-12 md:h-20 mb-1 md:mb-2">
      {icon && (
        <Icon className="w-12 h-12 md:h-20 md:w-20 -ml-2 mr-2 md:-ml-4 md:mr-4" />
      )}
      {children}
    </SectionTitle>
  )
}

export default SectionHeader
