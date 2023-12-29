import React, { useEffect } from 'react';
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../Redux/action";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Comment() {
  const { postid } = useParams();
  const dispatch = useDispatch();

  // Use the Redux state to get comments and error
  const { comments, error } = useSelector((state) => state);

  useEffect(() => {
    // Dispatch the action to fetch comments when the component mounts
    dispatch(fetchComments(postid));
  }, [dispatch, postid]);

  return (
    <div>
      {comments && comments.map((comment, index) => (
        <Card
          key={index}
          style={{
            textAlign: "center",
            justifyContent: "center",
            marginTop: "50px",
            marginLeft: "20px",
            width: "1450px",
            height: "200px",
            backgroundColor: "transparent",
            borderColor: "black",
            borderWidth: "2px",
            borderRadius: "15px", // Adjust the value as needed
          }}
        >
          <Card.Title>{comment.name}</Card.Title>
          <Card.Body>{comment.body}</Card.Body>
          <Card.Footer>{comment.email}</Card.Footer>
        </Card>
      ))}
      {error && <div>Error loading comments: {error}</div>}
    </div>
  );
}

export default Comment;