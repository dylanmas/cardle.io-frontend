import React from 'react'
import "../styles/background.css"


const Background = ({children}) => {
  return (
    <div className='background'>{children}</div>
  )
}

export default Background