// import {photos} from './create-photos.js';
import {open} from './open-close-covers.js';
import {close} from './open-close-covers.js';

// const thumbnails = document.querySelectorAll('.picture');
const fullSize = document.querySelector('.big-picture');
const fullSizeCancelButton = fullSize.querySelector('.big-picture__cancel');
const fullImage = fullSize.querySelector('.big-picture__img').querySelector('img');
const likesCount = fullSize.querySelector('.likes-count');
const commentsCountBlock = fullSize.querySelector('.social__comment-count');
const commentsCount = fullSize.querySelector('.comments-count');
const description = fullSize.querySelector('.social__caption');
const commentsList = document.querySelector('.social__comments');
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
const commentsLoader = fullSize.querySelector('.social__comments-loader');
const commentsListFragment = document.createDocumentFragment();
const MAX_PAGE_NUMBER = 5;

function openFullSize () {
  open(fullSize);
}

const createCommentsFragment = (comments) => {
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

const addFullImageComments = (photo) => {
  commentsList.innerHTML = '';
  commentsLoader.classList.remove('hidden');
  let comments = [];
  comments = photo.comments;
  const commentsLength = comments.length;
  let fragment = comments.slice(0, MAX_PAGE_NUMBER);
  comments.splice(0, MAX_PAGE_NUMBER);
  createCommentsFragment(fragment);
  const count = MAX_PAGE_NUMBER;
  if(fragment.length < MAX_PAGE_NUMBER) {
    commentsLoader.classList.add('hidden');
    commentsCountBlock.classList.add('hidden');
  }
  commentsCountBlock.innerHTML = `${count} из <span class="comments-count">${commentsLength}</span> комментариев`;

  commentsLoader.addEventListener('click', () => {
    // commentsCountBlock.innerHTML = `${count} из <span class="comments-count">125</span> комментариев`;
    fragment = comments.slice(0, MAX_PAGE_NUMBER);
    comments.splice(0, MAX_PAGE_NUMBER);
    createCommentsFragment(fragment);
    if (comments.length === 0) {
      commentsLoader.classList.add('hidden');
    }
  });
};

const addFullImageAttributes = (photo) => {
  const fullImageURL = photo.url;
  fullImage.setAttribute('src', fullImageURL);
  likesCount.textContent = photo.likes;
  commentsCount.textContent = photo.comments.length;
  description.textContent = photo.description;
};

const addFunctionality = (photos) => {
  const thumbnails = document.querySelectorAll('.picture');
  thumbnails.forEach((thumbnail, index) => {

    thumbnail.addEventListener('click', () => {
      openFullSize();
      addFullImageAttributes(photos[index]);
      addFullImageComments(photos[index]);
    });
  });
};

fullSizeCancelButton.addEventListener('click', () => {
  close(fullSize);
  window.location.reload();
});

export {fullSize, fullSizeCancelButton, addFunctionality, addFullImageAttributes};
