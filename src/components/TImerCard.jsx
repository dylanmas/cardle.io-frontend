import React from 'react'
import "../styles/TimerCard.css"

const TimerCard = ({time, lives}) => {
  return (
    <div className="timerCard">
      <p>{time} </p>
      <p className="lives">{lives}</p>
    </div>
  );
}

export default TimerCard