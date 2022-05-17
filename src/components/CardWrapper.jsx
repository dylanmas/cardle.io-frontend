import React, { useEffect } from "react";
import Card from "react-free-playing-cards";
import "../styles/CardWrapper.css";
import { useUserStats } from "../contexts/UserStats";
import { convertToMs } from "../misc/TimeFunctions";

const CardWrapper = ({ card, time, setStopTime }) => {
  const { actions } = useUserStats();
  let { RemoveLife, ResetLives } = actions;

  useEffect(() => {
    if (card.random) {
      console.log(card);
    }
  }, []);

  const onCardClicked = (e) => {
    if (card.random === true) {
      setStopTime(true);
      console.log(convertToMs(time));
    }
  };

  return (
    <div className="cd" onClick={onCardClicked}>
      <Card card={card.type} className="card" />
    </div>
  );
};

export default CardWrapper;
