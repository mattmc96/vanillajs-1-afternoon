//THIS IS MY TICTAC TOE GAME THERE ARE MANY LIKE IT BUT THIS ONE IS MINE 😊

const board = [];

const play = (clickedID) => {
  const playerSpan = document.getElementById("player");
  const clickedElement = document.getElementById(clickedID);
  if (playerSpan.innerText === "X") {
    playerSpan.innerText = "O";
    clickedElement.innerText = "X";
    board[clickedID] = "X";
  } else {
    playerSpan.innerText = "X";
    clickedElement.innerText = "O";
    board[clickedID] = "O";

    //DECLARATION OF TILES

    var topLeft = board[0];
    var topCenter = board[1];
    var topRight = board[2];
    var middleLeft = board[3];
    var middleCenter = board[4];
    var middleRight = board[5];
    var bottomLeft = board[6];
    var bottomCenter = board[7];
    var bottomRight = board[8];

    //WHO IS THE WINNER? LET'S FIND OUT

    if (
      topLeft !== undefined &&
      topLeft === topCenter &&
      topLeft === topRight
    ) {
      alert(`${topLeft} Won this round`);
      location.reload(onclick);
      return;
    }
    if (
      middleLeft !== undefined &&
      middleLeft === middleCenter &&
      middleLeft === middleRight
    ) {
      alert(`${middleLeft} Won this round`);
      location.reload(onclick);
      return;
    }
    if (
      topRight !== undefined &&
      topRight === middleRight &&
      topRight === bottomRight
    ) {
    }
    if (
      bottomLeft !== undefined &&
      bottomLeft === bottomCenter &&
      bottomLeft === bottomRight
    ) {
      alert(`${bottomLeft} Won this round`);
      location.reload(onclick);
      return;
    }
    if (
      topLeft !== undefined &&
      topLeft === middleLeft &&
      topLeft === bottomLeft
    ) {
      alert(`${topLeft} Won this round`);
      location.reload(onclick);
      return;
      alert(`${topRight} is the winner`);
      location.reload(onclick);
      return;
    }
    if (
      topCenter !== undefined &&
      topCenter === middleCenter &&
      topCenter === bottomCenter
    ) {
      alert(`${topCenter} is the winner`);
      location.reload(onclick);
      return;
    }
    if (
      bottomLeft !== undefined &&
      bottomLeft === middleCenter &&
      bottomLeft === topRight
    ) {
      alert(`${bottomLeft} is the winner`);
      location.reload(onclick);
      return;
    }
    if (
      topLeft !== undefined &&
      topLeft === middleCenter &&
      topLeft === bottomRight
    ) {
      alert(`${topLeft} is the winner`);
      location.reload(onclick);
      return;
    }

    // Board is full loop
    let boardFull = true;
    for (let i = 0; i <= 8; i++) {
      if (board[i] === undefined) {
        boardFull = false;
      }
    }
    //WWhen the game is finished
    if (boardFull === true) {
      alert("GAME IS A TIE");
    }
  }
};

//RESET BUTTON

var button = document.createElement("button");
button.innerHTML = "SELF DESTRUCT!!!";

var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

button.addEventListener("click", function () {
  console.log("Play Again?");

  location.reload(onclick);
});

let boardFull = true;
for (let i = 0; i <= 8; i++) {
  if (board[i] === undefined) {
    boardFull = false;
  }
}
