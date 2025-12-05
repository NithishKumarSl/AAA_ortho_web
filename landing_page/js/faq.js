/**
 * AAA Ortho Clinic - FAQ JavaScript
 * Handles FAQ accordion interactions and data loading
 */

(function() {
  'use strict';

  // ============================================================
  // FAQ ACCORDION ENHANCEMENTS
  // ============================================================
  (function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
      const summary = item.querySelector('summary');
      if (!summary) return;

      // Add click handler for better control
      summary.addEventListener('click', function(e) {
        // Prevent default to handle manually if needed
        // The <details> element handles open/close automatically
      });

      // Add animation class on toggle
      item.addEventListener('toggle', function() {
        if (this.open) {
          this.classList.add('open');
        } else {
          this.classList.remove('open');
        }
      });
    });
  })();

  // ============================================================
  // LOAD FAQ DATA FROM JSON (Optional - for dynamic loading)
  // ============================================================
  async function loadFAQData() {
    try {
      const response = await fetch('data/faq.json');
      if (!response.ok) return;
      
      const data = await response.json();
      const faqContainer = document.querySelector('.faq-grid');
      
      if (!faqContainer || !data.faqs) return;

      // Clear existing content
      faqContainer.innerHTML = '';

      // Generate FAQ items from JSON
      data.faqs.forEach(faq => {
        const details = document.createElement('details');
        details.className = 'faq-item';
        
        const summary = document.createElement('summary');
        summary.textContent = faq.question;
        
        const p = document.createElement('p');
        p.textContent = faq.answer;
        
        details.appendChild(summary);
        details.appendChild(p);
        faqContainer.appendChild(details);
      });

      // Reinitialize FAQ handlers
      initFAQ();
    } catch (error) {
      console.log('FAQ data loading is optional. Using static HTML.');
    }
  }

  // Uncomment to enable dynamic FAQ loading
  // loadFAQData();

})();

