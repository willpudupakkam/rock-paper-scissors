const choices = ['rock', 'paper', 'scissors']

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)]
}

let playerScore = 0;
let compScore = 0;
let gameOver = false;

function playRound(playerSelection, computerSelection) {
    let plr = playerSelection.toLowerCase()
    let comp = computerSelection.toLowerCase()
    if (gameOver) {
        return '';
    }
    switch(plr) {
        case 'rock':
            switch(comp) {
                case 'paper':
                    compScore++;
                    return 'Loss - Paper beats Rock!';
                case 'scissors':
                    playerScore++;
                    return 'Win - Rock beats Scissors!';
                default:
                    return 'Tie - both chose Rock.';
            }
        case 'paper':
            switch(comp) {
                case 'scissors':
                    compScore++;
                    return 'Loss - Scissors beats Paper!';
                case 'rock':
                    playerScore++;
                    return 'Win - Paper beats Rock!';
                default:
                    return 'Tie - both chose Paper.';
            }
        default:
            switch(comp) {
                case 'rock':
                    compScore++;
                    return 'Loss - Rock beats Scissors!';
                case 'paper':
                    playerScore++;
                    return 'Win - Scissors beats Paper!';
                default:
                    return 'Tie - both chose Scissors.';
            }
    }
}

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const ul = document.querySelector("#game-log");

const scoreul = document.querySelector("#score");
const scoreli = document.createElement("li");

scoreli.textContent = "Score: " + playerScore + " - " + compScore;
scoreul.appendChild(scoreli);

rockBtn.addEventListener("click", () => {
    if (gameOver) {
        return;
    } else {
        const li = document.createElement("li");
        li.textContent = playRound('rock', getComputerChoice());
        ul.appendChild(li);

        scoreli.textContent = "Score: " + playerScore + " - " + compScore;
        scoreul.appendChild(scoreli);

        if (playerScore === 5 || compScore === 5) {
            const li = document.createElement("li");
            gameOver = true;
            switch(playerScore) {
                case 5:
                    li.textContent = "Player wins!"
                    li.style.color = "green";
                    ul.appendChild(li);
                    break;
                default:
                    li.textContent = "Computer wins!"
                    li.style.color = "red";
                    ul.appendChild(li);
            }
        }
    }

});
paperBtn.addEventListener("click", () => {
    if (gameOver) {
        return;
    } else {
        const li = document.createElement("li");
        li.textContent = playRound('paper', getComputerChoice());
        ul.appendChild(li);

        scoreli.textContent = "Score: " + playerScore + " - " + compScore;
        scoreul.appendChild(scoreli);

        if (playerScore === 5 || compScore === 5) {
            const li = document.createElement("li");
            switch(playerScore) {
                case 5:
                    li.textContent = "Player wins!"
                    li.style.color = "green";
                    ul.appendChild(li);
                    break;
                default:
                    li.textContent = "Computer wins!"
                    li.style.color = "red";
                    ul.appendChild(li);
            }
        }
    }
    

});
scissorsBtn.addEventListener("click", () => {
    if (gameOver) {
        return;
    } else {
        const li = document.createElement("li");
        li.textContent = playRound('scissors', getComputerChoice());
        ul.appendChild(li);

        scoreli.textContent = "Score: " + playerScore + " - " + compScore;
        scoreul.appendChild(scoreli);

        if (playerScore === 5 || compScore === 5) {
            const li = document.createElement("li");
            gameOver = true;
            switch(playerScore) {
                case 5:
                    li.textContent = "Player wins!"
                    li.style.color = "green";
                    ul.appendChild(li);
                    break;
                default:
                    li.textContent = "Computer wins!"
                    li.style.color = "red";
                    ul.appendChild(li);
            }
        }
    }
    
});