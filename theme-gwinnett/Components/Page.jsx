import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

const Page = ({ children, title, showBreadcrumbs = false, breadcrumbs = [] }) => {
  return (
    <div className="kb-page">
      <Nav />
      {showBreadcrumbs && (
        <div className="kb-breadcrumbs">
          <div className="container">
            <ul className="kb-breadcrumb-list">
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className="kb-breadcrumb-item">
                  {index < breadcrumbs.length - 1 ? (
                    <a href={crumb.href} className="kb-breadcrumb-link">
                      {crumb.text}
                    </a>
                  ) : (
                    <span>{crumb.text}</span>
                  )}
                  {index < breadcrumbs.length - 1 && <span> / </span>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <main className="kb-main">
        {title && (
          <div className="kb-page-header">
            <div className="container">
              <h1>{title}</h1>
            </div>
          </div>
        )}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Page; 