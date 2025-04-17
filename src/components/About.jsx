import React from 'react';

function About() {
  return (
    <>
      <section className="about-header">
        <div className="about-hero">
          <h2>About ShopEasy</h2>
          <p>Your trusted online shopping destination since 2020</p>
        </div>
      </section>

      <section className="about-content">
        <div className="about-section">
          <h3>Our Story</h3>
          <img
            src="/api/placeholder/500/300"
            alt="Our Story"
            className="about-image"
          />
          <p>
            ShopEasy was founded in 2020 with a simple mission: to make online
            shopping easy, affordable, and enjoyable for everyone. What started as
            a small online store has grown into a trusted e-commerce platform
            offering thousands of products across multiple categories.
          </p>
          <p>
            Our founder, Jane Smith, recognized the need for a more
            customer-focused online shopping experience. After years working in
            retail, she set out to create an e-commerce platform that prioritizes
            user experience, product quality, and excellent customer service.
          </p>
        </div>

        <div className="about-section">
          <h3>Our Values</h3>
          <div className="values-grid">
            <div className="value-card">
              <h4>Quality First</h4>
              <p>
                We carefully select and test all products to ensure they meet our
                high standards.
              </p>
            </div>
            <div className="value-card">
              <h4>Customer Satisfaction</h4>
              <p>
                Your happiness is our priority. We strive to exceed expectations
                with every purchase.
              </p>
            </div>
            <div className="value-card">
              <h4>Transparency</h4>
              <p>
                Clear pricing, honest product descriptions, and no hidden fees.
                What you see is what you get.
              </p>
            </div>
            <div className="value-card">
              <h4>Sustainability</h4>
              <p>
                We're committed to reducing our environmental impact through
                eco-friendly practices.
              </p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h3>Our Team</h3>
          <div className="team-grid">
            <div className="team-member">
              <img src="/api/placeholder/200/200" alt="Jane Smith" />
              <h4>Jane Smith</h4>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member">
              <img src="/api/placeholder/200/200" alt="John Doe" />
              <h4>John Doe</h4>
              <p>Head of Product</p>
            </div>
            <div className="team-member">
              <img src="/api/placeholder/200/200" alt="Emily Johnson" />
              <h4>Emily Johnson</h4>
              <p>Customer Service Manager</p>
            </div>
            <div className="team-member">
              <img src="/api/placeholder/200/200" alt="Michael Chen" />
              <h4>Michael Chen</h4>
              <p>Lead Developer</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;