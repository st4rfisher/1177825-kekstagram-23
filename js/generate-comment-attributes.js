import {comments} from './create-comments.js';
import {generateRandomNumber} from './utils.js';
import {generateRandomID} from './utils.js';
const randomIDarray = [];
const MAX_ID_COUNT = 300;
const IMG_COUNT = 6;
const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const names = ['Иван', 'Дмитрий', 'Алексей', 'Мирослав', 'Артём', 'Анатолий', 'Сергей'];

const generateCommentID = () => {
  generateRandomID(randomIDarray, MAX_ID_COUNT);
  comments.forEach((comment) => {
    const index = comments.indexOf(comment);
    comments[index].id = randomIDarray[index];
  });
};

const generateAvatar = () => {
  comments.forEach((comment) => {
    const index = comments.indexOf(comment);
    const avatarIndex = generateRandomNumber(1, IMG_COUNT);
    comments[index].avatar = `img/avatar-${avatarIndex}.svg`;
  });
};

const generateMessage = () => {
  comments.forEach((comment) => {
    const index = comments.indexOf(comment);
    const messageIndex = generateRandomNumber(0,  messages.length - 1);
    comments[index].message = messages[messageIndex];
  });
};

const generateName = () => {
  comments.forEach((comment) => {
    const index = comments.indexOf(comment);
    const nameIndex = generateRandomNumber(0,  messages.length - 1);
    comments[index].name = names[nameIndex];
  });
};

const generateCommentAttributes = () => {
  generateCommentID();
  generateAvatar();
  generateMessage();
  generateName();
};

export {generateCommentAttributes};
