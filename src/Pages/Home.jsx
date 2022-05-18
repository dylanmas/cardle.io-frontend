import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";
import Background from "../components/Background";
import TitleCard from "../components/TitleCard";
import HomepageLogo from "../images/HomepageLogo.png";
import HomepageLogo2 from "../images/HomepageLogo2.png";
import Leaderboard from "../components/Leaderboard";
import Button from "../components/Button";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Background>
      <div className="header">
        <img src={HomepageLogo2} alt="" className="leftImg" />
        <TitleCard title={"Cardle.io"} />
        <img src={HomepageLogo} alt="" className="rightImg" />
      </div>

      <Leaderboard />
      <Button
        text={"Play"}
        mt={"50px"}
        wd={"35%"}
        onClick={() => navigate("/play")}
      />
    </Background>
  );
};

export default Home;
