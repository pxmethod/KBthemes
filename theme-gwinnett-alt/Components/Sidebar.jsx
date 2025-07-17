import React, { useState } from 'react';
import CategoryNavigation from './CategoryNavigation';
import HelpWidget from './HelpWidget';

const Sidebar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const navigationItems = [
    {
      id: 'getting-started',
      title: 'Getting started',
      icon: '🚀',
      isExpanded: true,
      subItems: [
        { title: 'Quick start guide', href: '/docs/quick-start' },
        { title: 'Installation', href: '/docs/installation' },
        { title: 'First steps', href: '/docs/first-steps' },
        { title: 'Basic concepts', href: '/docs/basics' }
      ]
    },
    {
      id: 'authentication',
      title: 'Authentication',
      icon: '🔐',
      isExpanded: false,
      subItems: [
        { title: 'API keys', href: '/docs/api-keys' },
        { title: 'OAuth 2.0', href: '/docs/oauth' },
        { title: 'JWT tokens', href: '/docs/jwt' },
        { title: 'Session management', href: '/docs/sessions' }
      ]
    },
    {
      id: 'limits-pricing',
      title: 'Limits & pricing',
      icon: '💰',
      isExpanded: false,
      subItems: [
        { title: 'Rate limits', href: '/docs/rate-limits' },
        { title: 'Pricing plans', href: '/docs/pricing' },
        { title: 'Usage tracking', href: '/docs/usage' },
        { title: 'Billing', href: '/docs/billing' }
      ]
    },
    {
      id: 'advanced-settings',
      title: 'Advanced settings',
      icon: '⚙️',
      isExpanded: false,
      subItems: [
        { title: 'Configuration', href: '/docs/config' },
        { title: 'Environment variables', href: '/docs/env-vars' },
        { title: 'Custom domains', href: '/docs/domains' },
        { title: 'SSL certificates', href: '/docs/ssl' }
      ]
    },
    {
      id: 'api-endpoints',
      title: 'API endpoints',
      icon: '🔌',
      isExpanded: false,
      subItems: [
        { title: 'REST API', href: '/docs/rest-api' },
        { title: 'GraphQL', href: '/docs/graphql' },
        { title: 'Webhooks', href: '/docs/webhooks' },
        { title: 'SDK reference', href: '/docs/sdk' }
      ]
    },
    {
      id: 'enterprise-features',
      title: 'Enterprise features',
      icon: '🏢',
      isExpanded: false,
      subItems: [
        { title: 'SSO integration', href: '/docs/sso' },
        { title: 'Role management', href: '/docs/roles' },
        { title: 'Audit logs', href: '/docs/audit' },
        { title: 'Compliance', href: '/docs/compliance' }
      ]
    }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Handle search functionality
      console.log('Searching:', searchQuery);
    }
  };

  return (
    <div className="documentation-sidebar">
      <div className="sidebar-content">
        {/* Search Section */}
        <div className="sidebar-search">
          <form onSubmit={handleSearch} className="sidebar-search-form">
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="sidebar-search-input"
              placeholder="Search for answers..."
              aria-label="Search documentation"
            />
            <button type="submit" className="sidebar-search-button">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path 
                  d="M21 21L16.514 16.506M19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>
        </div>

        {/* Category Navigation */}
        <CategoryNavigation items={navigationItems} />

        {/* Help Widget */}
        <HelpWidget />
      </div>
    </div>
  );
};

export default Sidebar; 