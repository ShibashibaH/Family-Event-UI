// Screens/DifficultModeSecondScreen.jsx
import React, { useState } from 'react';
import GoToGetCartoonButton from '../Components/Shared/GoToGetCartoonButton';
import GoToDifficultFirstButton from '../Components/Shared/GoToDifficultFirstButton';

const DifficultModeSecondScreen = () => {
  // Managomg the story description state
  const [story, setStory] = useState('This is the story generated by ChatGPT output...');

  return (
    <div>
      <h2>Difficult Mode: Step 2</h2>
      <div>
        <label htmlFor="story-edit">Edit the Story:</label>
        <textarea
          id="story-edit"
          value={story}
          onChange={(e) => setStory(e.target.value)}
          rows="10"
          cols="50"
        />
      </div>
      <div>
        <GoToDifficultFirstButton />
        <GoToGetCartoonButton />
      </div>
    </div>
  );
};

export default DifficultModeSecondScreen;