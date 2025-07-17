import React from 'react';

const HeroSection = ({ 
  title = "Need some help?",
  subtitle = "Find articles, help and advice for getting the most out of our platform. We're here to help you succeed.",
  searchPlaceholder = "Search for articles...",
  searchUrl = "/search"
}) => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>
          
          <div className="search-section">
            <div className="search-container">
              <form action={searchUrl} method="get" className="search-form">
                <input 
                  type="search" 
                  name="q"
                  className="search-input" 
                  placeholder={searchPlaceholder}
                  aria-label="Search knowledge base"
                  autoComplete="off"
                />
                <button 
                  type="submit" 
                  className="search-button" 
                  aria-label="Search"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path 
                      d="M21 21L16.514 16.506M19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 