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
  randomNumber = Math.floor(Math.random() * 20 + 1);
  return randomNumber;
};

generateRandomNumber();

let checkNumber = () => {
  if (userInputNumber.value == randomNumber) {
    randomNumberEl.textContent = userInputNumber.value;
    informationEl.textContent = 'Correct Number !';
    bodyEl.style.backgroundColor = 'green';
    if (highScore < score) {
      highScore = score;
      highScoreEl.textContent = highScore;
    }
  } else if (userInputNumber.value < randomNumber) {
    informationEl.textContent = 'To low !';
    score--;
    scoreEl.textContent = score;
  } else if (userInputNumber.value > randomNumber) {
    informationEl.textContent = 'To high !';
    score--;
    scoreEl.textContent = score;
  }
};

checkButtonEl.addEventListener('click', () => {
  checkNumber();
});

let reset = () => {
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
