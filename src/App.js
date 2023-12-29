import "./App.css";
import React from "react";

import UserList from "./Component/UserList";
import Profile from "./Component/Profile";
import Post from "./Component/Post";
import Comment from "./Component/Comment";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/post/:userid" element={<Post />} />
          <Route path="/profil/:id" element={<Profile />} />
          <Route path="/comment/:postid" element={<Comment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
