import React from "react";
import { ALPHABET } from "../../data";
import "../../styles.css";
import Key from "../Key/Key";
import styles from "../../../src/mystyle.module.css";

function VisibleKeyboard({ inputValue, setInputValue }) {
  return (
    <div className={styles.keyboard}>
      {ALPHABET.map((letter) => (
        <Key letter={letter} inputValue={inputValue} setInputValue={setInputValue} />
      ))}
      <span
        className={styles.key}
        onClick={() => {
          let event = new Event({
            _reactName: "onSubmit",
            _targetInst: null,
            type: "submit",
            nativeEvent: {
              isTrusted: true,
            },
            target: {
              0: {},
            },
            currentTarget: null,
            eventPhase: 3,
            bubbles: true,
            cancelable: true,
            timeStamp: 2330844,
            defaultPrevented: true,
            isTrusted: true,
          });
          dispatchEvent(event);
        }}
      >
        ENTER
      </span>
      <span className={styles.key}>{"<="}</span>
    </div>
  );
}

export default VisibleKeyboard;
