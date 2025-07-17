import React, { useState } from 'react';

const Nav = () => {
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);

  const togglePagesDropdown = () => {
    setIsPagesDropdownOpen(!isPagesDropdownOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <a href="/" className="logo">
            <div className="logo-icon">
              📚
            </div>
            <div className="logo-text">
              <span>KnowledgeHub X</span>
              <span className="logo-subtitle">Support center</span>
            </div>
          </a>
        </div>
        
        <nav className="header-nav" role="navigation" aria-label="Main navigation">
          <ul className="nav-menu">
            <li><a href="/" className="nav-link">Home</a></li>
            <li className="nav-dropdown">
              <button 
                className="nav-link nav-dropdown-toggle"
                onClick={togglePagesDropdown}
                aria-expanded={isPagesDropdownOpen}
                aria-haspopup="true"
              >
                <span>Pages</span>
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none"
                  style={{ 
                    transform: isPagesDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s ease'
                  }}
                >
                  <path 
                    d="M6 9L12 15L18 9" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              {isPagesDropdownOpen && (
                <div 
                  className="dropdown-menu"
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    backgroundColor: 'var(--background-primary)',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: 'var(--shadow-lg)',
                    padding: 'var(--spacing-sm)',
                    minWidth: '200px',
                    zIndex: 50
                  }}
                >
                  <a href="/docs" className="dropdown-item" style={{
                    display: 'block',
                    padding: 'var(--spacing-sm) var(--spacing-md)',
                    color: 'var(--text-secondary)',
                    fontSize: 'var(--font-size-sm)',
                    borderRadius: 'var(--radius-md)',
                    transition: 'all var(--transition-fast)'
                  }}>Documentation</a>
                  <a href="/guides" className="dropdown-item" style={{
                    display: 'block',
                    padding: 'var(--spacing-sm) var(--spacing-md)',
                    color: 'var(--text-secondary)',
                    fontSize: 'var(--font-size-sm)',
                    borderRadius: 'var(--radius-md)',
                    transition: 'all var(--transition-fast)'
                  }}>Guides</a>
                  <a href="/api" className="dropdown-item" style={{
                    display: 'block',
                    padding: 'var(--spacing-sm) var(--spacing-md)',
                    color: 'var(--text-secondary)',
                    fontSize: 'var(--font-size-sm)',
                    borderRadius: 'var(--radius-md)',
                    transition: 'all var(--transition-fast)'
                  }}>API Reference</a>
                </div>
              )}
            </li>
            <li><a href="/contact" className="nav-link">Contact</a></li>
            <li><a href="/cart" className="nav-link cart-link">Cart(0)</a></li>
          </ul>
        </nav>
        
        <div className="header-right">
          <a href="/submit-ticket" className="btn btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginRight: 'var(--spacing-xs)' }}>
              <path 
                d="M9 11H15M9 15H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L19.7071 9.70711C19.8946 9.89464 20 10.149 20 10.4142V19C20 20.1046 19.1054 21 18 21H17ZM17 21V11H13V7H7V19H17Z" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            Submit ticket
          </a>
        </div>
      </div>
      
      <style jsx>{`
        .dropdown-item:hover {
          background-color: var(--background-secondary) !important;
          color: var(--text-primary) !important;
        }
      `}</style>
    </header>
  );
};

export default Nav; 