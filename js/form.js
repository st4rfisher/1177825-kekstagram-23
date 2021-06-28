import {body} from './render-full-image.js';
const uploadFileButton = document.querySelector('.img-upload__input');
const uploadFileOverlay = document.querySelector('.img-upload__overlay');

function openUploadFileOverlay () {
  uploadFileOverlay.classList.remove('hidden');
  body.classList.toggle('modal-open');

  document.addEventListener('keydown', onFullSizeEscKeydown);
}

// function closeFullSize () {
//   fullSize.classList.add('hidden');
//   body.classList.toggle('modal-open');

//   document.removeEventListener('keydown', onFullSizeEscKeydown);
// }

uploadFileButton.addEventListener('change', () => {

  body.classList.toggle('modal-open');
});

