import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [showModal, setShowModal] = useState(false);
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowModal(true);
  };
  
  const closeModal = () => {
    setShowModal(false);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <>
      <section className="contact-header">
        <h2>Contact Us</h2>
        <p>
          We'd love to hear from you! Reach out with any questions, comments, or
          concerns.
        </p>
      </section>

      <section className="contact-container">
        <div className="contact-info">
          <div className="contact-method">
            <h3>Email</h3>
            <p>info@shopeasy.com</p>
            <p>support@shopeasy.com</p>
          </div>
          <div className="contact-method">
            <h3>Phone</h3>
            <p>Customer Service: (555) 123-4567</p>
            <p>Orders & Shipping: (555) 765-4321</p>
          </div>
          <div className="contact-method">
            <h3>Hours</h3>
            <p>Monday - Friday: 9am - 6pm EST</p>
            <p>Saturday: 10am - 4pm EST</p>
            <p>Sunday: Closed</p>
          </div>
          <div className="contact-method">
            <h3>Address</h3>
            <p>ShopEasy Headquarters</p>
            <p>123 E-Commerce Way</p>
            <p>Digital City, DC 12345</p>
          </div>
        </div>

        <div className="contact-form-container">
          <h3>Send Us a Message</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <select 
                id="subject" 
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">Select a subject</option>
                <option value="order">Order Inquiry</option>
                <option value="product">Product Information</option>
                <option value="return">Returns & Refunds</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                rows="5" 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </section>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={closeModal}>&times;</span>
            <h2>Thank You!</h2>
            <p>
              Your message has been sent successfully. We'll get back to you as soon
              as possible.
            </p>
            <button className="btn" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Contact;