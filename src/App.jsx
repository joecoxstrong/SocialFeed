import React, { useState, useEffect } from 'react';
import CreatePost from './Components/CreatePost';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import './app.css';
import NavBarTitle from './Components/NavBar/NavBar';

function App() {

  const [entries, setEntries] = useState([{name: 'Paul Revere', post: 'The British are coming!!'}])

  function addNewPost(entry) {
    let tempEntries = [entry, ...entries];

    setEntries(tempEntries);
  }

  return (
    <div className='container-fluid'>
      <div className='row'>
        <NavBarTitle/>
        <div className='col-md-3'>

        </div>
        <div className='col-md-6'>
          <div className='border-box'>
          <CreatePost addNewPostProperty = {addNewPost}/>
          </div>
          <div>
          <DisplayPosts parentEntries = {entries} />
          </div>
        </div>
        <div className='col-md-3'>

        </div>
      </div>
    </div>
    
  );
}

export default App;
