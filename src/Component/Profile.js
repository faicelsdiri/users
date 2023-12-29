import React, { useEffect } from 'react';
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserPosts } from "../Redux/action";
import Post from './Post';

const Profile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  // Use the Redux state to get user posts and error
  const { userPosts, error } = useSelector((state) => state);

  useEffect(() => {
    // Dispatch the action to fetch user posts when the component mounts
    dispatch(fetchUserPosts(id));
  }, [dispatch, id]);

  console.log(id, "profile");

  if (error) {
    return <div>Error loading user posts: {error}</div>;
  }

  return (
    <div>
      <div style={{ 
        justifyContent: "center",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        border: "1px solid #ddd",
        padding: "16px",
        borderRadius: "8px",
        backgroundColor: "gray",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
      }}>
        <img src={'https://www.shareicon.net/data/2015/08/12/84086_user_512x512.png'} style={{ width: "200px", height: "200px" }}/>
        <br></br>
      </div>
      <div>
        {userPosts && userPosts.map((userpost, index) =>
          <Post userpost={userpost} key={index} />
        )}
      </div>
    </div>
  );
};

export default Profile;