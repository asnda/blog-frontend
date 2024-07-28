import React from 'react';
import './PostPage.css';

const BeautyPostPage = () => {
  return (
    <div className="post-page">
      <h1>Beauty Trends</h1>
      <div className="post-content">
        <section className="post-section">
          <h2>Top Skincare Products</h2>
          <img src="/assets/images/skincare-products.jpg" alt="Skincare Products" className="post-image" />
          <p>Discover the top skincare products that will keep your skin glowing and healthy. From cleansers to moisturizers, find the best products for your skincare routine.</p>
          <p>Explore products with natural ingredients that nourish your skin. Learn about the benefits of using organic and cruelty-free skincare items.</p>
          <p>Get tips on creating a personalized skincare routine that addresses your specific skin concerns, such as acne, aging, or sensitivity.</p>
        </section>

        <section className="post-section">
          <h2>Makeup Trends</h2>
          <img src="/assets/images/makeup-trends.jpg" alt="Makeup Trends" className="post-image" />
          <p>Stay updated with the latest makeup trends. Learn about bold eye makeup, natural looks, and the best products to achieve these trends.</p>
          <p>Discover the most popular makeup products and techniques used by professional makeup artists. Get tips on how to recreate these looks at home.</p>
          <p>Explore the benefits of using high-quality makeup products that are long-lasting and skin-friendly.</p>
        </section>

        <section className="post-section">
          <h2>Haircare Products</h2>
          <img src="/assets/images/haircare-products.jpg" alt="Haircare Products" className="post-image" />
          <p>Find out which haircare products are must-haves for maintaining healthy and beautiful hair. From shampoos to styling products, discover what works best for your hair type.</p>
          <p>Get tips on how to create a haircare routine that keeps your hair strong, shiny, and manageable.</p>
          <p>Learn about the benefits of using natural and organic haircare products. Discover how to avoid harmful chemicals in haircare products.</p>
        </section>
      </div>
    </div>
  );
};

export default BeautyPostPage;