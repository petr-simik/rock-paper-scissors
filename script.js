const buttonRock = document.querySelector(".rock")
const buttonPaper = document.querySelector(".paper")
const buttonScissors = document.querySelector(".scissors")
const div = document.querySelector(".result")

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()

    if (humanChoice === computerChoice) {
        const resultTie = document.createElement("p")
        resultTie.textContent = "It's a tie!"
        div.appendChild(resultTie)
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++
        const resultWin = document.createElement("p")
        resultWin.textContent = (`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`)
        div.appendChild(resultWin)
    } else {
        computerScore++
        const resultLose = document.createElement("p")
        resultLose.textContent = (`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`)
        div.appendChild(resultLose)
    }
    const resultScore = document.createElement("p")
    resultScore.textContent = (`Scores - Human: ${humanScore}, Computer: ${computerScore}`)
    div.appendChild(resultScore)
}

buttonRock.addEventListener('click', () => {
    const computerChoice = getComputerChoice()
    playRound('rock', computerChoice)
})

buttonPaper.addEventListener('click', () => {
    const computerChoice = getComputerChoice()
    playRound('paper', computerChoice)
})

buttonScissors.addEventListener('click', () => {
    const computerChoice = getComputerChoice()
    playRound('scissors', computerChoice)
})