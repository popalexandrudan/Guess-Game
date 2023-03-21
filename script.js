'use strict';

const randomNumberEl = document.querySelector('.number');
const againButtonEl = document.querySelector('.btn.again');
const bodyEl = document.body;

const userInputNumber = document.querySelector('.guess');
const checkButtonEl = document.querySelector('.btn.check');
const informationEl = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const highScoreEl = document.querySelector('.highscore');

let randomNumber;
let score = 20;
let highScore = 0;

let generateRandomNumber = () => {
  randomNumber = Math.trunc(Math.random() * 20 + 1);
  return randomNumber;
};

generateRandomNumber();
console.log(generateRandomNumber());

let decreaseScore = () => {
  score--;
  scoreEl.textContent = score;
};

const displayMessage = message => {
  informationEl.textContent = message;
};

let checkNumber = () => {
  let inputNumber = userInputNumber.value;
  if (!Number(inputNumber)) {
    displayMessage('You must enter a number must be between 1 and 20 !');
  } else if (Number(inputNumber) < 0 || Number(inputNumber) > 20) {
    informationEl.textContent = 'Number must be between 1 and 20 !';
  } else if (inputNumber == randomNumber) {
    randomNumberEl.textContent = inputNumber;
    displayMessage('Correct Number !');
    bodyEl.style.backgroundColor = 'green';
    if (highScore < score) {
      highScore = score;
      highScoreEl.textContent = highScore;
    }
  } else if (inputNumber < randomNumber) {
    displayMessage('To low !');
    decreaseScore();
  } else if (inputNumber > randomNumber) {
    displayMessage('To high !');
    decreaseScore();
  }
  console.log(score);
};

checkButtonEl.addEventListener('click', () => {
  checkNumber();
});

let reset = () => {
  displayMessage('Start guessing...');
  randomNumberEl.textContent = '?';
  userInputNumber.value = '';
  bodyEl.style.backgroundColor = 'black';
  score = 20;
  scoreEl.textContent = score;
  generateRandomNumber();
};

againButtonEl.addEventListener('click', () => {
  reset();
});
