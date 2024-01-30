import React from 'react';
import { Link } from 'react-router-dom';

const GoToTutorialButton = () => (
  <Link to="/tutorial">
    <button>Go to Tutorial</button>
  </Link>
);

export default GoToTutorialButton;