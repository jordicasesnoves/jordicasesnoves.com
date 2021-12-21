import React, { ReactNode } from 'react'
import { SectionTitle } from '../Sections.styled'

interface SectionHeaderProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode
  icon?: any
}

const SectionHeader = ({
  children,
  icon,
  ...props
}: SectionHeaderProps): JSX.Element => {
  const Icon = icon
  return (
    <div className="flex items-center mb-1 md:mb-2" {...props}>
      {icon && (
        <Icon className="w-12 h-12 md:h-20 md:w-20 -ml-2 mr-2 md:-ml-4 md:mr-4" />
      )}
      <SectionTitle>{children}</SectionTitle>
    </div>
  )
}

export default SectionHeader
