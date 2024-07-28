import React, { useState } from 'react';
import './AddNewPostPage.css';

const AddNewPostPage = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Fashion');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('category', category);
    formData.append('content', content);
    formData.append('image', image);

    fetch('http://localhost:5002/api/posts', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setMessage('Post created successfully!');
        setTitle('');
        setCategory('Fashion');
        setContent('');
        setImage(null);
      })
      .catch((error) => {
        setMessage('Failed to create post');
        console.error('There was an error!', error);
      });
  };

  return (
    <div className="add-post-page">
      <h1>Add New Post</h1>
      <form className="add-post-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Post Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Fashion">Fashion</option>
            <option value="Beauty">Beauty</option>
            <option value="Lifestyle">Lifestyle</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Upload Image:</label>
          <input type="file" id="image" onChange={handleImageChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default AddNewPostPage;