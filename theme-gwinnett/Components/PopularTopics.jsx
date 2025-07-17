import React from 'react';

const PopularTopics = ({ topics = [] }) => {
  const defaultTopics = [
    {
      title: 'How do I create an account?',
      description: 'Learn how to sign up and get started with your new account in just a few simple steps.',
      href: '/article/create-account'
    },
    {
      title: 'How to reset my password?',
      description: 'Step-by-step guide to reset your password and regain access to your account securely.',
      href: '/article/reset-password'
    },
    {
      title: 'How do I update my billing information?',
      description: 'Manage your payment methods, update billing details, and view your subscription status.',
      href: '/article/update-billing'
    },
    {
      title: 'How to invite team members?',
      description: 'Add colleagues to your workspace and manage team permissions and access levels.',
      href: '/article/invite-team-members'
    },
    {
      title: 'How to integrate with third-party apps?',
      description: 'Connect your favorite tools and services to streamline your workflow and productivity.',
      href: '/article/third-party-integrations'
    },
    {
      title: 'How to export my data?',
      description: 'Download and backup your data in various formats to keep your information safe.',
      href: '/article/export-data'
    },
    {
      title: 'How do I cancel my subscription?',
      description: 'Learn about the cancellation process, what happens to your data, and available alternatives.',
      href: '/article/cancel-subscription'
    },
    {
      title: 'How to enable two-factor authentication?',
      description: 'Secure your account with an extra layer of protection using two-factor authentication.',
      href: '/article/two-factor-authentication'
    }
  ];

  const topicsToShow = topics.length > 0 ? topics : defaultTopics;

  return (
    <section className="popular-topics-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Popular Topics</h2>
          <p className="section-subtitle">
            Get quick answers to the most frequently asked questions from our community.
          </p>
        </div>
        
        <div className="topics-grid">
          {topicsToShow.map((topic, index) => (
            <a href={topic.href} key={index} className="topic-item">
              <h3 className="topic-title">{topic.title}</h3>
              <p className="topic-description">{topic.description}</p>
            </a>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: 'var(--spacing-3xl)' }}>
          <a href="/articles" className="btn btn-secondary btn-large">View All Articles</a>
        </div>
      </div>
    </section>
  );
};

export default PopularTopics; 