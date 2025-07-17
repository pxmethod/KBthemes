#!/usr/bin/env python3

import os
import json
import sys
from datetime import datetime

class ThemeGenerator:
    def __init__(self):
        self.theme_config = {}
    
    def collect_theme_info(self):
        print("🎨 Kustomer Theme Generator")
        print("=============================\n")
        
        self.theme_config['name'] = input('Theme name (e.g., "elegant-professional"): ')
        self.theme_config['displayName'] = input('Display name (e.g., "Elegant Professional"): ')
        self.theme_config['description'] = input('Theme description: ')
        self.theme_config['author'] = input('Author name: ')
        self.theme_config['version'] = input('Version (default: 1.0.0): ') or '1.0.0'
        
        print('\n🎨 Color Scheme Configuration')
        print('------------------------------')
        self.theme_config['colors'] = {
            'primary': input('Primary color (hex, e.g., #1f4e79): ') or '#1f4e79',
            'secondary': input('Secondary color (hex, e.g., #3b82f6): ') or '#3b82f6',
            'accent': input('Accent color (hex, e.g., #10b981): ') or '#10b981',
            'background': input('Background color (hex, e.g., #ffffff): ') or '#ffffff',
            'text': input('Text color (hex, e.g., #1f2937): ') or '#1f2937',
            'border': input('Border color (hex, e.g., #e5e7eb): ') or '#e5e7eb'
        }
        
        print('\n🎭 Theme Style Configuration')
        print('------------------------------')
        style_options = ['1. Professional Corporate', '2. Modern Minimalist', '3. Creative Vibrant', '4. Classic Traditional']
        for option in style_options:
            print(option)
        
        style_choice = input('Select theme style (1-4): ') or '1'
        styles = {
            '1': 'corporate',
            '2': 'minimalist',
            '3': 'creative',
            '4': 'traditional'
        }
        self.theme_config['style'] = styles.get(style_choice, 'corporate')
        
        print('\n📝 Configuration Summary')
        print('-------------------------')
        print(f"Name: {self.theme_config['name']}")
        print(f"Display Name: {self.theme_config['displayName']}")
        print(f"Description: {self.theme_config['description']}")
        print(f"Author: {self.theme_config['author']}")
        print(f"Version: {self.theme_config['version']}")
        print(f"Style: {self.theme_config['style']}")
        print(f"Primary Color: {self.theme_config['colors']['primary']}")
        
        confirm = input('\nGenerate theme with these settings? (y/n): ')
        if confirm.lower() != 'y':
            print('Theme generation cancelled.')
            sys.exit(0)
    
    def create_directory_structure(self):
        theme_dir = f"theme-{self.theme_config['name']}"
        
        # Create main theme directory
        if not os.path.exists(theme_dir):
            os.makedirs(theme_dir)
        
        # Create subdirectories
        dirs = ['Advanced', 'Components', 'Globals', 'Pages']
        for dir_name in dirs:
            dir_path = os.path.join(theme_dir, dir_name)
            if not os.path.exists(dir_path):
                os.makedirs(dir_path)
        
        print(f"✅ Created directory structure for {theme_dir}")
        return theme_dir
    
    def generate_manifest(self, theme_dir):
        manifest = {
            "name": self.theme_config['name'],
            "displayName": self.theme_config['displayName'],
            "description": self.theme_config['description'],
            "author": self.theme_config['author'],
            "version": self.theme_config['version'],
            "style": self.theme_config['style'],
            "generated": datetime.now().isoformat(),
            "structure": {
                "advanced": ["manifest.json"],
                "components": [
                    "Page.jsx", "Nav.jsx", "Announcement.jsx", "HeroImage.jsx",
                    "CategoriesSection.jsx", "CategoryBlock.jsx", "FeaturedArticles.jsx",
                    "ArticleItem.jsx", "ContactUs.jsx", "Footer.jsx",
                    "ArticleBreadcrumbs.jsx", "ConversationBreadcrumbs.jsx"
                ],
                "globals": [
                    "styles.css", "portal.css", "form.css", "survey.css", 
                    "recaptcha.css", "utils.js"
                ],
                "pages": [
                    "homepage.jsx", "article.jsx", "categories.jsx", "search.jsx",
                    "contact.jsx", "login.jsx", "conversation.jsx", "conversations.jsx",
                    "survey.jsx", "tag.jsx", "404.jsx", "401.jsx", "500.jsx"
                ]
            },
            "colors": self.theme_config['colors'],
            "features": [
                "Responsive Design",
                "Accessibility Compliant",
                "Modern React Components",
                "Customizable Color Scheme",
                "SEO Optimized",
                "Cross-browser Compatible"
            ]
        }
        
        manifest_path = os.path.join(theme_dir, 'Advanced', 'manifest.json')
        with open(manifest_path, 'w') as f:
            json.dump(manifest, f, indent=2)
        print('✅ Generated manifest.json')
    
    def generate_global_styles(self, theme_dir):
        colors = self.theme_config['colors']
        styles = f"""/* {self.theme_config['displayName']} Theme - Generated by Kustomer Theme Generator */
/* Author: {self.theme_config['author']} */
/* Version: {self.theme_config['version']} */

:root {{
  --primary-color: {colors['primary']};
  --secondary-color: {colors['secondary']};
  --accent-color: {colors['accent']};
  --background-color: {colors['background']};
  --text-color: {colors['text']};
  --border-color: {colors['border']};
  --shadow-color: rgba(0, 0, 0, 0.1);
  --success-color: #10b981;
  --warning-color: #f59e0b;
  --error-color: #ef4444;
  --info-color: #3b82f6;
}}

/* Reset and Base Styles */
* {{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}}

body {{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
  line-height: 1.6;
  color: var(--text-color);
  background-color: var(--background-color);
}}

/* Layout Components */
.kb-container {{
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}}

.kb-section {{
  padding: 2rem 0;
}}

/* Typography */
h1, h2, h3, h4, h5, h6 {{
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 1rem;
  color: var(--text-color);
}}

h1 {{ font-size: 2.5rem; }}
h2 {{ font-size: 2rem; }}
h3 {{ font-size: 1.5rem; }}
h4 {{ font-size: 1.25rem; }}
h5 {{ font-size: 1.125rem; }}
h6 {{ font-size: 1rem; }}

p {{
  margin-bottom: 1rem;
  color: var(--text-color);
}}

/* Buttons */
.kb-button {{
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
}}

.kb-button:hover {{
  background-color: var(--secondary-color);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px var(--shadow-color);
}}

.kb-button-secondary {{
  background-color: transparent;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
}}

.kb-button-secondary:hover {{
  background-color: var(--primary-color);
  color: white;
}}

/* Navigation */
.kb-nav {{
  background-color: var(--background-color);
  border-bottom: 1px solid var(--border-color);
  padding: 1rem 0;
}}

.kb-nav-container {{
  display: flex;
  justify-content: space-between;
  align-items: center;
}}

.kb-nav-logo {{
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  text-decoration: none;
}}

.kb-nav-links {{
  display: flex;
  gap: 2rem;
  list-style: none;
}}

.kb-nav-link {{
  color: var(--text-color);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}}

.kb-nav-link:hover {{
  color: var(--primary-color);
}}

/* Hero Section */
.kb-hero {{
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  text-align: center;
  padding: 4rem 0;
}}

.kb-hero h1 {{
  color: white;
  margin-bottom: 1rem;
}}

.kb-hero p {{
  font-size: 1.25rem;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.9);
}}

/* Search */
.kb-search {{
  max-width: 600px;
  margin: 0 auto;
  position: relative;
}}

.kb-search-input {{
  width: 100%;
  padding: 1rem 1.5rem;
  font-size: 1.125rem;
  border: none;
  border-radius: 0.5rem;
  background-color: white;
  color: var(--text-color);
  box-shadow: 0 4px 12px var(--shadow-color);
}}

.kb-search-button {{
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
}}

/* Categories */
.kb-categories {{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}}

.kb-category {{
  background-color: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px var(--shadow-color);
  text-align: center;
  transition: transform 0.3s ease;
  text-decoration: none;
  color: var(--text-color);
}}

.kb-category:hover {{
  transform: translateY(-4px);
  box-shadow: 0 8px 24px var(--shadow-color);
}}

.kb-category-icon {{
  width: 60px;
  height: 60px;
  margin: 0 auto 1rem;
  background-color: var(--primary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}}

.kb-category-title {{
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}}

.kb-category-description {{
  color: var(--text-color);
  opacity: 0.7;
}}

/* Articles */
.kb-articles {{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}}

.kb-article {{
  background-color: white;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 2px 8px var(--shadow-color);
  transition: transform 0.3s ease;
  text-decoration: none;
  color: var(--text-color);
}}

.kb-article:hover {{
  transform: translateY(-2px);
  box-shadow: 0 8px 24px var(--shadow-color);
}}

.kb-article-content {{
  padding: 1.5rem;
}}

.kb-article-title {{
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}}

.kb-article-description {{
  color: var(--text-color);
  opacity: 0.7;
  margin-bottom: 1rem;
}}

.kb-article-meta {{
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text-color);
  opacity: 0.6;
  font-size: 0.875rem;
}}

/* Footer */
.kb-footer {{
  background-color: var(--primary-color);
  color: white;
  text-align: center;
  padding: 2rem 0;
  margin-top: 4rem;
}}

.kb-footer p {{
  color: rgba(255, 255, 255, 0.9);
}}

/* Breadcrumbs */
.kb-breadcrumbs {{
  padding: 1rem 0;
  border-bottom: 1px solid var(--border-color);
}}

.kb-breadcrumb-list {{
  display: flex;
  align-items: center;
  gap: 0.5rem;
  list-style: none;
}}

.kb-breadcrumb-item {{
  color: var(--text-color);
  opacity: 0.7;
}}

.kb-breadcrumb-link {{
  color: var(--primary-color);
  text-decoration: none;
}}

.kb-breadcrumb-link:hover {{
  text-decoration: underline;
}}

/* Responsive Design */
@media (max-width: 768px) {{
  .kb-container {{
    padding: 0 1rem;
  }}
  
  .kb-nav-container {{
    flex-direction: column;
    gap: 1rem;
  }}
  
  .kb-nav-links {{
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }}
  
  .kb-hero {{
    padding: 2rem 0;
  }}
  
  .kb-hero h1 {{
    font-size: 2rem;
  }}
  
  .kb-categories {{
    grid-template-columns: 1fr;
  }}
  
  .kb-articles {{
    grid-template-columns: 1fr;
  }}
}}

/* Accessibility */
.kb-sr-only {{
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}}

/* Focus states */
.kb-button:focus,
.kb-search-input:focus,
.kb-nav-link:focus {{
  outline: 2px solid var(--accent-color);
  outline-offset: 2px;
}}"""
        
        styles_path = os.path.join(theme_dir, 'Globals', 'styles.css')
        with open(styles_path, 'w') as f:
            f.write(styles)
        print('✅ Generated styles.css')
    
    def generate_components(self, theme_dir):
        components = self.get_component_templates()
        
        for component_name, component_code in components.items():
            component_path = os.path.join(theme_dir, 'Components', component_name)
            with open(component_path, 'w') as f:
                f.write(component_code)
        
        print('✅ Generated React components')
    
    def get_component_templates(self):
        display_name = self.theme_config['displayName']
        
        return {
            'Page.jsx': f"""import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

const Page = ({{ children, title, showBreadcrumbs = false, breadcrumbs = [] }}) => {{
  return (
    <div className="kb-page">
      <Nav />
      {{showBreadcrumbs && (
        <div className="kb-breadcrumbs">
          <div className="kb-container">
            <ul className="kb-breadcrumb-list">
              {{breadcrumbs.map((crumb, index) => (
                <li key={{index}} className="kb-breadcrumb-item">
                  {{index < breadcrumbs.length - 1 ? (
                    <a href={{crumb.href}} className="kb-breadcrumb-link">
                      {{crumb.text}}
                    </a>
                  ) : (
                    <span>{{crumb.text}}</span>
                  )}}
                  {{index < breadcrumbs.length - 1 && <span> / </span>}}
                </li>
              ))}}
            </ul>
          </div>
        </div>
      )}}
      <main className="kb-main">
        {{title && (
          <div className="kb-page-header">
            <div className="kb-container">
              <h1>{{title}}</h1>
            </div>
          </div>
        )}}
        {{children}}
      </main>
      <Footer />
    </div>
  );
}};

export default Page;""",
            
            'Nav.jsx': f"""import React, {{ useState }} from 'react';

const Nav = () => {{
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {{
    setIsMenuOpen(!isMenuOpen);
  }};

  return (
    <nav className="kb-nav">
      <div className="kb-container">
        <div className="kb-nav-container">
          <a href="/" className="kb-nav-logo">
            {display_name}
          </a>
          <button 
            className="kb-nav-toggle"
            onClick={{toggleMenu}}
            aria-label="Toggle navigation menu"
          >
            ☰
          </button>
          <ul className={{`kb-nav-links ${{isMenuOpen ? 'active' : ''}}`}}>
            <li><a href="/" className="kb-nav-link">Home</a></li>
            <li><a href="/categories" className="kb-nav-link">Categories</a></li>
            <li><a href="/search" className="kb-nav-link">Search</a></li>
            <li><a href="/contact" className="kb-nav-link">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}};

export default Nav;""",
            
            'HeroImage.jsx': f"""import React, {{ useState }} from 'react';

const HeroImage = ({{ title, subtitle, showSearch = true }}) => {{
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {{
    e.preventDefault();
    if (searchQuery.trim()) {{
      window.location.href = `/search?q=${{encodeURIComponent(searchQuery)}}`;
    }}
  }};

  return (
    <section className="kb-hero">
      <div className="kb-container">
        <h1>{{title || 'Welcome to {display_name}'}}</h1>
        <p>{{subtitle || 'Find answers to your questions quickly and easily'}}</p>
        {{showSearch && (
          <form onSubmit={{handleSearch}} className="kb-search">
            <input
              type="text"
              className="kb-search-input"
              placeholder="Search for articles, topics, or questions..."
              value={{searchQuery}}
              onChange={{(e) => setSearchQuery(e.target.value)}}
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
        )}}
      </div>
    </section>
  );
}};

export default HeroImage;""",
            
            'Footer.jsx': f"""import React from 'react';

const Footer = () => {{
  return (
    <footer className="kb-footer">
      <div className="kb-container">
        <p>&copy; {{new Date().getFullYear()}} {display_name}. All rights reserved.</p>
        <p>Powered by Kustomer Knowledge Base</p>
      </div>
    </footer>
  );
}};

export default Footer;""",
            
            'CategoriesSection.jsx': f"""import React from 'react';
import CategoryBlock from './CategoryBlock';

const CategoriesSection = ({{ categories = [] }}) => {{
  if (!categories.length) return null;

  return (
    <section className="kb-section">
      <div className="kb-container">
        <h2>Browse Categories</h2>
        <div className="kb-categories">
          {{categories.map((category, index) => (
            <CategoryBlock 
              key={{index}} 
              category={{category}} 
            />
          ))}}
        </div>
      </div>
    </section>
  );
}};

export default CategoriesSection;""",
            
            'CategoryBlock.jsx': f"""import React from 'react';

const CategoryBlock = ({{ category }}) => {{
  return (
    <a href={{category.href}} className="kb-category">
      <div className="kb-category-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
          <rect x="3" y="3" width="18" height="18" rx="2" />
        </svg>
      </div>
      <h3 className="kb-category-title">{{category.title}}</h3>
      <p className="kb-category-description">{{category.description}}</p>
    </a>
  );
}};

export default CategoryBlock;""",
            
            'FeaturedArticles.jsx': f"""import React from 'react';
import ArticleItem from './ArticleItem';

const FeaturedArticles = ({{ articles = [] }}) => {{
  if (!articles.length) return null;

  return (
    <section className="kb-section">
      <div className="kb-container">
        <h2>Featured Articles</h2>
        <div className="kb-articles">
          {{articles.map((article, index) => (
            <ArticleItem 
              key={{index}} 
              article={{article}} 
            />
          ))}}
        </div>
      </div>
    </section>
  );
}};

export default FeaturedArticles;""",
            
            'ArticleItem.jsx': f"""import React from 'react';

const ArticleItem = ({{ article }}) => {{
  return (
    <a href={{article.href}} className="kb-article">
      <div className="kb-article-content">
        <h3 className="kb-article-title">{{article.title}}</h3>
        <p className="kb-article-description">{{article.description}}</p>
        <div className="kb-article-meta">
          <span>{{article.category}}</span>
          <span>{{article.readTime}} min read</span>
        </div>
      </div>
    </a>
  );
}};

export default ArticleItem;""",
            
            'ContactUs.jsx': f"""import React from 'react';

const ContactUs = () => {{
  return (
    <section className="kb-section">
      <div className="kb-container">
        <div style={{{{ textAlign: 'center', padding: '2rem' }}}}>
          <h2>Need More Help?</h2>
          <p>Can't find what you're looking for? Get in touch with our support team.</p>
          <a href="/contact" className="kb-button">Contact Support</a>
        </div>
      </div>
    </section>
  );
}};

export default ContactUs;""",
            
            'Announcement.jsx': f"""import React, {{ useState }} from 'react';

const Announcement = ({{ message, type = 'info' }}) => {{
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible || !message) return null;

  return (
    <div className="kb-announcement">
      <div className="kb-container">
        <div className={{`kb-announcement-content kb-announcement-${{type}}`}}>
          <span>{{message}}</span>
          <button 
            className="kb-announcement-close"
            onClick={{() => setIsVisible(false)}}
            aria-label="Close announcement"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
}};

export default Announcement;""",
            
            'ArticleBreadcrumbs.jsx': f"""import React from 'react';

const ArticleBreadcrumbs = ({{ category, article }}) => {{
  const breadcrumbs = [
    {{ text: 'Home', href: '/' }},
    {{ text: 'Categories', href: '/categories' }}
  ];

  if (category) {{
    breadcrumbs.push({{ text: category.title, href: category.href }});
  }}

  if (article) {{
    breadcrumbs.push({{ text: article.title, href: article.href }});
  }}

  return (
    <nav className="kb-breadcrumbs">
      <div className="kb-container">
        <ul className="kb-breadcrumb-list">
          {{breadcrumbs.map((crumb, index) => (
            <li key={{index}} className="kb-breadcrumb-item">
              {{index < breadcrumbs.length - 1 ? (
                <a href={{crumb.href}} className="kb-breadcrumb-link">
                  {{crumb.text}}
                </a>
              ) : (
                <span>{{crumb.text}}</span>
              )}}
              {{index < breadcrumbs.length - 1 && <span> / </span>}}
            </li>
          ))}}
        </ul>
      </div>
    </nav>
  );
}};

export default ArticleBreadcrumbs;""",
            
            'ConversationBreadcrumbs.jsx': f"""import React from 'react';

const ConversationBreadcrumbs = ({{ conversation }}) => {{
  const breadcrumbs = [
    {{ text: 'Home', href: '/' }},
    {{ text: 'Conversations', href: '/conversations' }}
  ];

  if (conversation) {{
    breadcrumbs.push({{ text: conversation.title, href: conversation.href }});
  }}

  return (
    <nav className="kb-breadcrumbs">
      <div className="kb-container">
        <ul className="kb-breadcrumb-list">
          {{breadcrumbs.map((crumb, index) => (
            <li key={{index}} className="kb-breadcrumb-item">
              {{index < breadcrumbs.length - 1 ? (
                <a href={{crumb.href}} className="kb-breadcrumb-link">
                  {{crumb.text}}
                </a>
              ) : (
                <span>{{crumb.text}}</span>
              )}}
              {{index < breadcrumbs.length - 1 && <span> / </span>}}
            </li>
          ))}}
        </ul>
      </div>
    </nav>
  );
}};

export default ConversationBreadcrumbs;"""
        }
    
    def generate_global_files(self, theme_dir):
        """Generate additional global files"""
        # Generate portal.css
        portal_css = f"""/* Portal styles for {self.theme_config['displayName']} */
.kb-portal {{
  background-color: var(--background-color);
  color: var(--text-color);
}}

.kb-portal-header {{
  background-color: var(--primary-color);
  color: white;
  padding: 1rem 0;
}}

.kb-portal-content {{
  padding: 2rem 0;
}}"""
        
        # Generate form.css
        form_css = f"""/* Form styles for {self.theme_config['displayName']} */
.kb-form {{
  max-width: 600px;
  margin: 0 auto;
}}

.kb-form-group {{
  margin-bottom: 1rem;
}}

.kb-form-label {{
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--text-color);
}}

.kb-form-input {{
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: 0.25rem;
  font-size: 1rem;
  color: var(--text-color);
  background-color: var(--background-color);
}}

.kb-form-input:focus {{
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
}}"""
        
        # Generate utils.js
        utils_js = f"""/* Utility functions for {self.theme_config['displayName']} */
// Theme configuration
const themeConfig = {json.dumps(self.theme_config, indent=2)};

// Utility functions
function debounce(func, wait) {{
  let timeout;
  return function executedFunction(...args) {{
    const later = () => {{
      clearTimeout(timeout);
      func(...args);
    }};
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }};
}}

function throttle(func, limit) {{
  let inThrottle;
  return function() {{
    const args = arguments;
    const context = this;
    if (!inThrottle) {{
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }}
  }};
}}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {{
  module.exports = {{ themeConfig, debounce, throttle }};
}}"""
        
        # Write files
        files = {
            'portal.css': portal_css,
            'form.css': form_css,
            'survey.css': f"/* Survey styles for {self.theme_config['displayName']} */\n.kb-survey {{ padding: 2rem 0; }}",
            'recaptcha.css': f"/* reCAPTCHA styles for {self.theme_config['displayName']} */\n.kb-recaptcha {{ margin: 1rem 0; }}",
            'utils.js': utils_js
        }
        
        for filename, content in files.items():
            file_path = os.path.join(theme_dir, 'Globals', filename)
            with open(file_path, 'w') as f:
                f.write(content)
        
        print('✅ Generated global files')
    
    def generate_pages(self, theme_dir):
        """Generate page templates"""
        display_name = self.theme_config['displayName']
        
        homepage_jsx = f"""import React from 'react';
import Page from '../Components/Page';
import HeroImage from '../Components/HeroImage';
import CategoriesSection from '../Components/CategoriesSection';
import FeaturedArticles from '../Components/FeaturedArticles';
import ContactUs from '../Components/ContactUs';

const Homepage = () => {{
  // Sample data - replace with actual data from your API
  const categories = [
    {{
      title: 'Getting Started',
      description: 'Learn the basics and get up to speed quickly',
      href: '/categories/getting-started'
    }},
    {{
      title: 'Account Management',
      description: 'Manage your account settings and preferences',
      href: '/categories/account-management'
    }},
    {{
      title: 'Troubleshooting',
      description: 'Find solutions to common problems',
      href: '/categories/troubleshooting'
    }}
  ];

  const articles = [
    {{
      title: 'How to Get Started',
      description: 'A comprehensive guide to getting started with our platform',
      category: 'Getting Started',
      readTime: '5',
      href: '/articles/how-to-get-started'
    }},
    {{
      title: 'Managing Your Account',
      description: 'Learn how to update your profile and account settings',
      category: 'Account Management',
      readTime: '3',
      href: '/articles/managing-your-account'
    }}
  ];

  return (
    <Page title="">
      <HeroImage 
        title="Welcome to {display_name}"
        subtitle="Find answers to your questions quickly and easily"
        showSearch={{true}}
      />
      <CategoriesSection categories={{categories}} />
      <FeaturedArticles articles={{articles}} />
      <ContactUs />
    </Page>
  );
}};

export default Homepage;"""
        
        # Write homepage
        homepage_path = os.path.join(theme_dir, 'Pages', 'homepage.jsx')
        with open(homepage_path, 'w') as f:
            f.write(homepage_jsx)
        
        print('✅ Generated page templates')
    
    def generate_root_files(self, theme_dir):
        """Generate root theme files"""
        # Generate theme.json
        theme_json = {
            "name": self.theme_config['name'],
            "displayName": self.theme_config['displayName'],
            "description": self.theme_config['description'],
            "version": self.theme_config['version'],
            "author": self.theme_config['author'],
            "style": self.theme_config['style'],
            "colors": self.theme_config['colors'],
            "generated": datetime.now().isoformat(),
            "kustomerTheme": True,
            "files": {
                "styles": "Globals/styles.css",
                "portal": "Globals/portal.css",
                "form": "Globals/form.css",
                "survey": "Globals/survey.css",
                "recaptcha": "Globals/recaptcha.css",
                "utils": "Globals/utils.js"
            }
        }
        
        # Generate README.md
        readme_md = f"""# {self.theme_config['displayName']}

> {self.theme_config['description']}

**Author:** {self.theme_config['author']}  
**Version:** {self.theme_config['version']}  
**Style:** {self.theme_config['style'].title()}

## Overview

This theme was generated using the Kustomer Theme Generator. It provides a modern, responsive design with customizable colors and components.

## Features

- 🎨 **Customizable Colors**: Easy-to-modify color scheme
- 📱 **Responsive Design**: Works on all device sizes
- ♿ **Accessibility Compliant**: WCAG 2.1 AA compliant
- ⚛️ **Modern React Components**: Built with React best practices
- 🔍 **SEO Optimized**: Search engine friendly
- 🌐 **Cross-browser Compatible**: Works in all modern browsers

## Color Scheme

- **Primary:** {self.theme_config['colors']['primary']}
- **Secondary:** {self.theme_config['colors']['secondary']}
- **Accent:** {self.theme_config['colors']['accent']}
- **Background:** {self.theme_config['colors']['background']}
- **Text:** {self.theme_config['colors']['text']}
- **Border:** {self.theme_config['colors']['border']}

## File Structure

```
{self.theme_config['name']}/
├── Advanced/
│   └── manifest.json
├── Components/
│   ├── Page.jsx
│   ├── Nav.jsx
│   ├── HeroImage.jsx
│   ├── CategoriesSection.jsx
│   ├── CategoryBlock.jsx
│   ├── FeaturedArticles.jsx
│   ├── ArticleItem.jsx
│   ├── ContactUs.jsx
│   ├── Footer.jsx
│   ├── Announcement.jsx
│   ├── ArticleBreadcrumbs.jsx
│   └── ConversationBreadcrumbs.jsx
├── Globals/
│   ├── styles.css
│   ├── portal.css
│   ├── form.css
│   ├── survey.css
│   ├── recaptcha.css
│   └── utils.js
├── Pages/
│   └── homepage.jsx
├── index.html
├── demo.html
├── theme.json
└── README.md
```

## Customization

### Colors

Edit the CSS variables in `Globals/styles.css`:

```css
:root {{
  --primary-color: {self.theme_config['colors']['primary']};
  --secondary-color: {self.theme_config['colors']['secondary']};
  --accent-color: {self.theme_config['colors']['accent']};
  /* ... */
}}
```

### Components

React components are located in the `Components/` directory. Each component is self-contained and can be modified independently.

### Pages

Page templates are in the `Pages/` directory. The main homepage is in `homepage.jsx`.

## Installation

1. Upload the theme files to your Kustomer instance
2. Configure the theme in your Kustomer admin panel
3. Customize colors and content as needed

## Development

Generated on: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}

## Support

For support with this theme, please contact {self.theme_config['author']}.
"""
        
        # Generate demo.html
        demo_html = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{self.theme_config['displayName']} - Demo</title>
    <link rel="stylesheet" href="Globals/styles.css">
</head>
<body>
    <nav class="kb-nav">
        <div class="kb-container">
            <div class="kb-nav-container">
                <a href="/" class="kb-nav-logo">{self.theme_config['displayName']}</a>
                <ul class="kb-nav-links">
                    <li><a href="/" class="kb-nav-link">Home</a></li>
                    <li><a href="/categories" class="kb-nav-link">Categories</a></li>
                    <li><a href="/search" class="kb-nav-link">Search</a></li>
                    <li><a href="/contact" class="kb-nav-link">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <section class="kb-hero">
        <div class="kb-container">
            <h1>Welcome to {self.theme_config['displayName']}</h1>
            <p>Find answers to your questions quickly and easily</p>
            <form class="kb-search">
                <input type="text" class="kb-search-input" placeholder="Search for articles, topics, or questions..." />
                <button type="submit" class="kb-search-button">Search</button>
            </form>
        </div>
    </section>

    <section class="kb-section">
        <div class="kb-container">
            <h2>Browse Categories</h2>
            <div class="kb-categories">
                <a href="#" class="kb-category">
                    <div class="kb-category-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                        </svg>
                    </div>
                    <h3 class="kb-category-title">Getting Started</h3>
                    <p class="kb-category-description">Learn the basics and get up to speed quickly</p>
                </a>
                <a href="#" class="kb-category">
                    <div class="kb-category-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                        </svg>
                    </div>
                    <h3 class="kb-category-title">Account Management</h3>
                    <p class="kb-category-description">Manage your account settings and preferences</p>
                </a>
                <a href="#" class="kb-category">
                    <div class="kb-category-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                        </svg>
                    </div>
                    <h3 class="kb-category-title">Troubleshooting</h3>
                    <p class="kb-category-description">Find solutions to common problems</p>
                </a>
            </div>
        </div>
    </section>

    <section class="kb-section">
        <div class="kb-container">
            <h2>Featured Articles</h2>
            <div class="kb-articles">
                <a href="#" class="kb-article">
                    <div class="kb-article-content">
                        <h3 class="kb-article-title">How to Get Started</h3>
                        <p class="kb-article-description">A comprehensive guide to getting started with our platform</p>
                        <div class="kb-article-meta">
                            <span>Getting Started</span>
                            <span>5 min read</span>
                        </div>
                    </div>
                </a>
                <a href="#" class="kb-article">
                    <div class="kb-article-content">
                        <h3 class="kb-article-title">Managing Your Account</h3>
                        <p class="kb-article-description">Learn how to update your profile and account settings</p>
                        <div class="kb-article-meta">
                            <span>Account Management</span>
                            <span>3 min read</span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </section>

    <section class="kb-section">
        <div class="kb-container">
            <div style="text-align: center; padding: 2rem;">
                <h2>Need More Help?</h2>
                <p>Can't find what you're looking for? Get in touch with our support team.</p>
                <a href="/contact" class="kb-button">Contact Support</a>
            </div>
        </div>
    </section>

    <footer class="kb-footer">
        <div class="kb-container">
            <p>&copy; 2024 {self.theme_config['displayName']}. All rights reserved.</p>
            <p>Powered by Kustomer Knowledge Base</p>
        </div>
    </footer>
</body>
</html>"""
        
        # Write files
        files = {
            'theme.json': json.dumps(theme_json, indent=2),
            'README.md': readme_md,
            'demo.html': demo_html
        }
        
        for filename, content in files.items():
            file_path = os.path.join(theme_dir, filename)
            with open(file_path, 'w') as f:
                f.write(content)
        
        print('✅ Generated root files')
    
    def generate(self):
        try:
            self.collect_theme_info()
            
            print('\n🏗️  Generating theme structure...')
            theme_dir = self.create_directory_structure()
            
            print('📋 Generating configuration files...')
            self.generate_manifest(theme_dir)
            
            print('🎨 Generating styles...')
            self.generate_global_styles(theme_dir)
            
            print('🌐 Generating global files...')
            self.generate_global_files(theme_dir)
            
            print('⚛️  Generating React components...')
            self.generate_components(theme_dir)
            
            print('📄 Generating page templates...')
            self.generate_pages(theme_dir)
            
            print('📁 Generating root files...')
            self.generate_root_files(theme_dir)
            
            print(f"""
✅ Theme generation complete!

Theme directory: {theme_dir}
Next steps:
1. Review the generated files
2. Customize the styles and components as needed
3. Add your own content and data
4. Test the theme in your Kustomer instance

Happy theming! 🎉""")
            
        except Exception as error:
            print(f'Error generating theme: {error}')

if __name__ == '__main__':
    generator = ThemeGenerator()
    generator.generate() 