const gameChoice = document.querySelector(".gameChoice");

let player1Choice = "";
let player2Choice = "";
let computerChoice = "";

//checks to see if the game is over.
const checkGame = (option1, option2) => {
  // console.log(option1, option2);
  console.log("The winner is...");
  if(option1 && option2) {
    console.log("There is a winner!");
    if(option1 == option2) {
      console.log("TIE!");
    } else if(option1 == "rock") {
      if(option2 == "paper") {
        console.log("Player 2 Wins!");
      } else if (option2 == "scissors") {
        console.log("Player 1 Wins!");
      }
    } else if (option1 == "paper") {
      if(option2 == "rock") {
        console.log("Player 1 Wins!");
      } else if (option2 == "scissors") {
        console.log("Player 2 Wins!");
      }
    } else if (option1 == "scissors") {
      if(option2 == "paper") {
        console.log("Player 1 Wins!");
      } else if (option2 == "rock") {
        console.log("Player 2 Wins!");
      }
    }
  } else {
    console.log("There is not a winner yet!");
  }
}

const createButtonListeners = (choiceVar, buttons, playerType) => {
  console.log(choiceVar);
  for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
      if(!choiceVar) {
        choiceVar = buttons[i].textContent;
        console.log(choiceVar.toLowerCase());
        playerType == 1 ? player1Choice = choiceVar.toLowerCase() : playerType == 2 ? player2Choice = choiceVar.toLowerCase() : computerChoice = choiceVar.toLowerCase();
        // console.log(buttons[i].textContent);
        checkGame(player1Choice.toLowerCase(), player2Choice.toLowerCase());
      }
    });
  }  
}

// The case in where the game is player vs player.
const playerGame = () => {

  let playerBoard = document.querySelector(".playerGame");
  // console.log(playerBoard.style);
  playerBoard.style.display = "block";
  gameChoice.style.display = "none";

  var p1Buttons = document.querySelectorAll(".player1 button");
  var p2Buttons = document.querySelectorAll(".player2 button");

  console.log("creating buttons...");
  createButtonListeners(player1Choice, p1Buttons, 1);
  createButtonListeners(player2Choice, p2Buttons, 2);
}


// The case where the game is player vs computer.
const computerGame = () => {
  console.log("vs computer!");
}

const main = () => {
  console.log("Ready to go!");
}

document.addEventListener('DOMContentLoaded', main);
