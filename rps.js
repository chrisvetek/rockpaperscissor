//console.log("hello world");
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

//console.log(getComputerChoice());