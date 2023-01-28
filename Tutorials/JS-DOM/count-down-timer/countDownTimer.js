const userInput = document.querySelector("#user-input");
const saveBtn = document.querySelector("#save");
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
let displayResult = document.querySelector(".display");

let userInputValue;
let intervalID;

saveBtn.onclick = function () {
  userInputValue = parseInt(userInput.value);
};

startBtn.addEventListener("click", function () {
  intervalID = setInterval(function () {
    if (userInputValue > 0) {
      userInputValue--;
    }
    displayResult.innerHTML = userInputValue;
  }, 1000);
});

stopBtn.addEventListener("click", function () {
  clearInterval(intervalID);
});

resetBtn.addEventListener("click", function () {
  userInputValue = 0;
  displayResult.innerHTML = userInputValue;
});
