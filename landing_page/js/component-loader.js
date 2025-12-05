/**
 * Component Loader
 * Dynamically loads HTML components into the main page
 */

(function() {
  'use strict';

  /**
   * Load a component HTML file and insert it into the target element
   * @param {string} componentPath - Path to the component HTML file
   * @param {string} targetSelector - CSS selector for the target element
   * @returns {Promise} - Promise that resolves when component is loaded
   */
  async function loadComponent(componentPath, targetSelector) {
    try {
      const response = await fetch(componentPath);
      if (!response.ok) {
        throw new Error(`Failed to load component: ${componentPath}`);
      }
      
      const html = await response.text();
      const target = document.querySelector(targetSelector);
      
      if (target) {
        target.innerHTML = html;
        
        // Reinitialize scripts if needed (for components that have scripts)
        if (target.querySelector('script')) {
          const scripts = target.querySelectorAll('script');
          scripts.forEach(oldScript => {
            const newScript = document.createElement('script');
            Array.from(oldScript.attributes).forEach(attr => {
              newScript.setAttribute(attr.name, attr.value);
            });
            newScript.appendChild(document.createTextNode(oldScript.innerHTML));
            oldScript.parentNode.replaceChild(newScript, oldScript);
          });
        }
      } else {
        console.warn(`Target element not found: ${targetSelector}`);
      }
    } catch (error) {
      console.error(`Error loading component ${componentPath}:`, error);
    }
  }

  /**
   * Load all components when DOM is ready
   */
  function initComponents() {
    const components = [
      { path: 'components/header.html', target: '#header-container' },
      { path: 'components/hero-section.html', target: '#hero-container' },
      { path: 'components/about.html', target: '#about-container' },
      { path: 'components/treatments.html', target: '#treatments-container' },
      { path: 'components/testimonials.html', target: '#testimonials-container' },
      { path: 'components/why-choose-us.html', target: '#why-us-container' },
      { path: 'components/faq.html', target: '#faq-container' },
      { path: 'components/footer.html', target: '#footer-container' }
    ];

    // Load all components in parallel
    Promise.all(
      components.map(comp => loadComponent(comp.path, comp.target))
    ).then(() => {
      // Dispatch custom event when all components are loaded
      document.dispatchEvent(new CustomEvent('componentsLoaded'));
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initComponents);
  } else {
    initComponents();
  }

})();

