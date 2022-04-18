import React, { useEffect, useState } from "react";
import Background from "../components/Background";
import TimerCard from "../components/TImerCard";
import '../styles/play.css'
import Card from "react-free-playing-cards"


const Play = () => {
  const [time, setTime] = useState("");
  const [stopTime, setStopTime] = useState(true);
  const [cardsArray, setCardsArray] = useState([])
  const [lives, setLives] = useState(0)
  const [rcard, setRCard] = useState({})


  useEffect(() => {
    let secs = 0;
    let mins = 0;
    let hrs = 0;

    let secsStr = 0
    let minsStr = 0
    let hrsStr = 0

    let interval = setInterval(() => {
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
        minsStr = "0" + mins.toString()
      } else {
        minsStr = mins;
      }
      if (hrs < 10) {
        hrsStr = "0" + hrs.toString()
      } else {
        hrsStr = hrs;
      }

      setTime(`${hrsStr}:${minsStr}:${secsStr}`);
    }, 1000);
    if (stopTime) {
      clearInterval(interval);
    }
  }, []);

  useEffect(() => {
    placeCards()
  }, [])

 
  const cardClicked = (e) => {
    console.log(e)
  }



  const placeCards = () => {
      let temp = [];
      const suits = ['c', 'd', 'h', 's']
      const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A']
      for(let i=0; i<suits.length; i++){
          for(let j=0; j<ranks.length; j++){
            temp = [...temp, {type: `${ranks[j]}${suits[i]}`}]
          }
      }
    setCardsArray(temp)    
  }

  return (
    <Background>
      <TimerCard time={`Time: ${time}`} />
      <div className="cardHolder">
        {cardsArray.map((card, i) => (
            <Card card={card.type} key={i} className="card" onClick={cardClicked}/>
        ))}
      </div>
    </Background>
  );
};

export default Play;
