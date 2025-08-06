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
    let roundResult = '';
    let gameOver = false;
    if(computerChoice === humanChoice){
        roundResult = "It's a tie!";
    }else if((computerChoice === "Rock" && humanChoice === "Scissors") ||
              (computerChoice === "Paper" && humanChoice === "Rock") ||
              (computerChoice === "Scissors" && humanChoice === "Paper")) {
        roundResult = `Computer wins this round!`;
        computerSccore++;
    } else {
        roundResult = `Human wins this round!`;
        humanScore++;
    }

    let winnerAnnouncement = '';
    if (humanScore >= 5 || computerSccore >= 5) {
        gameOver = true;
        if (humanScore > computerSccore) {
            winnerAnnouncement = '<h3>Human wins the game!</h3>';
        } else if (computerSccore > humanScore) {
            winnerAnnouncement = '<h3>Computer wins the game!</h3>';
        } else {
            winnerAnnouncement = '<h3>The game is a tie!</h3>';
        }
    }

    // Update results in the DOM
    const resultsDiv = document.getElementById('results');
    if (resultsDiv) {
        resultsDiv.innerHTML = `
            <h2>Rock Paper Scissors</h2>
            <p><strong>Computer Choice:</strong> ${computerChoice}</p>
            <p><strong>Human Choice:</strong> ${humanChoice}</p>
            <p><strong>Result:</strong> ${roundResult}</p>
            <p><strong>Computer Score:</strong> ${computerSccore}</p>
            <p><strong>Human Score:</strong> ${humanScore}</p>
            ${winnerAnnouncement}
        `;
    }

    // Disable buttons if game is over
    if (gameOver) {
        const btns = document.querySelectorAll('button[id^="btn-"]');
        btns.forEach(btn => btn.disabled = true);
    }
    return [computerChoice, humanChoice];


}



// --- UI Button Setup and Results Div ---
window.addEventListener('DOMContentLoaded', () => {
    // Create results div
    const resultsDiv = document.createElement('div');
    resultsDiv.id = 'results';
    resultsDiv.style.marginTop = '20px';
    resultsDiv.style.fontFamily = 'monospace';
    resultsDiv.innerHTML = '<h2>Rock Paper Scissors</h2>';
    document.body.appendChild(resultsDiv);

    // Create buttons for Rock, Paper, Scissors
    const choices = ['Rock', 'Paper', 'Scissors'];
    choices.forEach(choice => {
        const btn = document.createElement('button');
        btn.textContent = choice;
        btn.id = 'btn-' + choice.toLowerCase();
        btn.style.margin = '5px';
        btn.addEventListener('click', () => {
            const computerChoice = getComputerChoice();
            const humanChoice = choice;
            playRound(computerChoice, humanChoice);
        });
        document.body.appendChild(btn);
    });
});


