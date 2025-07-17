import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

const Page = ({
  children,
  title = "Help Center",
  description = "Find answers and get help",
  currentPage = "home",
  showBreadcrumbs = false,
  breadcrumbs = [],
  className = "",
  siteTitle = "Help Center",
  companyName = "Your Company"
}) => {
  return (
    <div className={`page-wrapper ${className}`}>
      {/* Document head would be managed by your framework */}
      
      <Nav 
        currentPage={currentPage} 
        siteTitle={siteTitle}
      />
      
      <main className="main-content" role="main">
        {showBreadcrumbs && breadcrumbs.length > 0 && (
          <div className="container" style={{ paddingTop: 'var(--spacing-lg)' }}>
            <nav aria-label="Breadcrumb" className="breadcrumbs">
              <ol style={{ 
                display: 'flex', 
                gap: 'var(--spacing-xs)', 
                listStyle: 'none',
                fontSize: 'var(--font-size-sm)',
                color: 'var(--text-muted)'
              }}>
                {breadcrumbs.map((crumb, index) => (
                  <li key={index} style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
                    {index > 0 && <span>/</span>}
                    {index < breadcrumbs.length - 1 ? (
                      <a 
                        href={crumb.url} 
                        style={{ 
                          color: 'var(--primary-color)', 
                          textDecoration: 'none' 
                        }}
                      >
                        {crumb.title}
                      </a>
                    ) : (
                      <span aria-current="page" style={{ color: 'var(--text-primary)', fontWeight: 'var(--font-weight-medium)' }}>
                        {crumb.title}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        )}
        
        {children}
      </main>
      
      <Footer companyName={companyName} />
    </div>
  );
};

export default Page; 