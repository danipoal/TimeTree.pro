import { useState } from 'react';
import './styles/App.css';
import React from 'react';
import TestCalendar from './components/TestCalendar';

function App() {
  return (
    <div className="App">
      <button className="btn">Hello daisyUI</button>
      <TestCalendar />
    </div>
  );
}

export default App;
