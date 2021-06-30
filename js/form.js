import {open} from './open-close-covers.js';
import {close} from './open-close-covers.js';

const uploadFileButton = document.querySelector('.img-upload__input');
const uploadFileOverlay = document.querySelector('.img-upload__overlay');
const overlayCancelButton = uploadFileOverlay.querySelector('.img-upload__cancel');

uploadFileButton.addEventListener('change', () => {
  open(uploadFileOverlay);
  uploadFileButton.value = null;
});

overlayCancelButton.addEventListener('click', () => {
  close(uploadFileOverlay);
});

export {uploadFileOverlay};
