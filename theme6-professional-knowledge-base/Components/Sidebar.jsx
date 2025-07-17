import React, { useState } from 'react';

const Sidebar = ({ 
  isOpen = true,
  onToggle,
  currentPage = 'home',
  siteTitle = "Help Center"
}) => {
  const [expandedCategories, setExpandedCategories] = useState(new Set(['topics']));

  const toggleCategory = (categoryId) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
    }
    setExpandedCategories(newExpanded);
  };

  const navigationCategories = [
    {
      id: 'topics',
      title: 'Topics',
      icon: '📂',
      isMain: true,
      items: []
    },
    {
      id: 'blog',
      title: 'Blog',
      icon: '📝',
      isMain: true,
      items: []
    },
    {
      id: 'community',
      title: 'Community',
      icon: '👥',
      isMain: true,
      items: []
    },
    {
      id: 'forum',
      title: 'Forum',
      icon: '💬',
      isMain: true,
      items: []
    },
    {
      id: 'faq',
      title: 'FAQ',
      icon: '❓',
      isMain: true,
      items: []
    },
    {
      id: 'contact',
      title: 'Contact us',
      icon: '📞',
      isMain: true,
      items: []
    }
  ];

  const productCategories = [
    {
      id: 'devnexus',
      title: 'DevNexus',
      subtitle: 'Auto Web Solutions',
      articleCount: 10,
      subcategories: [
        'Getting Started',
        'Billing & Payments', 
        'Technical Support',
        'Account Management',
        'Integrations',
        'Policies & Security'
      ]
    },
    {
      id: 'codeworks',
      title: 'CodeWorks',
      subtitle: 'Auto Web Solutions',
      articleCount: 10,
      subcategories: [
        'Getting Started',
        'Billing & Payments',
        'Technical Support', 
        'Account Management',
        'Integrations',
        'Policies & Security'
      ]
    },
    {
      id: 'techcraft',
      title: 'TechCraft Solutions Pro',
      subtitle: 'Auto Web Solutions',
      articleCount: 10,
      subcategories: [
        'Getting Started',
        'Billing & Payments',
        'Technical Support',
        'Account Management', 
        'Integrations',
        'Policies & Security'
      ]
    },
    {
      id: 'buildstack',
      title: 'BuildStack',
      subtitle: 'Auto Web Solutions',
      articleCount: 10,
      subcategories: [
        'Getting Started',
        'Billing & Payments',
        'Technical Support',
        'Account Management',
        'Integrations', 
        'Policies & Security'
      ]
    },
    {
      id: 'softforge',
      title: 'SoftForge',
      subtitle: 'Auto Web Solutions', 
      articleCount: 10,
      subcategories: [
        'Getting Started',
        'Billing & Payments',
        'Technical Support',
        'Account Management',
        'Integrations',
        'Policies & Security'
      ]
    },
    {
      id: 'appforge',
      title: 'Innovative App Forge',
      subtitle: 'Auto Web Solutions',
      articleCount: 10,
      subcategories: [
        'Getting Started',
        'Billing & Payments', 
        'Technical Support',
        'Account Management',
        'Integrations',
        'Policies & Security'
      ]
    }
  ];

  return (
    <aside className={`sidebar ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`} role="complementary">
      {/* Contact Info Header */}
      <div className="sidebar-header">
        <div className="contact-info">
          <div className="contact-item">
            <span className="contact-icon">📞</span>
            <span className="contact-text">(123) 234 885</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">✉️</span>
            <span className="contact-text">example@gmail.com</span>
          </div>
        </div>
        
        <div className="sidebar-title">
          <h2>{siteTitle}</h2>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sidebar-nav" role="navigation" aria-label="Knowledge base navigation">
        {/* Primary Navigation Items */}
        <div className="nav-section">
          {navigationCategories.map((category) => (
            <a
              key={category.id}
              href={`/${category.id}`}
              className={`nav-item ${currentPage === category.id ? 'active' : ''}`}
              aria-current={currentPage === category.id ? 'page' : undefined}
            >
              <span className="nav-icon">{category.icon}</span>
              <span className="nav-text">{category.title}</span>
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="nav-divider"></div>

        {/* Products Section */}
        <div className="nav-section products-section">
          <div className="section-header">
            <h3>Products</h3>
          </div>
          
          {productCategories.map((product) => (
            <div key={product.id} className="product-category">
              <button
                className={`product-header ${expandedCategories.has(product.id) ? 'expanded' : ''}`}
                onClick={() => toggleCategory(product.id)}
                aria-expanded={expandedCategories.has(product.id)}
                aria-controls={`${product.id}-subcategories`}
              >
                <div className="product-info">
                  <div className="product-title">{product.title}</div>
                  <div className="product-subtitle">{product.subtitle}</div>
                  <div className="product-count">{product.articleCount} Articles</div>
                </div>
                <span className="expand-icon">
                  {expandedCategories.has(product.id) ? '−' : '+'}
                </span>
              </button>
              
              {expandedCategories.has(product.id) && (
                <div 
                  className="product-subcategories"
                  id={`${product.id}-subcategories`}
                >
                  {product.subcategories.map((subcategory, index) => (
                    <a
                      key={index}
                      href={`/category/${product.id}/${subcategory.toLowerCase().replace(/\s+/g, '-')}`}
                      className="subcategory-link"
                    >
                      {subcategory}
                    </a>
                  ))}
                  <a
                    href={`/category/${product.id}`}
                    className="subcategory-link view-all"
                  >
                    View All
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Submit Ticket Button */}
        <div className="sidebar-footer">
          <a href="/submit-ticket" className="submit-ticket-btn">
            <span className="btn-icon">🎫</span>
            <span>Submit ticket</span>
          </a>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar; 