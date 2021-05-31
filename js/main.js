function getRandomNumber(min, max) {
  if ((min < 0) || (max < 0)) {
    console.log('Введите значения больше или равное 0');
    return;
  }

  let value = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(value);
  return value;
}

function checkMaxStringLength(string, maxLength) {
  if (string.length > maxLength) {
    console.log('Допустимое количество символов - ' + maxLength);
    return false;
  }

  return true;
}
