import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fecthUsers } from "../redux/actions";

const User = ({ userId }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(fecthUsers(userId));
  }, [userId]);
  return (
    <div>
      <strong>{user?.find((cur) => cur.id === userId)?.name}</strong>
    </div>
  );
};

export default User;
