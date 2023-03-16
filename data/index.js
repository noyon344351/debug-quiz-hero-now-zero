// global variable declaration
let count = 0;
let timer;
let quizData;
let answers = [];

// Dom elements called
let startQuiz = document.querySelector("#startQuiz");
let rulesContainer = document.querySelector("#rulesContainer");
let alertContainer = document.querySelector("#alertContainer");
let submitContainer = document.querySelector("#submitContainer");
let quizContainer = document.querySelector("#quizContainer");
let answersContainer = document.querySelector("#answersContainer");
let displayResult = document.querySelector("#displayResult");

// EventListener for quiz start button
startQuiz.addEventListener("click", () => {
  let countDown = document.querySelector("#countDownContainer");
  let counter = document.querySelector("#counter");
  let counterNum = 2;
  countDown.classList.remove("hidden");
  countDown.classList.add("flex");

  let x = setInterval(() => {
    if (counterNum < 0) {
      countDown.classList.remove("flex");
      countDown.classList.add("hidden");
      counterNum = 3;
      count = 0;
      timer = null;
      quizData = null;
      answers = [];
      rulesContainer.classList.add("hidden");
      alertContainer.classList.remove("hidden");
      submitContainer.classList.remove("hidden");
      submitContainer.classList.add("flex");
      loadQuiz();
      quizTimer();
      clearInterval(x);
    }
    counter.innerText = counterNum;
    counterNum--;
  }, 1000);
});