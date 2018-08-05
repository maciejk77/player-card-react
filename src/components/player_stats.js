import React from 'react';
//import '.../styles/styles.css'

const PlayerStats = (props) => {

  const team = props.data.player.currentTeam.name
  const first_name = props.data.player.name.first
  const last_name = props.data.player.name.last
  const position = props.data.player.info.positionInfo

  // console.log(props.data.stats);

  const remapped_data = props.data.stats.reduce((previousValue, currentValue) => {
    previousValue[currentValue.name] = currentValue.value;
    return previousValue;
  }, {})

  const appearances = remapped_data.appearances
  const goals = remapped_data.goals
  const assists = remapped_data.goal_assists
  const goals_per_match = (remapped_data.goals / remapped_data.appearances).toFixed(2)
  const passes_per_minute = ((remapped_data.backward_pass + remapped_data.fwd_pass) / remapped_data.mins_played).toFixed(2)
  
return (
    <div>
      <div key={last_name}></div>
      <div className="card__player-image"><img src={require(`../assets/p${props.data.player.id}.png`)} alt="" /></div>
      <div className="card__club-badge"><div className={team}>{team}</div></div> 
      
      <div className="card__info">
        <div className="info">{first_name} {last_name}</div>
        <div className="info">{position}</div>
      </div>
            
      <div className="card__stats-group">  
        <div className="stats-group__item">Appearances <span className="stats-group__item-data">{appearances}</span></div>
        <div className="stats-group__item">Goals <span className="stats-group__item-data">{goals}</span></div>
        <div className="stats-group__item">Assists <span className="stats-group__item-data">{assists}</span></div>
        <div className="stats-group__item">Goals per match <span className="stats-group__item-data">{goals_per_match}</span></div>
        <div className="stats-group__item">Passes per minute <span className="stats-group__item-data">{passes_per_minute}</span></div>
      </div>
    </div>
  )

}

export default PlayerStats;




