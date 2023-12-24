// Testimonials.js
import React from 'react';

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: 'John Doe',
      company: 'ABC Corporation',
      comment:
        'Working with the government on our digital presence was a game-changer. Their expertise and dedication significantly boosted our online visibility and sales.'
    },
    {
      id: 2,
      name: 'Jane Smith',
      company: 'XYZ Tech Solutions',
      comment:
        'The governments digital marketing services are top-notch. They not only delivered results but also provided valuable insights to enhance our strategy.'
    },
    // Add more testimonials as needed
  ];

  return (
    <div>
      <h2>Client Testimonials</h2>
      <div>
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id}>
            <h3>{testimonial.name}</h3>
            <p>{testimonial.company}</p>
            <blockquote>{testimonial.comment}</blockquote>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

