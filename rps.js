console.log("hello world");
function getComputerChoice(){

    let x = "rock";
    let y = "paper";
    let z = "scissors";

    result1 = Math.random(0,1);
    console.log(x + " gets " + result1);
    result2 = Math.random(0,1);
    console.log(y + " gets " + result2);
    result3 = Math.random(0,1);
    console.log(z + " gets " + result3);

    console.log("Paper beats rock, rock beats scissors, scissors beats paper");
    
}

console.log(getComputerChoice());