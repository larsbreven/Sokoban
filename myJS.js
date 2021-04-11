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
 
    if (boxType === "W") newBox.classList.add("wall");
    if (boxType === "B") newBox.classList.add("movableBlock");
    if (boxType === "P") newBox.classList.add("player");
    if (boxType === "G") newBox.classList.add("goalArea");
    
    gameBoard.appendChild(newBox);
}

// --------------------- Run code lines --------------------------------------
document.getElementsByTagName("body")[0].style.backgroundColor = "lightgrey";

createGameBoard();
