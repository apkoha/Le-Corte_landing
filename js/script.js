const modalDisclaimer = document.querySelector(".disclaimer");
const buttonYes = document.getElementById("button_yes");
const buttonNo = document.getElementById("button_no");
const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector(".footer");

const showMePage = () => {
  header.classList.remove("blur");
  main.classList.remove("blur");
  footer.classList.remove("blur");
  modalDisclaimer.classList.add("hidden");
};

buttonYes.addEventListener("click", showMePage);

const ageWarningMessage = () => {
  alert("Ждём Вас снова, когда Вам исполнится 18 лет.");
};

buttonNo.addEventListener("click", ageWarningMessage);

//Если повесить блюр на body, то ломаются элементы c position:fixed и т.д.
