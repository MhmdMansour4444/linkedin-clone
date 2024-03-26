import React from 'react';
import './posts.css';


const Post = ({ user, content, post_image }) => {
  return (
    <div className="post">
      <div className="post-header">
        <img src={user.avatar} alt={user.name} className="user-avatar" />
        <div className="user-info">
          <h3>{user.name}</h3>
          <p>{user.title}</p>
        </div>
      </div>
      <div className="post-content">
        <p>{content}</p>
        {post_image && <img src={post_image} alt="Post Image" className="post-image" />}
      </div>
    </div>
  );
};

export default Post;