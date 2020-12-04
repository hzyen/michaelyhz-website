import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './component/header/header.component';
import Home from './pages/home/home.component';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
