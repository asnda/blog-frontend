import React from 'react';
import './LifestylePage.css';

const lifestyleTrends = [
  {
    id: 1,
    title: 'Healthy Living Tips',
    description: 'Incorporate these healthy living tips into your daily routine for a better lifestyle.',
    image: '/assets/images/lifestyle1.jpg'
  },
  {
    id: 2,
    title: 'Travel Destinations 2024',
    description: 'Explore the top travel destinations for 2024 and plan your next adventure.',
    image: '/assets/images/lifestyle2.jpg'
  },
  {
    id: 3,
    title: 'Home Decor Ideas',
    description: 'Get inspired with these trendy home decor ideas to refresh your living space.',
    image: '/assets/images/lifestyle3.jpg'
  }
];

const LifestylePage = () => {
  return (
    <div className="lifestyle-page">
      <h2>Lifestyle Trends</h2>
      <div className="lifestyle-list">
        {lifestyleTrends.map(trend => (
          <div key={trend.id} className="lifestyle-card">
            <img src={trend.image} alt={trend.title} className="lifestyle-image" />
            <div className="lifestyle-content">
              <h3>{trend.title}</h3>
              <p>{trend.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LifestylePage;