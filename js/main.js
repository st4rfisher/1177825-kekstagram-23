function getRandomNumber(min, max) {
  if ((min < 0) || (max < 0)) {
    return 'Введите значения больше или равное 0';
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
}

function checkMaxStringLength(string, maxLength) {
  if (string.length > maxLength) {
    return false;
  }

  return true;
}

getRandomNumber(1, 5);
checkMaxStringLength('12345', 5);
