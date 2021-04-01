const colorArray = ["redBack", "greenBack", "blueBack", "whiteBack", "blackBack"];
//var userInputElement = document.getElementById("userInputText");
var userSelection = document.getElementById("userSelect");
var btnTriggerElement = document.getElementById("btnTrigger");
var playGroundElement = document.getElementById("playGround");
var messageElement = document.getElementById("messageElement");
var idCounter = 0;

//

var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);
document.getElementById("demo").innerHTML = txt;

function myFunction(value, index, array) {
  txt = txt + value + "<br>"; 
}







//function createElementInsidePlayGround(event) {
//    event.preventDefault();//prevents the normal action taken by the web browser, in this case prevent it from posting the form.
//    console.log("Event:", event);
//    //console.log("input:", userInputElement.value);
//    console.log("input:", userSelection.value);
//
//    var newDivBox = document.createElement("div");
//    //newDivBox.className = "box " + userInputElement.value;
//    newDivBox.id = idCounter++;
//    newDivBox.classList.add("box");
//    newDivBox.classList.add(colorArray[userSelection.value]);
//
//    playGroundElement.appendChild(newDivBox);
//
//    newDivBox.addEventListener("mouseover", function (event) {
//        console.log("Mouse Over:", event);
//        messageElement.innerHTML = "id: " + event.target.id + " | class´s: " + event.target.className;
//    })
//}

