const dealBtn = document.getElementById("deal");
const newGameBtn = document.getElementById("new-game");
const modal = document.querySelector(".modal");

newGameBtn.onclick = function () {
  modal.style.display = "block";
};

const newCard = function () {
  Math.floor(Math.random() * 26) + 1;
};

dealBtn.addEventListener("click", newCard);
