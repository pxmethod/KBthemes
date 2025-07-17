import React from 'react';

const PopularTopics = ({ 
  title = "Popular topics",
  subtitle = "Quick answers to the most commonly asked questions.",
  topics = []
}) => {
  const defaultTopics = [
    {
      id: 1,
      title: "How do I create an account?",
      description: "Learn how to sign up and get started with your new account in just a few simple steps.",
      url: "/article/create-account"
    },
    {
      id: 2,
      title: "How to reset my password?",
      description: "Step-by-step guide to reset your password and regain access to your account securely.",
      url: "/article/reset-password"
    },
    {
      id: 3,
      title: "How do I update my billing information?",
      description: "Manage your payment methods, update billing details, and view your subscription status.",
      url: "/article/update-billing"
    },
    {
      id: 4,
      title: "How to invite team members?",
      description: "Add colleagues to your workspace and manage team permissions and access levels.",
      url: "/article/invite-team-members"
    },
    {
      id: 5,
      title: "How to integrate with third-party apps?",
      description: "Connect your favorite tools and services to streamline your workflow and productivity.",
      url: "/article/third-party-integrations"
    },
    {
      id: 6,
      title: "How to export my data?",
      description: "Download and backup your data in various formats to keep your information safe.",
      url: "/article/export-data"
    },
    {
      id: 7,
      title: "How do I cancel my subscription?",
      description: "Learn about the cancellation process, what happens to your data, and available alternatives.",
      url: "/article/cancel-subscription"
    },
    {
      id: 8,
      title: "How to enable two-factor authentication?",
      description: "Secure your account with an extra layer of protection using two-factor authentication.",
      url: "/article/two-factor-authentication"
    }
  ];

  const topicList = topics.length > 0 ? topics : defaultTopics;

  return (
    <section className="popular-topics-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>
        
        <div className="topics-grid">
          {topicList.map((topic) => (
            <a 
              key={topic.id} 
              href={topic.url} 
              className="topic-item"
              aria-label={`Read article: ${topic.title}`}
            >
              <h3 className="topic-title">{topic.title}</h3>
              <p className="topic-description">{topic.description}</p>
            </a>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: 'var(--spacing-3xl)' }}>
          <a href="/articles" className="btn btn-secondary btn-large">
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default PopularTopics; 