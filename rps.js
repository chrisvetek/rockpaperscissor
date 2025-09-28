function playGame(){

    

    function playRound(humanChoice, computerChoice){
        if(humanChoice == "rock" && computerChoice == "scissors"){
            result = "You win! Rock beats scissors!";
        } else if(humanChoice == "rock" && computerChoice == "paper"){
            result = "You lose! Paper beats rock!";
        } else if (humanChoice == "paper" && computerChoice == "rock"){
            result = "You win! Paper beats rock!";
        } else if(humanChoice == "paper" && computerChoice == "scissors"){
            result = "You lose! Scissors beats paper!";
        } else if(humanChoice == "scissors" && computerChoice == "paper"){
            result = "You win! Scissors beats paper!";
        } else if (humanChoice == "scissors" && computerChoice == "rock"){
            result = "You lose! Rock beats scissors!";
        } else {
            result = "Tie game! Play again!";
        } 
        return result;
    }

    for(let i=0;i<5;i++){
        var humanSelection = getHumanChoice();
        var computerSelection = getComputerChoice();
        let round = playRound(humanSelection,computerSelection);
        console.log(round);
        humanSelection = "";
        computerSelection = "";
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



