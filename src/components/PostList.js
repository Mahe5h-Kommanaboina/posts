import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fecthPosts, fecthUsers } from "../redux/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import User from "./User";
import "./PostList.css";
const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postsReducer.posts);
  // const user = useSelector((state) => state.userReducer);
  useEffect(() => {
    dispatch(fecthPosts());
  }, []);

  // useEffect(() => {
  //   posts?.map((item) => dispatch(fecthUsers(item.userId)));
  // }, [posts]);

  return (
    <>
      <h1>PostList</h1>
      {posts?.map((item) => (
        <div key={item.id} className="post-item">
          <FontAwesomeIcon
            size="2x"
            icon={faUserCircle}
            style={{ margin: "auto" }}
          />
          <span>
            <p>{item.title}</p>
            <p>{item.body}</p>
            {/* <p>{user?.find((cur) => cur.id === item.userId)?.name}</p> */}
            <User userId={item.userId} />
          </span>
        </div>
      ))}
    </>
  );
};

export default PostList;
