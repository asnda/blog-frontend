import React from 'react';
import { Link } from 'react-router-dom';
import './PostCard.css';

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <img src={`./assets/images/${post.image}`} alt={post.title} className="post-image" />
      <div className="post-content">
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <Link to={`/post/${post.id}`} className="read-more">Read More</Link>
      </div>
    </div>
  );
};

export default PostCard;