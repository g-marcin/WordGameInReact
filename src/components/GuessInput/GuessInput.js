import React from "react";

function GuessInput({ inputValue, setInputValue, addGuessedValue, status }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        let guess = document.getElementById("guess-input").value.toUpperCase();
        console.log({ guess: guess });
        addGuessedValue(guess);

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
          minLength={5}
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
