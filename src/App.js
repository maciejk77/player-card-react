import React, { Component } from 'react';
import SearchBar from './components/search_bar';
import PlayerStats from './components/player_stats';
import { players } from './data/data.json';

class App extends Component {

    // this.props.data.filter(pl => (pl.player.id === 4246))
    //const data = this.players.filter(player => player.player.name.last === name)

  render() {

    return (
      <div>
        <SearchBar data={players} />
        <PlayerStats data={players[0]}/>
      </div>
    );
  }
}

export default App;