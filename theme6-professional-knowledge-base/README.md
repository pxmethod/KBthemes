# Professional Knowledge Base Theme

A clean, professional knowledge base theme inspired by premium help center templates. Perfect for enterprise documentation, API docs, and customer support portals.

## Overview

This theme provides a modern, professional interface designed specifically for knowledge bases and documentation sites. It features a card-based layout, prominent search functionality, and clean typography optimized for readability.

## Features

- ✨ **Professional Design** - Clean, modern interface with enterprise-grade aesthetics
- 🔍 **Advanced Search** - Prominent search with suggestions and popular terms
- 📱 **Fully Responsive** - Perfect display on all devices and screen sizes
- 🎨 **Card-Based Layout** - Modern card design for categories and articles
- ♿ **Accessibility Ready** - WCAG AA compliant with keyboard navigation
- ⚡ **Performance Optimized** - Fast loading with minimal JavaScript
- 🎯 **Professional Color Scheme** - Trustworthy blues and professional grays
- 🔧 **Highly Customizable** - Easy to customize colors, fonts, and layout

## Components

### Core Components
- `Nav` - Professional navigation header with active states
- `Footer` - Comprehensive footer with organized links
- `Page` - Main layout wrapper with breadcrumbs support
- `SearchHeader` - Hero search section with suggestions
- `CategoriesSection` - Card-based category grid
- `ArticleCard` - Article preview cards with metadata
- `ContactUs` - Professional support contact options

### Pages
- `homepage.jsx` - Complete homepage with all sections

## Color Palette

```css
--primary-color: #2563eb     /* Professional Blue */
--accent-color: #0ea5e9      /* Accent Blue */
--text-primary: #1e293b      /* Dark Gray */
--text-secondary: #64748b    /* Medium Gray */
--background-primary: #ffffff /* White */
--background-secondary: #f8fafc /* Light Gray */
--border-color: #e2e8f0      /* Border Gray */
```

## Typography

- **Font Family**: Inter (Google Fonts)
- **Fallbacks**: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
- **Sizes**: Consistent scale from 0.75rem to 3rem
- **Weights**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

## Layout System

- **Container**: Max-width 1200px with responsive padding
- **Grid**: CSS Grid with auto-fit columns (min 350px)
- **Breakpoints**: Mobile-first responsive design
- **Sidebar**: 280px width with sticky positioning
- **Spacing**: Consistent spacing scale using CSS variables

## Installation & Usage

### Basic Setup

1. Copy the theme folder to your project
2. Include the main stylesheet:
   ```html
   <link rel="stylesheet" href="theme6-professional-knowledge-base/Globals/styles.css">
   ```

3. Add the Inter font:
   ```html
   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
   ```

### React Usage

```jsx
import Page from './Components/Page';
import SearchHeader from './Components/SearchHeader';
import CategoriesSection from './Components/CategoriesSection';

function Homepage() {
  return (
    <Page currentPage="home">
      <SearchHeader 
        title="How can we help you?"
        subtitle="Search our knowledge base"
      />
      <CategoriesSection 
        title="Browse Topics"
        categories={myCategories}
      />
    </Page>
  );
}
```

### HTML Usage

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Knowledge Base</title>
    <link rel="stylesheet" href="Globals/styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <header class="kb-header">
        <div class="kb-container">
            <div class="header-content">
                <a href="#" class="site-title">Knowledge Base</a>
                <nav class="header-nav">
                    <a href="#" class="nav-link active">Home</a>
                    <a href="#" class="nav-link">Categories</a>
                </nav>
            </div>
        </div>
    </header>
    
    <main>
        <section class="search-section">
            <div class="kb-container">
                <h1 class="search-title">How can we help?</h1>
                <form class="search-form">
                    <div class="search-input-wrapper">
                        <input type="search" class="search-input" placeholder="Search...">
                        <button type="submit" class="search-button">Search</button>
                    </div>
                </form>
            </div>
        </section>
    </main>
</body>
</html>
```

## Customization

### Colors

All colors are defined as CSS custom properties and can be easily customized:

```css
:root {
  --primary-color: #your-brand-color;
  --accent-color: #your-accent-color;
  /* ... other variables */
}
```

### Typography

Customize fonts by changing the CSS variables:

```css
:root {
  --font-family-primary: 'Your Font', sans-serif;
  --font-size-base: 1.125rem; /* Increase base size */
}
```

### Layout

Adjust container width and spacing:

```css
:root {
  --container-max-width: 1400px; /* Wider container */
  --spacing-section: 5rem; /* More section spacing */
}
```

## Component Props

### SearchHeader
- `title` - Main heading text
- `subtitle` - Subheading text
- `placeholder` - Search input placeholder
- `onSearch` - Search handler function
- `searchUrl` - Search page URL

### CategoriesSection
- `title` - Section title
- `subtitle` - Section subtitle
- `categories` - Array of category objects

### ContactUs
- `title` - Section title
- `subtitle` - Section subtitle
- `supportOptions` - Array of support option objects

## Browser Support

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## Accessibility

- WCAG AA compliant
- Keyboard navigation support
- Screen reader optimized
- Proper focus indicators
- Semantic HTML structure
- ARIA labels and descriptions

## Performance

- Minimal JavaScript
- Optimized CSS with custom properties
- No external dependencies (except fonts)
- Fast rendering with efficient selectors
- Mobile-first responsive design

## Target Audience

Perfect for:
- Enterprise companies
- SaaS platforms
- Technical documentation sites
- Professional support portals
- B2B knowledge bases
- API documentation sites
- Customer support centers

## Use Cases

- Product documentation
- API documentation
- Customer support portal
- Internal knowledge base
- FAQ center
- Help desk portal
- Technical documentation
- User guides and tutorials

## Files Structure

```
theme6-professional-knowledge-base/
├── Advanced/
│   └── manifest.json          # Theme metadata
├── Components/
│   ├── Nav.jsx               # Navigation component
│   ├── Footer.jsx            # Footer component
│   ├── Page.jsx              # Layout wrapper
│   ├── SearchHeader.jsx      # Search hero section
│   ├── CategoriesSection.jsx # Category grid
│   ├── ArticleCard.jsx       # Article preview
│   └── ContactUs.jsx         # Support options
├── Globals/
│   └── styles.css            # Main stylesheet
├── Pages/
│   └── homepage.jsx          # Homepage template
├── demo.html                 # Feature demonstration
├── index.html                # Live preview
├── theme.json                # Theme configuration
└── README.md                 # This file
```

## License

MIT License - feel free to use in your projects.

## Support

- Documentation: This README
- Issues: GitHub Issues
- Community: Kustomer Community Forum
- Email: support@kustomer.com

---

Built with ❤️ for professional knowledge bases and documentation sites. 