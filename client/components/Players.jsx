import React from 'react';

const Players = ({ players }) => {
  return (
    <div>
      <center><h2>Player List</h2></center>
      {players.map((player) => (
        <div className="card" key={player.id}>
          <div className="card-body">
            <h5 className="card-title">{player.first_name} {players.last_name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Position: {player.position}</h6>
            <h6 className="card-subtitle mb-2 text-muted">Team: {player.team.full_name}</h6>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Players;