import React from "react";
import "../styles/inputcomponent.css";

const InputComponent = ({ placeholder, password, value, setValue}) => {
  return (
    <input
      className="mainInput"
      placeholder={placeholder}
      type={password ? "password" : "text"}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    ></input>
  );
};

export default InputComponent;
