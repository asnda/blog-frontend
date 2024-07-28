import React from 'react';
import './PostPage.css';

const LifestylePostPage = () => {
  return (
    <div className="post-page">
      <h1>Lifestyle</h1>
      <div className="post-content">
        <section className="post-section">
          <h2>Healthy Living</h2>
          <img src="/assets/images/healthy-living.jpg" alt="Healthy Living" className="post-image" />
          <p>Learn about the best practices for maintaining a healthy lifestyle. From balanced diets to regular exercise, discover tips to keep you in top shape.</p>
          <p>Explore healthy recipes that are both nutritious and delicious. Learn how to prepare meals that support your wellness goals.</p>
          <p>Get tips on creating a workout routine that fits your lifestyle and keeps you motivated. Learn about different types of exercises and their benefits.</p>
        </section>

        <section className="post-section">
          <h2>Travel Destinations</h2>
          <img src="/assets/images/travel-destinations.jpg" alt="Travel Destinations" className="post-image" />
          <p>Explore the most beautiful and exciting travel destinations around the world. Get tips on where to go, what to see, and how to make the most of your travels.</p>
          <p>Discover travel tips that can make your trips more enjoyable and stress-free. Learn about packing essentials, travel safety, and budgeting for your trips.</p>
          <p>Get inspiration for your next vacation by exploring off-the-beaten-path destinations and unique travel experiences.</p>
        </section>

        <section className="post-section">
          <h2>Home Decor</h2>
          <img src="/assets/images/home-decor.jpg" alt="Home Decor" className="post-image" />
          <p>Discover the latest trends in home decor. From minimalist designs to cozy interiors, get inspired to decorate your home in style.</p>
          <p>Explore tips on creating a comfortable and functional living space. Learn how to choose the right furniture, colors, and accessories for your home.</p>
          <p>Get ideas for DIY home decor projects that add a personal touch to your space. Learn about the tools and materials you'll need to get started.</p>
        </section>
      </div>
    </div>
  );
};

export default LifestylePostPage;