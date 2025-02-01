let UserScorePoint = 0;
let ComputerScorePoint = 0;
let usersScoreEl = document.querySelector(".users-score");
let computersScoreEl = document.querySelector(".com-score");
let computerChoiceImg = document.querySelector("#computer-img");
let userChoiceImg = document.querySelector("#user-choice-img");
let resestBtn = document.querySelector(".rest-btn");
let gameInfo = document.querySelector(".game-box");
let time = document.querySelector("#time");
const Choices = document.querySelectorAll(".choices");
let msg = document.querySelector("#msg");
let heading = document.querySelector(".heading")
let timeLeft = 60;
let Stopwatch;
// let disable = true;



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
    msg.style.backgroundColor = "gray";
};

let showWinner = (userWinner, userChoice, computerChoice) => {
    if (userWinner) {
        usersScoreEl.innerHTML = ++UserScorePoint;
        msg.textContent = `You Win! ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "blue";
    } else {
        computersScoreEl.innerHTML = ++ComputerScorePoint;
        msg.textContent = `You Lose! ${computerChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }

    if (UserScorePoint === 10 || ComputerScorePoint === 10) {
        EndGame();
    }
};

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let randomIndx = Math.floor(Math.random() * 3);
    return choices[randomIndx];
}

function playGame(userChoiceId) {
    // Timerwatch()
    let computerChoice = getComputerChoice();



    computerChoiceImg.src = `./${computerChoice}.png`;
    userChoiceImg.src = `./${userChoiceId}.png`;

    if (userChoiceId === computerChoice) {
        drawGame();
    } else {
        let userWinner = true;
        if (userChoiceId === "rock") {
            userWinner = computerChoice === "paper" ? false : true;
        } else if (userChoiceId === "paper") {
            userWinner = computerChoice === "scissors" ? false : true;
        } else if (userChoiceId === "scissors") {
            userWinner = computerChoice === "rock" ? false : true;
        }

        showWinner(userWinner, userChoiceId, computerChoice);
    }
}

msg.addEventListener("click", () => {
    Timerwatch()
    msg.textContent = "You Game Is Start";


})

Choices.forEach((choice) => {
    choice.addEventListener("click", function () {
        let userChoiceId = choice.getAttribute("id");
        let start = choice.disabled = true;
        console.log(start);
        // if (start) {
        //     alert("Please start the game first!");
        //     choice.style.cursor = "not-allowed"
        //     return; // Prevent further execution
        // }

        playGame(userChoiceId);

    });
});

let EndGame = () => {
    clearInterval(Stopwatch);
    alert("Game is OVER")
    document.querySelector(".rest-btn").style.display = "block";
    gameInfo.style.display = "none";
    msg.innerHTML = "Play Now Again";
    msg.style.backgroundColor = "green";
};

resestBtn.addEventListener("click", () => {
    UserScorePoint = 0;
    ComputerScorePoint = 0;
    usersScoreEl.textContent = UserScorePoint;
    computersScoreEl.textContent = ComputerScorePoint;
    timeLeft = 60;
    time.textContent = `timer : ${timeLeft} sec`;
    gameInfo.style.display = "flex";
    resestBtn.style.display = "none";
    gameInfo.style.flexDirection = "column";
    computerChoiceImg.src = `https://img.freepik.com/free-photo/welcome-phrase-available-launch-open_53876-124476.jpg?semt=ais_hybrid`;
    userChoiceImg.src = `https://img.freepik.com/free-photo/welcome-phrase-available-launch-open_53876-124476.jpg?semt=ais_hybrid`;
    Timerwatch();
});


msg.addEventListener("click", () => {
    UserScorePoint = 0;
    ComputerScorePoint = 0;
    usersScoreEl.textContent = UserScorePoint;
    computersScoreEl.textContent = ComputerScorePoint;
    timeLeft = 60;
    time.textContent = `timer : ${timeLeft} sec`;
    gameInfo.style.display = "flex";
    resestBtn.style.display = "none";
    gameInfo.style.flexDirection = "column";
    computerChoiceImg.src = `https://img.freepik.com/free-photo/welcome-phrase-available-launch-open_53876-124476.jpg?semt=ais_hybrid`;
    userChoiceImg.src = `https://img.freepik.com/free-photo/welcome-phrase-available-launch-open_53876-124476.jpg?semt=ais_hybrid`;
    // choices.forEach((choice) => {
    //     choice.style.cursor = "pointer";
    //     choice.disabled = false;
    // });
    Timerwatch();
})