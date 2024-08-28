// script.js
let counter = 0;

const counterValueElement = document.getElementById("counter-value");
const incrementButton = document.getElementById("increment-btn");
const decrementButton = document.getElementById("decrement-btn");
const resetButton = document.getElementById("reset-btn");

incrementButton.addEventListener("click", () => {
  counter++;
  updateCounter();
});

decrementButton.addEventListener("click", () => {
  counter--;
  updateCounter();
});

resetButton.addEventListener("click", () => {
  counter = 0;
  updateCounter();
});

function updateCounter() {
  counterValueElement.textContent = counter;
}
