import React, { useState, createContext, useContext } from "react";
import { loginUrl, signupUrl } from "../backendUrls";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState({});

  const SignUpUser = (email, password, navigate) => {
    axios
      .post(signupUrl, {
        email,
        password,
      })
      .then((data) => {
        setUser(data.data);
        localStorage.setItem("email", email);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err.response.data);
        navigate("/signup");
      });
  };

  const LoginUser = (email, password, navigate) => {
    axios
      .post(loginUrl, {
        email,
        password,
      })
      .then((data) => {
        setUser(data.data);
        if (!localStorage.getItem("email")) {
          localStorage.setItem("email", data.data.email);
        }
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
        navigate("/login");
      });
  };

  return (
    <UserContext.Provider
      value={{
        endpoints: [LoginUser, SignUpUser],
        userstuff: [user, setUser],
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
