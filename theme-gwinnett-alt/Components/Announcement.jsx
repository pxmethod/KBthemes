import React, { useState } from 'react';

const Announcement = ({ 
  message = "Welcome to our new knowledge base! We've updated our design for better accessibility.", 
  type = "info",
  dismissible = true 
}) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const getIcon = () => {
    switch (type) {
      case 'success': return '✅';
      case 'warning': return '⚠️';
      case 'error': return '❌';
      default: return 'ℹ️';
    }
  };

  return (
    <div className={`announcement announcement-${type}`}>
      <div className="container">
        <div className="announcement-content">
          <span className="announcement-icon" role="img" aria-hidden="true">
            {getIcon()}
          </span>
          <span className="announcement-message">{message}</span>
          {dismissible && (
            <button 
              className="announcement-close"
              onClick={() => setIsVisible(false)}
              aria-label="Dismiss announcement"
            >
              ×
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Announcement; 