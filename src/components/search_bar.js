import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      current_player: ''
    }  
    this.handle_change = this.handle_change.bind(this)
  }
  
  handle_change(event) {
    this.setState({ current_player: event.target.value })
  }

  render_players() {
    const players = this.props.data.map(item => item.player.name.last)
    return players.map(player => 
      <option key={player} value={player}>{player}</option>
    )
  }

  render() {    
    return (
      <select className="card__select" value={this.state.current_player} onChange={this.handle_change}>
        {/* <option value="">Select a player...</option> */}
        {this.render_players()}
      </select>
    )
  }
}

export default SearchBar
