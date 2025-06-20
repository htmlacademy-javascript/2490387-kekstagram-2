import { openBigPicture } from './big-picture';

const containerTag = document.querySelector('.pictures');
const cardTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

let localPhotos;

const clear = () => {
  document.querySelectorAll('.picture').forEach((item) => {
    item.remove();
  });
};

export const renderCards = (photos) => {
  localPhotos = [...photos];
  clear();
  const fragment = document.createDocumentFragment();
  photos.forEach(({ url, description, comments, likes, id }) => {
    const card = cardTemplate.cloneNode(true);
    const image = card.querySelector('.picture__img');
    image.src = url;
    image.alt = description;
    card.querySelector('.picture__comments').textContent = comments.length;
    card.querySelector('.picture__likes').textContent = likes;

    card.dataset.id = id;
    fragment.append(card);
  });
  containerTag.append(fragment);
};


containerTag.addEventListener('click', (evt) => {
  const card = evt.target.closest('.picture');
  if (card) {
    const id = Number(card.dataset.id);
    const currentPhoto = localPhotos.find((item) => id === item.id);
    openBigPicture(currentPhoto);
  }
});
