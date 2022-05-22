// DETECTING BUTTON PRESS

let drumLen = document.querySelectorAll(".drum").length;

for (i = 0; i < drumLen; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
  function handleClick() {
    let buttonInnerHTML = this.innerHTML;

    checkKey(buttonInnerHTML);
  }
}

// DETECTING KEY DOWN

document.addEventListener("keydown", function (event) {
  checkKey(event.key);
});

// PLAY SOUND

function checkKey(key) {
  switch (key) {
    case "W":
      let audio1 = new Audio("sounds/tom-1.mp3");
      audio1.play();
      break; 
    case "A":
      let audio2 = new Audio("sounds/tom-2.mp3");
      audio2.play();
      break;
    case "S":
      let audio3 = new Audio("sounds/tom-3.mp3");
      audio3.play();
      break;
    case "D":
      let audio4 = new Audio("sounds/tom-4.mp3");
      audio4.play();
      break;
    case "J":
      let audio5 = new Audio("sounds/snare.mp3");
      audio5.play();
      break;
    case "K":
      let audio6 = new Audio("sounds/crash.mp3");
      audio6.play();
      break;
    case "L":
      let audio7 = new Audio("sounds/kick-bass.mp3");
      audio7.play();
      break;
    default:
      console.log("buttonInnerHTML");
      break;
  }
}
