export const postsReducer = (
  state = {
    posts: [],
  },
  action
) => {
  switch (action.type) {
    case "FETCH_POST":
      return { ...state, posts: action.payload };

    default:
      return state;
  }
};
