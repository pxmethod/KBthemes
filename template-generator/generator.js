#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

class ThemeGenerator {
  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    this.themeConfig = {};
  }

  async askQuestion(question) {
    return new Promise((resolve) => {
      this.rl.question(question, (answer) => {
        resolve(answer);
      });
    });
  }

  async collectThemeInfo() {
    console.log('🎨 Kustomer Theme Generator');
    console.log('=============================\n');

    this.themeConfig.name = await this.askQuestion('Theme name (e.g., "elegant-professional"): ');
    this.themeConfig.displayName = await this.askQuestion('Display name (e.g., "Elegant Professional"): ');
    this.themeConfig.description = await this.askQuestion('Theme description: ');
    this.themeConfig.author = await this.askQuestion('Author name: ');
    this.themeConfig.version = await this.askQuestion('Version (default: 1.0.0): ') || '1.0.0';
    
    console.log('\n🎨 Color Scheme Configuration');
    console.log('------------------------------');
    this.themeConfig.colors = {
      primary: await this.askQuestion('Primary color (hex, e.g., #1f4e79): ') || '#1f4e79',
      secondary: await this.askQuestion('Secondary color (hex, e.g., #3b82f6): ') || '#3b82f6',
      accent: await this.askQuestion('Accent color (hex, e.g., #10b981): ') || '#10b981',
      background: await this.askQuestion('Background color (hex, e.g., #ffffff): ') || '#ffffff',
      text: await this.askQuestion('Text color (hex, e.g., #1f2937): ') || '#1f2937',
      border: await this.askQuestion('Border color (hex, e.g., #e5e7eb): ') || '#e5e7eb'
    };

    console.log('\n🎭 Theme Style Configuration');
    console.log('------------------------------');
    const styleOptions = ['1. Professional Corporate', '2. Modern Minimalist', '3. Creative Vibrant', '4. Classic Traditional'];
    console.log(styleOptions.join('\n'));
    const styleChoice = await this.askQuestion('Select theme style (1-4): ') || '1';
    
    const styles = {
      '1': 'corporate',
      '2': 'minimalist', 
      '3': 'creative',
      '4': 'traditional'
    };
    
    this.themeConfig.style = styles[styleChoice] || 'corporate';

    console.log('\n📝 Configuration Summary');
    console.log('-------------------------');
    console.log(`Name: ${this.themeConfig.name}`);
    console.log(`Display Name: ${this.themeConfig.displayName}`);
    console.log(`Description: ${this.themeConfig.description}`);
    console.log(`Author: ${this.themeConfig.author}`);
    console.log(`Version: ${this.themeConfig.version}`);
    console.log(`Style: ${this.themeConfig.style}`);
    console.log(`Primary Color: ${this.themeConfig.colors.primary}`);
    
    const confirm = await this.askQuestion('\nGenerate theme with these settings? (y/n): ');
    if (confirm.toLowerCase() !== 'y') {
      console.log('Theme generation cancelled.');
      process.exit(0);
    }
  }

  createDirectoryStructure() {
    const themeDir = `theme-${this.themeConfig.name}`;
    
    // Create main theme directory
    if (!fs.existsSync(themeDir)) {
      fs.mkdirSync(themeDir);
    }

    // Create subdirectories
    const dirs = ['Advanced', 'Components', 'Globals', 'Pages'];
    dirs.forEach(dir => {
      const dirPath = path.join(themeDir, dir);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
      }
    });

    console.log(`✅ Created directory structure for ${themeDir}`);
    return themeDir;
  }

  generateManifest(themeDir) {
    const manifest = {
      name: this.themeConfig.name,
      displayName: this.themeConfig.displayName,
      description: this.themeConfig.description,
      author: this.themeConfig.author,
      version: this.themeConfig.version,
      style: this.themeConfig.style,
      generated: new Date().toISOString(),
      structure: {
        advanced: ["manifest.json"],
        components: [
          "Page.jsx", "Nav.jsx", "Announcement.jsx", "HeroImage.jsx",
          "CategoriesSection.jsx", "CategoryBlock.jsx", "FeaturedArticles.jsx",
          "ArticleItem.jsx", "ContactUs.jsx", "Footer.jsx",
          "ArticleBreadcrumbs.jsx", "ConversationBreadcrumbs.jsx"
        ],
        globals: [
          "styles.css", "portal.css", "form.css", "survey.css", 
          "recaptcha.css", "utils.js"
        ],
        pages: [
          "homepage.jsx", "article.jsx", "categories.jsx", "search.jsx",
          "contact.jsx", "login.jsx", "conversation.jsx", "conversations.jsx",
          "survey.jsx", "tag.jsx", "404.jsx", "401.jsx", "500.jsx"
        ]
      },
      colors: this.themeConfig.colors,
      features: [
        "Responsive Design",
        "Accessibility Compliant",
        "Modern React Components",
        "Customizable Color Scheme",
        "SEO Optimized",
        "Cross-browser Compatible"
      ]
    };

    const manifestPath = path.join(themeDir, 'Advanced', 'manifest.json');
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
    console.log('✅ Generated manifest.json');
  }

  generateGlobalStyles(themeDir) {
    const { colors } = this.themeConfig;
    const styles = `/* ${this.themeConfig.displayName} Theme - Generated by Kustomer Theme Generator */
/* Author: ${this.themeConfig.author} */
/* Version: ${this.themeConfig.version} */

:root {
  --primary-color: ${colors.primary};
  --secondary-color: ${colors.secondary};
  --accent-color: ${colors.accent};
  --background-color: ${colors.background};
  --text-color: ${colors.text};
  --border-color: ${colors.border};
  --shadow-color: rgba(0, 0, 0, 0.1);
  --success-color: #10b981;
  --warning-color: #f59e0b;
  --error-color: #ef4444;
  --info-color: #3b82f6;
}

/* Reset and Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
  line-height: 1.6;
  color: var(--text-color);
  background-color: var(--background-color);
}

/* Layout Components */
.kb-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.kb-section {
  padding: 2rem 0;
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 1rem;
  color: var(--text-color);
}

h1 { font-size: 2.5rem; }
h2 { font-size: 2rem; }
h3 { font-size: 1.5rem; }
h4 { font-size: 1.25rem; }
h5 { font-size: 1.125rem; }
h6 { font-size: 1rem; }

p {
  margin-bottom: 1rem;
  color: var(--text-color);
}

/* Buttons */
.kb-button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: var(--primary-color);
  color: white;
  text-decoration: none;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}

.kb-button:hover {
  background-color: var(--secondary-color);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px var(--shadow-color);
}

.kb-button-secondary {
  background-color: transparent;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
}

.kb-button-secondary:hover {
  background-color: var(--primary-color);
  color: white;
}

/* Navigation */
.kb-nav {
  background-color: var(--background-color);
  border-bottom: 1px solid var(--border-color);
  padding: 1rem 0;
}

.kb-nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.kb-nav-logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  text-decoration: none;
}

.kb-nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.kb-nav-link {
  color: var(--text-color);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.kb-nav-link:hover {
  color: var(--primary-color);
}

/* Hero Section */
.kb-hero {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  text-align: center;
  padding: 4rem 0;
}

.kb-hero h1 {
  color: white;
  margin-bottom: 1rem;
}

.kb-hero p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.9);
}

/* Search */
.kb-search {
  max-width: 600px;
  margin: 0 auto;
  position: relative;
}

.kb-search-input {
  width: 100%;
  padding: 1rem 1.5rem;
  font-size: 1.125rem;
  border: none;
  border-radius: 0.5rem;
  background-color: white;
  color: var(--text-color);
  box-shadow: 0 4px 12px var(--shadow-color);
}

.kb-search-button {
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  background-color: var(--accent-color);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
}

/* Categories */
.kb-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.kb-category {
  background-color: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px var(--shadow-color);
  text-align: center;
  transition: transform 0.3s ease;
  text-decoration: none;
  color: var(--text-color);
}

.kb-category:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px var(--shadow-color);
}

.kb-category-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 1rem;
  background-color: var(--primary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.kb-category-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.kb-category-description {
  color: var(--text-color);
  opacity: 0.7;
}

/* Articles */
.kb-articles {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.kb-article {
  background-color: white;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 2px 8px var(--shadow-color);
  transition: transform 0.3s ease;
  text-decoration: none;
  color: var(--text-color);
}

.kb-article:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px var(--shadow-color);
}

.kb-article-content {
  padding: 1.5rem;
}

.kb-article-title {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.kb-article-description {
  color: var(--text-color);
  opacity: 0.7;
  margin-bottom: 1rem;
}

.kb-article-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text-color);
  opacity: 0.6;
  font-size: 0.875rem;
}

/* Footer */
.kb-footer {
  background-color: var(--primary-color);
  color: white;
  text-align: center;
  padding: 2rem 0;
  margin-top: 4rem;
}

.kb-footer p {
  color: rgba(255, 255, 255, 0.9);
}

/* Breadcrumbs */
.kb-breadcrumbs {
  padding: 1rem 0;
  border-bottom: 1px solid var(--border-color);
}

.kb-breadcrumb-list {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  list-style: none;
}

.kb-breadcrumb-item {
  color: var(--text-color);
  opacity: 0.7;
}

.kb-breadcrumb-link {
  color: var(--primary-color);
  text-decoration: none;
}

.kb-breadcrumb-link:hover {
  text-decoration: underline;
}

/* Responsive Design */
@media (max-width: 768px) {
  .kb-container {
    padding: 0 1rem;
  }
  
  .kb-nav-container {
    flex-direction: column;
    gap: 1rem;
  }
  
  .kb-nav-links {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
  
  .kb-hero {
    padding: 2rem 0;
  }
  
  .kb-hero h1 {
    font-size: 2rem;
  }
  
  .kb-categories {
    grid-template-columns: 1fr;
  }
  
  .kb-articles {
    grid-template-columns: 1fr;
  }
}

/* Accessibility */
.kb-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Focus states */
.kb-button:focus,
.kb-search-input:focus,
.kb-nav-link:focus {
  outline: 2px solid var(--accent-color);
  outline-offset: 2px;
}`;

    const stylesPath = path.join(themeDir, 'Globals', 'styles.css');
    fs.writeFileSync(stylesPath, styles);
    console.log('✅ Generated styles.css');
  }

  generateComponents(themeDir) {
    const components = this.getComponentTemplates();
    
    Object.keys(components).forEach(componentName => {
      const componentPath = path.join(themeDir, 'Components', componentName);
      fs.writeFileSync(componentPath, components[componentName]);
    });
    
    console.log('✅ Generated React components');
  }

  getComponentTemplates() {
    const { colors, name, displayName } = this.themeConfig;
    
    return {
      'Page.jsx': `import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

const Page = ({ children, title, showBreadcrumbs = false, breadcrumbs = [] }) => {
  return (
    <div className="kb-page">
      <Nav />
      {showBreadcrumbs && (
        <div className="kb-breadcrumbs">
          <div className="kb-container">
            <ul className="kb-breadcrumb-list">
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className="kb-breadcrumb-item">
                  {index < breadcrumbs.length - 1 ? (
                    <a href={crumb.href} className="kb-breadcrumb-link">
                      {crumb.text}
                    </a>
                  ) : (
                    <span>{crumb.text}</span>
                  )}
                  {index < breadcrumbs.length - 1 && <span> / </span>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <main className="kb-main">
        {title && (
          <div className="kb-page-header">
            <div className="kb-container">
              <h1>{title}</h1>
            </div>
          </div>
        )}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Page;`,

      'Nav.jsx': `import React, { useState } from 'react';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="kb-nav">
      <div className="kb-container">
        <div className="kb-nav-container">
          <a href="/" className="kb-nav-logo">
            ${displayName}
          </a>
          <button 
            className="kb-nav-toggle"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            ☰
          </button>
          <ul className={\`kb-nav-links $\{isMenuOpen ? 'active' : ''}\`}>
            <li><a href="/" className="kb-nav-link">Home</a></li>
            <li><a href="/categories" className="kb-nav-link">Categories</a></li>
            <li><a href="/search" className="kb-nav-link">Search</a></li>
            <li><a href="/contact" className="kb-nav-link">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;`,

      'HeroImage.jsx': `import React, { useState } from 'react';

const HeroImage = ({ title, subtitle, showSearch = true }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = \`/search?q=$\{encodeURIComponent(searchQuery)}\`;
    }
  };

  return (
    <section className="kb-hero">
      <div className="kb-container">
        <h1>{title || 'Welcome to ${displayName}'}</h1>
        <p>{subtitle || 'Find answers to your questions quickly and easily'}</p>
        {showSearch && (
          <form onSubmit={handleSearch} className="kb-search">
            <input
              type="text"
              className="kb-search-input"
              placeholder="Search for articles, topics, or questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search knowledge base"
            />
            <button 
              type="submit" 
              className="kb-search-button"
              aria-label="Search"
            >
              Search
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default HeroImage;`,

      'Footer.jsx': `import React from 'react';

const Footer = () => {
  return (
    <footer className="kb-footer">
      <div className="kb-container">
        <p>&copy; {new Date().getFullYear()} ${displayName}. All rights reserved.</p>
        <p>Powered by Kustomer Knowledge Base</p>
      </div>
    </footer>
  );
};

export default Footer;`
    };
  }

  async generate() {
    try {
      await this.collectThemeInfo();
      
      console.log('\n🏗️  Generating theme structure...');
      const themeDir = this.createDirectoryStructure();
      
      console.log('📋 Generating configuration files...');
      this.generateManifest(themeDir);
      
      console.log('🎨 Generating styles...');
      this.generateGlobalStyles(themeDir);
      
      console.log('⚛️  Generating React components...');
      this.generateComponents(themeDir);
      
      console.log(`\n✅ Theme generation complete!
      
Theme directory: ${themeDir}
Next steps:
1. Review the generated files
2. Customize the styles and components as needed
3. Add your own content and data
4. Test the theme in your Kustomer instance

Happy theming! 🎉`);
      
    } catch (error) {
      console.error('Error generating theme:', error);
    } finally {
      this.rl.close();
    }
  }
}

// Run the generator
if (require.main === module) {
  const generator = new ThemeGenerator();
  generator.generate();
}

module.exports = ThemeGenerator; 