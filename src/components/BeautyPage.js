import React from 'react';
import './BeautyPage.css';

const beautyTrends = [
  {
    id: 1,
    title: 'Top Skincare Products 2024',
    description: 'Discover the best skincare products that will keep your skin glowing all year round.',
    image: '/assets/images/beauty1.jpg'
  },
  {
    id: 2,
    title: 'Makeup Trends for the Season',
    description: 'From bold lip colors to glittery eyeshadows, explore the hottest makeup trends.',
    image: '/assets/images/beauty2.jpg'
  },
  {
    id: 3,
    title: 'Haircare Tips and Tricks',
    description: 'Get the best tips and tricks for maintaining healthy and stylish hair.',
    image: '/assets/images/beauty3.jpg'
  }
];

const BeautyPage = () => {
  return (
    <div className="beauty-page">
      <h2>Beauty Trends</h2>
      <div className="beauty-list">
        {beautyTrends.map(trend => (
          <div key={trend.id} className="beauty-card">
            <img src={trend.image} alt={trend.title} className="beauty-image" />
            <div className="beauty-content">
              <h3>{trend.title}</h3>
              <p>{trend.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeautyPage;