import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";

import HomepageLogo from "../images/HomepageLogo.png";
import HomepageLogo2 from "../images/HomepageLogo2.png";

import { Background, TitleCard, Leaderboard, Button } from "../components";

import { useUser } from "../contexts/UserContext";

const Home = () => {
  const navigate = useNavigate();
  const { userstuff } = useUser();
  const [user, setUser] = userstuff;

  const onLogout = () => {
    localStorage.removeItem("email");
    setUser({});
    navigate("/login");
  };

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
      <Button text={"Log out"} mt={"25px"} wd={"35%"} onClick={onLogout} />
    </Background>
  );
};

export default Home;
