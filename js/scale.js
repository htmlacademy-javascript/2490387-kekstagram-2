import { Scale } from './constants.js';

const minusTag = document.querySelector('.scale__control--smaller');
const plusTag = document.querySelector('.scale__control--bigger');
const inputTag = document.querySelector('.scale__control--value');
const imageTag = document.querySelector('.img-upload__preview img');

let currentScale = Scale.DEFAULT;

const render = () => {
  inputTag.value = `${currentScale}%`;
  imageTag.style.transform = `scale(${currentScale * Scale.FACTOR})`;
};

minusTag.addEventListener('click', () => {
  currentScale = currentScale - Scale.STEP >= Scale.MIN
    ? currentScale - Scale.STEP
    : Scale.MIN;

  render();
});

plusTag.addEventListener('click', () => {
  currentScale = currentScale + Scale.STEP <= Scale.MAX
    ? currentScale + Scale.STEP
    : Scale.MAX;

  render();
});

export const resetScale = () => {
  currentScale = Scale.DEFAULT;
  render();
};

resetScale();
