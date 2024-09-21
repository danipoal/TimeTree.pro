import { useState } from 'react';
import './styles/App.css';
import React from 'react';
import TestCalendar from './components/TestCalendar';
import Header from './components/layout/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <button className="btn">Hello daisyUI</button>
      <TestCalendar />
    </div>
  );
}

export default App;
