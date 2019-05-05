import React, { useState } from 'react';
import PlayerStats from './PlayerStats';
import '../styles/dropdown.css';

const DropDown = ({ data }) => {
  const [currentPlayer, setCurrentPlayer] = useState('Alderweireld');

  // helper to get a list of player names in dropdown
  const renderPlayers = () => {
    const players = data.map(item => item.player.name)
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
  const getPlayerData = name => {
    return data.filter(player => player.player.name.last === name)
  }

  if(!data) { return null };    

  return (
    <div className="dropdown">
      <select className="dropdown__select" 
        value={currentPlayer} 
        onChange={event => setCurrentPlayer(event.target.value)}
      >
        {renderPlayers()}
      </select>
      <PlayerStats
        data={getPlayerData(currentPlayer)}
      />
    </div>
  )  
}

export default DropDown;
