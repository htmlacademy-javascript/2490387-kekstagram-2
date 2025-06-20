import { HASHTAG_FORMULA, MAX_DESCRIPTION, MAX_HASHTAGS } from './constants.js';

const formTag = document.querySelector('.img-upload__form');
const descriptionTag = document.querySelector('.text__description');
const hashtagsTag = document.querySelector('.text__hashtags');


const pristine = new Pristine(formTag, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

const checkDescription = (value) => value.length <= MAX_DESCRIPTION;

const getHashtags = (text) => text.toLowerCase().split(' ').filter((item) => item.length);

const checkHashtags = (value) => {
  if (!value.trim().length) {
    return true;
  }
  const hashtags = getHashtags(value);
  return hashtags.every((item) => HASHTAG_FORMULA.test(item));
};

const checkCountHashtag = (value) => {
  if (!value.trim().length) {
    return true;
  }
  const hashtags = getHashtags(value);
  return hashtags.length <= MAX_HASHTAGS;
};

const checkUniques = (value) => {
  if (!value.trim().length) {
    return true;
  }
  const hashtags = getHashtags(value);
  const uniques = [...new Set(hashtags)];
  return hashtags.length === uniques.length;
};

pristine.addValidator(
  descriptionTag,
  checkDescription,
  `Длина описания не должна превышать ${MAX_DESCRIPTION}`
);

pristine.addValidator(
  hashtagsTag,
  checkHashtags,
  'Невалидный хештег'
);

pristine.addValidator(
  hashtagsTag,
  checkCountHashtag,
  `Количество хештегов не должно превышать ${MAX_HASHTAGS}`
);

pristine.addValidator(
  hashtagsTag,
  checkUniques,
  'Хештеги не должны повторяться'
);

export const isValid = () => pristine.validate();
export const resetValidation = () => {
  pristine.reset();
};
