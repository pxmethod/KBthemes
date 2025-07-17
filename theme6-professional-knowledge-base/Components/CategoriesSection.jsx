import React from 'react';

const CategoriesSection = ({
  title = "Browse Help Topics",
  subtitle = "Find answers organized by topic",
  categories = [
    {
      id: 1,
      title: "Getting Started",
      description: "Learn the basics and get up and running quickly with our step-by-step guides.",
      icon: "📚",
      articleCount: 12,
      url: "/category/getting-started"
    },
    {
      id: 2,
      title: "Account Management",
      description: "Manage your account settings, billing, and user preferences.",
      icon: "👤",
      articleCount: 8,
      url: "/category/account"
    },
    {
      id: 3,
      title: "Technical Support",
      description: "Troubleshoot common issues and resolve technical problems.",
      icon: "🔧",
      articleCount: 15,
      url: "/category/technical"
    },
    {
      id: 4,
      title: "API Documentation",
      description: "Comprehensive guides for developers using our API.",
      icon: "⚡",
      articleCount: 24,
      url: "/category/api"
    },
    {
      id: 5,
      title: "Billing & Pricing",
      description: "Information about plans, billing, and payment methods.",
      icon: "💳",
      articleCount: 6,
      url: "/category/billing"
    },
    {
      id: 6,
      title: "Security & Privacy",
      description: "Learn about our security measures and privacy policies.",
      icon: "🔒",
      articleCount: 9,
      url: "/category/security"
    }
  ]
}) => {
  return (
    <section className="kb-section">
      <div className="kb-container">
        <div className="text-center mb-xl">
          <h2 className="font-bold text-primary mb-md">{title}</h2>
          <p className="text-secondary">{subtitle}</p>
        </div>
        
        <div className="categories-grid">
          {categories.map((category) => (
            <a
              key={category.id}
              href={category.url}
              className="category-card"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="category-icon">
                {category.icon}
              </div>
              
              <h3 className="category-title">{category.title}</h3>
              
              <p className="category-description">{category.description}</p>
              
              <div className="category-meta">
                <span className="article-count">
                  {category.articleCount} article{category.articleCount !== 1 ? 's' : ''}
                </span>
                <span className="view-all-link">
                  View all →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection; 