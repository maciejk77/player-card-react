import React from 'react';
//import '.../styles/style.css'
import '../styles/badges.css';

const PlayerStats = (props) => {

  // set of player data
  const player = props.data.player
  const first_name = player.name.first
  const last_name = player.name.last
  const position = player.info.positionInfo
  
  // fetching club badge with matching CSS class
  const team_name = (props.data.player.currentTeam.name.toLowerCase().split(' '));
  const club_badge_class = `${team_name[0]}-${team_name[1]}`;

  // remapping stats object to have key/value pair e.g. {name: goals, value: 5} ==> {goals: 5, ...}
  const remapped_data = props.data.stats.reduce((previousValue, currentValue) => {
    previousValue[currentValue.name] = currentValue.value;
    return previousValue;
  }, {})

  // set of player statistics
  const { appearances, goals, goal_assists, backward_pass, fwd_pass, mins_played } = remapped_data
  const goals_per_match = (goals / appearances).toFixed(2)
  const passes_per_minute = ((backward_pass + fwd_pass) / mins_played).toFixed(2)
  
return (
    <div>
      <div key={last_name}></div>
      <div className="card__player-image"><img src={require(`../assets/p${props.data.player.id}.png`)} alt="" /></div>
      <div className="card__club-badge"><div className={club_badge_class}></div></div> 
      
      <div className="card__info">
        <div className="info">{first_name} {last_name}</div>
        <div className="info">{position}</div>
      </div>
            
      <div className="card__stats-group">  
        <div className="stats-group__item">Appearances <span className="stats-group__item-data">{appearances}</span></div>
        <div className="stats-group__item">Goals <span className="stats-group__item-data">{goals}</span></div>
        <div className="stats-group__item">Assists <span className="stats-group__item-data">{goal_assists}</span></div>
        <div className="stats-group__item">Goals per match <span className="stats-group__item-data">{goals_per_match}</span></div>
        <div className="stats-group__item">Passes per minute <span className="stats-group__item-data">{passes_per_minute}</span></div>
      </div>
    </div>
  )

}

export default PlayerStats;




