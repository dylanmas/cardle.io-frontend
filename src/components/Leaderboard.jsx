import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Leaderboard.css";
import { timeUrl } from "../backendUrls";
import { msToHMS } from "../misc/TimeFunctions";

const Leaderboard = () => {
  const [times, setTimes] = useState([]);

  useEffect(() => {
    axios
      .get(timeUrl)
      .then((data) => {
        setTimes(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="lbContainer">
        <h3>Today's Top Scores: </h3>
        <ul className="lbList">
          {times.map((time, i) => (
            <p key={i} className="rank">{`${msToHMS(time.time)} by ${
              time.email
            }`}</p>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Leaderboard;
