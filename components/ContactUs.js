// ContactUs.js
import React, { useState } from 'react';
import './ContactUs.css';
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (send data to server or display a success message)
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <p>
        If you have any questions or inquiries, feel free to reach out to us using the contact form
        or the provided contact information:
      </p>
      <ul>
        <li>Email: info@govtdigital.com</li>
        <li>Phone: +123 456 7890</li>
        <li>Address: 123 Digital Street, Govt City</li>
      </ul>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;

