import React from 'react';

const Nav = ({ 
  siteTitle = "Help Center",
  homeUrl = "/", 
  searchUrl = "/search",
  currentPage = "home",
  showSidebar = true,
  sidebarOpen = true,
  onToggleSidebar
}) => {
  return (
    <header className="top-header">
      <div className="header-content">
        {/* Left Section - Sidebar toggle and navigation */}
        <div className="header-left">
          {showSidebar && (
            <button 
              className="sidebar-toggle"
              onClick={onToggleSidebar}
              aria-label={sidebarOpen ? 'Close sidebar' : 'Open sidebar'}
              aria-expanded={sidebarOpen}
            >
              <span className="hamburger">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          )}
          
          <div className="header-breadcrumb">
            <a href={homeUrl} className="breadcrumb-home">
              Home
            </a>
            {currentPage !== 'home' && (
              <>
                <span className="breadcrumb-separator">/</span>
                <span className="breadcrumb-current">
                  {currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}
                </span>
              </>
            )}
          </div>
        </div>

        {/* Center Section - Search */}
        <div className="header-center">
          <div className="header-search">
            <form className="search-form" action={searchUrl} method="get">
              <div className="search-input-wrapper">
                <input 
                  type="search" 
                  name="q"
                  className="search-input" 
                  placeholder="Search for articles..."
                  aria-label="Search knowledge base"
                />
                <button type="submit" className="search-button" aria-label="Search">
                  <span className="search-icon">🔍</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Section - User actions */}
        <div className="header-right">
          <div className="header-actions">
            <a href="/submit-ticket" className="header-action-btn ticket-btn">
              <span className="btn-icon">🎫</span>
              <span className="btn-text">Submit Ticket</span>
            </a>
            
            <a href="/login" className="header-action-btn login-btn">
              <span className="btn-icon">👤</span>
              <span className="btn-text">Login</span>
            </a>
            
            <div className="user-menu">
              <button className="user-menu-toggle" aria-label="User menu">
                <span className="user-avatar">👤</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav; 