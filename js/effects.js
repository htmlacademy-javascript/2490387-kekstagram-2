import { DEFAULT_EFFECT, EffectsSettings } from './constants.js';

const effectsListTag = document.querySelector('.effects__list');
const sliderElement = document.querySelector('.effect-level__slider');
const valueTag = document.querySelector('.effect-level__value');
const imageTag = document.querySelector('.img-upload__preview img');
const sliderTag = document.querySelector('.effect-level');

let currentEffect = DEFAULT_EFFECT;

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 80,
  connect: 'lower',
  format: {
    to: function (value) {
      return parseFloat(value);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

const render = () => {
  if (currentEffect === DEFAULT_EFFECT) {
    imageTag.style.filter = '';
  } else {
    const { style, units } = EffectsSettings[currentEffect];
    imageTag.style.filter = `${style}(${valueTag.value}${units})`;
  }
};

const renderSlider = () => {
  if (currentEffect === DEFAULT_EFFECT) {
    sliderTag.classList.add('hidden');
  } else {
    sliderTag.classList.remove('hidden');
  }
};

sliderElement.noUiSlider.on('update', () => {
  valueTag.value = sliderElement.noUiSlider.get();
  render();
  renderSlider();
});

const updateSlider = () => {
  const { slider } = EffectsSettings[currentEffect];
  sliderElement.noUiSlider.updateOptions(slider);
};

effectsListTag.addEventListener('change', ({ target }) => {
  currentEffect = target.value;
  updateSlider();
});

export const resetEffects = () => {
  currentEffect = DEFAULT_EFFECT;
  render();
  renderSlider();
};

resetEffects();
