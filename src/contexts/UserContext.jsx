import React, { useState, createContext, useContext } from "react";
import { loginUrl, signupUrl } from "../backendUrls";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState({});

  const SignUpUser = (email, password) => {
    axios
      .post(signupUrl, {
        email,
        password,
      })
      .then((data) => {
        setUser(data.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const LoginUser = (email, password) => {
    axios
      .post(loginUrl, {
        email,
        password,
      })
      .then((data) => {
        setUser(data.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <UserContext.Provider
      value={{
        endpoints: [LoginUser, SignUpUser],
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
