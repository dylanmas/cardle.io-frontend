import React, { useEffect, useState } from "react";
import Background from "../components/Background";
import TimerCard from "../components/TImerCard";

const Play = () => {
  const [time, setTime] = useState("");
  const [stopTime, setStopTime] = useState(false);

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
        console.log(secs)
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

  return (
    <Background>
      <TimerCard time={`Time: ${time}`} />
    </Background>
  );
};

export default Play;
