// Pricing.js
import React from 'react';

const Pricing = () => {
  return (
    <div>
      <h2>Our Pricing</h2>
      <p>
        Choose a pricing plan that fits your business needs. We offer flexible options to support businesses of all sizes.
      </p>

      <div>
        <h3>Basic Plan</h3>
        <p>
          Ideal for startups and small businesses looking to establish their digital presence.
        </p>
        <ul>
          <li>Website Development</li>
          <li>Basic Digital Marketing</li>
          <li>Graphic Designing (Limited)</li>
        </ul>
        <p>Price: $XX/month</p>
      </div>

      <div>
        <h3>Pro Plan</h3>
        <p>
          Perfect for businesses aiming for growth and increased online visibility.
        </p>
        <ul>
          <li>Advanced Website Development</li>
          <li>Comprehensive Digital Marketing</li>
          <li>Graphic Designing (Expanded)</li>
          <li>Priority Support</li>
        </ul>
        <p>Price: $XXX/month</p>
      </div>

      <div>
        <h3>Enterprise Plan</h3>
        <p>
          Tailored solutions for large enterprises seeking a complete digital transformation.
        </p>
        <ul>
          <li>Custom Website Solutions</li>
          <li>Strategic Digital Marketing Campaigns</li>
          <li>Full-Scale Graphic Designing</li>
          <li>24/7 Priority Support</li>
        </ul>
        <p>Custom Pricing</p>
      </div>

      {/* Add more pricing plans as needed */}
    </div>
  );
};

export default Pricing;

