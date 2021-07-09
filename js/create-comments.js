const COMMENTS_COUNT = 30;
const createComment = () => ({
  id: '',
  avatar: '',
  message: '',
  name: '',
});
const comments = new Array(COMMENTS_COUNT).fill().map(() => createComment());
export {comments, COMMENTS_COUNT};
