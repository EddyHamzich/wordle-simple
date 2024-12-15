// types are cool.
type LetterState = "wrong" | "wrongIndex" | "correct";

export function getLetterState(
  isFocused: boolean,
  inputIndex: number,
  inputValues: string[],
  correctWord: string
): LetterState {

  if(isFocused && inputValues.join("") !== correctWord) return "wrong";

  const target = correctWord.split('');
  const guess = inputValues;

  const solutionCharsTaken = target.map(() => false);

  const statuses: LetterState[] = Array.from(Array(inputValues.length));

  guess.forEach((letter, i) => {
    if (letter === target[i]) {
      statuses[i] = 'correct';
      solutionCharsTaken[i] = true;
      return;
    }
  })

  guess.forEach((letter, i) => {
    if (statuses[i]) return;

    if (!target.includes(letter)) {
      statuses[i] = 'wrong';
      return;
    }

    const indexOfPresentChar = target.findIndex(
      (x, index) => x === letter && !solutionCharsTaken[index]
    )

    if (indexOfPresentChar > -1) {
      statuses[i] = 'wrongIndex';
      solutionCharsTaken[indexOfPresentChar] = true;
      return;
    } else {
      statuses[i] = 'wrong';
      return;
    }
  })

  if(inputValues.join("") == correctWord) return statuses[inputIndex];

  if(!isFocused) return statuses[inputIndex];

  return "wrong";
}
