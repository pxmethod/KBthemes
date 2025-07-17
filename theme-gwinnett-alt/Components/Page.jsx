import React from 'react';
import Nav from './Nav';
import DocumentationLayout from './DocumentationLayout';
import Footer from './Footer';

const Page = ({ children, title, showBreadcrumbs = false, breadcrumbs = [] }) => {
  return (
    <div className="kb-page">
      <Nav />
      
      {showBreadcrumbs && (
        <div className="kb-breadcrumbs" style={{
          paddingTop: 'var(--header-height)',
          paddingLeft: 'var(--sidebar-width)',
          borderBottom: '1px solid var(--border-color)',
          backgroundColor: 'var(--background-secondary)'
        }}>
          <div className="container" style={{
            padding: 'var(--spacing-md) var(--spacing-xl)',
            maxWidth: 'calc(var(--container-max-width) - var(--sidebar-width))',
            margin: '0 auto'
          }}>
            <ul className="kb-breadcrumb-list" style={{
              display: 'flex',
              listStyle: 'none',
              margin: 0,
              padding: 0,
              fontSize: 'var(--font-size-sm)',
              color: 'var(--text-muted)'
            }}>
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className="kb-breadcrumb-item" style={{
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  {index < breadcrumbs.length - 1 ? (
                    <>
                      <a href={crumb.href} className="kb-breadcrumb-link" style={{
                        color: 'var(--primary-color)',
                        textDecoration: 'none'
                      }}>
                        {crumb.text}
                      </a>
                      <span style={{ margin: '0 var(--spacing-sm)', color: 'var(--text-muted)' }}> / </span>
                    </>
                  ) : (
                    <span style={{ color: 'var(--text-primary)' }}>{crumb.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      
      <DocumentationLayout>
        {title && (
          <div className="kb-page-header" style={{
            marginBottom: 'var(--spacing-xl)',
            paddingBottom: 'var(--spacing-lg)',
            borderBottom: '1px solid var(--border-light)'
          }}>
            <h1 style={{
              fontSize: 'var(--font-size-3xl)',
              fontWeight: 'var(--font-weight-bold)',
              color: 'var(--text-primary)',
              margin: 0
            }}>{title}</h1>
          </div>
        )}
        {children}
      </DocumentationLayout>
      
      <Footer />
    </div>
  );
};

export default Page; 