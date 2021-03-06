const difficultyChoice = document.querySelector(".difficulty");
const gameChoice = document.querySelector(".gameChoice");
const winMessage = document.querySelector(".winMessage");

// Used for animations and transitions:
const firstPlayerSection = document.querySelector(".player1");
const secondPlayerSection = document.querySelector(".player2");
const humanSection = document.querySelector(".humanPlayer");
const promptMessage = document.querySelector(".gameChoice h3");

let playerBoard;

let player1Choice = "";
let player2Choice = "";
let computerChoice = "";
let gameType = "";
let nextAiMove = "";
let aiDifficulty = "";

//checks to see if the game is over.
const checkGame = (option1, option2, type) => {

  if(option1 && option2) {

    promptMessage.textContent = "Want to play again?";
    addRemoveClasses("remove", [firstPlayerSection, "disabled"], [secondPlayerSection, "disabled"], [humanSection, "disabled"]);
    // firstPlayerSection.classList.remove("disabled");
    // secondPlayerSection.classList.remove("disabled");
    // humanSection.classList.remove("disabled");
    
    if(option1 == option2) {
      nextAiMove = setMessageAndNextMove("TIE!!!", "scissors");
    } else if(option1 == "rock") {
      
      if(option2 == "paper") {
        nextAiMove = setMessageAndNextMove("Player 2 Wins!!!", "rock");
      } else if (option2 == "scissors") {
        nextAiMove = setMessageAndNextMove("Player 1 Wins!!!", "paper");
      }

    } else if (option1 == "paper") {
      
      if(option2 == "rock") {
        nextAiMove = setMessageAndNextMove("Player 1 Wins!!!", "scissors");
      } else if (option2 == "scissors") {
        nextAiMove = setMessageAndNextMove("Player 2 Wins!!!", "paper");
      }

    } else if (option1 == "scissors") {
      
      if(option2 == "paper") {
        nextAiMove = setMessageAndNextMove("Player 1 Wins!!!", "rock");
      } else if (option2 == "rock") {
        nextAiMove = setMessageAndNextMove("Player 2 Wins!!!", "scissors");
      }
    }

    reloadGame();

  } else {
    console.log("There is not a winner yet!");
  }
}

const setMessageAndNextMove = (message, nextMove) => {
  winMessage.textContent = message;
  return nextMove;
}

const addRemoveClasses = (option, ...args) => {
  // console.log(option);
  // console.log(args);
  // args[0][0].classList.add(args[0][1]);
  for(let i = 0; i < args.length; i++) {
    args[i][0].classList[option](args[i][1]);
  }
  
}

// const addClass = (nodeItem, className) => {
//   nodeItem.add("");
// }

const reloadGame = () => {
  // This chunk of code reloads the game.
  gameChoice.classList.remove("upTransition");
  player1Choice = "";
  player2Choice = "";
  computerChoice = "";
  aiDifficulty = "";
  // console.log(player1Choice, player2Choice, computerChoice);
  // console.log("game reset!");
}

const resetScreen = () => {
  if(gameType === 1) {
    // playerBoard.style.display = "none";
  } else if (gameType === 2) {
    humanSection.classList.add("downTransition");
  }
}

// Creates the listeners on all buttons.
const createButtonListeners = (choiceVar, buttons, playerType, gameType) => {
  // Checking the case where the game is against the unbeatable AI.
  if(aiDifficulty === 3) {
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
          if(playerType == 1) {
            firstPlayerSection.classList.add("disabled");
          } else if(playerType == 2) {
            secondPlayerSection.classList.add("disabled");
          }
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

  gameChoice.classList.add("upTransition");
  firstPlayerSection.classList.remove("leftTransition");
  secondPlayerSection.classList.remove("rightTransition");

  let p1Buttons = document.querySelectorAll(".player1 button");
  let p2Buttons = document.querySelectorAll(".player2 button");

  createButtonListeners(player1Choice, p1Buttons, 1, gameType);
  createButtonListeners(player2Choice, p2Buttons, 2, gameType);
}

const showDifficultyMenu = () => {
  addRemoveClasses("add", [gameChoice, "upTransition"], [firstPlayerSection, "leftTransition"], [secondPlayerSection, "rightTransition"]);
  winMessage.textContent = "";

  // gameChoice.classList.add("upTransition");
  // firstPlayerSection.classList.add("leftTransition");
  // secondPlayerSection.classList.add("rightTransition");

  resetScreen();
  difficultyChoice.classList.remove("downTransition");
}

const setComputerDifficulty = (diff) => {
  aiDifficulty = diff;
  difficultyChoice.classList.add("downTransition");
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

  gameType = 2;
  
  let aiMove;
  let aiMoveNum = Math.ceil(Math.random() * 3);
  if(aiDifficulty === 1) {

    createAiMove(aiMoveNum);
  } else if (aiDifficulty === 2) {
    if(!nextAiMove) {
      createAiMove(aiMoveNum);
    } else {
      computerChoice = nextAiMove;
    }
  }

  gameChoice.classList.add("upTransition");
  humanSection.classList.remove("downTransition");
  
  let humanButtons = document.querySelectorAll(".humanPlayer button");

  createButtonListeners(player1Choice, humanButtons, 1, gameType);
}

// const main = () => {
//   console.log("Ready to go!");
// }

// document.addEventListener('DOMContentLoaded', main);