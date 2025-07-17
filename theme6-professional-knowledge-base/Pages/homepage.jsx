import React from 'react';
import Page from '../Components/Page';
import SearchHeader from '../Components/SearchHeader';
import CategoriesSection from '../Components/CategoriesSection';
import ContactUs from '../Components/ContactUs';

const Homepage = () => {
  const featuredCategories = [
    {
      id: 1,
      title: "Getting Started",
      description: "Everything you need to know to get up and running quickly with our platform.",
      icon: "🚀",
      articleCount: 12,
      url: "/category/getting-started"
    },
    {
      id: 2,
      title: "API Documentation",
      description: "Comprehensive developer guides, code examples, and API references.",
      icon: "⚡",
      articleCount: 24,
      url: "/category/api-docs"
    },
    {
      id: 3,
      title: "Account & Billing",
      description: "Manage your account settings, subscription, and billing information.",
      icon: "💳",
      articleCount: 8,
      url: "/category/account-billing"
    },
    {
      id: 4,
      title: "Technical Support",
      description: "Troubleshooting guides and solutions for common technical issues.",
      icon: "🔧",
      articleCount: 15,
      url: "/category/technical-support"
    },
    {
      id: 5,
      title: "Security & Privacy",
      description: "Learn about our security measures, privacy policies, and data protection.",
      icon: "🔒",
      articleCount: 9,
      url: "/category/security-privacy"
    },
    {
      id: 6,
      title: "Integrations",
      description: "Connect with third-party tools and services to enhance your workflow.",
      icon: "🔗",
      articleCount: 18,
      url: "/category/integrations"
    }
  ];

  return (
    <Page currentPage="home" title="Professional Knowledge Base" description="Find answers and get help">
      {/* Hero Search Section */}
      <SearchHeader 
        title="How can we help you today?"
        subtitle="Search our comprehensive knowledge base for instant answers and detailed guides"
        placeholder="Search for articles, guides, API docs, and more..."
      />
      
      {/* Featured Categories */}
      <CategoriesSection 
        title="Explore Help Topics"
        subtitle="Browse our organized collection of guides and documentation"
        categories={featuredCategories}
      />
      
      {/* Popular Articles Section */}
      <section className="kb-section--small">
        <div className="kb-container">
          <div className="text-center mb-xl">
            <h2 className="font-bold text-primary mb-md">Popular Articles</h2>
            <p className="text-secondary">Most viewed and helpful articles from our community</p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: 'var(--spacing-xl)',
            marginBottom: 'var(--spacing-2xl)'
          }}>
            <div className="category-card">
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-md)' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: 'var(--primary-light)',
                  borderRadius: 'var(--border-radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  fontSize: '1.25rem'
                }}>
                  📖
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--spacing-sm)' }}>
                    <a href="/article/quick-start-guide" style={{ color: 'var(--text-primary)' }}>
                      Quick Start Guide: Your First 10 Minutes
                    </a>
                  </h3>
                  <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-muted)', marginBottom: 'var(--spacing-sm)' }}>
                    Get up and running in just 10 minutes with this essential guide.
                  </p>
                  <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)' }}>
                    5 min read • 97% helpful
                  </div>
                </div>
              </div>
            </div>
            
            <div className="category-card">
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-md)' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: 'var(--primary-light)',
                  borderRadius: 'var(--border-radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  fontSize: '1.25rem'
                }}>
                  🔑
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--spacing-sm)' }}>
                    <a href="/article/api-authentication" style={{ color: 'var(--text-primary)' }}>
                      API Authentication Best Practices
                    </a>
                  </h3>
                  <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-muted)', marginBottom: 'var(--spacing-sm)' }}>
                    Secure your API calls with proper authentication methods.
                  </p>
                  <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)' }}>
                    8 min read • 94% helpful
                  </div>
                </div>
              </div>
            </div>
            
            <div className="category-card">
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-md)' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: 'var(--primary-light)',
                  borderRadius: 'var(--border-radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  fontSize: '1.25rem'
                }}>
                  🛠️
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--spacing-sm)' }}>
                    <a href="/article/troubleshooting-common-issues" style={{ color: 'var(--text-primary)' }}>
                      Troubleshooting Common Issues
                    </a>
                  </h3>
                  <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-muted)', marginBottom: 'var(--spacing-sm)' }}>
                    Solutions to the most frequently encountered problems.
                  </p>
                  <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--text-muted)' }}>
                    12 min read • 92% helpful
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <a href="/articles" className="btn btn-outline">
              View All Articles
            </a>
          </div>
        </div>
      </section>
      
      {/* Quick Links Section */}
      <section className="kb-section--small" style={{ backgroundColor: 'var(--background-secondary)' }}>
        <div className="kb-container">
          <div className="text-center mb-xl">
            <h2 className="font-bold text-primary mb-md">Quick Actions</h2>
            <p className="text-secondary">Fast access to commonly needed resources</p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'var(--spacing-lg)',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <a href="/submit-ticket" className="btn btn-primary" style={{ 
              padding: 'var(--spacing-lg)',
              flexDirection: 'column',
              gap: 'var(--spacing-sm)',
              height: 'auto'
            }}>
              <span style={{ fontSize: '1.5rem' }}>🎫</span>
              <span>Submit a Ticket</span>
              <small style={{ opacity: 0.8, fontWeight: 'normal' }}>Get personalized help</small>
            </a>
            
            <a href="/status" className="btn btn-secondary" style={{ 
              padding: 'var(--spacing-lg)',
              flexDirection: 'column',
              gap: 'var(--spacing-sm)',
              height: 'auto'
            }}>
              <span style={{ fontSize: '1.5rem' }}>📊</span>
              <span>System Status</span>
              <small style={{ opacity: 0.8, fontWeight: 'normal' }}>Check service health</small>
            </a>
            
            <a href="/community" className="btn btn-secondary" style={{ 
              padding: 'var(--spacing-lg)',
              flexDirection: 'column',
              gap: 'var(--spacing-sm)',
              height: 'auto'
            }}>
              <span style={{ fontSize: '1.5rem' }}>💬</span>
              <span>Community Forum</span>
              <small style={{ opacity: 0.8, fontWeight: 'normal' }}>Connect with users</small>
            </a>
            
            <a href="/downloads" className="btn btn-secondary" style={{ 
              padding: 'var(--spacing-lg)',
              flexDirection: 'column',
              gap: 'var(--spacing-sm)',
              height: 'auto'
            }}>
              <span style={{ fontSize: '1.5rem' }}>⬇️</span>
              <span>Downloads</span>
              <small style={{ opacity: 0.8, fontWeight: 'normal' }}>Get tools & resources</small>
            </a>
          </div>
        </div>
      </section>
      
      {/* Contact Support Section */}
      <ContactUs />
    </Page>
  );
};

export default Homepage; 