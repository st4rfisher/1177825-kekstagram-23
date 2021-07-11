import {uploadFileOverlay} from './form.js';
import './../nouislider/nouislider.js';
const slider = uploadFileOverlay.querySelector('.effect-level__slider');
const value = uploadFileOverlay.querySelector('.effect-level__value');
const effects = uploadFileOverlay.querySelectorAll('.effects__preview');
const original = uploadFileOverlay.querySelector('.effects__preview--none');
const chrome = uploadFileOverlay.querySelector('.effects__preview--chrome');
const sepia = uploadFileOverlay.querySelector('.effects__preview--sepia');
const marvin = uploadFileOverlay.querySelector('.effects__preview--marvin');
const phobos = uploadFileOverlay.querySelector('.effects__preview--phobos');
const heat = uploadFileOverlay.querySelector('.effects__preview--heat');

noUiSlider.create(slider, {
  range: {
    min: 0,
    max: 100,
  },
  start: 80,
  connect: 'lower',
});

slider.noUiSlider.on('update', (handle, unencoded) => {
  value.value = unencoded[handle];
});
