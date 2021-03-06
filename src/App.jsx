import React, { useState, useEffect } from "react";
import CreatePost from "./Components/CreatePost/CreatePost";
import DisplayPosts from "./Components/DisplayPosts/DisplayPosts";
import "./app.css";
import NavBarTitle from "./Components/NavBar/NavBar";

function App() {
  const [entries, setEntries] = useState([
    {
      name: "Princess Leia",
      post: "I am NOT a committee!!",
      date: "A long time ago...",
    },
  ]);

  function addNewPost(entry) {
    let tempEntries = [entry, ...entries];

    setEntries(tempEntries);
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <NavBarTitle />
        <div
          className="col-md-3"
          style={{ backgroundColor: "lightblue" }}
        ></div>
        <div className="col-md-6">
          <div className="border-box">
            <CreatePost addNewPostProperty={addNewPost} />
          </div>
          <div>
            <DisplayPosts parentEntries={entries} />
          </div>
        </div>
        <div
          className="col-md-3"
          style={{ backgroundColor: "lightblue" }}
        ></div>
      </div>
    </div>
  );
}

export default App;
