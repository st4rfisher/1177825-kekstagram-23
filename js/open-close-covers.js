import {isEscEvent} from './utils.js';
import {fullSize} from './render-full-image.js';
import {uploadFileOverlay} from './form.js';

const body = document.querySelector('body');

const onOpenEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    fullSize.classList.add('hidden');
    uploadFileOverlay.classList.add('hidden');
    body.classList.toggle('modal-open');
    document.removeEventListener('keydown', onOpenEscKeydown);
  }
};

function open (cover) {
  cover.classList.remove('hidden');
  body.classList.toggle('modal-open');

  document.addEventListener('keydown', onOpenEscKeydown);
}

function close (cover) {
  cover.classList.add('hidden');
  body.classList.toggle('modal-open');

  document.removeEventListener('keydown', onOpenEscKeydown);
}

export {open, close};
