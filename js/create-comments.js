const COMMENTS_COUNT = 10;
const createComment = () => ({
  id: '',
  avatar: '',
  message: '',
  name: '',
});
const comments = new Array(COMMENTS_COUNT).fill().map(() => createComment());
export {comments};
