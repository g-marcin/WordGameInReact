import React from "react";

function GuessInput({ inputValue, setInputValue, addGuessedValue, status }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        let guess = document.getElementById("guess-input").value.toUpperCase();
        console.log({ guess: guess });
        addGuessedValue(guess);
        console.log(e);
        setInputValue("");
      }}
      className="guess-input-wrapper"
    >
      <label htmlFor="guess-input">
        Enter guess:
        <input
          id="guess-input"
          className="guess-input"
          type="text"
          value={inputValue}
          maxLength={5}
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          disabled={status === "running" ? false : true}
        ></input>
      </label>
    </form>
  );
}

export default GuessInput;
