// Utility functions for Gwinnett theme

// Smooth scroll to element
function scrollToElement(element, offset = 0) {
  const elementPosition = element.offsetTop - offset;
  window.scrollTo({
    top: elementPosition,
    behavior: 'smooth'
  });
}

// Add loading state to buttons
function addButtonLoading(button, loadingText = 'Loading...') {
  const originalText = button.textContent;
  button.textContent = loadingText;
  button.disabled = true;
  button.classList.add('loading');
  
  return () => {
    button.textContent = originalText;
    button.disabled = false;
    button.classList.remove('loading');
  };
}

// Initialize theme animations
function initAnimations() {
  // Animate cards on scroll
  const cards = document.querySelectorAll('.card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });
  
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
}

// Search functionality
function initSearch() {
  const searchForm = document.querySelector('.search-form');
  const searchInput = document.querySelector('.search-input');
  
  if (searchForm && searchInput) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const query = searchInput.value.trim();
      if (query) {
        window.location.href = `/search?q=${encodeURIComponent(query)}`;
      }
    });
  }
}

// Initialize theme when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initAnimations();
  initSearch();
  
  // Add smooth scrolling to anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        scrollToElement(target, 80);
      }
    });
  });
}); 