import { renderCards } from './render-cards.js';
import './form.js';
import { showAlert } from './utils.js';
import { getData } from './api.js';
import { initFilters } from './filter.js';

getData()
  .then((photos) => {
    renderCards(photos);
    initFilters(photos);
  })
  .catch(() => {
    showAlert();
  });
