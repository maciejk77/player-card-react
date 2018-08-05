import React from 'react';
import '../styles/player_stats.css'
import '../styles/badges.css';

const PlayerStats = (props) => {

  // set of player data
  const player = props.data[0].player
  const first_name = player.name.first
  const last_name = player.name.last
  const position = player.info.positionInfo.split(' ').pop()
  
  // fetching club badge with matching CSS class
  const team_name = (props.data[0].player.currentTeam.name.toLowerCase().split(' '));
  const club_badge_class = team_name.length > 1 ? `${team_name[0]}-${team_name[1]}` : `${team_name[0]}`;

  // remapping stats object to have key/value pair e.g. {name: goals, value: 5} ==> {goals: 5, ...}
  const remapped_data = props.data[0].stats.reduce((previousValue, currentValue) => {
    previousValue[currentValue.name] = currentValue.value;
    return previousValue;
  }, {})

  // set of player statistics
  const { appearances, goals, goal_assist, backward_pass, fwd_pass, mins_played } = remapped_data
  const goals_per_match = (goals / appearances).toFixed(2)
  const passes_per_minute = ((backward_pass + fwd_pass) / mins_played).toFixed(2)
  
  return (
    <div className="card">
      
      <div className="wrapper">
        <div className="card__player-image"><img src={require(`../assets/p${props.data[0].player.id}.png`)} style={{width: "20rem"}} alt="" /></div>
        <div className="card__club-badge"><div className={club_badge_class}></div></div> 
      </div>
     
      <div className="info">
        <div className="info__name">{first_name} {last_name}</div>
        <div className="info__position">{position}</div>
      </div>
      
      <div className="stats">  
        <div className="stats__item">Appearances<span className="stats__item-data">{appearances}</span></div>
        <div className="stats__item">Goals<span className="stats__item-data">{goals}</span></div>
        <div className="stats__item">Assists<span className="stats__item-data">{goal_assist ? goal_assist : 'No Data'}</span></div>
        <div className="stats__item">Goals per match<span className="stats__item-data">{goals_per_match}</span></div>
        <div className="stats__item">Passes per minute<span className="stats__item-data">{passes_per_minute}</span></div>
      </div>

    </div>
  )

}

export default PlayerStats;



