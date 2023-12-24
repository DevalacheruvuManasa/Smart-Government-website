// Blog.js
import React, { useState, useEffect } from 'react';
import './Blog.css';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const apiEndpoint = 'https://jsonplaceholder.typicode.com/posts';

    fetch(apiEndpoint)
      .then(response => response.json())
      .then(data => setBlogPosts(data.slice(0, 5))) // Limit to 5 posts for demonstration
      .catch(error => console.error('Error fetching blog posts:', error));
  }, []);

  return (
    <div className="blog-container">
      <h2 className="blog-heading">Blog</h2>
      {blogPosts.map(post => (
        <div key={post.id} className="blog-post">
          <h3 className="post-title">{post.title}</h3>
          <p className="post-body">{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;

