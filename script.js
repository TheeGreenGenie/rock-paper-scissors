let humanScore = 0;
    computerScore = 0;
    CHOICES = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
        choice = CHOICES[choice];
    return choice;
}

function getHumanChoice() {
    let choice = prompt("Enter rock, paper, or scissors").toLowerCase();
    while (CHOICES.indexOf(choice) == -1) {
        choice = prompt("Please enter a valid input").toLowerCase();
    };
    return choice;
}

function playRound(humanChoice, computerChoice) {
    switch(humanChoice) {
        case 'rock':
            if (computerChoice == 'paper') {
                computerScore++;
                return `You lose! ${computerChoice} beats ${humanChoice}`;
            } else if (computerChoice == 'scissors') {
                humanScore++;
                return `You win! ${humanChoice} beats ${computerChoice}`;
            } else {
                return `It's a tie. You both picked ${humanChoice}`;
            };
            break;
        case 'paper':
            if (computerChoice == 'scissors') {
                computerScore++;
                return `You lose! ${computerChoice} beats ${humanChoice}`;
            } else if (computerChoice == 'rock') {
                humanScore++;
                return `You win! ${humanChoice} beats ${computerChoice}`;
            } else {
                return `It's a tie. You both picked ${humanChoice}`;
            };
            break;
        default:
            if (computerChoice == 'rock') {
                computerScore++;
                return `You lose! ${computerChoice} beats ${humanChoice}`;
            } else if (computerChoice == 'paper') {
                humanScore++;
                return `You win! ${humanChoice} beats ${computerChoice}`;
            } else {
                return `It's a tie. You both picked ${humanChoice}`;
            };
    }
}

function playGame() {
    let round = 1;
    let endMessage;
    while (round<=5) {
        let humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();

        alert(playRound(humanSelection, computerSelection));
        round++;
    }
    if (humanScore > computerScore) {
        endMessage = `You won! The score was ${humanScore} to ${computerScore}`
    } else {
        endMessage = `You lost. The score was ${computerScore} to ${humanScore}`
    }
    alert(endMessage)
}
