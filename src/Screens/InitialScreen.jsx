import React from 'react';
import GoToTutorialButton from '../Components/Shared/GoToTutorialButton';
import GoToEasyButton from '../Components/Shared/GoToEasyButton';
import GoToDifficultFirstButton from '../Components/Shared/GoToDifficultFirstButton';

const InitialScreen = () => {
  return (
    <div>
      <h1>Welcome to the 4 Scene Cartoon Generation App</h1>
      <GoToTutorialButton />
      <GoToEasyButton />
      <GoToDifficultFirstButton />
      <div>
        <label htmlFor="language-select">Choose a language:</label>
        <select id="language-select">
          <option value="English">English</option>
          <option value="Japanese">Japanese</option>
        </select>
      </div>
    </div>
  );
};

export default InitialScreen;
