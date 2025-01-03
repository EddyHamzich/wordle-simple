import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import userEvent from '@testing-library/user-event';
import wordsJson from "../../../words.json";
import { Wordle } from '../Wordle';

describe('Wordle', () => {
  it('checks typing OTTER, only counts the correct T at correct index, when correct word is WATER', async () => {
    const user = userEvent.setup()
    const words = wordsJson;
    const correctWord = words[0]; // WATER

    render(
      <Wordle words={wordsJson} correctWord={correctWord} />
    );

    const char0 = screen.getByTestId("wordle-letter 0 0");
    const char1 = screen.getByTestId("wordle-letter 1 0");
    const char2 = screen.getByTestId("wordle-letter 2 0");
    const char3 = screen.getByTestId("wordle-letter 3 0");
    const char4 = screen.getByTestId("wordle-letter 4 0");
    // I'm hardcoding cause its a test, and easier to read (I'm just lazy tbh)
    await user.type(char0, "o");
    await user.type(char1, "t");
    await user.type(char2, "t");
    await user.type(char3, "e");
    await user.type(char4, "r");

    await user.click(screen.getByTestId("wordle-confirm 0"));

    expect(char0).toHaveClass("wrong");
    expect(char1).toHaveClass("wrong");
    expect(char2).toHaveClass("correct");
    expect(char3).toHaveClass("correct");
    expect(char4).toHaveClass("correct");
  });
});
