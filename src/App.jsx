import React, { useState, useEffect } from 'react';
import CreatePost from './Components/CreatePost';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';


function App() {

  const [entries, setEntries] = useState([{name: 'Paul Revere', post: 'The British are coming!!'}])

  function addNewPost(entry) {
    let tempEntries = [entry, ...entries];

    setEntries(tempEntries);
  }

  return (
    <div>
     <h3>Hello there.</h3>
     <CreatePost addNewPostProperty = {addNewPost}/>
     <DisplayPosts parentEntries = {entries} />
    </div>
  );
}

export default App;
