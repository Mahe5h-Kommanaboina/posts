import api from "../apis/api";
import _ from "lodash";
export const fecthPosts = () => {
  return async (dispatch) => {
    const response = await api.get("/posts");
    dispatch({ type: "FETCH_POST", payload: response.data });
  };
};

export const fecthUsers = (id) => {
  return (dispatch) => {
    getUser(id, dispatch);
  };
};

const getUser = _.memoize(async (id, dispatch) => {
  const response = await api.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
});

export const updatePost = (item) => {
  return async (dispatch) => {
    const response = await api.put(`/posts/${item.id}`, item);
    dispatch({ type: "UPDATE_POST", payload: response.data });
    dispatch(fecthPosts());
  };
};

export const createPost = (item) => {
  return async (dispatch) => {
    const response = await api.post("/posts", item);
    dispatch({ type: "CREATE_POST", payload: response.data });
    dispatch(fecthPosts());
  };
};
