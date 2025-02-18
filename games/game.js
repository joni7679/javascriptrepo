
let username = prompt("Enter your Name");
console.log(username,"username");

// let user = document.querySelector(".user")
let UserScorePoint = 0;
let ComputerScorePoint = 0;
let usersScoreEl = document.querySelector(".users-score");
let computersScoreEl = document.querySelector(".com-score");
let computerChoiceImg = document.querySelector("#computer-img");
let userChoiceImg = document.querySelector("#user-choice-img");
let resestBtn = document.querySelector("#rest-btn");
let gameInfo = document.querySelector(".game-info");
let playAgin = document.querySelector(".play-again")
let time = document.querySelector("#time");
const Choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let timeLeft = 60;
let Stopwatch;

const Timerwatch = () => {
    Stopwatch = setInterval(() => {
        timeLeft--;
        time.textContent = `timer: ${timeLeft} s`;
        if (timeLeft === 0) {
            clearInterval(Stopwatch);
            time.textContent = "End Game";
            EndGame();
        }
    }, 1000);
};



const drawGame = () => {
    msg.textContent = "Game was a draw";
    msg.style.color = "gray";
};

let showWinner = (userWinner, userChoice, computerChoice) => {
    if (userWinner) {
        usersScoreEl.innerHTML = ++UserScorePoint;
        msg.textContent = `You Win! ${userChoice} beats ${computerChoice}`;
        msg.style.color = "#85ff20";
    } else {
        computersScoreEl.innerHTML = ++ComputerScorePoint;
        msg.textContent = `You Lose! ${computerChoice} beats ${userChoice}`;
        msg.style.color = "red";
    }

    // if (UserScorePoint === 10 || ComputerScorePoint === 10) {
    //     EndGame();
    // }
};

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let randomIndx = Math.floor(Math.random() * 3);
    return choices[randomIndx];
}


function playGame(userChoice) {

    let computerChoice = getComputerChoice();
    computerChoiceImg.src = `./${computerChoice}.png`;
    userChoiceImg.src = `./${userChoice}.png`;
    console.log("computer chice", computerChoice);
    console.log("user choice", userChoice);

    if (userChoice === computerChoice) {
        drawGame();
    }

    else {
        let userWinner = true;
        if (userChoice === "rock") {
            userWinner = computerChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWinner = computerChoice === "scissors" ? false : true;
        } else if (userChoice === "scissors") {
            userWinner = computerChoice === "rock" ? false : true;
        }

        showWinner(userWinner, userChoice, computerChoice);
    }
}



Choices.forEach((choice) => {
    choice.addEventListener("click", function () {
        let userChoice = choice.getAttribute("id");

        console.log(userChoice);

        // let startGame = choice.disabled = true;  // Disable the choice
        // console.log(startGame);
        // if (startGame) {
        //     choice.style.cursor = "not-allowed";
        //     choice.style.opacity = 0.5;
        //     choice.style.pointerEvents = "none";
        //     alert("pls start the game first and enjoy")
        // }


        playGame(userChoice);

    });
});

let EndGame = () => {
    clearInterval(Stopwatch);
    alert("Game is OVER")
    gameInfo.classList.add("end-game")
    resestBtn.style.display = "block"
    msg.innerHTML = "Play Now Again";
    msg.style.color = "green";
};

const resestGame = () => {
    UserScorePoint = 0;
    ComputerScorePoint = 0;
    usersScoreEl.textContent = UserScorePoint;
    computersScoreEl.textContent = ComputerScorePoint;
    timeLeft = 60;
    time.textContent = `timer : ${timeLeft} sec`;
    gameInfo.classList.remove("end-game");
    resestBtn.style.display = "none";
    msg.textContent = "Game has been reset. Make your move!";
    msg.style.color = "black";
    computerChoiceImg.src = `https://img.freepik.com/free-vector/robot-skull-mascot-logo_32991-756.jpg?t=st=1738409546~exp=1738413146~hmac=c2e4cc902f446f0a0388fc3dadde3438b0b7f1811cbfc85cb2a1aa9b6b6ff166&w=900`;
    userChoiceImg.src = `https://www.svgrepo.com/show/192244/man-user.svg`;


}

//play again function
playAgin.addEventListener("click", () => {
    resestGame();
    Timerwatch()
})