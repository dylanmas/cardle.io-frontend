import React, { useState } from "react";
import axios from "axios";
import Background from "../components/Background";
import TitleCard from "../components/TitleCard";
import HomepageLogo from "../images/HomepageLogo.png";
import InputComponent from "../components/InputComponent";
import Button from "../components/Button";
import InputForm from "../components/InputForm";
import LinkTag from "../components/LinkTag";
import { loginUrl } from "../backendUrls";

const Login = () => {
  const [userPassword, setUserPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post(loginUrl, {
        email: userEmail,
        password: userPassword,
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
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
