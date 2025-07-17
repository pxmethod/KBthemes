import React, { useState } from 'react';
import Sidebar from './Sidebar';

const DocumentationLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="documentation-layout">
      <Sidebar isOpen={isSidebarOpen} />
      
      <div className="documentation-main">
        {/* Mobile sidebar toggle */}
        <button 
          className="mobile-sidebar-toggle"
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path 
              d="M3 12H21M3 6H21M3 18H21" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>
        
        <div className="main-content">
          {children}
        </div>
      </div>
      
      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div 
          className="mobile-overlay"
          onClick={toggleSidebar}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 15,
            display: 'none'
          }}
        />
      )}
      
      <style jsx>{`
        @media (max-width: 768px) {
          .documentation-sidebar {
            transform: ${isSidebarOpen ? 'translateX(0)' : 'translateX(-100%)'};
          }
          
          .mobile-overlay {
            display: ${isSidebarOpen ? 'block' : 'none'} !important;
          }
        }
      `}</style>
    </div>
  );
};

export default DocumentationLayout; 