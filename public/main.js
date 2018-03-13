const difficultyChoice = document.querySelector(".difficulty");
const gameChoice = document.querySelector(".gameChoice");

let playerBoard;

let player1Choice = "";
let player2Choice = "";
let computerChoice = "";
let gameType = "";
let nextAiMove = "";
let aiDifficulty = "";

//checks to see if the game is over.
const checkGame = (option1, option2, type) => {
  console.log("The winner is...");
  if(option1 && option2) {
    console.log("There is a winner!");
    
    if(option1 == option2) {
      console.log("TIE!");
      nextAiMove = "scissors";
    } else if(option1 == "rock") {
      
      if(option2 == "paper") {
        console.log("Player 2 Wins!");
        nextAiMove = "rock";
      } else if (option2 == "scissors") {
        console.log("Player 1 Wins!");
        nextAiMove = "paper";
      }
    } else if (option1 == "paper") {
      
      if(option2 == "rock") {
        console.log("Player 1 Wins!");
        nextAiMove = "scissors";
      } else if (option2 == "scissors") {
        console.log("Player 2 Wins!");
        nextAiMove = "paper";
      }
    } else if (option1 == "scissors") {
      
      if(option2 == "paper") {
        console.log("Player 1 Wins!");
        nextAiMove = "rock";
      } else if (option2 == "rock") {
        console.log("Player 2 Wins!");
        nextAiMove = "scissors";
      }
    }

    // This chunk of code reloads the game.
    gameChoice.style.display = "block";
    player1Choice = "";
    player2Choice = "";
    computerChoice = "";
    gameType = "";

  } else {
    console.log("There is not a winner yet!");
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

  gameType = 1;

  playerBoard.style.display = "block";
  gameChoice.style.display = "none";

  let p1Buttons = document.querySelectorAll(".player1 button");
  let p2Buttons = document.querySelectorAll(".player2 button");

  console.log("creating buttons...");
  createButtonListeners(player1Choice, p1Buttons, 1, gameType);
  createButtonListeners(player2Choice, p2Buttons, 2, gameType);
}

const showDifficultyMenu = () => {
  difficultyChoice.style.display = "block";
}

const setComputerDifficulty = (diff) => {
  console.log(diff);
  aiDifficulty = diff;
  difficultyChoice.style.display = "none";
  computerGame();
}

// The case where the game is player vs computer.
const computerGame = () => {
  console.log("vs computer!");

  gameType = 2;

  if(aiDifficulty === 1) {
    let aiMove;
    let aiMoveNum = Math.ceil(Math.random() * 3);
    console.log(aiMoveNum);
    switch (aiMoveNum) {
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
        console.log("Huh!? What's that supposed to be!?")
        break;
    }
  } else if (aiDifficulty === 2) {
    if(!nextAiMove) {
      let aiMove;
      let aiMoveNum = Math.ceil(Math.random() * 3);
      console.log(aiMoveNum);
      switch (aiMoveNum) {
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
          console.log("Huh!? What's that supposed to be!?")
          break;
      }
    } else {
      computerChoice = nextAiMove;
    }
  } else if (aiDifficulty === 3) {
    console.log("Hah! You lost already!!!");
  }


  console.log(computerChoice);

  let playerBoard = document.querySelector(".computerGame");
  playerBoard.style.display = "block";
  gameChoice.style.display = "none";
  
  let humanButtons = document.querySelectorAll(".humanPlayer button");

  createButtonListeners(player1Choice, humanButtons, 1, gameType);
}

const main = () => {
  console.log("Ready to go!");
}

document.addEventListener('DOMContentLoaded', main);
