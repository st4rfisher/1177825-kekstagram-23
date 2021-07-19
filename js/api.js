import {renderThumbnails} from './render-thumbnails.js';
import {addFunctionality} from './render-full-image.js';


const getData = () => {
  fetch('https://23.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      renderThumbnails(data);
      addFunctionality(data);
    });
};

export {getData};
