# Theme Screenshot Generator

This tool automatically generates thumbnail screenshots of all themes for the main library page.

## Setup

1. Install Node.js (if not already installed)
2. Install dependencies:
   ```bash
   npm install
   ```

## Generate Thumbnails

Run the screenshot generator:
```bash
npm run generate-thumbnails
```

This will:
- Launch a headless browser
- Visit each theme's index.html page
- Capture a 1200x400px screenshot of the top section
- Save thumbnails to the `thumbnails/` directory

## Manual Screenshot Options

### Option 1: Browser Dev Tools
1. Open each theme in your browser
2. Press F12 to open Developer Tools
3. Use the screenshot tool (usually in the "More tools" menu)
4. Capture the top section of each page

### Option 2: Browser Extensions
- Use extensions like "Full Page Screen Capture" or "GoFullPage"
- Set up to capture just the top 400px of each page

### Option 3: Online Tools
- Use tools like BrowserStack or Sauce Labs for consistent screenshots
- Set viewport to 1200x800 and capture top section

## Updating the Main Index

After generating screenshots, manually update `index.html`:

1. Replace each `theme-preview` div content with:
   ```html
   <div class="theme-preview">
       <img src="thumbnails/[theme-name].png" 
            alt="[Theme Title] Preview" 
            style="width: 100%; height: 100%; object-fit: cover;">
   </div>
   ```

2. Update the CSS to remove background gradients for themes with screenshots:
   ```css
   .theme-card .theme-preview img {
       border-radius: 0;
       transition: transform 0.3s ease;
   }
   
   .theme-card:hover .theme-preview img {
       transform: scale(1.05);
   }
   ```

## Generated Files

- `thumbnails/theme2-modern-minimalist.png` - Bare Bones theme
- `thumbnails/theme3-warm-friendly.png` - Warm Friendly theme  
- `thumbnails/theme4-high-contrast-accessible.png` - High Contrast theme
- `thumbnails/theme6-professional-knowledge-base.png` - Professional KB theme
- `thumbnails/theme7-mr-frosty.png` - Mr. Frosty theme
- `thumbnails/theme8-studious.png` - Studious theme
- `thumbnails/theme-gwinnett.png` - Gwinnett theme
- `thumbnails/theme-gwinnett-alt.png` - Gwinnett Alt theme

## Tips

- Screenshots are captured at 1200x400px for consistent sizing
- The tool waits 2 seconds for any animations to complete
- Generated images are PNG format for quality
- Update the main index.html manually after generation for best results 