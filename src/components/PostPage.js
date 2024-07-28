import React from 'react';
import './PostPage.css';

const PostPage = () => {
  return (
    <div className="post-page">
      <h1>Fashion Trends</h1>
      <img src="/assets/images/fashion-banner.jpg" alt="Fashion Banner" className="banner-image" />
      <div className="post-content">
        <section>
          <h2>Summer Trends</h2>
          <img src="/assets/images/summer-trends.jpg" alt="Summer Trends" className="post-image" />
          <p>Explore the vibrant and colorful fashion trends for summer, including lightweight fabrics, bold prints, and breezy styles that keep you cool and chic.</p>
          <p>Discover the latest accessories that can elevate your outfit, from statement jewelry to stylish hats. Learn how to mix and match different pieces to create a unique look.</p>
          <p>Get inspired by fashion icons and their signature styles. Explore how you can incorporate elements of their looks into your own wardrobe.</p>
          <p>Learn about sustainable fashion practices and how you can make environmentally friendly choices in your clothing purchases.</p>
        </section>

        <section>
          <h2>Winter Wear</h2>
          <img src="/assets/images/winter-wear.jpg" alt="Winter Wear" className="post-image" />
          <p>Stay warm and stylish with winter wear essentials. Discover cozy knitwear, fashionable coats, and layering techniques to keep you comfortable and trendy.</p>
          <p>Find the perfect winter accessories to complement your outfit. From scarves and gloves to hats and boots, stay warm without compromising on style.</p>
          <p>Explore the latest trends in winter footwear. Learn about the best boots to keep your feet warm and stylish during the cold months.</p>
          <p>Get tips on how to layer your clothing effectively to stay warm and fashionable. Learn about the best materials and techniques for layering in winter.</p>
        </section>

        <section>
          <h2>Spring Highlights</h2>
          <img src="/assets/images/spring-highlights.jpg" alt="Spring Highlights" className="post-image" />
          <p>Embrace the freshness of spring with floral patterns, pastel colors, and lightweight jackets. Learn how to transition your wardrobe seamlessly from winter to spring.</p>
          <p>Discover the best spring accessories, from statement jewelry to trendy sunglasses. Learn how to add a touch of spring to your outfits with the right accessories.</p>
          <p>Explore the latest trends in spring footwear. Find out which shoes are a must-have for the season, from stylish sneakers to elegant sandals.</p>
          <p>Get tips on how to mix and match different pieces to create fresh and unique spring outfits. Learn about the best color combinations and patterns for the season.</p>
        </section>
      </div>
    </div>
  );
};

export default PostPage;