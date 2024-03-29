import React from 'react'

export const HamburguerIcon: React.FC<any> = (props) => {
  return (
    <svg width={24} {...props} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M3,8H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,8Zm18,8H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-5H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"
      />
    </svg>
  )
}
