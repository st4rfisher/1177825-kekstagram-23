const PHOTOS_COUNT = 25;
const COMMENTS_COUNT = 10;
const MAX_ID_COUNT = 300;
const IMG_COUNT = 6;
const MIN_LIKES_COUNT = 15;
const MAX_LIKES_COUNT = 200;
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

/*============================================================ */
const generatePhotoID = () =>{
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
    photos[index].likes = generateRandomNumber(MIN_LIKES_COUNT, MAX_LIKES_COUNT);
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

/*============================================================ */
const generateComment = () => {
  generateCommentID();
  generateAvatar();
  generateMessage();
  generateName();
};

/*============================================================ */

const generateRandomComments = () => {
  generateComment();
  const photoComments = [];
  const randomNumber = generateRandomNumber(0, COMMENTS_COUNT);
  for (let commentIndex = 0; commentIndex <= randomNumber; commentIndex++) {
    const randomIndex = generateRandomNumber(0, comments.length - 1);
    if(photoComments.indexOf(comments[randomIndex]) < 0) {
      photoComments.push(comments[randomIndex]);
    }
  }
  return photoComments;
};

const addRandomComments = () => {
  for (let index = 0; index <= photos.length - 1; index++) {
    photos[index].comments = generateRandomComments();
  }
};

/*============================================================ */
const generatePhotoAttributes = () => {
  generatePhotoID();
  generateURL();
  generateDescription();
  generateLikes();
  addRandomComments();
};

generatePhotoAttributes();
