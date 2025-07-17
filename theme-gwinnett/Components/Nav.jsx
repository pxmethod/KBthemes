import React from 'react';

const Nav = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-left">
            <a href="/" className="logo">Gwinnett Knowledge</a>
          </div>
          
          <nav className="header-nav" role="navigation" aria-label="Main navigation">
            <ul className="nav-menu">
              <li><a href="/" className="nav-link active">Home</a></li>
              <li><a href="/categories" className="nav-link">Categories</a></li>
              <li><a href="/search" className="nav-link">Search</a></li>
              <li><a href="/contact" className="nav-link">Contact</a></li>
            </ul>
          </nav>
          
          <div className="header-right">
            <a href="/contact" className="btn btn-primary">Get Support</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav; 