import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fecthPosts, updatePost } from "../redux/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import User from "./User";
import "./PostList.css";
import AddNewPost from "./AddNewPost";
const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postsReducer.posts);
  const [list, setList] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    dispatch(fecthPosts());
  }, []);
  useEffect(() => {
    setList(posts);
  }, [posts]);

  const handleChange = (e, index) => {
    let arr = [...list];
    arr[index].body = e.target.value;
    arr[index].changed = true;
    setList(arr);
  };

  const handleSave = (item) => {
    dispatch(updatePost(item));
  };

  return (
    <>
      <h1>PostList</h1>
      <button onClick={() => setOpenModal(true)}>Add New Post</button>
      <br />
      <br />
      {list?.map((item, index) => (
        <div key={item.id} className="post-item">
          <FontAwesomeIcon
            size="2x"
            icon={faUserCircle}
            style={{ margin: "auto" }}
          />
          <span>
            <p>{item.title}</p>
            <input
              style={{ width: "100%" }}
              value={item.body}
              onChange={(e) => handleChange(e, index)}
            />
            {item.changed !== undefined && item.changed && (
              <button onClick={() => handleSave(item)}>save</button>
            )}
            <User userId={item.userId} />
          </span>
        </div>
      ))}
      <AddNewPost open={openModal} closeModal={() => setOpenModal(false)} />
    </>
  );
};

export default PostList;
