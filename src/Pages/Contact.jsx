import React, { useState } from 'react';
import './Contact.css'; // Import the CSS file

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend API
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you shortly.');
    // Reset form after submission
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1>Get In Touch</h1>
        <p>We'd love to hear from you. Whether you have a question about our software, a potential partnership, or anything else, our team is ready to answer all your questions.</p>
      </header>

      <div className="contact-content">
        {/* Contact Information Section */}
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p><strong>Headquarters:</strong></p>
          <p>CAPGEMINI CAMPUS, 115/32 & 35, ISB Rd, Financial District, Nanakramguda, Telangana 500032</p>
          
          <p><strong>Email:</strong></p>
          <p>manjunath-teja.n@capgemini.com</p>
          
          <p><strong>Phone:</strong></p>
          <p>+91-8660142760</p>

          
        </div>

        {/* Contact Form Section */}
        <div className="contact-form-wrapper">
          <h2>Send Us A Message</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
