import React, { useState } from "react";
import Background from "../components/Background";
import TitleCard from "../components/TitleCard";
import HomepageLogo from "../images/HomepageLogo.png";
import InputComponent from "../components/InputComponent";
import Button from "../components/Button";
import InputForm from "../components/InputForm";
import LinkTag from "../components/LinkTag";

const Home = () => {
  return (
    <Background>
      <div className="wrapper" style={{ display: "flex", justifyContent: "space-evenly", width: "100%" }}>
        <img
          src={HomepageLogo}
          style={{
            objectFit: "contain",
            width: "120px",
            marginTop: "30px",
          }}
        />
        <TitleCard title={"Cardle.io"} />
        <img
          src={HomepageLogo}
          style={{
            objectFit: "contain",
            width: "120px",
            marginTop: "30px",
          }}
        />
      </div>
      <Button text={"Login"} />
    </Background>
  );
};

export default Home;
