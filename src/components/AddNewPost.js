import React, { useRef } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { createPost } from "../redux/actions";
const AddNewPost = ({ open, closeModal }) => {
  const titleRef = useRef();
  const bodyRef = useRef();
  const userIdRef = useRef();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !titleRef.current.value ||
      !bodyRef.current.value ||
      !userIdRef.current.value
    ) {
      return alert("please enter all the fields");
    }
    dispatch(
      createPost({
        title: titleRef.current.value,
        body: bodyRef.current.value,
        userId: userIdRef.current.value,
      })
    );
  };
  return (
    <Modal isOpen={open} style={{ width: "200px", height: "150px" }}>
      <button onClick={() => closeModal()}>close</button>
      <div>
        <form onSubmit={handleSubmit}>
          Post Title: <input name="title" ref={titleRef} /> <br /> <br />
          Post Body: <input name="body" ref={bodyRef} /> <br /> <br />
          Post UserId:
          <input name="userId" ref={userIdRef} /> <br /> <br />
          <br />
          <button type="submit">Save</button>
        </form>
      </div>
    </Modal>
  );
};

export default AddNewPost;
