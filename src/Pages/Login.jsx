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

import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";

const Login = () => {
  const [userPassword, setUserPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();
  const { endpoints } = useUser();
  const [LoginUser, SignupUser] = endpoints;

  const onSubmit = (e) => {
    e.preventDefault();
    LoginUser(userEmail, userPassword, navigate);
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

        <LinkTag text={"Don't have an account? "} path={"/signup"} />
        <Button onClick={onSubmit} text={"Login"} />
      </InputForm>
    </Background>
  );
};

export default Login;
