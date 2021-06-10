/*
Задача:
Сформировать массив из 25 сгенерированных объектов. Объекты - фото с комментариями.

Структура объекта:
1) id, число — идентификатор описания. Неповторяющееся число от 1 до 25
2) url, строка - адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса не повторяются
3) description, строка — описание фотографии
4) likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.
5) comments, массив объектов — список комментариев, оставленных другими пользователями к этой фотографии. Все комментарии генерируются случайным образом
   Структура комментария:
   - id — случайное число. Идентификаторы не должны повторяться.
   - avatar — строка, значение которой формируется по правилу img/avatar-{{случайное число от 1 до 6}}.svg
   - message, строка
   - name - строка, значение которой формируется случайно
*/
// const photo = {
//   id: 1,
//   url: 'тут адрес',
//   description: 'тут описание',
//   likes: 1,
//   comments: ['тут объекты']
// }

const PHOTOS_COUNT = 25;
const minLikesCount = 15;
const maxLikesCount = 200;
const id = [];

const createPhoto = () => {
  return {
    id: '',
    url: '',
    description: '',
    likes: '',
    comments: []
  };
}

const createComment = () => {
  return {
    id: '',
    avatar: '',
    message: '',
    name: ''
  };
}

const photos = new Array(PHOTOS_COUNT).fill().map(() => createPhoto());
console.log(photos);

const generateID = () => {
  for (let i = 0; i <= photos.length - 1; i++) {
    id.push(i + 1);
    photos[i].id = id[i];
  }
}

const generateURL = () => {
  for (let i = 0; i <= photos.length - 1; i++) {
    photos[i].url = 'photos/' + id[i] + '.jpg';
  }
}

const generateDescription = () => {
  for (let i = 0; i <= photos.length - 1; i++) {
    photos[i].description = 'Описание №' + id[i];
  }
}

const generateLikes = (minLikesCount, maxLikesCount) => {
  if ((minLikesCount < 0) || (maxLikesCount < 0)) {
    photos[i].likes = 15;
  }

  for (let i = 0; i <= photos.length - 1; i++) {
    photos[i].likes = Math.floor(Math.random() * (maxLikesCount - minLikesCount + 1) + minLikesCount);
  }
}

const generateAttributes = () => {
  generateID();
  generateURL()
  generateDescription();
  generateLikes(minLikesCount, maxLikesCount);
}

generateAttributes();

// const generateURL = () => {
//   for (let i = 0; i <= photos.length - 1; i++) {
//     photos[i].url = 'photos/' + id[i];
//   }
// }


// function generateID() {

//   let index;

//   for (let i = 0; i <= photos.length - 1; i++) {
//     index = photos.indexOf(photos[i]) + 1;
//     console.log(index);
//     return this.id = index;
//   }
// }


// const comment = {
//   id: 1,
//   avatar: '',
//   message: '',
//   name: ''
// }



// const addPhoto = () => {

//   return {
//     name: '',
//     coatColor: '',
//     eyesColor: '',
//   };
// };

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
