import { useState } from "react";
import { WordInput } from "./WordInput";
import { WordleProps, WordInputProps } from "../../types";
import "./Wordle.css";

const TRIES = 5;

export function Wordle({ words, correctWord }: WordleProps) {
  const [focusIndex, setFocusIndex] = useState(0);

  const wordInputs: WordInputProps[] =
    [...Array(TRIES).keys()]
    .map(() => ({ words, correctWord, focusIndex, setFocusIndex, isFocused: false, isLast: false }));

  console.log(correctWord);

  return (
    <div data-testid="wordle" className='wordle'>
      {wordInputs.map(({ words, correctWord, setFocusIndex }, i) => (
        <WordInput
          words={words}
          correctWord={correctWord}
          focusIndex={i}
          setFocusIndex={setFocusIndex}
          isFocused={focusIndex == i}
          isLast={wordInputs.length - 1 == i}
          key={i}
        />
      ))}
    </div>
  )
}
