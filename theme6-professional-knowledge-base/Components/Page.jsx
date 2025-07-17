import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Nav from './Nav';
import Footer from './Footer';

const Page = ({
  children,
  title = "Knowledge Base",
  description = "Find answers and get help",
  currentPage = "home",
  showBreadcrumbs = false,
  breadcrumbs = [],
  className = "",
  showSidebar = true,
  siteTitle = "Help Center"
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`page-wrapper ${className} ${showSidebar ? 'has-sidebar' : 'no-sidebar'} ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      {/* Document head would be managed by your framework */}
      
      {showSidebar && (
        <Sidebar 
          isOpen={sidebarOpen}
          onToggle={toggleSidebar}
          currentPage={currentPage}
          siteTitle={siteTitle}
        />
      )}
      
      <div className="main-wrapper">
        <Nav 
          currentPage={currentPage}
          showSidebar={showSidebar}
          sidebarOpen={sidebarOpen}
          onToggleSidebar={toggleSidebar}
          siteTitle={siteTitle}
        />
        
        <main className="main-content-wrapper" role="main">
          {showBreadcrumbs && breadcrumbs.length > 0 && (
            <div className="kb-container">
              <nav aria-label="Breadcrumb" className="breadcrumbs">
                {breadcrumbs.map((crumb, index) => (
                  <div key={index} className="breadcrumb-item">
                    {index < breadcrumbs.length - 1 ? (
                      <a href={crumb.url} className="breadcrumb-link">
                        {crumb.title}
                      </a>
                    ) : (
                      <span className="breadcrumb-current" aria-current="page">
                        {crumb.title}
                      </span>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          )}
          
          {children}
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Page; 