import React from "react";
import "../styles/TimerCard.css";
import { useUserStats } from "../contexts/UserStats";

const TimerCard = ({ time }) => {
  const { life } = useUserStats();
  const [lives] = life;
  return (
    <div className="timerCard">
      <p>{time}</p>
      <p className="lives">{`Lives: ${lives}`}</p>
    </div>
  );
};

export default TimerCard;
