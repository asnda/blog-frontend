import React from 'react';
import './FashionPage.css';

const fashionTrends = [
  {
    id: 1,
    title: 'Summer Trends 2024',
    description: 'Bright colors, lightweight fabrics, and bold patterns are in this summer.',
    image: '/assets/images/fashion1.jpg'
  },
  {
    id: 2,
    title: 'Winter Fashion Essentials',
    description: 'Cozy knitwear, layered outfits, and stylish boots are a must this winter.',
    image: '/assets/images/fashion2.jpg'
  },
  {
    id: 3,
    title: 'Spring Collection Highlights',
    description: 'Floral prints, pastel shades, and elegant dresses for a refreshing spring look.',
    image: '/assets/images/fashion3.jpg'
  }
];

const FashionPage = () => {
  return (
    <div className="fashion-page">
      <h2>Fashion Trends</h2>
      <div className="fashion-list">
        {fashionTrends.map(trend => (
          <div key={trend.id} className="fashion-card">
            <img src={trend.image} alt={trend.title} className="fashion-image" />
            <div className="fashion-content">
              <h3>{trend.title}</h3>
              <p>{trend.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FashionPage;