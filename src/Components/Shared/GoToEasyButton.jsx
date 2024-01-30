import React from 'react';
import { Link } from 'react-router-dom';

const GoToEasyButton = () => (
  <Link to="/easy-mode">
    <button>Go to Easy Mode</button>
  </Link>
);

export default GoToEasyButton;