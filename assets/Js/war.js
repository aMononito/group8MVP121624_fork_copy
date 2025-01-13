const dealBtn = document.getElementById("deal");
const newGameBtn = document.getElementById("new-game");
const modal = document.querySelector(".modal");
const modalInput = document.getElementById("your-name");
const submitBtn = document.getElementById("submit-btn");
const displayArea = document.getElementById("display-area");
const formEl = document.getElementById("form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  event.stopPropagation();
  const inputValue = modalInput.value;
  console.log("inputValue", inputValue);
  displayArea.textContent = inputValue;
});


if ()


// const newCard = function () {
//   Math.floor(Math.random() * 26) + 1;
// };

// dealBtn.addEventListener("click", newCard);
