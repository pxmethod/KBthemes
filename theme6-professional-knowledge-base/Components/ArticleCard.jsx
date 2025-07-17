import React from 'react';

const ArticleCard = ({
  title,
  excerpt,
  url,
  category = null,
  lastUpdated = null,
  readTime = null,
  isHelpful = null,
  className = ""
}) => {
  const formatDate = (dateString) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <article className={`category-card ${className}`} style={{ cursor: 'pointer' }}>
      <a href={url} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div style={{ marginBottom: '1rem' }}>
          {category && (
            <span style={{
              display: 'inline-block',
              padding: '0.25rem 0.75rem',
              fontSize: '0.75rem',
              fontWeight: '500',
              backgroundColor: 'var(--primary-light)',
              color: 'var(--primary-color)',
              borderRadius: 'var(--border-radius-sm)',
              marginBottom: '0.75rem'
            }}>
              {category}
            </span>
          )}
          
          <h3 className="category-title" style={{ marginBottom: '0.5rem' }}>
            {title}
          </h3>
          
          {excerpt && (
            <p className="category-description" style={{ marginBottom: '1rem' }}>
              {excerpt}
            </p>
          )}
        </div>
        
        <div className="category-meta">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.75rem' }}>
            {lastUpdated && (
              <span>Updated {formatDate(lastUpdated)}</span>
            )}
            {readTime && (
              <span>{readTime} min read</span>
            )}
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {isHelpful !== null && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.75rem' }}>
                <span style={{ color: 'var(--success-color)' }}>👍</span>
                <span>{isHelpful}% helpful</span>
              </div>
            )}
            <span className="view-all-link">
              Read article →
            </span>
          </div>
        </div>
      </a>
    </article>
  );
};

export default ArticleCard; 