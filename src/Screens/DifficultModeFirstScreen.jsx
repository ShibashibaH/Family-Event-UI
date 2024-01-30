import React, { useState } from 'react';
import GoToInitialButton from '../Components/Shared/GoToInitialButton';
import GoToDifficultSecondButton from '../Components/Shared/GoToDifficultSecondButton';

const DifficultModeFirstScreen = () => {
  // プロンプトの入力値を管理するstate
  const [prompt, setPrompt] = useState('Please enter your prompt for the story...');

  return (
    <div>
      <h2>Difficult Mode: Step 1</h2>
      <div>
        <label htmlFor="prompt-input">Your Prompt:</label>
        <input
          type="text"
          id="prompt-input"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
      </div>
      <div>
        <GoToInitialButton />
        <GoToDifficultSecondButton />
      </div>
    </div>
  );
};

export default DifficultModeFirstScreen;