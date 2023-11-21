import React from 'react';
import {  AppContextProvider  } from './component/AppContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateJob from './component/CreateJob';
import Step2 from './component/Step2';
import Card from './component/Card';

function App() {
  return (
    <Router>
      <AppContextProvider>
        <Routes>
          <Route path="/" element={<CreateJob />} />
          <Route path="/step2" element={<Step2 />} />
          <Route path="/card/:userId" element={<Card />} />
        </Routes>
      </AppContextProvider>
    </Router>
  );
}

export default App;
