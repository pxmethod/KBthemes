/**
 * Professional Knowledge Base Theme - JavaScript Utilities
 * Smooth animations and interactions for sidebar and navigation
 */

// Sidebar Management
class SidebarManager {
  constructor() {
    this.sidebar = null;
    this.sidebarToggle = null;
    this.mainWrapper = null;
    this.isOpen = true;
    this.init();
  }

  init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setup());
    } else {
      this.setup();
    }
  }

  setup() {
    this.sidebar = document.querySelector('.sidebar');
    this.sidebarToggle = document.querySelector('.sidebar-toggle');
    this.mainWrapper = document.querySelector('.main-wrapper');
    
    if (this.sidebarToggle) {
      this.sidebarToggle.addEventListener('click', () => this.toggle());
    }

    // Handle responsive behavior
    this.handleResize();
    window.addEventListener('resize', () => this.handleResize());
    
    // Initialize category toggles
    this.initCategoryToggles();
  }

  toggle() {
    this.isOpen = !this.isOpen;
    const pageWrapper = document.querySelector('.page-wrapper');
    
    if (pageWrapper) {
      if (this.isOpen) {
        pageWrapper.classList.add('sidebar-open');
        pageWrapper.classList.remove('sidebar-closed');
      } else {
        pageWrapper.classList.remove('sidebar-open');
        pageWrapper.classList.add('sidebar-closed');
      }
    }

    // Update ARIA attributes
    if (this.sidebarToggle) {
      this.sidebarToggle.setAttribute('aria-expanded', this.isOpen);
      this.sidebarToggle.setAttribute('aria-label', this.isOpen ? 'Close sidebar' : 'Open sidebar');
    }

    // Trigger custom event for other components
    window.dispatchEvent(new CustomEvent('sidebarToggle', { 
      detail: { isOpen: this.isOpen } 
    }));
  }

  handleResize() {
    const width = window.innerWidth;
    const pageWrapper = document.querySelector('.page-wrapper');
    
    if (width < 1024) {
      // Mobile: sidebar should be closed by default
      if (this.isOpen) {
        this.isOpen = false;
        if (pageWrapper) {
          pageWrapper.classList.remove('sidebar-open');
          pageWrapper.classList.add('sidebar-closed');
        }
      }
    } else {
      // Desktop: sidebar should be open by default
      if (!this.isOpen) {
        this.isOpen = true;
        if (pageWrapper) {
          pageWrapper.classList.add('sidebar-open');
          pageWrapper.classList.remove('sidebar-closed');
        }
      }
    }
  }

  initCategoryToggles() {
    const categoryHeaders = document.querySelectorAll('.product-header');
    
    categoryHeaders.forEach(header => {
      header.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggleCategory(header);
      });
    });
  }

  toggleCategory(header) {
    const isExpanded = header.classList.contains('expanded');
    const subcategories = header.nextElementSibling;
    const expandIcon = header.querySelector('.expand-icon');
    
    if (!subcategories || !expandIcon) return;

    if (isExpanded) {
      // Collapse
      header.classList.remove('expanded');
      header.setAttribute('aria-expanded', 'false');
      expandIcon.textContent = '+';
      this.slideUp(subcategories);
    } else {
      // Expand
      header.classList.add('expanded');
      header.setAttribute('aria-expanded', 'true');
      expandIcon.textContent = '−';
      this.slideDown(subcategories);
    }
  }

  slideDown(element) {
    element.style.display = 'block';
    element.style.height = '0px';
    element.style.overflow = 'hidden';
    element.style.transition = 'height 0.3s ease';
    
    // Force reflow
    element.offsetHeight;
    
    const height = element.scrollHeight;
    element.style.height = height + 'px';
    
    setTimeout(() => {
      element.style.height = 'auto';
      element.style.overflow = 'visible';
    }, 300);
  }

  slideUp(element) {
    element.style.height = element.offsetHeight + 'px';
    element.style.overflow = 'hidden';
    element.style.transition = 'height 0.3s ease';
    
    // Force reflow
    element.offsetHeight;
    
    element.style.height = '0px';
    
    setTimeout(() => {
      element.style.display = 'none';
      element.style.height = 'auto';
      element.style.overflow = 'visible';
    }, 300);
  }
}

// Search Enhancement
class SearchManager {
  constructor() {
    this.searchInput = null;
    this.searchResults = null;
    this.init();
  }

  init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setup());
    } else {
      this.setup();
    }
  }

  setup() {
    this.searchInput = document.querySelector('.search-input');
    
    if (this.searchInput) {
      this.searchInput.addEventListener('focus', () => this.onFocus());
      this.searchInput.addEventListener('blur', () => this.onBlur());
      this.searchInput.addEventListener('input', (e) => this.onInput(e));
    }
  }

  onFocus() {
    const searchWrapper = this.searchInput.closest('.search-input-wrapper');
    if (searchWrapper) {
      searchWrapper.classList.add('focused');
    }
  }

  onBlur() {
    const searchWrapper = this.searchInput.closest('.search-input-wrapper');
    if (searchWrapper) {
      searchWrapper.classList.remove('focused');
    }
  }

  onInput(e) {
    const query = e.target.value.trim();
    
    if (query.length > 2) {
      this.showSearchSuggestions(query);
    } else {
      this.hideSearchSuggestions();
    }
  }

  showSearchSuggestions(query) {
    // This would typically make an API call
    // For now, we'll just show a placeholder
    console.log('Searching for:', query);
  }

  hideSearchSuggestions() {
    // Hide search suggestions
  }
}

// Smooth Scroll Enhancement
class ScrollManager {
  constructor() {
    this.init();
  }

  init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setup());
    } else {
      this.setup();
    }
  }

  setup() {
    // Add smooth scrolling to all anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        const target = document.querySelector(href);
        
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }
}

// Animation Utilities
const AnimationUtils = {
  // Fade in animation
  fadeIn(element, duration = 300) {
    element.style.opacity = '0';
    element.style.display = 'block';
    element.style.transition = `opacity ${duration}ms ease`;
    
    // Force reflow
    element.offsetHeight;
    
    element.style.opacity = '1';
  },

  // Fade out animation
  fadeOut(element, duration = 300) {
    element.style.opacity = '1';
    element.style.transition = `opacity ${duration}ms ease`;
    
    // Force reflow
    element.offsetHeight;
    
    element.style.opacity = '0';
    
    setTimeout(() => {
      element.style.display = 'none';
    }, duration);
  },

  // Slide toggle
  slideToggle(element, duration = 300) {
    if (element.style.display === 'none' || !element.style.display) {
      this.slideDown(element, duration);
    } else {
      this.slideUp(element, duration);
    }
  }
};

// Initialize all managers when DOM is ready
let sidebarManager, searchManager, scrollManager;

function initializeTheme() {
  sidebarManager = new SidebarManager();
  searchManager = new SearchManager();
  scrollManager = new ScrollManager();
  
  // Add loading complete class for CSS animations
  document.body.classList.add('theme-loaded');
}

// Auto-initialize
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeTheme);
} else {
  initializeTheme();
}

// Export for manual initialization if needed
window.KnowledgeBaseTheme = {
  SidebarManager,
  SearchManager,
  ScrollManager,
  AnimationUtils,
  init: initializeTheme
}; 