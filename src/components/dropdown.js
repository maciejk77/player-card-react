import React, { Component } from 'react';
import PlayerStats from './PlayerStats';
import '../styles/dropdown.css';

class DropDown extends Component {
  constructor(props) {
    super(props)

    this.state = {
      current_player: 'Alderweireld'
    }  
  }
  
  // setting current active player
  handleChange = event => {
    this.setState({ current_player: event.target.value })
  }

  // helper to get a list of player names in dropdown
  renderPlayers = () => {
    const players = this.props.data.map(item => item.player.name)
    return players.map(player => 
      <option 
        key={player.last} 
        value={player.last}
      >
        {player.first} {player.last}
      </option>
    )
  }

  // helper to get data per given name
  getPlayerData = name => {
    return this.props.data.filter(player => player.player.name.last === name)
  }

  render() {
    if(!this.props.data) { return null };    
    return (
      <div className="dropdown">
        <select className="dropdown__select" value={this.state.current_player} onChange={this.handleChange}>
          {this.renderPlayers()}
        </select>
        <PlayerStats
          data={this.getPlayerData(this.state.current_player)}
        />
      </div>
    )
  }
}

export default DropDown;
