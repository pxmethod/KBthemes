import React from 'react';

const Footer = ({
  companyName = "Your Company",
  currentYear = new Date().getFullYear(),
  supportEmail = "support@company.com",
  supportPhone = "1-800-123-4567"
}) => {
  return (
    <footer className="kb-footer">
      <div className="kb-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Help & Support</h3>
            <ul className="footer-links">
              <li><a href="/getting-started" className="footer-link">Getting Started</a></li>
              <li><a href="/faq" className="footer-link">Frequently Asked Questions</a></li>
              <li><a href="/troubleshooting" className="footer-link">Troubleshooting</a></li>
              <li><a href="/tutorials" className="footer-link">Video Tutorials</a></li>
              <li><a href="/guides" className="footer-link">User Guides</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Product</h3>
            <ul className="footer-links">
              <li><a href="/features" className="footer-link">Features</a></li>
              <li><a href="/pricing" className="footer-link">Pricing</a></li>
              <li><a href="/api-docs" className="footer-link">API Documentation</a></li>
              <li><a href="/integrations" className="footer-link">Integrations</a></li>
              <li><a href="/updates" className="footer-link">Product Updates</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Company</h3>
            <ul className="footer-links">
              <li><a href="/about" className="footer-link">About Us</a></li>
              <li><a href="/blog" className="footer-link">Blog</a></li>
              <li><a href="/careers" className="footer-link">Careers</a></li>
              <li><a href="/press" className="footer-link">Press</a></li>
              <li><a href="/partners" className="footer-link">Partners</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Contact</h3>
            <ul className="footer-links">
              <li><a href={`mailto:${supportEmail}`} className="footer-link">Email Support</a></li>
              <li><a href={`tel:${supportPhone}`} className="footer-link">Phone Support</a></li>
              <li><a href="/contact" className="footer-link">Contact Form</a></li>
              <li><a href="/live-chat" className="footer-link">Live Chat</a></li>
              <li><a href="/community" className="footer-link">Community Forum</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} {companyName}. All rights reserved. | 
            <a href="/privacy" className="footer-link"> Privacy Policy</a> | 
            <a href="/terms" className="footer-link"> Terms of Service</a> | 
            <a href="/security" className="footer-link"> Security</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 