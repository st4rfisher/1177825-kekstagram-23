import {photos} from './create-photos.js';
import {generatePhotoAttributes} from './generate-photo-attributes.js';

const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture');
const picture = pictureTemplate.content.querySelector('.picture');
const picuresListFragment = document.createDocumentFragment();

generatePhotoAttributes();

photos.forEach(({url, likes, comments}) => {
  const pictureClone = picture.cloneNode(true);
  pictureClone.querySelector('.picture__img').setAttribute('src', url);
  pictureClone.querySelector('.picture__comments').textContent = comments.length;
  pictureClone.querySelector('.picture__likes').textContent = likes;
  picuresListFragment.appendChild(pictureClone);
});

picturesContainer.appendChild(picuresListFragment);

