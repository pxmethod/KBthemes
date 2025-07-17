import React from 'react';

const ContactSupport = ({ 
  title = "Still need help?",
  subtitle = "Can't find what you're looking for? Our support team is here to help you get the answers you need.",
  contactOptions = []
}) => {
  const defaultContactOptions = [
    {
      id: 1,
      title: "Live Chat",
      description: "Get instant help from our support team. Available 24/7 to answer your questions.",
      icon: "💬",
      url: "/chat",
      action: "Start Chat"
    },
    {
      id: 2,
      title: "Email Support",
      description: "Send us a detailed message and we'll get back to you within 24 hours.",
      icon: "✉️",
      url: "/contact",
      action: "Send Email"
    },
    {
      id: 3,
      title: "FAQ",
      description: "Browse our frequently asked questions for quick answers to common issues.",
      icon: "❓",
      url: "/faq",
      action: "View FAQ"
    }
  ];

  const contactList = contactOptions.length > 0 ? contactOptions : defaultContactOptions;

  return (
    <section className="contact-support-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>
        
        <div className="contact-grid">
          {contactList.map((option) => (
            <div key={option.id} className="contact-card">
              <div className="contact-icon">
                <span role="img" aria-hidden="true">{option.icon}</span>
              </div>
              
              <h3 className="contact-title">{option.title}</h3>
              <p className="contact-description">{option.description}</p>
              
              <a 
                href={option.url} 
                className="btn btn-primary"
                aria-label={`${option.action} - ${option.title}`}
              >
                {option.action}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSupport; 