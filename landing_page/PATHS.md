# Path Reference Guide

This document explains how all file paths are connected in the landing page.

## File Structure

```
/
├── assets/                    # Shared assets (root level)
│   ├── css/
│   ├── js/
│   ├── images/
│   └── icons/
│
└── landing_page/              # Landing page directory
    ├── landingpage.html       # Main HTML file
    ├── css/                   # Landing page CSS
    │   ├── style.css
    │   └── responsive.css
    ├── js/                    # Landing page JavaScript
    │   ├── component-loader.js
    │   ├── script.js
    │   └── faq.js
    └── components/            # HTML components
        ├── header.html
        ├── hero-section.html
        ├── about.html
        ├── treatments.html
        ├── testimonials.html
        ├── why-choose-us.html
        ├── faq.html
        └── footer.html
```

## Path Resolution

### From `landingpage.html` (Main File)

**CSS Files:**
- `css/style.css` → `landing_page/css/style.css` ✅
- `css/responsive.css` → `landing_page/css/responsive.css` ✅

**JavaScript Files:**
- `js/component-loader.js` → `landing_page/js/component-loader.js` ✅
- `js/script.js` → `landing_page/js/script.js` ✅
- `js/faq.js` → `landing_page/js/faq.js` ✅

**Component Files:**
- `components/header.html` → `landing_page/components/header.html` ✅
- `components/hero-section.html` → `landing_page/components/hero-section.html` ✅
- etc.

### From Component Files (when loaded into main HTML)

When components are loaded via `innerHTML`, the browser resolves relative URLs based on the **main HTML file's location** (`landing_page/landingpage.html`), not the component file's location.

**Asset Paths in Components:**
- `../assets/icons/` → Resolves from `landing_page/` → `assets/icons/` ✅
- `../assets/images/` → Resolves from `landing_page/` → `assets/images/` ✅

## Verification Checklist

✅ **CSS Loading:**
- Main HTML loads `css/style.css` and `css/responsive.css`
- Both files exist in `landing_page/css/`

✅ **JavaScript Loading:**
- Component loader loads first: `js/component-loader.js`
- Main scripts load after components: `js/script.js` and `js/faq.js`
- All files exist in `landing_page/js/`

✅ **Component Loading:**
- All 8 components are defined in component-loader.js
- All component files exist in `landing_page/components/`

✅ **Asset Paths:**
- All components use `../assets/` for icons and images
- Paths resolve correctly from main HTML location

## Testing

To verify all paths work correctly:

1. Start a local server from the project root
2. Navigate to `http://localhost:8000/landing_page/landingpage.html`
3. Check browser console for any 404 errors
4. Verify all images, icons, and styles load correctly

## Notes

- **Local Server Required:** Due to CORS restrictions, a local server is required for component loading
- **Path Resolution:** Component asset paths are resolved relative to the main HTML file, not the component file
- **No Build Process:** All paths are relative and work directly without any build step

