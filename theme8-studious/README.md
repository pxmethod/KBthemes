# Studious Theme

A clean, professional knowledge base theme inspired by modern educational platforms. Features prominent search functionality, organized categories, and academic-friendly design.

## 🎓 Overview

Studious is designed for educational institutions, online learning platforms, and knowledge-based businesses. It emphasizes clean typography, intuitive navigation, and content accessibility while maintaining a professional, academic aesthetic.

## ✨ Features

- **Prominent Search Functionality** - Large, accessible search bar prominently placed in hero section
- **Category Organization** - Clean grid layout for organizing content into logical categories
- **Professional Design** - Modern, academic-inspired design that builds trust and authority
- **Fully Responsive** - Works perfectly on all devices and screen sizes
- **Accessibility First** - WCAG compliant with proper focus states and screen reader support
- **Performance Optimized** - Clean code and fast loading times
- **Inter Typography** - Professional, readable font family throughout
- **Clean Color Palette** - Professional colors with excellent contrast ratios

## 🎨 Design Inspiration

Based on the [Known Webflow template](https://known-template.webflow.io/), this theme captures the essence of modern knowledge base design with:

- Large hero section with prominent "You ask. We answer." messaging
- Clean category grid with hover effects
- Popular articles section with categorized content
- Video demo integration
- Professional footer with organized links

## 🏗️ Structure

```
theme8-studious/
├── Advanced/
│   └── manifest.json          # Theme configuration
├── Components/
│   ├── Nav.jsx               # Navigation header
│   ├── HeroSection.jsx       # Hero with search
│   ├── CategoryGrid.jsx      # 6 category cards
│   ├── PopularArticles.jsx   # Article listings
│   ├── VideoDemo.jsx         # Demo section
│   ├── Footer.jsx            # Site footer
│   └── Page.jsx              # Main wrapper
├── Globals/
│   └── styles.css            # Complete styling
├── Pages/
│   └── homepage.jsx          # Main page template
├── demo.html                 # Feature showcase
├── index.html                # Live preview
├── theme.json                # Theme metadata
└── README.md                 # Documentation
```

## 🎯 Use Cases

Perfect for:

- **Educational Institutions** - Universities, colleges, and schools
- **Corporate Training** - Internal knowledge bases and training materials
- **Online Learning** - E-learning platforms and course providers
- **Professional Services** - Consulting firms with extensive documentation
- **Academic Research** - Research institutions and academic departments
- **Student Resources** - Campus services and student support portals

## 🎨 Color Palette

- **Primary**: `#1a1a1a` - Main text and headings
- **Accent**: `#3182ce` - Interactive elements and highlights
- **Secondary**: `#4a5568` - Secondary text and subtle elements
- **Background**: `#f7fafc` - Light background sections
- **White**: `#ffffff` - Main background and cards

## 📝 Typography

- **Font Family**: Inter (Google Fonts)
- **Headings**: Inter 600-700 weight
- **Body Text**: Inter 400 weight
- **Line Height**: 1.7 for optimal readability
- **Letter Spacing**: Optimized for each heading level

## 🧩 Components

### Nav.jsx
- Clean header with brand and navigation links
- Sticky positioning for easy access
- Responsive collapse on mobile

### HeroSection.jsx
- Prominent "You ask. We answer." messaging
- Large search input with button
- Popular searches suggestions

### CategoryGrid.jsx
- Grid of 6 category cards
- Hover effects with top border animation
- Accessible link structure

### PopularArticles.jsx
- Article cards with category badges
- Author attribution
- Clean, scannable layout

### VideoDemo.jsx
- "Press play. Watch our demo." section
- Call-to-action for video content
- Dark background for contrast

### Footer.jsx
- Organized link sections
- Professional branding
- Responsive grid layout

## 🚀 Installation

1. **Copy theme files** to your knowledge base platform
2. **Include styles.css** in your HTML head:
   ```html
   <link rel="stylesheet" href="Globals/styles.css">
   ```
3. **Add Inter font** from Google Fonts:
   ```html
   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
   ```
4. **Import React components** as needed for your platform

## 🎛️ Customization

### Colors
Update CSS custom properties in `styles.css`:
```css
:root {
  --primary-color: #1a1a1a;
  --accent-color: #3182ce;
  --secondary-color: #4a5568;
  --background-color: #f7fafc;
}
```

### Typography
Modify font family and weights:
```css
body {
  font-family: 'Your-Font', 'Inter', sans-serif;
}
```

### Layout
Adjust grid columns and spacing:
```css
.categories-grid {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
```

## 📱 Responsive Breakpoints

- **Mobile**: 768px and below
- **Tablet**: 769px - 1024px  
- **Desktop**: 1025px and above

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Skip links for screen readers
- High contrast color ratios
- Focus indicators
- Reduced motion support

## 🔧 Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## 📄 License

This theme is part of the Templates collection. Free to use for educational and commercial projects.

## 🤝 Contributing

To suggest improvements or report issues:
1. Test changes in the demo environment
2. Ensure accessibility standards are maintained
3. Update documentation as needed

## 📞 Support

For technical support or customization questions:
- Check the demo.html for visual examples
- Review component structure in the Components/ folder
- Test responsive behavior across devices

---

**Studious Theme** - Professional knowledge base design for educational excellence. 