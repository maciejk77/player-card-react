import React, { Component } from 'react';
import DropDown from './components/Dropdown';
import { players } from './data/data.json';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <DropDown data={players} />
      </div>
    );
  }
}

export default App;