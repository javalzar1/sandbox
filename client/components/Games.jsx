import React from 'react';

const Games = ({ games }) => {
  return (
    <div className="d-flex">
      <div className="flex-fill"></div>
        <div className="flex-fill">
        &nbsp;
          <table className="table table-bordered">
                <thead>
                <tr>
                  <th>Date</th>
                  <th>Home Team</th>
                  <th>Home Team Score</th>
                  <th>Visitor Team</th>
                  <th>Visitor Team Score</th>
                  <th>Status</th>
                  <th>Season</th>
                </tr>
              </thead>
              {games.map((game, index) => (
              <tbody key={index}>
                <tr className={index % 2 === 0 ? "table-dark" : ""}>
                  <th scope="row">{game.date.slice(0, 10)}</th>
                  <td>{game.home_team.full_name}</td>
                  <td>{game.home_team_score}</td>
                  <td>{game.visitor_team.full_name}</td>
                  <td>{game.visitor_team_score}</td>
                  <td>{game.status}</td>
                  <td>{game.season}</td>
                </tr>
              </tbody>
              ))}
          </table>
        </div>
      <div className="flex-fill"></div>
    </div>
  )
};

export default Games;