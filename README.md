# AAA Ortho Clinic Website

<div align="center">

**A modern, responsive, component-based website for AAA Ortho Clinic**

Expert bone & joint pain treatment in Pattukkottai, Tamil Nadu

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Technologies](#-technologies)
- [Getting Started](#-getting-started)
- [Component Architecture](#-component-architecture)
- [Development](#-development)
- [Design System](#-design-system)
- [Browser Support](#-browser-support)
- [Performance](#-performance)
- [Contact](#-contact)
- [License](#-license)

---

## 🎯 Overview

AAA Ortho Clinic website is a modern, fully responsive single-page application built with a modular component architecture. The site features smooth animations, parallax effects, and an intuitive user experience optimized for all devices.

### Key Highlights

- ✅ **Component-Based Architecture** - Modular HTML components for easy maintenance
- ✅ **Fully Responsive** - Mobile-first design with breakpoints for all screen sizes
- ✅ **Performance Optimized** - Lazy loading, optimized assets, and efficient JavaScript
- ✅ **Accessibility First** - ARIA labels, semantic HTML, keyboard navigation
- ✅ **Modern Animations** - Smooth parallax effects, scroll reveals, and transitions
- ✅ **Zero Dependencies** - Pure vanilla JavaScript, no frameworks required

---

## ✨ Features

### User Experience
- **Responsive Navigation** - Sticky header with mobile hamburger menu
- **Hero Section** - Eye-catching hero with doctor profile card and parallax effect
- **Interactive Gallery** - Image gallery with hover effects
- **Auto-scrolling Carousel** - Testimonials carousel with pause on hover
- **FAQ Accordion** - Expandable FAQ section with smooth animations
- **Smooth Scrolling** - Anchor links with header offset calculation

### Technical Features
- **Component Loading System** - Dynamic HTML component injection
- **Lazy Image Loading** - Images load only when needed
- **Intersection Observer** - Efficient scroll-based animations
- **RequestAnimationFrame** - Optimized parallax performance
- **JSON Data Support** - Optional dynamic content loading

---

## 📁 Project Structure

```
/
├── README.md                    # Project documentation
│
├── /assets                      # Shared assets (used by all pages)
│   ├── /css
│   │   ├── style.css           # Main stylesheet (base styles, components)
│   │   └── responsive.css      # Responsive styles (media queries)
│   │
│   ├── /js
│   │   ├── script.js           # Main JavaScript (menu, parallax, carousel)
│   │   └── faq.js              # FAQ accordion functionality
│   │
│   ├── /images
│   │   ├── hero-banner.jpg     # Hero section image
│   │   ├── gallery-1.jpg       # Gallery images (1-8)
│   │   ├── gallery-2.jpg
│   │   ├── ...
│   │   ├── gallery-8.jpg
│   │   ├── /treatments         # Treatment images
│   │   └── /misc               # Miscellaneous images
│   │
│   ├── /icons                  # SVG icon files
│   │   ├── menu.svg
│   │   ├── close.svg
│   │   ├── phone.svg
│   │   └── ...
│   │
│   └── /fonts                  # Custom fonts (optional)
│
├── /data                       # JSON data files
│   ├── testimonials.json       # Testimonials data
│   └── faq.json                # FAQ data
│
└── /landing_page               # Component-based landing page
    ├── landingpage.html        # Main HTML file (component loader)
    │
    ├── /components             # HTML components
    │   ├── header.html         # Navigation & mobile menu
    │   ├── hero-section.html   # Hero section with doctor card
    │   ├── about.html          # About section with gallery
    │   ├── treatments.html     # Treatments & services
    │   ├── testimonials.html   # Testimonials carousel
    │   ├── why-choose-us.html  # Why choose us section
    │   ├── faq.html            # FAQ accordion
    │   └── footer.html         # Footer with contact info
    │
    ├── /css                    # Landing page specific styles
    │   ├── style.css
    │   └── responsive.css
    │
    └── /js                     # Landing page scripts
        ├── component-loader.js # Component loading system
        ├── script.js
        └── faq.js
```

---

## 🛠 Technologies

### Core Technologies
- **HTML5** - Semantic markup, accessibility features
- **CSS3** - Custom properties, Grid, Flexbox, Animations
- **Vanilla JavaScript (ES6+)** - No dependencies, modern syntax

### Design & Styling
- **CSS Custom Properties** - Design tokens for theming
- **CSS Grid & Flexbox** - Modern layout systems
- **CSS Animations** - Smooth transitions and keyframe animations
- **Google Fonts** - Inter font family

### Performance
- **Lazy Loading** - Native image lazy loading
- **RequestAnimationFrame** - Optimized animations
- **Intersection Observer API** - Efficient scroll detection
- **Fetch API** - Component loading

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (for component loading - see below)

### Installation

1. **Clone or download the repository**
   ```bash
   git clone <repository-url>
   cd "AAA ortho web"
   ```

2. **Start a local web server**

   **Option 1: Python (if installed)**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```

   **Option 2: Node.js (if installed)**
   ```bash
   npx serve
   # or
   npx http-server
   ```

   **Option 3: VS Code Live Server**
   - Install "Live Server" extension
   - Right-click `landing_page/landingpage.html` → "Open with Live Server"

3. **Open in browser**
   ```
   http://localhost:8000/landing_page/landingpage.html
   ```

> **Note:** A local server is required due to CORS restrictions when loading components via Fetch API. Opening the HTML file directly in the browser will not work.

---

## 🏗 Component Architecture

### How It Works

The landing page uses a **component-based architecture** where the main HTML file (`landingpage.html`) contains placeholder containers, and JavaScript dynamically loads HTML components from separate files.

### Component Loading Flow

```
1. landingpage.html loads
   ↓
2. component-loader.js executes
   ↓
3. Fetches all component HTML files in parallel
   ↓
4. Inserts components into their containers
   ↓
5. Dispatches 'componentsLoaded' event
   ↓
6. Main scripts (script.js, faq.js) initialize
```

### Component Files

Each component is a self-contained HTML file:

- **header.html** - Navigation bar with mobile menu
- **hero-section.html** - Hero banner with doctor profile
- **about.html** - About section with image gallery
- **treatments.html** - Services and treatment cards
- **testimonials.html** - Patient testimonials carousel
- **why-choose-us.html** - Benefits and doctor info
- **faq.html** - Frequently asked questions
- **footer.html** - Contact information and footer

### Adding a New Component

1. Create a new HTML file in `landing_page/components/`
2. Add a container div in `landingpage.html`:
   ```html
   <div id="your-component-container"></div>
   ```
3. Add to component loader in `js/component-loader.js`:
   ```javascript
   { path: 'components/your-component.html', target: '#your-component-container' }
   ```

---

## 💻 Development

### File Organization

#### CSS Architecture
- **style.css** - Base styles, components, layout, animations
- **responsive.css** - All media queries organized by breakpoint

#### JavaScript Architecture
- **component-loader.js** - Component loading system
- **script.js** - Main functionality (menu, parallax, carousel, scroll)
- **faq.js** - FAQ-specific enhancements

#### Component Structure
- Each component is a standalone HTML file
- Components use relative paths: `../assets/...`
- Components are loaded asynchronously for better performance

### Development Workflow

1. **Edit Components** - Modify files in `landing_page/components/`
2. **Update Styles** - Edit `landing_page/css/style.css` or `responsive.css`
3. **Modify Scripts** - Update JavaScript files in `landing_page/js/`
4. **Test Locally** - Use a local server to test changes
5. **Refresh Browser** - Components reload automatically

### Code Style

- **HTML**: Semantic, accessible markup
- **CSS**: BEM-like naming, custom properties
- **JavaScript**: ES6+, IIFE for scope isolation, strict mode

---

## 🎨 Design System

### Color Palette

```css
Primary:     #1c76e4  /* Main brand color */
Accent:      #0a65d9  /* Accent and highlights */
Text:        #12345b  /* Primary text */
Text Muted:  #5f7f9f  /* Secondary text */
Background:  #f6fbff  /* Page background */
Surface:     #ffffff  /* Card/container background */
```

### Typography

- **Font Family**: Inter (Google Fonts)
- **Font Weights**: 300, 400, 600, 700, 800
- **Font Sizes**: 14px - 52px (responsive scale)

### Spacing Scale

```
--s-1: 6px
--s-2: 10px
--s-3: 14px
--s-4: 18px
--s-5: 24px
--s-6: 32px
--s-7: 48px
--s-8: 64px
```

### Breakpoints

| Device | Breakpoint | Description |
|--------|-----------|-------------|
| Small Mobile | < 480px | Small phones |
| Mobile | 480px - 767px | Large phones |
| Tablet | 768px - 1023px | Tablets |
| Desktop | 1024px - 1439px | Laptops |
| Large Desktop | 1440px+ | Large screens |

---

## 🌐 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | Latest | ✅ Full |
| Firefox | Latest | ✅ Full |
| Safari | Latest | ✅ Full |
| Edge | Latest | ✅ Full |
| IE 11 | - | ❌ Not supported |

### Modern Features Used
- CSS Custom Properties
- CSS Grid & Flexbox
- Fetch API
- Intersection Observer API
- ES6+ JavaScript

---

## ⚡ Performance

### Optimizations Implemented

- ✅ **Lazy Loading** - Images load only when visible
- ✅ **Component Loading** - Parallel component fetching
- ✅ **RequestAnimationFrame** - Smooth 60fps animations
- ✅ **Intersection Observer** - Efficient scroll detection
- ✅ **Minimal JavaScript** - No heavy frameworks
- ✅ **Optimized CSS** - Separated responsive styles

### Performance Recommendations

1. **Image Optimization**
   - Current images are large (19-28MB each)
   - Recommended: Compress to < 500KB each
   - Consider WebP format for better compression
   - Use responsive images with `srcset`

2. **Caching**
   - Implement browser caching headers
   - Use service workers for offline support (optional)

3. **CDN**
   - Host assets on a CDN for faster delivery
   - Use font-display: swap for Google Fonts

---

## 📝 Missing Assets

The following assets need to be added:

- `assets/images/treatments/treatment-1.jpg`
- `assets/images/treatments/treatment-2.jpg`
- `assets/images/treatments/treatment-3.jpg`
- `assets/images/location-map.png`
- `assets/images/favicon.png`

These are referenced with error handling (images will hide if not found).

---

## 🔄 Dynamic Content Loading

The project includes JSON data files for optional dynamic content loading:

- **testimonials.json** - Testimonial data structure
- **faq.json** - FAQ data structure

To enable dynamic loading, uncomment the relevant code in `faq.js` or create a similar loader for testimonials.

---

## 📞 Contact Information

**AAA Ortho Clinic**

- **Phone**: +91 82 20 77 61 19
- **Email**: aaaorthoclinic@gmail.com
- **Location**: Vadachery Road, Pattukkottai, Tamil Nadu
- **Hours**: 11 AM - 2 PM | 6 PM - 9 PM

---

## 📄 License

© 2025 - All rights reserved AAA Ortho Clinic

**Designed by**: Roaming Digitals

---

## 🙏 Acknowledgments

- **Inter Font** - Google Fonts
- **Material Design Icons** - Icon resources
- **Modern CSS** - CSS Grid, Flexbox, Custom Properties

---

## 📚 Additional Resources

### Documentation
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [Can I Use](https://caniuse.com/) - Browser compatibility

### Tools
- [ImageOptim](https://imageoptim.com/) - Image compression
- [TinyPNG](https://tinypng.com/) - PNG/JPEG compression
- [WebPageTest](https://www.webpagetest.org/) - Performance testing

---

<div align="center">

**Built with ❤️ for AAA Ortho Clinic**

[Report Bug](mailto:aaaorthoclinic@gmail.com) · [Request Feature](mailto:aaaorthoclinic@gmail.com)

</div>
