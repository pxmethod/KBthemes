import React from 'react';

const ArticleBreadcrumbs = ({ breadcrumbs = [] }) => {
  if (!breadcrumbs.length) return null;

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb navigation">
      <div className="container">
        <ol className="breadcrumb-list">
          {breadcrumbs.map((crumb, index) => (
            <li key={index} className="breadcrumb-item">
              {index < breadcrumbs.length - 1 ? (
                <>
                  <a href={crumb.href} className="breadcrumb-link">
                    {crumb.text}
                  </a>
                  <span className="breadcrumb-separator" aria-hidden="true"> / </span>
                </>
              ) : (
                <span className="breadcrumb-current" aria-current="page">
                  {crumb.text}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default ArticleBreadcrumbs; 