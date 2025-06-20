export const FILTERS = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed'
};

export const SubmitTexts = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикую...'
};

export const Popups = {
  SUCCESS: 'success',
  ERROR: 'error'
};

export const ALERT_TIME = 5000;
export const EFFECTS = {
  NONE: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat'
};
export const DEFAULT_EFFECT = EFFECTS.NONE;

export const EffectsSettings = {
  [EFFECTS.NONE]: {
    slider: {
      range: {
        min: 0,
        max: 100,
      },
      start: 80,
      step: 1
    },
    style: '',
    units: ''
  },
  [EFFECTS.CHROME]: {
    slider: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1
    },
    style: 'grayscale',
    units: ''
  },
  [EFFECTS.SEPIA]: {
    slider: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1
    },
    style: 'sepia',
    units: ''
  },
  [EFFECTS.MARVIN]: {
    slider: {
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1
    },
    style: 'invert',
    units: '%'
  },
  [EFFECTS.PHOBOS]: {
    slider: {
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1
    },
    style: 'blur',
    units: 'px'
  },
  [EFFECTS.HEAT]: {
    slider: {
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1
    },
    style: 'brightness',
    units: ''
  }
};

export const Scale = {
  MAX: 100,
  MIN: 25,
  STEP: 25,
  DEFAULT: 100,
  FACTOR: 0.01
};

export const MAX_HASHTAGS = 5;
export const HASHTAG_FORMULA = /^#[a-zA-Zа-яА-ЯЁё0-9]{1,19}$/;
export const MAX_DESCRIPTION = 140;
export const COMMENTS_STEP = 5;
