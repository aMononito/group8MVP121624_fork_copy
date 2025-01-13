const dealBtn = document.getElementById("deal");
const newGameBtn = document.getElementById("new-game");
const modal = document.querySelector(".modal");
const modalInput = document.getElementById("your-name");
const submitBtn = document.getElementById("submit-btn");
const displayArea = document.getElementById("display-area");

submitBtn.addEventListener("submit", (event) => {
  event.preventDefault();
  event.stopPropagation();
  const inputValue = modalInput.value;
  console.log("inputValue", inputValue);
  displayArea.textContent = inputValue;
});

const newCard = function () {
  Math.floor(Math.random() * 26) + 1;
};

dealBtn.addEventListener("click", newCard);

console.log("hello");

$(document).on("click", "#btn-submit", function (event) {
  event.preventDefault();
  console.log("hello");
});
