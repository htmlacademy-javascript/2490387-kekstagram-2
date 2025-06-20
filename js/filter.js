import { FILTERS } from './constants';
import { renderCards } from './render-cards';
import { debounce } from './utils';

const filtersTag = document.querySelector('.img-filters');
const filtersFormTag = document.querySelector('.img-filters__form');

let localPhotos;
const debouncedRender = debounce(renderCards);

const Filters = {
  [FILTERS.DEFAULT]: () => localPhotos,
  [FILTERS.RANDOM]: () => [...localPhotos].sort(() => Math.random() - 0.5).slice(0, 10),
  [FILTERS.DISCUSSED]: () => [...localPhotos].sort((b, a) => a.comments.length - b.comments.length)
};

export const initFilters = (photos) => {
  localPhotos = [...photos];
  filtersTag.classList.remove('img-filters--inactive');
};

const setActiveButton = (currentButton) => {
  document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  currentButton.classList.add('img-filters__button--active');
};

filtersFormTag.addEventListener('click', ({ target }) => {
  const button = target.closest('.img-filters__button');
  if (button) {
    setActiveButton(button);
    debouncedRender(Filters[button.id]());
  }
});

