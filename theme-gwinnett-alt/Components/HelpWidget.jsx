import React from 'react';

const HelpWidget = () => {
  return (
    <div className="help-widget">
      <div className="help-widget-icon">
        <span role="img" aria-label="Mail">✉️</span>
      </div>
      <h3 className="help-widget-title">Need more help?</h3>
      <p className="help-widget-description">
        Expertly trained agents answering questions and providing solutions to the most complex problems.
      </p>
    </div>
  );
};

export default HelpWidget; 