import React, { useState } from "react";
import "../styles/home.css"
import Background from "../components/Background";
import TitleCard from "../components/TitleCard";
import HomepageLogo from "../images/HomepageLogo.png";
import HomepageLogo2 from "../images/HomepageLogo2.png";
import Leaderboard from "../components/Leaderboard";

const Home = () => {
  return (
    <Background>
      <div className="header">
        <img src={HomepageLogo2} alt="" className="leftImg" />
        <TitleCard title={"Cardle.io"} />
        <img src={HomepageLogo} alt="" className="rightImg" />
      </div>

      <Leaderboard />
      
    </Background>
  );
};

export default Home;
