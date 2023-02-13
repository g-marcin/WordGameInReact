import React from "react";
import "../../reset.css";

function Button({ onClick }) {
  return <button onClick={onClick}>Reset</button>;
}

export default Button;
