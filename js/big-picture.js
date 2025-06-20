import { COMMENTS_STEP } from './constants.js';
import { removeEscapeControl, setEscapeControl } from './escape-control.js';

const modalTag = document.querySelector('.big-picture');
const closeButtonTag = document.querySelector('.big-picture__cancel');
const imageTag = document.querySelector('.big-picture__img img');
const captionTag = document.querySelector('.social__caption');
const likesTag = document.querySelector('.likes-count');
const totalCommentsTag = document.querySelector('.social__comment-total-count');
const bodyTag = document.body;
const commentTag = document.querySelector('.social__comment');
const commentContainerTag = document.querySelector('.social__comments');
const commentLoaderTag = document.querySelector('.comments-loader');
const statisticTag = document.querySelector('.social__comment-shown-count');

let localComments;
let renderedComments;

const renderLoader = () => {
  if (localComments.length) {
    commentLoaderTag.classList.remove('hidden');
  } else {
    commentLoaderTag.classList.add('hidden');
  }
};

const renderStatistic = () => {
  statisticTag.textContent = renderedComments;
};

const renderComments = () => {
  const fragment = document.createDocumentFragment();
  localComments.splice(0, COMMENTS_STEP).forEach((item) => {
    const newComment = commentTag.cloneNode(true);
    const image = newComment.querySelector('.social__picture');
    image.src = item.avatar;
    image.alt = item.name;
    newComment.querySelector('.social__text').textContent = item.message;
    renderedComments++;

    fragment.append(newComment);
  });
  commentContainerTag.append(fragment);
  renderLoader();
  renderStatistic();
};

const renderModal = ({ url, likes, description, comments }) => {
  imageTag.src = url;
  captionTag.textContent = description;
  likesTag.textContent = likes;
  totalCommentsTag.textContent = comments.length;
  commentContainerTag.innerHTML = '';
  localComments = [...comments];
  renderedComments = 0;
  renderComments();
};

const showModal = (isShown = true) => {
  if (isShown) {
    modalTag.classList.remove('hidden');
    bodyTag.classList.add('modal-open');
  } else {
    modalTag.classList.add('hidden');
    bodyTag.classList.remove('modal-open');
  }
};
const closeBigPicture = () => {
  showModal(false);
};

export const openBigPicture = ({ url, likes, description, comments }) => {
  showModal();
  renderModal({ url, likes, description, comments });
  setEscapeControl(closeBigPicture);
};

closeButtonTag.addEventListener('click', () => {
  closeBigPicture();
  removeEscapeControl();
});

commentLoaderTag.addEventListener('click', () => {
  renderComments();
});
