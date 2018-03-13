const gameChoice = document.querySelector(".gameChoice");

//checks to see if the game is over.
const checkGame = (option1, option2) => {
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

// The case in where the game is player vs player.
const playerGame = () => {
  let player1Choice = "";
  let player2Choice = "";


  let playerBoard = document.querySelector(".playerGame");
  console.log(playerBoard.style);
  playerBoard.style.display = "block";
  gameChoice.style.display = "none";

  var p1Buttons = document.querySelectorAll(".player1 button");
  var p2Buttons = document.querySelectorAll(".player2 button");

  for(let i = 0; i < p1Buttons.length; i++) {
    p1Buttons[i].addEventListener("click", () => {
      player1Choice = p1Buttons[i].textContent;
      console.log(p1Buttons[i].textContent);
      checkGame(player1Choice.toLowerCase(), player2Choice.toLowerCase());
    });
  }

  for(let i = 0; i < p1Buttons.length; i++) {
    p2Buttons[i].addEventListener("click", () => {
      player2Choice = p2Buttons[i].textContent;
      console.log(p2Buttons[i].textContent);
      checkGame(player1Choice.toLowerCase(), player2Choice.toLowerCase());
    });
  }
}


// The case where the game is player vs computer.
const computerGame = () => {
  console.log("vs computer!");
}

const main = () => {
  console.log("Ready to go!");
}

document.addEventListener('DOMContentLoaded', main);
