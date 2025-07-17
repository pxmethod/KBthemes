const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Known</h4>
            <ul className="footer-links">
              <li><a href="/articles">Articles</a></li>
              <li><a href="/support">Support</a></li>
              <li><a href="/search">Search</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Resources</h4>
            <ul className="footer-links">
              <li><a href="/articles">Article (Single)</a></li>
              <li><a href="/category">Category (Single)</a></li>
              <li><a href="/style-guide">Style Guide</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Help</h4>
            <ul className="footer-links">
              <li><a href="/components">Components</a></li>
              <li><a href="/instructions">Instructions</a></li>
              <li><a href="/licenses">Licenses</a></li>
              <li><a href="/changelog">Changelog</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; Known — 2024. Powered by Webflow.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 