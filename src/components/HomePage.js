import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
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
        <div className="post-preview">
          <h2>Fashion Trends</h2>
          <p>Stay updated with the latest fashion trends. From summer styles to stylish winter wear, find out what's trending in the fashion world...</p>
          <Link to="/fashion" className="read-more">Read More</Link>
        </div>

        <div className="post-preview">
          <h2>Beauty Trends</h2>
          <p>Discover the top skincare products, makeup trends, and haircare products to keep you looking your best...</p>
          <Link to="/beauty" className="read-more">Read More</Link>
        </div>

        <div className="post-preview">
          <h2>Lifestyle</h2>
          <p>Learn about healthy living, travel destinations, and home decor tips to enhance your lifestyle...</p>
          <Link to="/lifestyle" className="read-more">Read More</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;