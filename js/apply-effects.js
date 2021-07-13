import {uploadFileOverlay} from './form.js';
import {previewImage} from './change-image-scale.js';

import '../nouislider/nouislider.js';
const slider = uploadFileOverlay.querySelector('.effect-level__slider');
const levelValue = uploadFileOverlay.querySelector('.effect-level__value');
const filters = uploadFileOverlay.querySelectorAll('.effects__radio');
const level = uploadFileOverlay.querySelector('.effect-level');

let filterName = '';
level.classList.add('hidden');
noUiSlider.create(slider, {
  range: {
    min: 0,
    max: 1,
  },
  start: 0.5,
  step: 0.1,
  connect: 'lower',
});

slider.noUiSlider.on('update', (values, handle) => {
  levelValue.value = values[handle];
});

const adjustFilter = (filter) => {
  if (filter === 'effect-none') {
    previewImage.style.filter = 'none';
  } else if (filter === 'effect-chrome') {
    previewImage.style.filter = `grayscale(${levelValue.value})`;
  } else if (filter === 'effect-sepia') {
    previewImage.style.filter = `sepia(${levelValue.value})`;
  } else if (filter === 'effect-marvin') {
    previewImage.style.filter = `invert(${levelValue.value}%)`;
  } else if (filter === 'effect-phobos') {
    previewImage.style.filter = `blur(${levelValue.value}px)`;
  } else if (filter === 'effect-heat') {
    previewImage.style.filter = `brightness(${levelValue.value})`;
  }
};

const setFilter = (effect) => {
  filterName  = effect.getAttribute('id');
  level.classList.remove('hidden');
  if (filterName === 'effect-none') {
    level.classList.add('hidden');
  } else if (filterName === 'effect-marvin') {
    slider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    });
  } else if (filterName === 'effect-phobos') {
    slider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    });
  } else if (filterName === 'effect-heat') {
    slider.noUiSlider.updateOptions({
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
    });
  } else {
    slider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    });
  }

  adjustFilter(filterName);
  slider.noUiSlider.on('update', () => adjustFilter(filterName));
};

filters.forEach((filtersItem) => {
  filtersItem.addEventListener('click', () => setFilter(filtersItem));
});
