const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-container">
        <a href="/" className="nav-brand">Known</a>
        <ul className="nav-links">
          <li><a href="/articles" className="nav-link">Articles</a></li>
          <li><a href="/search" className="nav-link">Search</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav; 