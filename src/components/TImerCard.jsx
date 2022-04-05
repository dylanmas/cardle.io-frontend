import React from 'react'
import "../styles/TimerCard.css"

const TimerCard = ({time}) => {
  return (
    <div className='timerCard'><p>{time}</p></div>
  )
}

export default TimerCard