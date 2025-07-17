import React from 'react';

const CategoryCard = ({ category }) => {
  const { title, description, icon, href, articleCount } = category;

  return (
    <a href={href} className="category-card card">
      <div className="category-icon">
        <span role="img" aria-hidden="true">{icon}</span>
      </div>
      <h3 className="category-title">{title}</h3>
      <p className="category-description">{description}</p>
      <div className="category-meta">
        <span className="article-count">{articleCount} articles</span>
        <span className="category-arrow">→</span>
      </div>
    </a>
  );
};

export default CategoryCard; 