import React from 'react';

const CategoryGrid = ({ 
  title = "Categories you may like",
  subtitle = "Browse through our comprehensive help categories to find the information you need.",
  categories = []
}) => {
  const defaultCategories = [
    {
      id: 1,
      title: "Getting Started",
      description: "Everything you need to know to get up and running quickly with our platform and services.",
      icon: "🚀",
      articleCount: 12,
      url: "/category/getting-started"
    },
    {
      id: 2,
      title: "Account & Billing",
      description: "Manage your account settings, subscription plans, and billing information with ease.",
      icon: "💳",
      articleCount: 8,
      url: "/category/account-billing"
    },
    {
      id: 3,
      title: "Features & Tools",
      description: "Learn about all the powerful features and tools available to help you succeed.",
      icon: "⚡",
      articleCount: 24,
      url: "/category/features-tools"
    },
    {
      id: 4,
      title: "Technical Support",
      description: "Find solutions to technical issues and troubleshooting guides for common problems.",
      icon: "🔧",
      articleCount: 15,
      url: "/category/technical-support"
    },
    {
      id: 5,
      title: "Integrations",
      description: "Connect with third-party services and learn about our API and integration options.",
      icon: "🔗",
      articleCount: 18,
      url: "/category/integrations"
    },
    {
      id: 6,
      title: "Security & Privacy",
      description: "Learn about our security measures, privacy policies, and data protection practices.",
      icon: "🔒",
      articleCount: 9,
      url: "/category/security-privacy"
    }
  ];

  const categoryList = categories.length > 0 ? categories : defaultCategories;

  return (
    <section className="categories-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>
        
        <div className="categories-grid">
          {categoryList.map((category) => (
            <a 
              key={category.id} 
              href={category.url} 
              className="category-card"
              aria-label={`Browse ${category.title} articles`}
            >
              <div className="category-icon">
                <span role="img" aria-hidden="true">{category.icon}</span>
              </div>
              
              <h3 className="category-title">{category.title}</h3>
              <p className="category-description">{category.description}</p>
              
              <div className="category-meta">
                <span className="article-count">{category.articleCount} articles</span>
                <span className="category-arrow">→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid; 