import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnimatedHomePage from './components/AnimatedHomePage';
import StaticHomePage from './components/StaticHomePage';
import AddScriptToHead from './multilipi';

function App() {
  return (
    <>
      <AddScriptToHead />
      <Router>
        <Routes>
          <Route path="/" element={<StaticHomePage />} />
          <Route path="/animated" element={<AnimatedHomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;