import React, { useState, useEffect } from 'react';
import './CommentSection.css';

const CommentSection = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch comments for the specific post
    fetch(`http://localhost:5002/api/posts/${postId}/comments`)
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => console.error('Error fetching comments:', error));
  }, [postId]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    // Post the new comment
    fetch(`http://localhost:5002/api/posts/${postId}/comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: newComment }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setComments((prevComments) => [...prevComments, data]);
        setNewComment('');
        setMessage('Comment added successfully!');
      })
      .catch((error) => {
        setMessage('Failed to add comment');
        console.error('Error adding comment:', error);
      });
  };

  return (
    <div className="comment-section">
      <h3>Comments</h3>
      <ul className="comment-list">
        {comments.map((comment, index) => (
          <li key={index} className="comment-item">
            <p>{comment.text}</p>
          </li>
        ))}
      </ul>
      <form className="comment-form" onSubmit={handleCommentSubmit}>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          required
        />
        <button type="submit">Submit</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default CommentSection;