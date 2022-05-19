import React, { useState } from "react";
import HomepageLogo from "../images/HomepageLogo.png";
import {
  Background,
  TitleCard,
  InputComponent,
  Button,
  InputForm,
  LinkTag,
} from "../components";

import { useUser } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [userPassword, setUserPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const { endpoints } = useUser();
  const [LoginUser, SignupUser] = endpoints;
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    SignupUser(userEmail, userPassword, navigate);
  };

  return (
    <Background>
      <TitleCard title={"Cardle.io"} />
      <img
        src={HomepageLogo}
        style={{ objectFit: "contain", width: "225px", marginTop: "20px" }}
      />
      <InputForm>
        <InputComponent
          password={false}
          placeholder={"Email"}
          value={userEmail}
          setValue={setUserEmail}
        />
        <InputComponent
          password={true}
          placeholder={"Password"}
          value={userPassword}
          setValue={setUserPassword}
        />
        <LinkTag text={"Already have an account? "} path={"/login"} />
        <Button onClick={onSubmit} text={"Signup"} />
      </InputForm>
    </Background>
  );
};

export default Signup;
