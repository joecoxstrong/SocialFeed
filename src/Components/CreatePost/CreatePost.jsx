import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreatePost = (props) => {
  const [name, setName] = useState("");
  const [post, setPost] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let newPost = {
      name: name,
      post: post,
    };
    setName("");
    setPost("");
    props.addNewPostProperty(newPost);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div class="row mb-3">
        <label for="colFormLabel" class="col-sm-2 col-form-label">
          Name
        </label>
        <div class="col-sm-10">
          <input
            type="name"
            class="form-control"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
      </div>
      <div class="row">
        <label
          for="colFormLabelLg"
          class="col-sm-2 col-form-label col-form-label-lg"
        >
          Post
        </label>
        <div class="col-sm-10">
          <input
            type="post"
            class="form-control form-control-lg"
            value={post}
            onChange={(event) => setPost(event.target.value)}
          />
        </div>
        <label for="colFormLabel" class="col-sm-2 col-form-label">
          Date
        </label>
        <DatePicker />
      </div>

      <button type="submit" style={{ marginLeft: 450 }}>
        Create
      </button>
    </form>
  );
};

export default CreatePost;
