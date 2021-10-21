const PHOTOS_COUNT = 25;
const createPhoto = () => ({
  id: '',
  url: '',
  description: '',
  likes: '',
  comments: [],
});
const photos = new Array(PHOTOS_COUNT).fill().map(() => createPhoto());
export {photos};
