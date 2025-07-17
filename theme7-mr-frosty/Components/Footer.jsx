import React from 'react';

const Footer = ({ 
  companyName = "Your Company",
  year = new Date().getFullYear()
}) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Help Center</h4>
            <a href="/categories">Browse Categories</a>
            <a href="/articles">All Articles</a>
            <a href="/search">Search</a>
            <a href="/faq">FAQ</a>
          </div>
          
          <div className="footer-section">
            <h4>Support</h4>
            <a href="/contact">Contact Us</a>
            <a href="/chat">Live Chat</a>
            <a href="/submit-ticket">Submit Ticket</a>
            <a href="/status">System Status</a>
          </div>
          
          <div className="footer-section">
            <h4>Company</h4>
            <a href="/about">About Us</a>
            <a href="/careers">Careers</a>
            <a href="/blog">Blog</a>
            <a href="/press">Press</a>
          </div>
          
          <div className="footer-section">
            <h4>Legal</h4>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/cookies">Cookie Policy</a>
            <a href="/security">Security</a>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {year} {companyName}. All rights reserved. Built with ❤️ for better customer support.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 