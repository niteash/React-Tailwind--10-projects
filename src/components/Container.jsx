import React from 'react'

export const Container = ({children, className}) => {
  return (
    <div className={`w-full md:w-[800px] lg:w-[1470px] overscroll-x-none overflow-hidden mx-auto  ${className}`}>{children}</div>
  )
}
