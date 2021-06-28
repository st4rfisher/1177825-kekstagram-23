import {photos} from './create-photos.js';
import {isEscEvent} from './utils.js';

const thumbnails = document.querySelectorAll('.picture');
const fullSize = document.querySelector('.big-picture');
const fullSizeCancelButton = fullSize.querySelector('.big-picture__cancel');
const fullImage = fullSize.querySelector('.big-picture__img').querySelector('img');
const likesCount = fullSize.querySelector('.likes-count');
const commentsCountBlock = fullSize.querySelector('.social__comment-count');
const commentsCount = fullSize.querySelector('.comments-count');
const description = fullSize.querySelector('.social__caption');
const commentsList = document.querySelector('.social__comments');
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
const commentsListFragment = document.createDocumentFragment();
const body = document.querySelector('body');

const onFullSizeEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    fullSize.classList.add('hidden');
    body.classList.toggle('modal-open');
  }
};

function openFullSize () {
  fullSize.classList.remove('hidden');
  commentsCountBlock.classList.add('hidden');
  body.classList.toggle('modal-open');

  document.addEventListener('keydown', onFullSizeEscKeydown);
}

function closeFullSize () {
  fullSize.classList.add('hidden');
  body.classList.toggle('modal-open');

  document.removeEventListener('keydown', onFullSizeEscKeydown);
}

const addFullImageComments = (photo) => {
  commentsList.innerHTML = '';
  const comments = photo.comments;
  comments.forEach((comment) => {
    const commentClone = commentTemplate.cloneNode(true);
    const avatar = commentClone.querySelector('.social__picture');
    const commentText = commentClone.querySelector('.social__text');
    avatar.setAttribute('src', comment.avatar);
    commentText.textContent = comment.message;
    commentsListFragment.appendChild(commentClone);
    commentsList.appendChild(commentsListFragment);
  });
};

const addFullImageAttributes = (photo) => {
  const fullImageURL = photo.url;
  fullImage.setAttribute('src', fullImageURL);
  likesCount.textContent = photo.likes;
  commentsCount.textContent = photo.comments.length;
  description.textContent = photo.description;
};

for (let index = 0; index <= thumbnails.length - 1; index++) {
  thumbnails[index].addEventListener('click', () => {
    openFullSize();
    addFullImageAttributes(photos[index]);
    addFullImageComments(photos[index]);
  });
}

fullSizeCancelButton.addEventListener('click', () => {
  closeFullSize();
});

export {body};
