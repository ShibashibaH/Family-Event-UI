import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InitialScreen from './Screens/InitialScreen';
import TutorialScreen from './Screens/TutorialScreen';
import EasyModeScreen from './Screens/EasyModeScreen';
import DifficultModeFirstScreen from './Screens/DifficultModeFirstScreen';
import DifficultModeSecondScreen from './Screens/DifficultModeSecondScreen';
import GetCartoonScreen from './Screens/GetCartoonScreen';

function App() {
  return (
    // Once cpompleted, this will be the main page of the app.
    <Router>
      <Routes>
        <Route path="/" element={<InitialScreen />} />
        <Route path="/tutorial" element={<TutorialScreen />} />
        <Route path="/easy-mode" element={<EasyModeScreen />} />
        <Route path="/difficult-mode-first" element={<DifficultModeFirstScreen />} />
        <Route path="/difficult-mode-second" element={<DifficultModeSecondScreen />} />
        <Route path="/get-cartoon" element={<GetCartoonScreen />} />
      </Routes>
    </Router>


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
