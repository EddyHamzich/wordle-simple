import { useState } from 'react';
import { Header } from './components/Header/Header'
import { Modal } from './components/Modal/Modal';
import { Wordle } from './components/Wordle/Wordle'
import { useLocalStorage } from './hooks/useLocalStorage'
import { randomIntFromInterval } from './util';

import wordsJson from "./words.json";

// yes I know the JSON can be malformed, but I'm not sure fetch.json() is allowed (no network requirement)
// so I am not allowed to handle the promise rejecting? (in the case of malformed JSON)
// oh well

function App() {
  const [isFirstVisit, setIsFirstVisit] = useLocalStorage<boolean>("isFirstVisit", true);

  const words: string[] = wordsJson;
  const [correctWord] = useState(words[randomIntFromInterval(0, words.length - 1)]);

  return (
    <>
      <Header />
      <Wordle words={words} correctWord={correctWord} />
      {isFirstVisit && <Modal setIsFirstVisit={setIsFirstVisit} />}
    </>
  )
}

export default App
