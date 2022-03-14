import React from "react";
import "../styles/inputcomponent.css";

const InputComponent = ({ placeholder, password }) => {
  return (
    <input
      className="mainInput"
      placeholder={placeholder}
      type={password ? "password" : "text"}
    ></input>
  );
};

export default InputComponent;
