import React from 'react';

const ContactUs = ({
  title = "Still need help?",
  subtitle = "Our support team is here to assist you",
  supportOptions = [
    {
      type: "email",
      title: "Email Support",
      description: "Get detailed help via email within 24 hours",
      action: "Send Email",
      url: "mailto:support@company.com",
      icon: "📧",
      availability: "Response within 24 hours"
    },
    {
      type: "chat",
      title: "Live Chat",
      description: "Chat with our support team in real-time",
      action: "Start Chat",
      url: "/chat",
      icon: "💬",
      availability: "Available 9 AM - 6 PM PST"
    },
    {
      type: "phone",
      title: "Phone Support",
      description: "Speak directly with a support representative",
      action: "Call Now",
      url: "tel:+1-800-123-4567",
      icon: "📞",
      availability: "Mon-Fri 9 AM - 6 PM PST"
    }
  ]
}) => {
  return (
    <section className="kb-section" style={{ backgroundColor: 'var(--background-secondary)' }}>
      <div className="kb-container">
        <div className="text-center mb-xl">
          <h2 className="font-bold text-primary mb-md">{title}</h2>
          <p className="text-secondary">{subtitle}</p>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'var(--spacing-xl)',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          {supportOptions.map((option, index) => (
            <div key={index} className="category-card" style={{ textAlign: 'center' }}>
              <div className="category-icon" style={{ margin: '0 auto var(--spacing-lg)' }}>
                {option.icon}
              </div>
              
              <h3 className="category-title">{option.title}</h3>
              
              <p className="category-description" style={{ marginBottom: 'var(--spacing-lg)' }}>
                {option.description}
              </p>
              
              <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                <small style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                  {option.availability}
                </small>
              </div>
              
              <a
                href={option.url}
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                {option.action}
              </a>
            </div>
          ))}
        </div>
        
        <div style={{
          textAlign: 'center',
          marginTop: 'var(--spacing-3xl)',
          padding: 'var(--spacing-xl)',
          backgroundColor: 'var(--background-primary)',
          borderRadius: 'var(--border-radius-lg)',
          border: '1px solid var(--border-color)'
        }}>
          <h3 style={{ marginBottom: 'var(--spacing-md)', color: 'var(--text-primary)' }}>
            Enterprise Support
          </h3>
          <p style={{ marginBottom: 'var(--spacing-lg)', color: 'var(--text-secondary)' }}>
            Need dedicated support for your organization? Contact our enterprise team for custom solutions.
          </p>
          <a href="/enterprise-contact" className="btn btn-outline">
            Contact Enterprise Sales
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactUs; 