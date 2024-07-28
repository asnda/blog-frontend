import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">FunBlog</h1>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/fashion">Fashion</Link>
          <Link to="/beauty">Beauty</Link>
          <Link to="/lifestyle">Lifestyle</Link>
          <Link to="/new">Add New Post</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;