import Nav from './Nav.jsx';
import Footer from './Footer.jsx';

const Page = ({ children, className = "" }) => {
  return (
    <div className={`page-wrapper ${className}`}>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Nav />
      <main id="main-content" className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Page; 