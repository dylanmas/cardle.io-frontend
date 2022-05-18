import React, { useState, createContext, useContext } from "react";
import { loginUrl, signupUrl } from "../backendUrls";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState({});

  const SignUpUser = (email, password) => {
    let success = false;

    axios
      .post(signupUrl, {
        email,
        password,
      })
      .then((data) => {
        setUser(data.data);
        success = true;
      })
      .catch((err) => {
        console.log(err.response.data);
      });
    return success;
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
        console.log(err);
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
