import React from "react";
import "../styles/button.css";

const Button = ({ text, wd, mt, onClick }) => {
  return (
    <button
      onClick={onClick ? onClick : () => {}}
      style={{ width: wd, marginTop: mt }}
      className="button"
    >
      {text}
    </button>
  );
};

export default Button;
