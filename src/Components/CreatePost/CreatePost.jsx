import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreatePost = (props) => {
  const [name, setName] = useState("");
  const [post, setPost] = useState("");
  const [date, setDate] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let newPost = {
      name: name,
      post: post,
      date: date,
    };
    setName("");
    setPost("");
    setDate("");
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
        <div class="col-sm-10">
          <input
            type="date"
            class="form-control"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </div>
      </div>

      <button
        type="submit"
        class="button rounded-button"
        style={{ marginLeft: 485 }}
      >
        Create
      </button>
    </form>
  );
};

export default CreatePost;
