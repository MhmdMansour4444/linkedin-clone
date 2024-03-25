import React, { useState } from 'react';
import './postbox.css'
import '../header/header.css'

const PostBox = ({ onPost }) => {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onPost({ text, image });
    setText('');
    setImage(null);
  };

  return (
    <div className="post-box">
      <h2>Start a Post</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Write your post here..."
          value={text}
          onChange={handleTextChange}
        ></textarea>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <div className='post-button'>
        <button type="submit">Post</button>
        </div>
      </form>
    </div>
  );
};

export default PostBox;