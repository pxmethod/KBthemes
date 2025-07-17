import React from 'react';
import CategoryCard from './CategoryCard';

const CategoriesSection = ({ categories = [] }) => {
  const defaultCategories = [
    {
      title: 'Getting Started',
      description: 'Everything you need to know to get up and running quickly with our platform and services.',
      icon: '🚀',
      href: '/category/getting-started',
      articleCount: 12
    },
    {
      title: 'Account & Billing',
      description: 'Manage your account settings, subscription plans, and billing information with ease.',
      icon: '💳',
      href: '/category/account-billing',
      articleCount: 8
    },
    {
      title: 'Features & Tools',
      description: 'Learn about all the powerful features and tools available to help you succeed.',
      icon: '⚡',
      href: '/category/features-tools',
      articleCount: 24
    },
    {
      title: 'Technical Support',
      description: 'Find solutions to technical issues and troubleshooting guides for common problems.',
      icon: '🔧',
      href: '/category/technical-support',
      articleCount: 15
    },
    {
      title: 'Integrations',
      description: 'Connect with third-party services and learn about our API and integration options.',
      icon: '🔗',
      href: '/category/integrations',
      articleCount: 18
    },
    {
      title: 'Security & Privacy',
      description: 'Learn about our security measures, privacy policies, and data protection practices.',
      icon: '🔒',
      href: '/category/security-privacy',
      articleCount: 9
    }
  ];

  const categoriesToShow = categories.length > 0 ? categories : defaultCategories;

  return (
    <section className="categories-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Explore Our Knowledge Base</h2>
          <p className="section-subtitle">
            Browse through our comprehensive help categories to find exactly what you're looking for.
          </p>
        </div>
        
        <div className="categories-grid">
          {categoriesToShow.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection; 