import React, { Component } from 'react';
import DropDown from './components/dropdown';
import PlayerStats from './components/player_stats';
import { players } from './data/data.json';

class App extends Component {

    // this.props.data.filter(pl => (pl.player.id === 4246))
    //const data = this.players.filter(player => player.player.name.last === name)

  render() {

    return (
      <div>
        <DropDown data={players} />
        <PlayerStats data={players[0]}/>
      </div>
    );
  }
}

export default App;