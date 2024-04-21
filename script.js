const choices = ['rock', 'paper', 'scissors']

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    plr = playerSelection.toLowerCase()
    comp = computerSelection.toLowerCase()

    if(plr === 'rock') {
        if(comp === 'paper') {
            return 'LOSS'
        } else if(comp === 'scissors') {
            return 'WIN'
        } else {
            return 'TIE'
        }
    } else if(plr === 'paper') {
        if(comp === 'scissors') {
            return 'LOSE'
        } else if(comp === 'rock') {
            return 'WIN'
        } else {
            return 'TIE'
        }
    } else {
        if(comp === 'rock') {
            return 'LOSE'
        } else if(comp === 'paper') {
            return 'WIN'
        } else {
            return 'TIE'
        }
    }
}

function playGame() {

    let playerPoints = 0
    let compPoints = 0

    for (let i = 1; i <= 5; i++) {
        let playerChoice = prompt("Choose: rock, paper, scissors.")
        let roundResult = playRound(playerChoice, getComputerChoice())
        
        if(roundResult === 'WIN') {
            playerPoints++;
            console.log("Round "+i+": Player +1!")
            console.log("Score: "+ playerPoints +" - "+ compPoints)
        } else if(roundResult === 'LOSE') {
            compPoints++;
            console.log("Round "+i+": Computer +1!")
            console.log("Score: "+ playerPoints +" - "+ compPoints)
        } else {
            playerPoints++;
            compPoints++;
            console.log("Round "+i+": Tie!")
            console.log("Score: "+ playerPoints +" - "+ compPoints)
        }
    }

    if(playerPoints > compPoints) {
        return "Player wins! Final score: " + playerPoints +" - "+ compPoints
    } else if(compPoints > playerPoints) {
        return "Player loses! Final score: " + playerPoints +" - "+ compPoints
    } else {
        return "Tie! Final score: " + playerPoints +" - "+ compPoints
    }

}