import { Dispatch, SetStateAction } from "react";

export type WordleProps = { 
  words: string[],
  correctWord: string
};

export type ModalProps = { 
  setIsFirstVisit: Dispatch<SetStateAction<boolean>>
};

export type WordInputProps = { 
  words: string[],
  correctWord: string,
  focusIndex: number,
  setFocusIndex: Dispatch<SetStateAction<number>>
  isFocused: boolean,
  isLast: boolean,
  isConfirmed?: boolean
};