import {photos} from './create-photos.js';
import {generatePhotoAttributes} from './generate-photo-attributes.js';

const thumbnailsContainer = document.querySelector('.pictures');
const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');
const thumbnailsListFragment = document.createDocumentFragment();

generatePhotoAttributes();

photos.forEach(({url, likes, comments}) => {
  const thumbnailClone = thumbnailTemplate.cloneNode(true);
  thumbnailClone.querySelector('.picture__img').setAttribute('src', url);
  thumbnailClone.querySelector('.picture__comments').textContent = comments.length;
  thumbnailClone.querySelector('.picture__likes').textContent = likes;
  thumbnailsListFragment.appendChild(thumbnailClone);
});

thumbnailsContainer.appendChild(thumbnailsListFragment);
