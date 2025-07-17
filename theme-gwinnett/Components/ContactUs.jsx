import React from 'react';

const ContactUs = () => {
  return (
    <section className="contact-support-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Still need help?</h2>
          <p className="section-subtitle">
            Can't find what you're looking for? Our dedicated support team is here to help you get the answers you need.
          </p>
        </div>
        
        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-icon">
              <span role="img" aria-hidden="true">💬</span>
            </div>
            <h3 className="contact-title">Live Chat</h3>
            <p className="contact-description">
              Get instant help from our support team. Available 24/7 to answer your questions.
            </p>
            <a href="/chat" className="btn btn-primary">Start Chat</a>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <span role="img" aria-hidden="true">✉️</span>
            </div>
            <h3 className="contact-title">Email Support</h3>
            <p className="contact-description">
              Send us a detailed message and we'll get back to you within 24 hours.
            </p>
            <a href="/contact" className="btn btn-primary">Send Email</a>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <span role="img" aria-hidden="true">❓</span>
            </div>
            <h3 className="contact-title">FAQ</h3>
            <p className="contact-description">
              Browse our frequently asked questions for quick answers to common issues.
            </p>
            <a href="/faq" className="btn btn-primary">View FAQ</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs; 