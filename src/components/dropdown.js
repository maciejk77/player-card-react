import React, { Component } from 'react';
import PlayerStats from './player_stats';
import '../styles/dropdown.css';

class DropDown extends Component {
  constructor(props) {
    super(props)

    this.state = {
      current_player: 'Alderweireld'
    }  
    this.handle_change = this.handle_change.bind(this)
  }
  
  // setting current active player
  handle_change(event) {
    this.setState({ current_player: event.target.value })
  }

  // helper to get a list of player names in dropdown
  render_players() {
    const players = this.props.data.map(item => item.player.name)
    return players.map(player => 
      <option key={player.last} value={player.last}>{player.first} {player.last}</option>
    )
  }

  // helper to get data per given name
  get_player_data(name) {
    return this.props.data.filter(player => player.player.name.last === name)
  }

  render() {    
    return (
      <div className="dropdown">
        <select className="dropdown__select" value={this.state.current_player} onChange={this.handle_change}>
          {this.render_players()}
        </select>
        <PlayerStats
          data={this.get_player_data(this.state.current_player)}
        />
      </div>
    )
  }
}

export default DropDown
