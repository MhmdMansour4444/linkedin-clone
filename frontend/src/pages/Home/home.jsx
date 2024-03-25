import React from 'react';
import Header from './components/header/header';
import Post from './components/post/posts';
import PostBox from './components/post/postbox';


const Home = () => {
  const handlePost = ({ text, image }) => {
    console.log('Posted:', { text, image });
  };

  return (
    <div>
      <Header />
      <PostBox onPost={handlePost} />
      <div className="posts-container"> 
        {[1, 2, 3].map((postId) => (
          <Post 
            key={postId}
            user={{
              name: 'John Doe',
              avatar: 'https://example.com/avatar.jpg',
              title: 'Software Engineer'
            }}
            image="https://example.com/image.jpg"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        ))}
      </div>
    </div>
  );
};

export default Home;