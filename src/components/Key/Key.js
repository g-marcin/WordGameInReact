import React from "react";

import "../../styles.css";
import styles from "../../../src/mystyle.module.css";

function Key({ letter, inputValue, setInputValue }) {
  return (
    <span
      className={styles.key}
      value={letter}
      onClick={(e) => {
        if (inputValue.length < 5) {
          let newInput = inputValue + e.target.textContent;
          setInputValue(newInput);
        }
      }}
    >
      {letter}
    </span>
  );
}

export default Key;
