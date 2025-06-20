import { isValid, resetValidation } from './validation.js';
import { resetScale } from './scale.js';
import './effects.js';
import { resetEffects } from './effects.js';
import { showPopup } from './popups.js';
import { Popups, SubmitTexts } from './constants.js';
import { sendData } from './api.js';
import { removeEscapeControl, setEscapeControl } from './escape-control.js';

const formTag = document.querySelector('.img-upload__form');
const modalTag = document.querySelector('.img-upload__overlay');
const uploadFileTag = document.querySelector('#upload-file');
const previewImageTag = document.querySelector('.img-upload__preview img');
const closeButtonTag = document.querySelector('.img-upload__cancel');
const bodyTag = document.body;
const previewsRadioTags = document.querySelectorAll('.effects__preview');
const buttonSubmitTag = document.querySelector('.img-upload__submit');
const descriptionTag = document.querySelector('.text__description');
const hashtagsTag = document.querySelector('.text__hashtags');


const showModal = (isShown = true) => {
  if (isShown) {
    modalTag.classList.remove('hidden');
    bodyTag.classList.add('modal-open');
  } else {
    modalTag.classList.add('hidden');
    bodyTag.classList.remove('modal-open');
  }
};

const renderPreview = () => {
  const fileImage = uploadFileTag.files[0];
  const imageURL = URL.createObjectURL(fileImage);
  previewImageTag.src = imageURL;
  previewsRadioTags.forEach((item) => {
    item.style.backgroundImage = `url(${imageURL})`;
  });
};

const closeModal = () => {
  showModal(false);
  formTag.reset();
  resetScale();
  resetValidation();
  resetEffects();
};

const canCloseWindow = () => !(document.activeElement === hashtagsTag || document.activeElement === descriptionTag);

uploadFileTag.addEventListener('change', () => {
  renderPreview();
  showModal();
  setEscapeControl(closeModal, canCloseWindow);
});

closeButtonTag.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeModal();
  removeEscapeControl();
});

const blockSubmitButton = (isBlocked = true) => {
  buttonSubmitTag.disabled = isBlocked;
  buttonSubmitTag.textContent = isBlocked ? SubmitTexts.SENDING : SubmitTexts.IDLE;
};

formTag.addEventListener('submit', (evt) => {
  evt.preventDefault();

  if (isValid()) {
    blockSubmitButton();
    sendData(new FormData(formTag))
      .then((response) => {
        if (!response.ok) {
          throw new Error();
        }
        closeModal();
        removeEscapeControl();
        showPopup(Popups.SUCCESS);
      })
      .catch(() => {
        showPopup(Popups.ERROR);
      })
      .finally(() => {
        blockSubmitButton(false);
      });
  }
});
