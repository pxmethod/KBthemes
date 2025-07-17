import React, { useState } from 'react';

const SearchHeader = ({
  title = "How can we help you?",
  subtitle = "Search our knowledge base for instant answers",
  placeholder = "Search for articles, guides, and answers...",
  onSearch = null,
  searchUrl = "/search"
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchTerm);
    } else {
      // Default behavior: navigate to search page
      window.location.href = `${searchUrl}?q=${encodeURIComponent(searchTerm)}`;
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <section className="search-section">
      <div className="kb-container">
        <h1 className="search-title">{title}</h1>
        <p className="search-subtitle">{subtitle}</p>
        
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="search-input-wrapper">
            <input
              type="search"
              className="search-input"
              placeholder={placeholder}
              value={searchTerm}
              onChange={handleInputChange}
              aria-label="Search knowledge base"
            />
            <button
              type="submit"
              className="search-button"
              aria-label="Search"
            >
              <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </button>
          </div>
        </form>
        
        <div className="search-suggestions" style={{ marginTop: '2rem', opacity: 0.8 }}>
          <p style={{ fontSize: '0.875rem', marginBottom: '0.5rem' }}>Popular searches:</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="/search?q=getting+started" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem' }}>
              Getting Started
            </a>
            <a href="/search?q=api" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem' }}>
              API Documentation
            </a>
            <a href="/search?q=billing" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem' }}>
              Billing & Pricing
            </a>
            <a href="/search?q=troubleshooting" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem' }}>
              Troubleshooting
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchHeader; 