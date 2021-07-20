import {open} from './open-close-covers.js';
import {close} from './open-close-covers.js';
import {validateForm} from './validate-form.js';
import {uploadFileOverlay} from './validate-form.js';

const uploadFileButton = document.querySelector('.img-upload__input');
const overlayCancelButton = uploadFileOverlay.querySelector('.img-upload__cancel');
const uploadForm = document.querySelector('.img-upload__form');

uploadFileButton.addEventListener('change', () => {
  open(uploadFileOverlay);
  uploadFileButton.value = null;
});

overlayCancelButton.addEventListener('click', () => {
  close(uploadFileOverlay);
});

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  validateForm();
  const formData = new FormData(evt.target);

});


// const setUserFormSubmit = (onSuccess) => {
//   uploadForm.addEventListener('submit', (evt) => {
//     evt.preventDefault();
//     const formData = new FormData(evt.target);
//     fetch(
//       'https://23.javascript.pages.academy/kekstagram',
//       {
//         method: 'POST',
//         body: formData,
//       },
//     ).then(() => onSuccess());

//   });
// };


export {uploadFileOverlay};
