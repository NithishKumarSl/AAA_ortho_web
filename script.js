/**
 * AAA Ortho Clinic - Main JavaScript
 * Handles: Mobile menu, parallax effects, scroll animations, carousel
 */

(function() {
  'use strict';

  // ============================================================
  // MOBILE MENU
  // ============================================================
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileClose = document.getElementById('mobileClose');

  function openMobileMenu() {
    if (mobileMenu) {
      mobileMenu.classList.add('open');
      mobileMenu.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMobileMenu() {
    if (mobileMenu) {
      mobileMenu.classList.remove('open');
      mobileMenu.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  hamburger?.addEventListener('click', openMobileMenu);
  mobileClose?.addEventListener('click', closeMobileMenu);

  // Close menu when clicking a link
  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Close menu on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu?.classList.contains('open')) {
      closeMobileMenu();
    }
  });

  // ============================================================
  // PARALLAX EFFECT (Optimized with requestAnimationFrame)
  // ============================================================
  (function initParallax() {
    const parallaxImg = document.querySelector('.parallax-layer img');
    if (!parallaxImg) return;

    let ticking = false;

    function updateParallax() {
      const offset = window.scrollY * 0.15;
      parallaxImg.style.transform = `translateY(${offset}px)`;
      ticking = false;
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }, { passive: true });
  })();

  // ============================================================
  // HERO FADE-IN ANIMATIONS
  // ============================================================
  window.addEventListener('load', () => {
    const elements = document.querySelectorAll(
      '.hero-title, .hero-desc, .hero-cta, .info-box'
    );

    elements.forEach((el, i) => {
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 200 * i);
    });
  });

  // ============================================================
  // REVEAL ON SCROLL (IntersectionObserver)
  // ============================================================
  (function initRevealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = Number(el.getAttribute('data-reveal-delay')) || 0;
          
          setTimeout(() => {
            el.classList.add('visible');
          }, delay);
          
          observer.unobserve(el);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -8% 0px',
      threshold: 0.12
    });

    reveals.forEach(reveal => observer.observe(reveal));
  })();

  // ============================================================
  // SMOOTH SCROLL WITH HEADER OFFSET
  // ============================================================
  (function initSmoothScroll() {
    const header = document.querySelector('.site-header');
    const headerHeight = header ? header.getBoundingClientRect().height : 80;

    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (!href || href === '#') return;

        const targetId = href.slice(1);
        const target = document.getElementById(targetId);
        
        if (target) {
          e.preventDefault();
          const rect = target.getBoundingClientRect();
          const scrollPos = window.scrollY + rect.top - headerHeight - 18;
          
          window.scrollTo({
            top: scrollPos,
            behavior: 'smooth'
          });

          // Close mobile menu if open
          if (mobileMenu?.classList.contains('open')) {
            closeMobileMenu();
          }
        }
      });
    });
  })();

  // ============================================================
  // TESTIMONIAL CAROUSEL (Auto-scroll)
  // ============================================================
  (function initCarousel() {
    const carousel = document.getElementById('testimonialCarousel');
    if (!carousel) return;

    const scrollSpeed = 1;
    let interval = null;
    let isPaused = false;

    function autoScroll() {
      if (isPaused) return;
      
      carousel.scrollLeft += scrollSpeed;

      // Loop back to start when end is reached
      if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 2) {
        carousel.scrollLeft = 0;
      }
    }

    function startCarousel() {
      if (!interval) {
        interval = setInterval(autoScroll, 20);
      }
    }

    function stopCarousel() {
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
    }

    // Start carousel
    startCarousel();

    // Pause on hover
    carousel.addEventListener('mouseenter', () => {
      isPaused = true;
      stopCarousel();
    });

    // Resume on leave
    carousel.addEventListener('mouseleave', () => {
      isPaused = false;
      startCarousel();
    });

    // Pause on touch (mobile)
    carousel.addEventListener('touchstart', () => {
      isPaused = true;
      stopCarousel();
    });

    carousel.addEventListener('touchend', () => {
      setTimeout(() => {
        isPaused = false;
        startCarousel();
      }, 2000);
    });
  })();

})();
