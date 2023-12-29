import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function Post({ userpost }) {
  
  return (
        <div  >
      <Card  as={Link}
      to={`/comment/${userpost.id}`}
        style={{
          textAlign: "center",
          justifyContent: "center",
          marginTop: "50px",
          marginLeft: "20px",
          width: "1450px",
          height: "600px",
          backgroundColor: "transparent",
          borderColor: "black",
          borderWidth: "4px",
          borderRadius: "30px", // Adjust the value as needed
        }}
      >
        <Card.Img
          variant="top"
          src="https://i.pinimg.com/736x/d5/f6/9d/d5f69d125c312c6e1a30581539d0f6d8.jpg"
          style={{
            justifyContent: "center",
            marginLeft:"200px",
            width: "1000px",
            height: "500px",
            borderRadius: "25px",
          }}
        />
        <Card.Title> {userpost.title }</Card.Title>
        <Card.Text>  {userpost.body }</Card.Text>
      </Card>

      
      
      
    </div>
  );
}

export default Post;
