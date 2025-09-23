//console.log("hello world");

function playRound(humanChoice, computerChoice){
    //rock scissors
    if(humanChoice == "rock" && computerChoice == "scissors"){
        result = "You win! Rock beats scissors!";
    } else if (humanChoice == "scissors" && computerChoice == "rock"){
        result = "You lose! Rock beats scissors!";
    } else if(humanChoice == "rock" && computerChoice == "paper"){
        result = "You lose! Paper beats rock!";
    } else if (humanChoice == "paper" && computerChoice == "rock"){
        result = "You win! Paper beats rock!";
    } else if(humanChoice == "scissors" && computerChoice == "paper"){
        result = "You win! Scissors beats paper!";
    } else if (humanChoice == "scissors" && computerChoice == "rock"){
        result = "You lose! Scissors beats paper!";
    } else {
        result = "Tie game! Play again!";
    }
    return console.log(result);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playGame(){

  var humanScore = 0; 
  var computerScore = 0;

  for(let t=0; t<6; t++){
    playRound(humanSelection, computerSelection);
  }
}


function getComputerChoice(){

    let x = "rock";
    let y = "paper";
    let z = "scissors";

    result1 = Math.random(0,1);
    result2 = Math.random(0,1);
    result3 = Math.random(0,1);

    if(result1>result2 && result1>result3){
        return x;
    } else if(result2>result1 && result2>result3){
        return y;
    } else {
        return z;
    }
    
}

function getHumanChoice(){
    let userChoice = prompt("Please enter your choice: ");
    return userChoice.toLowerCase();
}
