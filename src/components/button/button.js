import React from "react";
import "./button.css";

const Button = props => {
  return <button className={`btn ${props.class}`}>{props.text}</button>;
};

export default Button;
