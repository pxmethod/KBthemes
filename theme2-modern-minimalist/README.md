# Modern Minimalist Theme

A clean, modern minimalist theme focusing on simplicity, generous white space, and minimal visual elements. Perfect for modern brands that value clarity and simplicity over complex designs.

## Preview

![Modern Minimalist Theme Preview](preview.jpg)

## Features

- ✅ **Minimalist Design** - Clean lines, lots of white space, contemporary feel
- ✅ **Monochromatic Palette** - Sophisticated grayscale with single accent color
- ✅ **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- ✅ **Accessibility Compliant** - WCAG 2.1 AA compliant with full keyboard navigation
- ✅ **React Components** - Modern React-based component architecture
- ✅ **Customizable Colors** - Easy color customization through CSS variables
- ✅ **Light Typography** - Clean, readable fonts with generous line spacing
- ✅ **Subtle Animations** - Gentle hover effects and smooth transitions
- ✅ **Search Functionality** - Built-in search with minimal styling
- ✅ **Category Cards** - Clean category browsing with subtle interactions
- ✅ **Featured Articles** - Showcase important content with clarity
- ✅ **Mobile-First** - Optimized for mobile devices with progressive enhancement

## Design Philosophy

The Modern Minimalist theme is built on core principles of simplicity and clarity:

- **Less is More** - Every element serves a purpose
- **White Space** - Generous spacing creates breathing room
- **Typography** - Clean, readable fonts with proper hierarchy
- **Color** - Monochromatic base with strategic accent usage
- **Interaction** - Subtle, purposeful animations and effects

## Theme Structure

```
theme2-modern-minimalist/
├── Advanced/
│   └── manifest.json           # Theme manifest and metadata
├── Components/
│   ├── Announcement.jsx        # Alert banner component
│   ├── ArticleBreadcrumbs.jsx  # Article navigation breadcrumbs
│   ├── ArticleItem.jsx         # Individual article card
│   ├── CategoriesSection.jsx   # Categories section wrapper
│   ├── CategoryBlock.jsx       # Individual category card
│   ├── ContactUs.jsx           # Contact section component
│   ├── ConversationBreadcrumbs.jsx # Conversation navigation
│   ├── ConversationDetails.jsx # Conversation details view
│   ├── ConversationStatus.jsx  # Conversation status indicator
│   ├── FeaturedArticles.jsx    # Featured articles section
│   ├── Footer.jsx              # Site footer component
│   ├── HeroImage.jsx           # Hero section with search
│   ├── Nav.jsx                 # Navigation component
│   ├── NavSearch.jsx           # Navigation search component
│   ├── Page.jsx                # Main page wrapper
│   ├── SearchHeader.jsx        # Search page header
│   ├── SearchHeaderWithSuggestions.jsx # Enhanced search header
│   ├── SearchItem.jsx          # Search result item
│   └── SubcategoryItem.jsx     # Subcategory item component
├── Globals/
│   ├── styles.css              # Main theme styles
│   ├── portal.css              # Portal-specific styles
│   ├── form.css                # Form styling
│   ├── survey.css              # Survey styling
│   ├── recaptcha.css           # reCAPTCHA styling
│   └── utils.js                # JavaScript utilities
├── Pages/
│   ├── 401.jsx                 # Unauthorized page
│   ├── 404.jsx                 # Page not found
│   ├── 500.jsx                 # Server error page
│   ├── article.jsx             # Article page template
│   ├── categories.jsx          # Categories page
│   ├── contact.jsx             # Contact page
│   ├── conversation.jsx        # Individual conversation
│   ├── conversations.jsx       # Conversations list
│   ├── homepage.jsx            # Main landing page
│   ├── login.jsx               # Login page
│   ├── search.jsx              # Search results page
│   ├── survey.jsx              # Survey page
│   └── tag.jsx                 # Tag page
├── index.html                  # Main template preview
├── theme.json                  # Theme configuration
└── README.md                   # This file
```

## Customization

### Colors

The theme uses a sophisticated monochromatic color palette with CSS custom properties:

```css
:root {
    /* Primary Colors */
    --primary-color: #1a1a1a;        /* Main brand color */
    --primary-hover: #333333;        /* Hover state */
    --secondary-color: #fafafa;      /* Secondary background */
    --accent-color: #3b82f6;         /* Single accent color */
    
    /* Text Colors */
    --text-primary: #1a1a1a;         /* Main text */
    --text-secondary: #666666;       /* Secondary text */
    --text-muted: #999999;           /* Muted text */
    
    /* Backgrounds */
    --background-primary: #ffffff;    /* Main background */
    --background-secondary: #fafafa;  /* Section background */
    --background-tertiary: #f5f5f5;  /* Subtle background */
    
    /* Borders */
    --border-color: #e6e6e6;         /* Main borders */
    --border-light: #f0f0f0;         /* Light borders */
    --border-subtle: #f8f8f8;        /* Subtle borders */
}
```

### Typography

Clean, modern typography with generous spacing:

```css
:root {
    /* Font Families */
    --font-family-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    
    /* Font Sizes */
    --font-size-base: 1rem;          /* Base font size */
    --font-size-lg: 1.125rem;        /* Large text */
    --font-size-xl: 1.25rem;         /* Extra large */
    --font-size-4xl: 2.25rem;        /* Section titles */
    --font-size-5xl: 3rem;           /* Hero title */
    
    /* Font Weights */
    --font-weight-light: 300;        /* Light headings */
    --font-weight-normal: 400;       /* Body text */
    --font-weight-medium: 500;       /* Emphasis */
    
    /* Line Heights */
    --line-height-normal: 1.6;       /* Body text */
    --line-height-relaxed: 1.8;      /* Descriptions */
}
```

### Spacing

Generous spacing system for lots of white space:

```css
:root {
    /* Spacing Scale */
    --spacing-md: 1rem;              /* 16px */
    --spacing-lg: 1.5rem;            /* 24px */
    --spacing-xl: 2rem;              /* 32px */
    --spacing-2xl: 3rem;             /* 48px */
    --spacing-3xl: 4rem;             /* 64px */
    --spacing-4xl: 5rem;             /* 80px */
    --spacing-5xl: 6rem;             /* 96px */
    --spacing-6xl: 8rem;             /* 128px */
    
    /* Container */
    --container-max-width: 1200px;
    --container-padding: 3rem;
}
```

### Layout

Flexible layout system:

```css
:root {
    /* Border Radius */
    --border-radius-sm: 0.125rem;
    --border-radius-md: 0.25rem;
    --border-radius-lg: 0.5rem;
    
    /* Shadows (Minimal) */
    --shadow-subtle: 0 1px 2px 0 rgba(0, 0, 0, 0.02);
    --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.05);
    --shadow-md: 0 2px 6px 0 rgba(0, 0, 0, 0.08);
    
    /* Transitions */
    --transition-fast: 0.2s ease-out;
    --transition-normal: 0.3s ease-out;
}
```

## Component Architecture

### React Components

All components use modern React patterns:

```jsx
// Example: CategoryBlock component
import React from 'react';

const CategoryBlock = ({ category, onClick }) => {
  return (
    <div className="mm-category-card" onClick={onClick}>
      <div className="mm-category-icon">{category.icon}</div>
      <h3 className="mm-category-title">{category.title}</h3>
      <p className="mm-category-description">{category.description}</p>
      <span className="mm-category-count">{category.articleCount} articles</span>
    </div>
  );
};
```

### CSS Classes

All CSS classes use the `mm-` prefix for consistency:

- `.mm-container` - Main container
- `.mm-hero-section` - Hero section
- `.mm-category-card` - Category cards
- `.mm-article-item` - Article items
- `.mm-search-input` - Search input
- `.mm-footer` - Footer section

## Theme Editor Integration

This theme is designed to work seamlessly with Kustomer's theme editor. The `theme.json` file contains comprehensive customization options:

### Available Customization Options

#### Colors
- Primary Color
- Primary Hover Color
- Secondary Color
- Accent Color
- Text Colors (Primary/Secondary/Muted)
- Background Colors (Primary/Secondary/Tertiary)
- Border Colors

#### Typography
- Primary Font Family
- Hero Title Size
- Section Title Size
- Base Font Size
- Font Weights
- Line Heights

#### Spacing
- Container Padding
- Section Spacing
- Element Spacing

#### Layout
- Container Max Width
- Border Radius
- Card Style
- Hover Effects

## Sections

### Header
- Clean site title
- Optional alert banner
- Language selector
- Back to home link

### Hero Section
- Large, light typography
- Centered search functionality
- Customizable background
- Generous white space

### Categories Section
- Grid-based category cards
- Minimal hover effects
- Clean icons (optional)
- Article counts

### Featured Articles
- Clean article cards
- Optional dates and descriptions
- Responsive grid layout
- Subtle interactions

### Contact Section
- Centered call-to-action
- Simple contact button
- Clean messaging
- Minimal background

### Footer
- Optional social links
- Simple navigation
- Clean copyright
- Minimal styling

## Accessibility Features

### WCAG 2.1 AA Compliance
- Proper color contrast ratios
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support

### Keyboard Navigation
- Tab order management
- Focus indicators
- Skip links
- Enter/Space key support

### Screen Reader Support
- Proper heading hierarchy
- Alt text for images
- Descriptive link text
- ARIA live regions

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- No Internet Explorer support

## Responsive Design

### Mobile (≤768px)
- Stacked layout
- Increased touch targets
- Simplified navigation
- Single-column grids
- Generous padding

### Tablet (769px - 1024px)
- Adapted grid layouts
- Optimized spacing
- Touch-friendly interactions
- Flexible columns

### Desktop (≥1025px)
- Full grid layouts
- Subtle hover effects
- Optimal spacing
- Multi-column layouts

## Performance

### Optimization Features
- Minimal CSS (focused on essentials)
- Efficient React components
- Optimized images
- Clean code structure
- Fast loading times

### Best Practices
- Mobile-first approach
- Progressive enhancement
- Semantic HTML
- Optimized assets
- Clean dependencies

## Installation

1. Upload the theme files to your Kustomer knowledge base
2. Select "Modern Minimalist" from the theme selector
3. Customize colors, fonts, and layout through the theme editor
4. Configure section content and settings
5. Preview and publish your changes

## Customization Guide

### Quick Start
1. **Colors**: Start with the accent color to match your brand
2. **Typography**: Adjust font sizes for your content needs
3. **Spacing**: Modify section and element spacing for density
4. **Layout**: Set container width and border radius preferences

### Advanced Customization
- Override CSS variables in your custom CSS
- Modify React components for specific needs
- Add custom animations or effects
- Integrate with third-party services

## Best Practices

### Content Guidelines
- Keep hero title concise and impactful
- Use clear, descriptive category names
- Write helpful article descriptions
- Maintain consistent tone and voice
- Embrace white space - don't fill every corner

### Design Guidelines
- Stick to the monochromatic palette
- Use the accent color sparingly
- Maintain generous spacing
- Keep interactions subtle
- Prioritize readability over decoration

### Performance Guidelines
- Optimize images for web
- Use system fonts when possible
- Test on various devices
- Monitor page load times
- Keep components lightweight

## Troubleshooting

### Common Issues

**Theme not loading properly**
- Check file paths in index.html
- Verify all CSS and JS files are uploaded
- Clear browser cache
- Check console for errors

**Customization not working**
- Ensure CSS variables are properly formatted
- Check theme.json configuration
- Verify theme editor permissions
- Test changes in preview mode

**Components not displaying**
- Verify React component imports
- Check for JavaScript errors
- Ensure all dependencies are loaded
- Test component props

### Support

For technical support or customization requests:
- Check the Kustomer knowledge base
- Contact your system administrator
- Review browser console for errors
- Test in different browsers

## Changelog

### Version 1.0.0
- Initial release
- Modern minimalist design
- Full React component architecture
- Comprehensive customization options
- Accessibility compliance
- Mobile-first responsive design
- Theme editor integration
- Structured folder organization

## License

This theme is licensed under the Kustomer Theme License. Please refer to your Kustomer agreement for usage terms and conditions.

---

*Modern Minimalist Theme - Where simplicity meets functionality* 