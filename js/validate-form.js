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
const hashtagsInput = uploadFileOverlay.querySelector('.text__hashtags');
const hashtagsInputValue = hashtagsInput.value;
const submit = uploadFileOverlay.querySelector('.img-upload__submit');
const hash = '#';
const regExp = /^#[A-Za-zА-Яа-я0-9]{1,19}$/;
const MIN_NAME_LENGTH = 2;
const MAX_NAME_LENGTH = 20;

// hashtagsInput.addEventListener('input', () => {
//   const valueLength = hashtagsInput.value.length;
//   if (valueLength < MIN_NAME_LENGTH) {
//     hashtagsInput.setCustomValidity(`Необходимо ввести ещё ${MIN_NAME_LENGTH - valueLength} симв.`);
//   } else if (valueLength > MAX_NAME_LENGTH) {
//     hashtagsInput.setCustomValidity(`Удалите лишние ${valueLength - MAX_NAME_LENGTH} симв.`);
//   } else {
//     hashtagsInput.setCustomValidity('');
//   }

//   hashtagsInput.reportValidity();
// });

// hashtagsInput.addEventListener('invalid', () => {
//   if (!regExp.test(hashtagsInput)) {
//     hashtagsInput.setCustomValidity('Хэштег должен начинаться с символа # и содержать русские или латинские буквы');
//   }
// });





function CustomValidation() { }

CustomValidation.prototype = {
  // Установим пустой массив сообщений об ошибках
  invalidities: [],

  // Метод, проверяющий валидность
  checkValidity: function(input) {

    const validity = input.validity;

    if (validity.patternMismatch) {
      this.addInvalidity('This is the wrong pattern for this field');
    }

    // if (validity.rangeOverflow) {
    //   const max = getAttributeValue(input, 'max');
    //   this.addInvalidity('The maximum value should be ' + max);
    // }

    // if (validity.rangeUnderflow) {
    //   const min = getAttributeValue(input, 'min');
    //   this.addInvalidity('The minimum value should be ' + min);
    // }

    if (!regExp.test(input)) {
      this.addInvalidity('Хэштег должен начинаться с символа # и иметь русские или латинские символы');
    }
    // И остальные проверки валидности...
  },

  // Добавляем сообщение об ошибке в массив ошибок
  addInvalidity: function(message) {
    this.invalidities.push(message);
  },

  // Получаем общий текст сообщений об ошибках
  getInvalidities: function() {
    return this.invalidities.join('. \n');
  },
};

CustomValidation.prototype.getInvaliditiesForHTML = function() {
  return this.invalidities.join('. <br>');
};

// Добавляем обработчик клика на кнопку отправки формы
submit.addEventListener('click', function(evt) {
    evt.preventDefault();
    // Проверим валидность поля, используя встроенную в JavaScript функцию checkValidity()
    if (hashtagsInput.checkValidity() == false) {
      const inputCustomValidation = new CustomValidation(); // Создадим объект CustomValidation
      inputCustomValidation.checkValidity(hashtagsInput); // Выявим ошибки
      const customValidityMessage = inputCustomValidation.getInvalidities(); // Получим все сообщения об ошибках
      hashtagsInput.setCustomValidity(customValidityMessage); // Установим специальное сообщение об ошибке

      const customValidityMessageForHTML = inputCustomValidation.getInvaliditiesForHTML();
      hashtagsInput.insertAdjacentHTML('afterend', '<p class="error-message">' + customValidityMessageForHTML + '</p>')

    }

});


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

