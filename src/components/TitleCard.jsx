import React from 'react'

import "../styles/titlecard.css"

const TitleCard = ({title}) => {
  return (
    <div className='container'>
        <header>{title}</header>
    </div>
  )
}

export default TitleCard