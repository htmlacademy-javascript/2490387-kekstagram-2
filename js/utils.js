import { ALERT_TIME } from './constants.js';

const alertTemplate = document.querySelector('#data-error').content.querySelector('.data-error');
const body = document.body;

export const showAlert = () => {
  const alert = alertTemplate.cloneNode(true);
  body.append(alert);
  setTimeout(() => {
    alert.remove();
  }, ALERT_TIME);
};

export const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};
