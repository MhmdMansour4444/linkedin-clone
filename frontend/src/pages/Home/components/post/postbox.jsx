import React, { useState } from "react";
import "./postbox.css";
import "../header/header.css";

const PostBox = ({ onPost }) => {
  const [content, setContent] = useState("");
  const [postImage, setPostImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [error, setError] = useState("");

  const handleTextChange = (event) => {
    setContent(event.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result;
        setPostImage(file);
        setImagePreview(result);
        setError(""); // Reset any previous error messages
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!content.trim()) {
      setError("Please enter some text for your post.");
      return;
    }
    if (!postImage) {
      setError("Please select an image for your post.");
      return;
    }
    onPost({ content, postImage });
    setContent("");
    setPostImage(null);
    setImagePreview(null);
  };

  return (
    <div className="post-box">
      <h2>Start a Post</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Write your post here..."
          value={content}
          onChange={handleTextChange}
        ></textarea>
        {imagePreview && (
          <img src={imagePreview} alt="Selected Image Preview" className="image-preview" />
        )}
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {error && <p className="error-message">{error}</p>}
        <div className="post-button">
          <button type="submit">Post</button>
        </div>
      </form>
    </div>
  );
};

export default PostBox;
