const difficultyChoice = document.querySelector(".difficulty");
const gameChoice = document.querySelector(".gameChoice");
const winMessage = document.querySelector(".winMessage");

let playerBoard;
let aiBoard;

let player1Choice = "";
let player2Choice = "";
let computerChoice = "";
let gameType = "";
let nextAiMove = "";
let aiDifficulty = "";

//checks to see if the game is over.
const checkGame = (option1, option2, type) => {
  if(option1 && option2) {
    
    if(option1 == option2) {
      winMessage.textContent = "TIE!!!";
      nextAiMove = "scissors";
    } else if(option1 == "rock") {
      
      if(option2 == "paper") {
        winMessage.textContent = "Player 2 Wins!!!";
        nextAiMove = "rock";
      } else if (option2 == "scissors") {
        winMessage.textContent = "Player 1 Wins!!!";
        nextAiMove = "paper";
      }
    } else if (option1 == "paper") {
      
      if(option2 == "rock") {
        winMessage.textContent = "Player 1 Wins!!!";
        nextAiMove = "scissors";
      } else if (option2 == "scissors") {
        winMessage.textContent = "Player 2 Wins!!!";
        nextAiMove = "paper";
      }
    } else if (option1 == "scissors") {
      
      if(option2 == "paper") {
        winMessage.textContent = "Player 1 Wins!!!";
        nextAiMove = "rock";
      } else if (option2 == "rock") {
        winMessage.textContent = "Player 2 Wins!!!";
        nextAiMove = "scissors";
      }
    }

    reloadGame();

  } else {
    console.log("There is not a winner yet!");
  }
}

const reloadGame = () => {
  // This chunk of code reloads the game.
  gameChoice.style.display = "block";
  player1Choice = "";
  player2Choice = "";
  computerChoice = "";
}

const resetScreen = () => {
  if(gameType === 1) {
    playerBoard.style.display = "none";
  } else if (gameType === 2) {
    aiBoard.style.display = "none";
  }
}

// Creates the listeners on all buttons.
const createButtonListeners = (choiceVar, buttons, playerType, gameType) => {
  if(aiDifficulty === 3) {
    console.log("You're DOOOOOOMEDDDDDDD!!!!!!");
    for(let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", () => {
        if(!choiceVar) {
          choiceVar = buttons[i].textContent;
          player1Choice = choiceVar.toLowerCase();
          // Choosing the computer's choice...
          if(player1Choice == "rock") {
            computerChoice = "paper";
          } else if (player1Choice == "paper") {
            computerChoice = "scissors";
          } else if (player1Choice == "scissors") {
            computerChoice = "rock";
          }
          console.log("Choosing a winner...");
          checkGame(player1Choice.toLowerCase(), computerChoice, gameType);
        }
      });
    }  
  } else {
    for(let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", () => {
        if(!choiceVar) {
          choiceVar = buttons[i].textContent;
          playerType == 1 ? player1Choice = choiceVar.toLowerCase() : playerType == 2 ? player2Choice = choiceVar.toLowerCase() : computerChoice = choiceVar.toLowerCase();
          if(gameType == 1) {
            checkGame(player1Choice.toLowerCase(), player2Choice.toLowerCase(), gameType);
          } else if (gameType == 2) {
            console.log("Choosing a winner...");
            checkGame(player1Choice.toLowerCase(), computerChoice.toLowerCase(), gameType);
          }
        }
      });
    }
  }
}

// The case in where the game is player vs player.
const playerGame = () => {
  winMessage.textContent = "";

  resetScreen();

  gameType = 1;

  playerBoard = document.querySelector(".playerGame");
  playerBoard.style.display = "block";
  gameChoice.style.display = "none";

  let p1Buttons = document.querySelectorAll(".player1 button");
  let p2Buttons = document.querySelectorAll(".player2 button");

  console.log("creating buttons...");
  createButtonListeners(player1Choice, p1Buttons, 1, gameType);
  createButtonListeners(player2Choice, p2Buttons, 2, gameType);
}

const showDifficultyMenu = () => {
  winMessage.textContent = "";
  resetScreen();
  difficultyChoice.style.display = "block";
}

const setComputerDifficulty = (diff) => {
  console.log(diff);
  aiDifficulty = diff;
  difficultyChoice.style.display = "none";
  computerGame();
}

const createAiMove = (num) => {
  switch (num) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "paper";
      break;
    case 3:
      computerChoice = "scissors";
      break;
    default:
      console.log("Huh!? What's that supposed to be!?");
      break;
  }
}

// The case where the game is player vs computer.
const computerGame = () => {
  console.log("vs computer!");

  gameType = 2;

  if(aiDifficulty === 1) {
    let aiMove;
    let aiMoveNum = Math.ceil(Math.random() * 3);
    console.log(aiMoveNum);
    createAiMove(aiMoveNum);
  } else if (aiDifficulty === 2) {
    if(!nextAiMove) {
      let aiMove;
      let aiMoveNum = Math.ceil(Math.random() * 3);
      console.log(aiMoveNum);
      createAiMove(aiMoveNum);
    } else {
      computerChoice = nextAiMove;
    }
  } else if (aiDifficulty === 3) {
    console.log("Hah! You lost already!!!");
    // And now we wait...
  }
  console.log(computerChoice);

  aiBoard = document.querySelector(".computerGame");
  aiBoard.style.display = "block";
  gameChoice.style.display = "none";
  
  let humanButtons = document.querySelectorAll(".humanPlayer button");

  createButtonListeners(player1Choice, humanButtons, 1, gameType);
}

const main = () => {
  console.log("Ready to go!");
}

document.addEventListener('DOMContentLoaded', main);