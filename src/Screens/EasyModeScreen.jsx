
import React, { useState } from 'react';
import GoToInitialButton from '../Components/Shared/GoToInitialButton';
import GoToGetCartoonButton from '../Components/Shared/GoToGetCartoonButton';

const EasyModeScreen = () => {
  // user input state
  const [userInput, setUserInput] = useState('');

  // key word button click handler
  const handleKeywordClick = (keyword) => {
    setUserInput(keyword);
  };

  return (
    <div>
      <h2>Easy Mode</h2>
      <div>
        <button onClick={() => handleKeywordClick('Park')}>Park</button>
        <button onClick={() => handleKeywordClick('Beach')}>Beach</button>
        <button onClick={() => handleKeywordClick('City')}>City</button>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Enter your own keyword"
        />
      </div>
      <div>
        <GoToInitialButton />
        <GoToGetCartoonButton />
      </div>
    </div>
  );
};

export default EasyModeScreen;
