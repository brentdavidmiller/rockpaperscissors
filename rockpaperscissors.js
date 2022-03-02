
const move = ["Rock", "Paper", "Scissors"]
let playerScore = 0
let computerScore = 0


function computerSelection() {
    let computerChoice = (move[Math.floor(Math.random() * move.length)])     //ask caleb explain math.floor math.random * move.length.
    console.log("COMP " + computerChoice);
    return computerChoice
}

function capitalize(str) {
    const lower = str.toLowerCase()
    return(str.charAt(0).toUpperCase() + lower.slice(1))
}


function playerSelection() {

    let input = prompt("Type Rock, Paper, or Scissors to play!");
    let lowerCaseInputFix = capitalize(input);

    if (lowerCaseInputFix === "Rock" || lowerCaseInputFix === "Paper" || lowerCaseInputFix === "Scissors")
        {console.log("PLAYER " + lowerCaseInputFix)
            return lowerCaseInputFix}

    else
        {console.log("Silly Goose")
    
    }
    return playerSelection();
    
}
//console.log(playerSelection());


function round(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log('Tie this round!')
            return 'Tie this round!' && computerScore++ && playerScore++

    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        console.log('Computer wins this round!')
            return 'Computer wins this round!' && computerScore++

    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        console.log('Player wins this round!')
            return 'Player Wins!' && playerScore++

    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        console.log('Player wins this round!')
            return 'Player wins this round!' && playerScore++

    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        console.log('Player wins this round!')
            return 'Computer Wins!' && computerScore++
            
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        console.log('Computer wins this round!')
            return 'Computer wins this round!' && computerScore++

    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        console.log('Player wins this round!')
            return 'Player wins this round!' && playerScore++
    }
}


//console.log(round(playerSelection, computerSelection));

//const playerChoice = playerSelection();
//const computerChoice = computerSelection();
//const roundResult = round(playerChoice, computerChoice)


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


console.log(game());
console.log(playerScore);
console.log(computerScore);





/*
if (round === 'Player Wins!') {
    return playerScore++
}
else if (round === 'Computer Wins!') {
    return computerScore++
}
else if (round === 'Tie!') {
    return playerScore++, computerScore++
}

/*
function set() {
    if (game() = 
}





/*



function round(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
    return 'Tie!' 

    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    return 'Computer Wins!'

    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    return 'Player Wins!'

    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    return 'Player Wins!'

    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    return 'Computer Wins!'

    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    return 'Computer Wins!'

    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    return 'Player Wins!'
    }
}














/*

function capitalize(str) {
    const lower = str.toLowerCase()
    return(str.charAt(0).toUpperCase() + lower.slice(1))
}


function playerSelection () {

    let input = prompt("Type Rock, Paper, or Scissors to play!");
    let lowerCaseInput = capitalize(input);

    if (lowerCaseInput === "Rock" || lowerCaseInput === "Paper" || lowerCaseInput === "Scissors")
        {console.log(lowerCaseInput)
            return lowerCaseInput}

    else
        {console.log("Dumbass")
    return playerSelection();}

}

let human = playerSelection();

*/






/*
function computerSelection () {

    let rps = ['Rock', 'Paper', 'Scissors'];
let result = rps[Math.floor(Math.random() * rps.length)];

return result;

}

let computer = computerSelection();


function compare() {

}


function result() {
    if (playerSelection === computerSelection)
    console.log('Tie!')

    else if (playerSelection === "Rock" && computerSelection === "Paper")
    console.log('Computer Wins!')

    else if (playerSelection === "Rock" && computerSelection === "Scissors")
    console.log('Player Wins!')

    else if (playerSelection === "Paper" && computerSelection === "Rock")
    console.log('Player Wins!')

    else if (playerSelection === "Paper" && computerSelection === "Scissors")
    console.log('Computer Wins!')

    else if (playerSelection === "Scissors" && computerSelection === "Rock")
    console.log('Computer Wins!')

    else if (playerSelection === "Scissors" && computerSelection === "Paper")
    console.log('Player Wins!')

}

console.log(result);
*/












/*
function outcome () {
    if (playerSelection === computerSelection)
    console.log('Tie!')

    else if (playerSelection === "Rock" && computerSelection === "Paper")
    console.log('Computer Wins!')

    else if (playerSelection === "Rock" && computerSelection === "Scissors")
    console.log('Player Wins!')

    else if (playerSelection === "Paper" && computerSelection === "Rock")
    console.log('Player Wins!')

    else if (playerSelection === "Paper" && computerSelection === "Scissors")
    console.log('Computer Wins!')

    else if (playerSelection === "Scissors" && computerSelection === "Rock")
    console.log('Computer Wins!')

    else if (playerSelection === "Scissors" && computerSelection === "Paper")
    console.log('Player Wins!')
}
*/


/*
generate random computer rps
player chooses their rps

*/



/*function computerPlay () [
    let r = "Rock";
        if (r) {

        }

    let p = "Paper";
        if (p) {
            
        }


    let s = "scissors";
        if (s) {

        }



    console.log()
]
*/