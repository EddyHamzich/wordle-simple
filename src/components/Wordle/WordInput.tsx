import { useState } from "react";
import { WordInputProps } from "../../types";
import { getLetterState } from "./getLetterState";

const WORD_LENGTH = 5;

export function WordInput({ words, correctWord, focusIndex, setFocusIndex, isFocused, isLast }: WordInputProps) {

  const letters = [...Array(WORD_LENGTH).keys()].map(() => "");

  const [inputValues, setInputValues] = useState<string[]>(letters);

  const isNotWord = !words.includes(inputValues.join(""));
  const isSubmittable = inputValues.every((letter) => letter !== "");
  const isCorrectWord = !isNotWord && inputValues.join("") === correctWord;

  return (
    <div className={`wordle-word ${focusIndex}`} data-testid={`wordle-word ${focusIndex}`}>

      <div className={`inputs-wrapper ${isFocused ? "focused" : ""}`}>
        {letters.map((_, letterIndex) => 
          <input
            type="text"
            key={letterIndex}
            value={inputValues[letterIndex]}
            onChange={(e) => (
              setInputValues(inputValues.map((letter, i) => i == letterIndex ? e.target.value.toLowerCase() : letter))
            )}
            className={`wordle-letter ${getLetterState(isFocused, letterIndex, inputValues, correctWord)}`}
            maxLength={1}
            readOnly={!isFocused}
            tabIndex={!isFocused ? -1 : 0}
            data-testid={`wordle-letter ${letterIndex} ${focusIndex}`}
          />
        )}
      </div>

      {
        <button
          className={`wordle-confirm ${focusIndex}`}
          data-testid={`wordle-confirm ${focusIndex}`}
          style={{ visibility: isSubmittable && isFocused ? "visible" : "hidden" }}
          disabled={isNotWord}
          onClick={() => {
            if(isCorrectWord || isLast) return window.location.reload(); // yes I can reset it with state too...
            if(isSubmittable && !isNotWord) setFocusIndex((prev: number) => prev + 1)}
          }>
            {!isCorrectWord ? (isNotWord ? "Not in list" : "Confirm") : "New Game?"}
        </button>
      }

    </div>
  )
}
