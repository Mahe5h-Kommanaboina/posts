import { combineReducers } from "redux";
import { userReducer } from "./users";
import { postsReducer } from "./posts";

export default combineReducers({
  postsReducer,
  userReducer,
});
