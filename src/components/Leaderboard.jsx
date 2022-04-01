import React from 'react'
import "../styles/Leaderboard.css"
import Button from "./Button"

const Leaderboard = () => {
  return (
    <>
      <div className="lbContainer">
        <h3>Today's Top Scores: </h3>
        <ul className="lbList">
          <li className="rank">Test</li>
          <li className="rank">Test</li>
          <li className="rank">Test</li>
          <li className="rank">Test</li>
          <li className="rank">Test</li>
          <li className="rank">Test</li>
        </ul>
      </div>
      <Button text={"Play"} mt={"50px"}
        wd={"35%"}
      />
    </>
  );
}

export default Leaderboard