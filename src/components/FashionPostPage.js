import React from 'react';
import './PostPage.css';

const FashionPostPage = () => {
  return (
    <div className="post-page">
      <h1>Fashion Trends</h1>
      <div className="post-content">
        <section className="post-section">
          <h2>Summer Trends</h2>
          <img src="/assets/images/summer-trends.jpg" alt="Summer Trends" className="post-image" />
          <p>Embrace the warm weather with vibrant colors, lightweight fabrics, and breezy styles. Discover the top summer trends that will keep you cool and stylish.</p>
          <p>Find out which accessories are must-haves for summer, including statement sunglasses, wide-brim hats, and chic sandals.</p>
          <p>Learn how to mix and match patterns to create a fun and playful summer wardrobe.</p>
        </section>

        <section className="post-section">
          <h2>Winter Wear</h2>
          <img src="/assets/images/winter-wear.jpg" alt="Winter Wear" className="post-image" />
          <p>Stay warm and fashionable during the colder months with these winter wear trends. Discover cozy coats, stylish boots, and layering techniques.</p>
          <p>Explore the best materials for winter clothing, such as wool, cashmere, and down. Learn how to choose pieces that provide warmth without sacrificing style.</p>
          <p>Get tips on accessorizing your winter outfits with scarves, gloves, and hats that add both functionality and flair.</p>
        </section>

        <section className="post-section">
          <h2>Spring Highlights</h2>
          <img src="/assets/images/spring-highlights.jpg" alt="Spring Highlights" className="post-image" />
          <p>Welcome the new season with fresh and vibrant styles. Discover the key trends for spring, including floral prints, pastel colors, and lightweight layers.</p>
          <p>Find out which footwear is perfect for spring, from sneakers to sandals, and how to pair them with your outfits.</p>
          <p>Learn about the latest trends in spring accessories, such as statement earrings, colorful bags, and lightweight scarves.</p>
        </section>
      </div>
    </div>
  );
};

export default FashionPostPage;