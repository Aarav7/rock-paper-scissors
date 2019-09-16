import React from 'react';
import './Scoreboard.css';

const Scoreboard = (props) => {
  return(
    <div>
      <div className="score-board">
          <div id="user-label" className="badge">user</div>
          <div id="computer-label" className="badge">comp</div>
          <span>{props.userScore}</span>:<span>{props.computerScore}</span>
      </div>
      <div className="result">
        <p>{props.resultDisplay}</p>
      </div>
    </div>
  );
}

export default Scoreboard;
