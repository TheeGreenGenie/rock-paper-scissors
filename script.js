const btns = document.querySelectorAll("button"),
      humanScr = document.querySelector("#human"),
      computerScr = document.querySelector("#computer"),
      display = document.querySelector("#display");

let humanScore = 0;
    computerScore = 0;
    CHOICES = ['rock', 'paper', 'scissors'];

btns.forEach((button) => {
    button.addEventListener("click", () => {
        switch(button.className) {
            case 'rock':
                display.textContent = playRound('rock', getComputerChoice());
                break;
            case 'paper':
                display.textContent = playRound('paper', getComputerChoice());
                break;
            default:
                display.textContent = playRound('scissors', getComputerChoice());
                break;
        };

        humanScr.textContent = "Human Score: " + humanScore;
        computerScr.textContent = "Computer Score: " + computerScore
    });
});

function checkForWinner() {
    if (humanScore > 4) {
        humanScore = 0
        computerScore = 0
        alert(`You won 5 rounds before the computer, congratulations!`)

    } else if (computerScore > 4) {
        humanScore = 0
        computerScore = 0
        alert(`You lost, the computer won 5 rounds before you`)
    }
};

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
        choice = CHOICES[choice];
    return choice;
};

function getHumanChoice() {
    let choice = prompt("Enter rock, paper, or scissors").toLowerCase();
    while (CHOICES.indexOf(choice) == -1) {
        choice = prompt("Please enter a valid input").toLowerCase();
    };
    return choice;
};

function playRound(humanChoice, computerChoice) {
    switch(humanChoice) {
        case 'rock':
            if (computerChoice == 'paper') {
                computerScore++;
                checkForWinner();
                return `You lose! ${computerChoice} beats ${humanChoice}`;
            } else if (computerChoice == 'scissors') {
                humanScore++;
                checkForWinner();
                return `You win! ${humanChoice} beats ${computerChoice}`;
            } else {
                return `It's a tie. You both picked ${humanChoice}`;
            };
            break;
        case 'paper':
            if (computerChoice == 'scissors') {
                computerScore++;
                checkForWinner();
                return `You lose! ${computerChoice} beats ${humanChoice}`;
            } else if (computerChoice == 'rock') {
                humanScore++;
                checkForWinner();
                return `You win! ${humanChoice} beats ${computerChoice}`;
            } else {
                return `It's a tie. You both picked ${humanChoice}`;
            };
            break;
        default:
            if (computerChoice == 'rock') {
                computerScore++;
                checkForWinner();
                return `You lose! ${computerChoice} beats ${humanChoice}`;
            } else if (computerChoice == 'paper') {
                humanScore++;
                checkForWinner();
                return `You win! ${humanChoice} beats ${computerChoice}`;
            } else {
                return `It's a tie. You both picked ${humanChoice}`;
            };
    }

};


