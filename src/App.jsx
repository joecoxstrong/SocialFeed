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
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-3'>

        </div>
        <div className='col-md-6'>
          <CreatePost addNewPostProperty = {addNewPost}/>
          <DisplayPosts parentEntries = {entries} />
        </div>
        <div className='col-md-3'>

        </div>
      </div>
    </div>
    
  );
}

export default App;
