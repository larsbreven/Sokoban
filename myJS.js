// --------------------------  Global variables ------------------------------

const gameBoard = document.getElementById("board");
let playerPos = {horizontalPos:0,verticalPos:0};

// ------------------------------ Functions ----------------------------------

function createGameBoard() {
    for (let verticalPos = 0; verticalPos < tileMap01.height; ++verticalPos) {
        for (let horizontalPos = 0; horizontalPos < tileMap01.width; ++horizontalPos) {
        makeTheBoxes(tileMap01.mapGrid[verticalPos][horizontalPos][0],verticalPos,horizontalPos);
    }
  }
}

function makeTheBoxes(boxType,verticalPos,horizontalPos) {
  let newBox = document.createElement("div");
  newBox.classList.add("box");
  newBox.id = "verticalPos"+ verticalPos + "horizontalPos" + horizontalPos;
 
  switch (boxType) {
    case "W":                           // Wall (W = grid from tileMap01)
      newBox.classList.add("wall");
      break;
    case "B":                           // Movable block (B = grid from tileMap01)
      newBox.classList.add("movableBlock");
      break;
    case "P":                           // Player (P = grid from tileMap01)
      newBox.classList.add("player");
      break;
    case "G":                           // Goal area (G = grid from tileMap01)
      newBox.classList.add("goalArea");
      break;
    default:
  }

  gameBoard.appendChild(newBox);
}

// --------------------- Run code lines --------------------------------------
document.getElementsByTagName("body")[0].style.backgroundColor = "lightgrey";

createGameBoard();
