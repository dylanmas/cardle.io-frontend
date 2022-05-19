import React, { useEffect, useState } from "react";
import "../styles/play.css";
import { Background, TimerCard, CardWrapper } from "../components";

import { useUserStats } from "../contexts/UserStats";

const Play = () => {
  const [time, setTime] = useState("");
  const [stopTime, setStopTime] = useState(false);
  const [cardsArray, setCardsArray] = useState([]);
  const { actions } = useUserStats();
  let { ResetLives } = actions;

  useEffect(() => {
    let interval;
    if (stopTime) {
      clearInterval(interval);
    } else if (stopTime === false) {
      let secs = 0;
      let mins = 0;
      let hrs = 0;

      let secsStr = 0;
      let minsStr = 0;
      let hrsStr = 0;

      interval = setInterval(() => {
        secs++;
        if (secs / 60 === 1) {
          secs = 0;
          mins++;
          if (mins / 60 === 1) {
            mins = 0;
            hrs++;
          }
        }
        if (secs < 10) {
          secsStr = "0" + secs.toString();
        } else {
          secsStr = secs;
        }
        if (mins < 10) {
          minsStr = "0" + mins.toString();
        } else {
          minsStr = mins;
        }
        if (hrs < 10) {
          hrsStr = "0" + hrs.toString();
        } else {
          hrsStr = hrs;
        }

        setTime(`${hrsStr}:${minsStr}:${secsStr}`);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [stopTime]);

  useEffect(() => {
    placeCards();
    ResetLives();
  }, []);

  const pickRandomCard = (arr) => {
    const temp = [...arr];
    const rIndex = Math.floor(Math.random() * temp.length);
    const currentCard = temp[rIndex];
    const rCard = { ...currentCard, random: true };
    temp[rIndex] = rCard;
    return temp;
  };

  const placeCards = () => {
    let temp = [];
    const suits = ["c", "d", "h", "s"];
    const ranks = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "T",
      "J",
      "Q",
      "K",
      "A",
    ];
    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < ranks.length; j++) {
        temp = [...temp, { type: `${ranks[j]}${suits[i]}` }];
      }
    }
    setCardsArray(pickRandomCard(temp));
  };

  return (
    <Background>
      <TimerCard time={`Time: ${time}`} />
      <div className="cardHolder">
        {cardsArray.map((card, i) => (
          <CardWrapper
            card={card}
            key={i}
            time={time}
            setStopTime={setStopTime}
          />
        ))}
      </div>
    </Background>
  );
};

export default Play;
