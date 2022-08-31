//settings
let gameResult = "Playing";
const playState = "playing";

//app state variables
let playerScore = 0;
let computerScore = 0;
let rockEl = document.querySelector("#Rock");
let paperEl = document.querySelector("#Paper");
let scissorsEl = document.querySelector("#Scissors");

//comp move
const choices = ["Rock", "Paper", "Scissors"];
let playerChoice;
let computerChoice;

function computerSelect() {
  computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}

//player move
function userSelectsRock() {
  document.querySelector("#rockChoicePlayer span").textContent = "";
  document.querySelector("#paperChoicePlayer span").textContent = "";
  document.querySelector("#scissorsChoicePlayer span").textContent = "";
  document.querySelector("#rockChoicePlayer span").textContent = "Player Move";
  playRound("Rock", computerSelect());
  gameState(playerScore, computerScore);
  computerChoiceText();
  gameEnd();
}

function userSelectsPaper() {
  document.querySelector("#rockChoicePlayer span").textContent = "";
  document.querySelector("#paperChoicePlayer span").textContent = "";
  document.querySelector("#scissorsChoicePlayer span").textContent = "";
  document.querySelector("#paperChoicePlayer span").textContent = "Player Move";
  playRound("Paper", computerSelect());
  gameState(playerScore, computerScore);
  computerChoiceText();
  gameEnd();
}

function userSelectsScissors() {
  document.querySelector("#rockChoicePlayer span").textContent = "";
  document.querySelector("#paperChoicePlayer span").textContent = "";
  document.querySelector("#scissorsChoicePlayer span").textContent = "";
  document.querySelector("#scissorsChoicePlayer span").textContent ="Player Move";
  playRound("Scissors", computerSelect());
  gameState(playerScore, computerScore);
  computerChoiceText();
  gameEnd();
}

function computerChoiceText() {
  if (computerChoice == "Rock") {
    document.querySelector("#rockChoiceComputer span").textContent = "";
    document.querySelector("#paperChoiceComputer span").textContent = "";
    document.querySelector("#scissorsChoiceComputer span").textContent = "";
    document.querySelector("#rockChoiceComputer span").textContent =
      "Computer Move";
  } else if (computerChoice == "Paper") {
    document.querySelector("#rockChoiceComputer span").textContent = "";
    document.querySelector("#paperChoiceComputer span").textContent = "";
    document.querySelector("#scissorsChoiceComputer span").textContent = "";
    document.querySelector("#paperChoiceComputer span").textContent =
      "Computer Move";
  } else if (computerChoice == "Scissors") {
    document.querySelector("#rockChoiceComputer span").textContent = "";
    document.querySelector("#paperChoiceComputer span").textContent = "";
    document.querySelector("#scissorsChoiceComputer span").textContent = "";
    document.querySelector("#scissorsChoiceComputer span").textContent =
      "Computer Move";
  }
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    document.querySelector("#roundResult span").textContent = "Tie this round!";
    ++computerScore;
    ++playerScore;
    document.querySelector("#computerScore span").textContent = computerScore;
    document.querySelector("#playerScore span").textContent = playerScore;
  } else if (playerChoice === "Rock" && computerChoice === "Paper") {
    document.querySelector("#roundResult span").textContent =
      "Computer wins this round!";
    ++computerScore;
    document.querySelector("#computerScore span").textContent = computerScore;
  } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
    document.querySelector("#roundResult span").textContent =
      "Player wins this round!";
    ++playerScore;
    document.querySelector("#playerScore span").textContent = playerScore;
  } else if (playerChoice === "Paper" && computerChoice === "Rock") {
    document.querySelector("#roundResult span").textContent =
      "Player wins this round!";
    ++playerScore;
    document.querySelector("#playerScore span").textContent = playerScore;
  } else if (playerChoice === "Paper" && computerChoice === "Scissors") {
    document.querySelector("#roundResult span").textContent =
      "Player wins this round!";
    ++computerScore;
    document.querySelector("#computerScore span").textContent = computerScore;
  } else if (playerChoice === "Scissors" && computerChoice === "Rock") {
    document.querySelector("#roundResult span").textContent =
      "Computer wins this round!";
    ++computerScore;
    document.querySelector("#computerScore span").textContent = computerScore;
  } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
    document.querySelector("#roundResult span").textContent =
      "Player wins this round!";
    ++playerScore;
    document.querySelector("#playerScore span").textContent = playerScore;
  }
  return computerScore && playerScore;
}

function init() {
  document.querySelector("#Rock").addEventListener("click", userSelectsRock);
  document.querySelector("#Paper").addEventListener("click", userSelectsPaper);
  document.querySelector("#Scissors").addEventListener("click", userSelectsScissors);
  document.querySelector("#End").addEventListener("click", resetGame);
  document.querySelector("#End").style.display = "none";
  document.querySelector("#gameResult").style.display = "none";
}
init();

//game logic
function gameState(playerScore, computerScore) {
  if (playerScore >= 3 && computerScore < 3) {
    document.querySelector("#gameResult span").textContent =
      "Player won the game!";
    gameResult = "End Game";
  } else if (computerScore >= 3 && playerScore < 3) {
    document.querySelector("#gameResult span").textContent =
      "Computer won the game :(";
    gameResult = "End Game";
  } else if (playerScore == 3 && computerScore == 3) {
    document.querySelector("#gameResult span").textContent = "Tie Game!";
    gameResult = "End Game";
  }
}

//Pauses R/P/S buttons and prompts a new button to reset the game
function gameEnd() {
  if (gameResult == "End Game") {
    rockEl.disabled = true;
    paperEl.disabled = true;
    scissorsEl.disabled = true;

    document.querySelector("#End").style.display = "flex";
    document.getElementById("gameResult").style.display = "flex";
  }
}

//if reset game button is pressed reset all values and start over
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  gameResult = "Playing";
  rockEl.removeAttribute("disabled");
  paperEl.removeAttribute("disabled");
  scissorsEl.removeAttribute("disabled");
  document.querySelector("#End").style.display = "none";
  document.querySelector("#playerScore span").textContent = playerScore;
  document.querySelector("#computerScore span").textContent = computerScore;
  document.querySelector("#roundResult span").textContent = "";
  document.querySelector("#gameResult span").textContent = "";
  //sets previous round moves to blank
  document.querySelector("#rockChoicePlayer span").textContent = "";
  document.querySelector("#paperChoicePlayer span").textContent = "";
  document.querySelector("#scissorsChoicePlayer span").textContent = "";
  document.querySelector("#rockChoiceComputer span").textContent = "";
  document.querySelector("#paperChoiceComputer span").textContent = "";
  document.querySelector("#scissorsChoiceComputer span").textContent = "";
}

/*
function playerSelectionRock(){
    return "Rock"
}
function playerSelectionPaper(){
    return "Paper"
}
function playerSelectionScissors(){
    return "Scissors"
}

function computerSelection() {
    let computerChoice = (move[Math.floor(Math.random() * move.length)])     //ask caleb explain math.floor math.random * move.length.
    return computerChoice
}

const playerSelection = () => {
    if (document.getElementById("Rock").addEventListener("click", () => playerSelectionRock ())){
        console.log("r")
        //return "Rock";
    }else if (document.getElementById("Paper").addEventListener("click", () => playerSelectionPaper ())){
        console.log("p")
        //return "Paper";
    }else if (document.getElementById("Scissors").addEventListener("click", () => playerSelectionScissors ())){
        console.log("s")
        //return "Scissors";
    }
    
}
//***** player leading comp leading all tied up!
//console.log(playerSelection());

function round(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
            return 'Tie this round!' && computerScore++ && playerScore++

    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
            return 'Computer wins this round!' && computerScore++

    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
            return 'Player Wins!' && playerScore++

    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
            return 'Player wins this round!' && playerScore++

    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
            return 'Computer Wins!' && computerScore++
            
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
            return 'Computer wins this round!' && computerScore++

    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
            return 'Player wins this round!' && playerScore++
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        round(playerSelection(), computerSelection());
    }
    if (playerScore === computerScore) {
        console.log("Tie game!")
    } else if (playerScore > computerScore) {
        console.log("Player won the game!")
    } else if (playerScore < computerScore) {
        console.log("Computer won the Game!")
    }
}

//console.log(round(playerSelection, computerSelection));

//const playerChoice = playerSelection();
//const computerChoice = computerSelection();
//const roundResult = round(playerChoice, computerChoice)
*/

/*
const playerSelection = document.getElementById("Rock").addEventListener("click", () => round("Rock"))
||
document.getElementById("Paper").addEventListener("click", () => round("Paper"))
||
document.getElementById("Scissors").addEventListener("click", () => round("Scissors"));
*/

/*
function playerSelection() {
    if (document.getElementById("Rock").addEventListener("click", () => round("Rock"))
        return "Rock";

    }else if (document.getElementById("Paper").addEventListener("click", () => round("Paper"))
        return "Paper";

    }else if (document.getElementById("Scissors").addEventListener("click", () => round("Scissors"));
        return "Scissors";

}
*/
