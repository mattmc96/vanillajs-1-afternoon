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
  }
};
