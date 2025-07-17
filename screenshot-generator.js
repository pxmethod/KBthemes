const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const themes = [
  { name: 'theme2-modern-minimalist', title: 'Bare Bones' },
  { name: 'theme3-warm-friendly', title: 'Warm Friendly' },
  { name: 'theme4-high-contrast-accessible', title: 'High Contrast Accessible' },
  { name: 'theme6-professional-knowledge-base', title: 'Professional Knowledge Base' },
  { name: 'theme7-mr-frosty', title: 'Mr. Frosty' },
  { name: 'theme8-studious', title: 'Studious' },
  { name: 'theme-gwinnett', title: 'Gwinnett' },
  { name: 'theme-gwinnett-alt', title: 'Gwinnett Alt' }
];

async function generateThumbnails() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  // Set viewport to a standard size
  await page.setViewport({ width: 1200, height: 800 });
  
  // Create thumbnails directory if it doesn't exist
  const thumbnailsDir = path.join(__dirname, 'thumbnails');
  if (!fs.existsSync(thumbnailsDir)) {
    fs.mkdirSync(thumbnailsDir);
  }
  
  for (const theme of themes) {
    try {
      console.log(`Generating thumbnail for ${theme.title}...`);
      
      // Navigate to the theme
      const themePath = `file://${path.join(__dirname, theme.name, 'index.html')}`;
      await page.goto(themePath, { waitUntil: 'networkidle0' });
      
      // Wait for any animations or dynamic content
      await page.waitForTimeout(2000);
      
      // Take screenshot of the top section (header + hero/main content)
      await page.screenshot({
        path: path.join(thumbnailsDir, `${theme.name}.png`),
        clip: {
          x: 0,
          y: 0,
          width: 1200,
          height: 400 // Capture top 400px
        }
      });
      
      console.log(`✅ Generated thumbnail for ${theme.title}`);
    } catch (error) {
      console.error(`❌ Error generating thumbnail for ${theme.title}:`, error.message);
    }
  }
  
  await browser.close();
  console.log('🎉 All thumbnails generated!');
}

// Helper function to update index.html with generated thumbnails
function updateIndexWithThumbnails() {
  const indexPath = path.join(__dirname, 'index.html');
  let indexContent = fs.readFileSync(indexPath, 'utf8');
  
  themes.forEach(theme => {
    const thumbnailPath = `thumbnails/${theme.name}.png`;
    
    // Replace the theme-preview div with an image
    const oldPreviewRegex = new RegExp(
      `<div class="theme-preview">.*?</div>`,
      'gs'
    );
    
    const newPreview = `<div class="theme-preview">
                    <img src="${thumbnailPath}" alt="${theme.title} Preview" style="width: 100%; height: 100%; object-fit: cover; border-radius: 0;">
                </div>`;
    
    // This is a simplified replacement - you might need to be more specific
    // about targeting the right theme card
  });
  
  // Note: This function needs refinement for specific theme targeting
  console.log('📝 Index update function created - manual implementation recommended');
}

// Run the generator
generateThumbnails().catch(console.error);

module.exports = { generateThumbnails, updateIndexWithThumbnails }; 