let humanScore = 0;
let computerSccore = 0;
function getComputerChoice(){
    const randomNum = Math.random();
    if(randomNum < 1/3){
        return "Rock";
    }else if(randomNum < 2/3){
        return "Paper";
    }else{
        return "Scissors";
    }
}

function getHumanChoice(){
    let choice = prompt("Enter 1 for rock, 2 for paper, or 3 for scissors:");
    if(choice === "1"){
        return "Rock";
    }else if(choice === "2"){
        return "Paper";
    }else if(choice === "3"){
        return "scissors";
    }else{
        alert("Invalid choice, please try again.");
        return getHumanChoice();
    }
}

function playRound(computerChoice, humanChoice){
    // Use global score variables

    if(computerChoice === humanChoice){
        console.log("It's a tie!");
    }else if((computerChoice === "Rock" && humanChoice === "Scissors") ||
              (computerChoice === "Paper" && humanChoice === "Rock") ||
              (computerChoice === "Scissors" && humanChoice === "Paper")) {
        console.log("Computer wins this round!");
        computerSccore++;
    } else {
        console.log("Human wins this round!");
        humanScore++;
    }
    console.log("Computer Score: " + computerSccore);
    console.log("Human Score: " + humanScore);
    return [computerChoice, humanChoice];


}


let round = 0;

while(round < 10){
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();
    console.log("Computer Choice: "+ computerChoice);
    console.log("Human Choice: " + humanChoice);
    playRound(computerChoice, humanChoice);
    round++;
}
console.log("Game Over! Final Scores - Human: " + humanScore + ", Computer: " + computerSccore);
if(humanScore > computerSccore){
    console.log("Human wins the game!");
}else if(computerSccore > humanScore){
    console.log("Computer wins the game!");
}else{
    console.log("The game is a tie!");
}
console.log("Thank you for playing!"); // End of game message
console.log("Please refresh the page to play again!"); // Refresh message