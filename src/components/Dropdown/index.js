import React, { useState } from 'react';
import PlayerStats from '../PlayerStats';
import '../../styles/dropdown.css';

const Dropdown = ({ data }) => {
  const [currentPlayer, setCurrentPlayer] = useState('Alderweireld');

  const handleChange = e => {
    setCurrentPlayer(e.target.value);
  };

  const renderPlayers = () => {
    const players = data.map(item => item.player.name);
    return players.map(player => (
      <option key={player.last} value={player.last}>
        {player.first} {player.last}
      </option>
    ));
  };

  const getPlayerData = name => {
    return data.filter(player => player.player.name.last === name);
  };

  return (
    <div className="dropdown">
      <select
        className="dropdown__select"
        value={currentPlayer}
        onChange={handleChange}
      >
        {renderPlayers()}
      </select>
      <PlayerStats data={getPlayerData(currentPlayer)} />
    </div>
  );
};

export default Dropdown;
