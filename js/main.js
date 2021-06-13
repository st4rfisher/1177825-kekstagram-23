/*Задача:
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
//   id: '',
//   url: '',
//   description: '',
//   likes: '',
//   comments: []
// };

const PHOTOS_COUNT = 25;
const COMMENTS_COUNT = 10;
const MAX_ID_COUNT = 300;
const IMG_COUNT = 6;
const minLikesCount = 15;
const maxLikesCount = 200;
const photosID = [];
const randomIDarray = [];
const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const names = ['Иван', 'Дмитрий', 'Алексей', 'Мирослав', 'Артём', 'Анатолий', 'Сергей'];

/*============================================================ */


/*============================================================ */
const createPhoto = () => ({
  id: '',
  url: '',
  description: '',
  likes: '',
  comments: [],
});

const createComment = () => ({
  id: '',
  avatar: '',
  message: '',
  name: '',
});

const photos = new Array(PHOTOS_COUNT).fill().map(() => createPhoto());
const comments = new Array(COMMENTS_COUNT).fill().map(() => createComment());

console.log(photos);
console.log(comments);

/*============================================================ */
function generatePhotoID() {
  for (let index = 0; index <= photos.length - 1; index++) {
    photosID.push(index + 1);
    photos[index].id = photosID[index];
  }
};

/*============================================================ */
const generateURL = () => {
  for (let index = 0; index <= photos.length - 1; index++) {
    photos[index].url = `photos/${photosID[index] }.jpg`;
  }
};

/*============================================================ */
const generateDescription = () => {
  for (let index = 0; index <= photos.length - 1; index++) {
    photos[index].description = `Описание №${photosID[index]}`;
  }
};

/*============================================================ */

const generateRandomNumber = (minNumber, maxNumber) => Math.abs(Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber));

const generateLikes = () => {
  for (let index = 0; index <= photos.length - 1; index++) {
    photos[index].likes = generateRandomNumber(minLikesCount, maxLikesCount);
  }
};

/*============================================================ */
function randomIDgenerator(array, maxNumber) {

  if (array.length >= maxNumber) {
    return;
  }
  const newID = generateRandomNumber(1, maxNumber);
  if (array.indexOf(newID) < 0) {
    array.push(newID);
  }
  randomIDgenerator(array, maxNumber);
}

/*============================================================ */
// function randomIDgenerator(array) {

//   if (array.length >= MAX_ID_COUNT) return;
//   const newID = generateRandomNumber(1, MAX_ID_COUNT);
//   if (array.indexOf(newID) < 0) {
//     array.push(newID);
//   }
//   randomIDgenerator(array);
// }

/*============================================================ */
const generateCommentID = () => {
  randomIDgenerator(randomIDarray, MAX_ID_COUNT);
  for (let index = 0; index <= comments.length - 1; index++) {
    comments[index].id = randomIDarray[index];
  }
};

/*============================================================ */
const generateAvatar = () => {
  for (let index = 0; index <= comments.length - 1; index++) {
    const randomNumber = generateRandomNumber(1, IMG_COUNT);
    comments[index].avatar = `img/avatar-${randomNumber}.svg`;
  }
};

/*============================================================ */
const generateMessage = () => {
  for (let index = 0; index <= comments.length - 1; index++) {
    const messageIndex = generateRandomNumber(0,  messages.length - 1);
    comments[index].message = messages[messageIndex];
  }
};

/*============================================================ */
const generateName = () => {
  for (let index = 0; index <= comments.length - 1; index++) {
    const nameIndex = generateRandomNumber(0,  messages.length - 1);
    comments[index].name = names[nameIndex];
  }
};

const generatePhotoComments = () => {

};

const photoComments = [];
/*============================================================ */
const addComment = () => {
  let randomNumber = generateRandomNumber(0, COMMENTS_COUNT);
  for (let commentIndex = 0; commentIndex <= randomNumber; commentIndex++) {
    let randomIndex = generateRandomNumber(0, comments.length - 1);
    if(photoComments.indexOf(comments[randomIndex]) < 0) {
      photoComments.push(comments[randomIndex]);
    }
    // photoComments = comments.map(() => comments[randomIndex]);
    // console.log(photoComments);
  }

  // for (let i = 0; i <= randomNumber; commentIndex++) {}
  // photos.forEach(() => {

  // });

  console.log(photoComments);
};

/*============================================================ */
const generateAttributes = () => {
  generatePhotoID();
  generateURL();
  generateDescription();
  generateLikes();
  generateCommentID();
  generateAvatar();
  generateMessage();
  generateName();
  addComment();
};

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
// function getRandomNumber(min, max) {
//   if ((min < 0) || (max < 0)) {
//     return 'Введите значения больше или равное 0';
//   }

//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// function checkMaxStringLength(string, maxLength) {
//   if (string.length > maxLength) {
//     return false;
//   }

//   return true;
// }

// getRandomNumber(1, 5);
// checkMaxStringLength('12345', 5);
