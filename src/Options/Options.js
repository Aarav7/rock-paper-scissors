import React from 'react';
import './Options.css';
import rock from '../rock.png';
import paper from '../paper.png';
import scissors from '../scissors.png';


const Options = (props) => {
  return(
    <div>
    <div className="choices">
      <div className="choice">
          <img src={rock} onClick={props.clickRock} alt="Rock" />
      </div>
      <div className="choice">
              <img src={paper} onClick={props.clickPaper} alt="Paper" />
      </div>
      <div className="choice">
              <img src={scissors} onClick={props.clickScissors} alt="Scissors" />
      </div>
      </div>
      <p className="action-message">Make your move.</p>
    </div>
  );
}

export default Options;
