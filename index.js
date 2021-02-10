// Your code here

let dodger = document.getElementById("dodger"); 

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
  if (e.key === "ArrowUp") {
    moveDodgerUp();
  }
  if (e.key === "ArrowDown") {
    moveDodgerDown();
  }
}); 

function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
} 

function moveDodgerRight() {
  let rightNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(rightNumbers, 10);
  if (left < 360) {
    dodger.style.left = `${left + 1}px`;
  }
} 

function moveDodgerUp() {
  let upNumbers = dodger.style.bottom.replace("px", "");
  let up = parseInt(upNumbers, 10);
  if (up < 360) {
  dodger.style.bottom = `${up + 1}px`;
  }
} 

function moveDodgerDown() {
  let bottomNumbers = dodger.style.bottom.replace("px", "");
  let bottom = parseInt(bottomNumbers, 10);
  if (bottom > 0) {
  dodger.style.bottom = `${bottom - 1}px`;
  }
} 
