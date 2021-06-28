import {isEscEvent} from './utils.js';
const body = document.querySelector('body');

const onFullSizeEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    fullSize.classList.add('hidden');
    body.classList.toggle('modal-open');
  }
};

function open (cover) {
  cover.classList.remove('hidden');
  body.classList.toggle('modal-open');

  document.addEventListener('keydown', onFullSizeEscKeydown);
}

function close (cover) {
  cover.classList.add('hidden');
  body.classList.toggle('modal-open');

  document.removeEventListener('keydown', onFullSizeEscKeydown);
}
