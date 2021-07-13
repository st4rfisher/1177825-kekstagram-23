import {uploadFileOverlay} from './form.js';

const scaleControlSmaller = uploadFileOverlay.querySelector('.scale__control--smaller');
const scaleControlBigger = uploadFileOverlay.querySelector('.scale__control--bigger');
const scaleControlValue = uploadFileOverlay.querySelector('.scale__control--value');
const previewImage = uploadFileOverlay.querySelector('.img-upload__preview img');
const MAX_SCALE = 100;
const MIN_SCALE = 25;
const STEP = 25;

scaleControlValue.setAttribute('value', `${MAX_SCALE}%`);
previewImage.style.transform = `scale(${MAX_SCALE}%, ${MAX_SCALE}%)`;

scaleControlBigger.addEventListener('click', () => {
  const value = Number(scaleControlValue.value.replace(/[^-0-9-.]/, ''));
  if(value < MAX_SCALE) {
    scaleControlValue.setAttribute('value', (`${value + STEP}%`));
    previewImage.style.transform = `scale(${value + STEP}%)`;
  }
});

scaleControlSmaller.addEventListener('click', () => {
  const value = Number(scaleControlValue.value.replace(/[^-0-9-.]/, ''));
  if(value > MIN_SCALE) {
    scaleControlValue.setAttribute('value', (`${value - STEP}%`));
    previewImage.style.transform = `scale(${value - STEP}%)`;
  }
});

export {previewImage};

