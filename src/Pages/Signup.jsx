import React, { useState } from "react";
import Background from "../components/Background";
import TitleCard from "../components/TitleCard";
import HomepageLogo from "../images/HomepageLogo.png";
import InputComponent from "../components/InputComponent";
import Button from "../components/Button";
import InputForm from "../components/InputForm";
import LinkTag from "../components/LinkTag"

const Signup = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Background>
      <TitleCard title={"Cardle.io"} />
      <img
        src={HomepageLogo}
        style={{ objectFit: "contain", width: "225px", marginTop: "20px" }}
      />
      <InputForm>
        <InputComponent password={false} placeholder={"Email"} />
        <InputComponent password={true} placeholder={"Password"} />

        <LinkTag text={"Already have an account? "} path={"/login"}/>
        <Button text={"Sign up"} />
      </InputForm>
    </Background>
  );
};

export default Signup;
