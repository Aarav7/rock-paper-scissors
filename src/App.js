import React, {Component} from 'react';
import './App.css';
import Scoreboard from './Scoreboard/Scoreboard.js';
import Options from './Options/Options.js';

class App extends Component {

state = {
  score : [
    {userScore: 0},
    {computerScore: 0},
    {resultDisplay: "Let's Play"}
  ]
}

computerChoice = () =>{
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

game = (userChoice) => {
  const computerChoice = this.computerChoice();
  console.log(userChoice + computerChoice);
  switch(userChoice + computerChoice) {
    case "RockScissors":
    case "ScissorsPaper":
    case "PaperRock":
      this.win(userChoice, computerChoice);
      break;
    case "ScissorsRock":
    case "PaperScissors":
    case "RockPaper":
      this.lose(userChoice, computerChoice);
      break;
    case "ScissorsScissors":
    case "PaperPaper":
    case "RockRock":
      this.draw(userChoice, computerChoice);
      break;
  }
}

win = (userChoice, computerChoice) => {
  this.setState(
    {
      score : [
      {userScore: this.state.score[0].userScore + 1},
      {computerScore: this.state.score[1].computerScore + 0},
      {resultDisplay: userChoice + " beats " + computerChoice + " You Win! "}
    ]
  }
  );
}

lose = (userChoice, computerChoice) => {
    this.setState(
      {
        score : [
        {userScore: this.state.score[0].userScore + 0},
        {computerScore: this.state.score[1].computerScore + 1},
        {resultDisplay: computerChoice + " beats " + userChoice + " Computer Win! "}
      ]
    }
    )
}

draw = (userChoice, computerChoice) => {
    this.setState(
      {
        score : [
        {userScore: this.state.score[0].userScore + 0},
        {computerScore: this.state.score[1].computerScore + 0},
        {resultDisplay: " It's a draw"}
      ]
    }
    )
}

rockhandler = () =>{
  this.game("Rock");
}

paperhandler = () =>{
  this.game("Paper");
}

scissorshandler = () =>{
  this.game("Scissors");
}

  render(){
    return (
    <div>
      <div className="App">
        <header className="App-header">
          <p>Rock Paper Scissors</p>
        </header>
      </div>
        <Scoreboard
          userScore = {this.state.score[0].userScore}
          computerScore = {this.state.score[1].computerScore}
          resultDisplay = {this.state.score[2].resultDisplay}
          />
        <Options
          clickRock = {this.rockhandler}
          clickPaper = {this.paperhandler}
          clickScissors = {this.scissorshandler}
         />
    </div>
    );
  }
}
export default App;
