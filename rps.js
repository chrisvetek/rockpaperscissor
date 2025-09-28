let humanScore = 0;
let computerScore = 0;

function playGame(){

    function playRound(humanChoice, computerChoice){
        
        if(humanChoice == "rock" && computerChoice == "scissors"){
            result = "You win! Rock beats scissors!";
            ++humanScore;
        } else if(humanChoice == "rock" && computerChoice == "paper"){
            result = "You lose! Paper beats rock!";
            ++computerScore;
        } else if (humanChoice == "paper" && computerChoice == "rock"){
            result = "You win! Paper beats rock!";
            ++humanScore;
        } else if(humanChoice == "paper" && computerChoice == "scissors"){
            result = "You lose! Scissors beats paper!";
            ++computerScore;
        } else if(humanChoice == "scissors" && computerChoice == "paper"){
            result = "You win! Scissors beats paper!";
            ++humanScore;
        } else if (humanChoice == "scissors" && computerChoice == "rock"){
            result = "You lose! Rock beats scissors!";
            ++computerScore;
        } else {
            result = "Tie game! Play again!";
        } 
        return result;
    }

    for(let i=0;i<5;i++){
        var humanSelection = getHumanChoice();
        var computerSelection = getComputerChoice();
        let round = playRound(humanSelection,computerSelection);
        console.log(round + " Human Score is " + humanScore + "; Computer Score is " + computerScore);
        humanSelection = "";
        computerSelection = "";
        console.log("");
        if(i>=4){
            if(humanScore>computerScore){
                console.log("Human wins!")
            } else if (computerScore>humanScore){
                console.log("Computer wins!")
            } else {
                console.log("Tie game!");
            }
        }
    }
}

playGame();

function getComputerChoice(){
    choice = "";

    let x = "";
    let y = "";
    let z = "";

    result1 = Math.random(0,1);
    result2 = Math.random(0,1);
    result3 = Math.random(0,1);

    if(result1>result2 && result1>result3){
       choice = "rock";
    } else if(result2>result1 && result2>result3){
       choice = "paper";
    } else {
        choice = "scissors";
    }
    console.log("computer chose " + choice);
    return choice;
    
}

function getHumanChoice(){
    let userChoice = "";
    userChoice = prompt("Please enter your choice: ");
    console.log("human chose " + userChoice.toLowerCase());
    return userChoice.toLowerCase();
}



