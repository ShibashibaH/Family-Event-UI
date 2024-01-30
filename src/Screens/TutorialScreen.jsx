import React from 'react';
import GoToInitialButton from '../Components/Shared/GoToInitialButton';
import GoToEasyButton from '../Components/Shared/GoToEasyButton';
import GoToDifficultFirstButton from '../Components/Shared/GoToDifficultFirstButton';

const TutorialScreen = () => {
  return (
    <div>
      <h2>Tutorial</h2>
      <video controls src="/src/Contents/tutorial-video.mp4">
        Your browser does not support the video tag.
      </video>
      <div>
        <GoToInitialButton />
        <GoToEasyButton />
        <GoToDifficultFirstButton />
      </div>
    </div>
  );
};

export default TutorialScreen;
