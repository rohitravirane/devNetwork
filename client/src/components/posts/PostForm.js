import React, { useState } from "react";
import PropTypes from "prop-types";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { connect } from "react-redux";
import { addPost } from "../../actions/post";

const PostForm = ({ addPost }) => {
  const [text, setText] = useState("");
  return (
    <div className="flex justify-center items-center">
      <form
        className="lg:w-7/12 mt-2 w-full mx-4"
        onSubmit={(e) => {
          e.preventDefault();
          addPost({ text });
          setText("");
        }}
      >
        <TextareaAutosize
          aria-label="empty textarea"
          placeholder="Write something here..."
          minRows={4}
          className="p-2 mt-2 w-full bg-gray-200 rounded"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="flex justify-center items-center mt-2">
          <button
            type="submit"
            className="text-sm p-2 bg-blue-400 rounded w-24"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostForm);
