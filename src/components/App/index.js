import React from 'react';
import DropDown from '../Dropdown/index.js';
import { players } from '../../data/data.json';
import './app.css';

const App = () => {
  return (
    <div className="app">
      <DropDown data={players} />
    </div>
  );
};

export default App;
