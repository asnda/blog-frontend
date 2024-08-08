import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './HomePage.css';

const HomePage = () => {
  const [fashionPosts, setFashionPosts] = useState([]);
  const [beautyPosts, setBeautyPosts] = useState([]);
  const [lifestylePosts, setLifestylePosts] = useState([]);

  useEffect(() => {
    // Fetch Fashion Posts
    axios.get('http://localhost:5000/api/posts?category=fashion')
      .then(response => setFashionPosts(response.data))
      .catch(error => console.error('Error fetching fashion posts:', error));

    // Fetch Beauty Posts
    axios.get('http://localhost:5000/api/posts?category=beauty')
      .then(response => setBeautyPosts(response.data))
      .catch(error => console.error('Error fetching beauty posts:', error));

    // Fetch Lifestyle Posts
    axios.get('http://localhost:5000/api/posts?category=lifestyle')
      .then(response => setLifestylePosts(response.data))
      .catch(error => console.error('Error fetching lifestyle posts:', error));
  }, []);

  return (
    <div className="home-page">
      <div className="header">
        <h1>Welcome to Our Blog</h1>
        <nav className="header-nav">
          <Link to="/fashion">Fashion</Link>
          <Link to="/beauty">Beauty</Link>
          <Link to="/lifestyle">Lifestyle</Link>
        </nav>
      </div>

      <div className="intro-section">
        <h2>Explore, Discover, and Engage</h2>
        <p>Welcome to our vibrant blog where we share the latest trends, tips, and stories on fashion, beauty, and lifestyle. Dive in and explore a world of inspiration!</p>
      </div>

      <div className="post-grid">
        {fashionPosts.length > 0 && (
          <div className="post-preview">
            <h2>Fashion Trends</h2>
            <p>{fashionPosts[0].content.substring(0, 100)}...</p>
            <Link to="/fashion" className="read-more">Read More</Link>
          </div>
        )}

        {beautyPosts.length > 0 && (
          <div className="post-preview">
            <h2>Beauty Trends</h2>
            <p>{beautyPosts[0].content.substring(0, 100)}...</p>
            <Link to="/beauty" className="read-more">Read More</Link>
          </div>
        )}

        {lifestylePosts.length > 0 && (
          <div className="post-preview">
            <h2>Lifestyle</h2>
            <p>{lifestylePosts[0].content.substring(0, 100)}...</p>
            <Link to="/lifestyle" className="read-more">Read More</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;