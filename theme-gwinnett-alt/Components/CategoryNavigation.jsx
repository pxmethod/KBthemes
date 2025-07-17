import React, { useState } from 'react';

const CategoryNavigation = ({ items = [] }) => {
  const [expandedItems, setExpandedItems] = useState(
    items.reduce((acc, item) => {
      if (item.isExpanded) {
        acc[item.id] = true;
      }
      return acc;
    }, {})
  );

  const toggleExpanded = (itemId) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  return (
    <nav className="category-navigation">
      {items.map((item) => (
        <div key={item.id} className="nav-item">
          <button
            className={`nav-item-toggle ${expandedItems[item.id] ? 'expanded' : ''}`}
            onClick={() => toggleExpanded(item.id)}
            aria-expanded={expandedItems[item.id]}
            aria-controls={`nav-content-${item.id}`}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span className="nav-item-icon" role="img" aria-hidden="true">
                {item.icon}
              </span>
              {item.title}
            </div>
            <span className="nav-item-chevron">
              ▶
            </span>
          </button>
          
          <div
            id={`nav-content-${item.id}`}
            className={`nav-item-content ${expandedItems[item.id] ? 'expanded' : ''}`}
            aria-hidden={!expandedItems[item.id]}
          >
            {item.subItems && item.subItems.map((subItem, index) => (
              <div key={index} className="nav-subitem">
                <a href={subItem.href}>
                  {subItem.title}
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
};

export default CategoryNavigation; 