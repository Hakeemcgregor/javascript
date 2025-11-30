function getComputerChoice() {
    let a = Math.floor(Math.random() * 10);
    let b = "";

    if (a <= 3){
        b = "rock";
    } else if ( 3 < a && a <=6){
        b = "paper";
    } else if ( 6 < a && a <=10){
        b = "scissors";
    }
    return b;
}


function getBattleResult(a, b) {
   
    let human = a;
    let computer = b;
    let result = 0;


    if (computer === "rock"){
        if (human === "paper"){
            console.log("Computer: " + computer);
            console.log("Human: " + human);
            console.log("You Win!");
            result = 1;
        }
        else if (human === "scissors"){
            console.log("Computer: " + computer);
            console.log("Human: " + human);
            console.log("You Lose!");
            result = 0;
        } else{
            console.log("Computer: " + computer);
            console.log("Human: " + human);
            console.log("Its a Draw!");
            result = 2;
        }
    }

    else if (computer === "paper"){
        if (human === "scissors"){
            console.log("Computer: " + computer);
            console.log("Human: " + human);
            console.log("You Win!");
            result = 1;
        }
        else if (human === "rock"){
            console.log("Computer: " + computer);
            console.log("Human: " + human);
            console.log("You Lose!");
            result = 0;
        } else{
            console.log("Computer: " + computer);
            console.log("Human: " + human);
            console.log("Its a Draw!");
            result = 2;
        }
    }

    else if (computer === "scissors"){
        if (human === "rock"){
            console.log("Computer: " + computer);
            console.log("Human: " + human);
            console.log("You Win!");
            result = 1;
        }
        else if (human === "paper"){
            console.log("Computer: " + computer);
            console.log("Human: " + human);
            console.log("You Lose!");
            result = 0;
        } else{
            console.log("Computer: " + computer);
            console.log("Human: " + human);
            console.log("Its a Draw!");
            result = 2;
        }
    }
    return result;
}
function score(a){
    
    if (a == 1){
        humanScore += 1;
    } else if( a == 0){
        computerScore += 1;
    } else {

    }
    console.log("Human score: "+humanScore);
    
    console.log("Computer score: "+computerScore);
}
function playGame(ans){

    const humanSelection = ans.value;
    const computerSelection =getComputerChoice();

    let battle = getBattleResult(humanSelection, computerSelection);
    score(battle);
    console.log(humanScore);
    console.log(computerScore);

    let humanResult = document.getElementById("hResult");
    humanResult.innerHTML = humanScore + " (" + humanSelection + ")";

    let computerResult = document.getElementById("cResult");
    computerResult.innerHTML = computerScore + " (" + computerSelection+ ")";

    let gameOver = document.getElementById("gameOver");

    if (humanScore == 5){
        gameOver.innerHTML = "You Win!";
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore == 5){
        gameOver.innerHTML = "You Lose!";
        humanScore = 0;
        computerScore = 0;
    } else {

    }
    
}

let humanScore = 0;
let computerScore = 0;


    
// playGame();










