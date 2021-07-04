/*
Валидация хештега

хэш-тег начинается с символа # (решётка);
строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.;
хеш-тег не может состоять только из одной решётки;
максимальная длина одного хэш-тега 20 символов, включая решётку;
хэш-теги нечувствительны к регистру: #ХэшТег и #хэштег считаются одним и тем же тегом;
хэш-теги разделяются пробелами;
один и тот же хэш-тег не может быть использован дважды;
нельзя указать больше пяти хэш-тегов;
хэш-теги необязательны;
если фокус находится в поле ввода хэш-тега, нажатие на Esc не должно приводить к закрытию формы редактирования изображения.
*/


import {uploadFileOverlay} from './form.js';
import {hasDuplicates} from './utils.js';
import {fullSizeCancelButton} from './render-full-image.js';

const hashtagsInput = uploadFileOverlay.querySelector('.text__hashtags');
const submit = uploadFileOverlay.querySelector('.img-upload__submit');

const regExp = /^#[A-Za-zА-Яа-я0-9]/;
const MAX_HASHTAG_LENGTH = 20;

submit.addEventListener('click', (evt) => {
  evt.preventDefault();
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
      if (hashtags.length > 5 && messages.indexOf(message) === -1) {
        messages.push(message);
      }

      else {
        hashtagsInput.setCustomValidity('');
      }

      const notifications = messages.join('. \n  \n');
      hashtagsInput.setCustomValidity(notifications);
      hashtagsInput.reportValidity();
    }
    return;
  }

  console.log('Форма отправлена');
});

// hashtagsInput.addEventListener('click', (evt) => {
//   fullSizeCancelButton
// });

// function CustomValidation() { }

// CustomValidation.prototype = {
//   invalidities: [],   // Установим пустой массив сообщений об ошибках
//   checkValidity: function(input) {   // Метод, проверяющий валидность
//     const validity = input.validity;
//     if (validity.patternMismatch) {
//       this.addInvalidity('This is the wrong pattern for this field');
//     }

//     if (validity.rangeOverflow) {
//       var max = getAttributeValue(input, 'max');
//       this.addInvalidity('The maximum value should be ' + max);
//     }

//     if (validity.rangeUnderflow) {
//       var min = getAttributeValue(input, 'min');
//       this.addInvalidity('The minimum value should be ' + min);
//     }

//     if (validity.stepMismatch) {
//       var step = getAttributeValue(input, 'step');
//       this.addInvalidity('This number needs to be a multiple of ' + step);
//     }

//     // И остальные проверки валидности...
//   },

//   addInvalidity: function(message) { // Добавляем сообщение об ошибке в массив ошибок
//     this.invalidities.push(message);
//   },

//   getInvalidities: function() {  // Получаем общий текст сообщений об ошибках
//     return this.invalidities.join('. \n');
//   }
// };

// submit.addEventListener('click', function(e) { // Добавляем обработчик клика на кнопку отправки формы
//     if (hashtagsInput.checkValidity() == false) { // Проверим валидность поля, используя встроенную в JavaScript функцию checkValidity()
//       var inputCustomValidation = new CustomValidation(); // Создадим объект CustomValidation
//       inputCustomValidation.checkValidity(hashtagsInput); // Выявим ошибки
//       var customValidityMessage = inputCustomValidation.getInvalidities(); // Получим все сообщения об ошибках
//       hashtagsInput.setCustomValidity(customValidityMessage); // Установим специальное сообщение об ошибке
//     } // закончился if
// });


// const checkHashPlace = () => {
//   if (hashtagsInputValue.search(hash) === 0) {
//     return true;
//   }

//   return false;
// };


// const checkNumbersAndLetters = () => {
//   if (hashtagsInputValue.match(/[a-z]/g)) {
//     return true;
//   }

//   return false;
// };

