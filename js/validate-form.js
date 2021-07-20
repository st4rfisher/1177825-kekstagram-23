import {hasDuplicates} from './utils.js';

const uploadFileOverlay = document.querySelector('.img-upload__overlay');
const hashtagsInput = uploadFileOverlay.querySelector('.text__hashtags');
// const submit = uploadFileOverlay.querySelector('.img-upload__submit');

const regExp = /^#[A-Za-zА-Яа-я0-9]/;
const MAX_HASHTAG_LENGTH = 20;
const MAX_HASHTAGS_COUNT = 5;
const validateForm = () => {
// submit.addEventListener('click', (evt) => {
  const messages = [];
  const hashtagsInputValue = hashtagsInput.value.toLowerCase();
  const hashtags = hashtagsInputValue.split(' ');
  if (hashtagsInput.value !== '') {
    for (let index = 0; index < hashtags.length; index++) {
      let message = 'Хэш-теги должны начинаться с символа #, содержать русские или латинские буквы, или цифры';
      if (!regExp.test(hashtags[index]) && messages.indexOf(message) === -1) {
        messages.push(message);
      }

      message = 'Максимальная длина одного хэш-тега 20 символов, включая решётку';
      if (hashtags[index].length > MAX_HASHTAG_LENGTH && messages.indexOf(message) === -1) {
        messages.push(message);
      }

      message = 'Не допустимо повторное использование хэш-тэга';
      if (hasDuplicates(hashtags) && messages.indexOf(message) === -1) {
        messages.push(message);
      }

      message = 'Нельзя указать больше пяти хэш-тегов';
      if (hashtags.length > MAX_HASHTAGS_COUNT && messages.indexOf(message) === -1) {
        messages.push(message);
      }

      else {
        hashtagsInput.setCustomValidity('');
      }

      const notification = messages.join('. \n  \n');
      hashtagsInput.setCustomValidity(notification);
      hashtagsInput.reportValidity();
    }
  }
};

export {validateForm, uploadFileOverlay};
