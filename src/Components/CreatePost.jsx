import React, { useState } from 'react';


const CreatePost = (props) => {

    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newPost = {
            name: name,
            post: post
        };
        props.addNewPostProperty(newPost)
    }
    return (
        <form onSubmit={handleSubmit}>
            <div class="row mb-3">
                <label for="colFormLabel" class="col-sm-2 col-form-label">Name</label>
                <div class="col-sm-10">
                    <input type= 'name' class="form-control" value={name} onChange = {(event) => setName(event.target.value)} />
                </div>
            </div>
            <div class="row">
                <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Post</label>
                <div class="col-sm-10">
                    <input type= 'post' class="form-control form-control-lg" value={post} onChange = {(event) => setPost(event.target.value)}/>
                </div>
            </div>

            {/* <label>Name</label>
            <input type= 'name' value={name} onChange = {(event) => setName(event.target.value)}/>
            <label>Post</label>
            <input type= 'post' value={post} onChange = {(event) => setPost(event.target.value)}/> */}
            <button type='submit'>Create</button>
        </form>
    );
}
 
export default CreatePost;