import React, { useState, useEffect } from 'react';
import Header from './components/header/header';
import Post from './components/post/posts';
import PostBox from './components/post/postbox';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    try {
      const response = await fetch('http://localhost:4433/linkedin-clone/backend/getposts.php');
      if (response.ok) {
        const data = await response.json();
        setPosts(data.posts);
      } else {
        console.error('Failed to fetch posts');
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };


  useEffect(() => {
    fetchPosts();
  }, []);

  const handlePost = async ({ content, post_image }) => {
    try {
      const formData = new FormData();
      formData.append('content', content);
      formData.append('image_url', post_image);

      
  
      const response = await fetch('http://localhost:4433/linkedin-clone/backend/createpost.php', {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        console.log('Post created successfully');
        fetchPosts();
      } else {
        console.error('Failed to create post');
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };
  

  return (
    <div>
      <Header />
      <PostBox onPost={handlePost} />
      <div className="posts-container">
        {posts.map((post) => (
          <Post
            key={post.post_id}
            user={{
              name: post.user_name,
              avatar: post.user_avatar,
              title: post.user_title,
            }}
            post_image={post.post_image}
            content={post.content}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
