
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../Redux/action";
import Usercard from "./Usercard";

function UserList() {
  const dispatch = useDispatch();

  // Use the Redux state to get users and error
  const { users, error } = useSelector((state) => state);

  useEffect(() => {
    // Dispatch the action to fetch users when the component mounts
    dispatch(fetchUsers());
  }, [dispatch]);

  console.log(users);

  if (error) {
    return <div>Error loading users: {error}</div>;
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
      {users.map((user, index) => (
        <Usercard user={user} key={index} />
      ))}
    </div>
  );
}

export default UserList;