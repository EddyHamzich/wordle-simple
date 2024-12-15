import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import wordsJson from "../../../words.json";
import { WordInput } from '../WordInput';

describe('WordleInput', () => {
  it('checks confirm button is initially invisible, but still in the DOM', async () => {
    const id = "wordle-confirm 0";
    const words = wordsJson;
    const correctWord = words[0];
    
    render(<WordInput words={words} correctWord={correctWord} focusIndex={0} setFocusIndex={() => 0} isFocused={false} isLast={false} />);
    
    expect(screen.getByTestId(id)).toBeInTheDocument();
    expect(screen.getByTestId(id)).not.toBeVisible();
  });
});
