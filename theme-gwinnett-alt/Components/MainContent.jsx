import React, { useState } from 'react';

const MainContent = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      id: 'getting-started',
      title: 'Getting started',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor velit esse cillum doloreincididunt ut labore et dolore magna.',
      icon: '🚀',
      href: '/docs/getting-started'
    },
    {
      id: 'authentication',
      title: 'Authentication',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tempor incididunt ut labore et dolore.',
      icon: '👤',
      href: '/docs/authentication'
    },
    {
      id: 'limits-pricing',
      title: 'Limits & pricing',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum quis nostrud exercitation commodo con.',
      icon: '📊',
      href: '/docs/limits-pricing'
    }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Handle search functionality
      console.log('Searching:', searchQuery);
    }
  };

  return (
    <>
      <div className="content-header" style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: 'var(--spacing-xl)',
        flexWrap: 'wrap'
      }}>
        <div style={{ flex: '1', minWidth: '300px' }}>
          <h1 className="content-title">
            Find the help you need for any problem
          </h1>
        </div>
        
        <div className="content-search">
          <form onSubmit={handleSearch} className="content-search-form">
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="content-search-input"
              placeholder="Search for answers..."
              aria-label="Search for help articles"
            />
            <button type="submit" className="content-search-button">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
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

      <div className="content-categories">
        {categories.map((category) => (
          <a 
            key={category.id}
            href={category.href}
            className="category-card"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className="category-header">
              <div className="category-icon">
                <span role="img" aria-hidden="true">{category.icon}</span>
              </div>
              <div className="category-content">
                <h2 className="category-title">{category.title}</h2>
                <p className="category-description">{category.description}</p>
                <div className="category-link">
                  <span>Browse docs</span>
                  <span className="category-link-arrow">→</span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default MainContent; 