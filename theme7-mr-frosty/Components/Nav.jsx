import React from 'react';

const Nav = ({ 
  siteTitle = "Help Center",
  homeUrl = "/", 
  currentPage = "home"
}) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-left">
            <a href={homeUrl} className="logo">
              {siteTitle}
            </a>
          </div>
          
          <nav className="header-nav" role="navigation" aria-label="Main navigation">
            <ul className="nav-menu">
              <li>
                <a 
                  href={homeUrl} 
                  className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
                  aria-current={currentPage === 'home' ? 'page' : undefined}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="/categories" 
                  className={`nav-link ${currentPage === 'categories' ? 'active' : ''}`}
                  aria-current={currentPage === 'categories' ? 'page' : undefined}
                >
                  Categories
                </a>
              </li>
              <li>
                <a 
                  href="/search" 
                  className={`nav-link ${currentPage === 'search' ? 'active' : ''}`}
                  aria-current={currentPage === 'search' ? 'page' : undefined}
                >
                  Search
                </a>
              </li>
              <li>
                <a 
                  href="/contact" 
                  className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}
                  aria-current={currentPage === 'contact' ? 'page' : undefined}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          
          <div className="header-right">
            <a href="/contact" className="btn btn-primary">
              Get Support
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav; 