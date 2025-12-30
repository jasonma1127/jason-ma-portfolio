# Jason Ma - Portfolio Website

Personal portfolio website built with React, showcasing technical skills, projects, and blog posts.

🎨 **Design System**: Apple Liquid Glass Design (2025) with comprehensive design tokens architecture.

## Quick Start

```bash
npm install
npm start        # Development server at http://localhost:3000
npm run build    # Production build
```

## Deployment

**Vercel** (Recommended - Automatic CI/CD)
- Push to GitHub triggers automatic deployment
- Visit [vercel.com](https://vercel.com) to set up

**GitHub Pages** (Manual)
```bash
npm run deploy   # Manual deployment
```

## Tech Stack

- **Frontend**: React 19.2.3 + React Router 7
- **Styling**: SCSS with Design Tokens system
- **Design**: Apple Liquid Glass (glassmorphism effects)
- **Icons**: FontAwesome 7
- **Blog**: WordPress REST API integration
- **CI/CD**: Vercel automatic deployment

## Project Structure

```
src/
├── Components/          # Reusable UI components
│   └── NavigationBar.js
├── Pages/              # Page components
│   ├── HomePage.js     # Landing page with image animations
│   ├── AboutPage.js
│   ├── PortfoliosPage.js
│   ├── BlogPage.js
│   └── ContactPage.js
├── Styles/             # SCSS with Design Tokens
│   ├── _design-tokens.scss     # Primitive & semantic tokens
│   ├── _component-tokens.scss  # Component-specific tokens
│   ├── _mixins.scss           # Reusable mixins
│   ├── Components/            # Component styles
│   └── Pages/                 # Page styles
├── data/               # Static data
│   └── portfoliosData.js
└── image/              # Image assets
```

## Design System

This project uses a **three-tier design tokens architecture**:

1. **Primitive Tokens** - Base colors, never used directly
2. **Semantic Tokens** - Purpose-based (e.g., `$text-primary-dark`)
3. **Component Tokens** - Component-specific (e.g., `$home-img-height`)

Benefits:
- ✅ No hardcoded values
- ✅ Easy theming and maintenance
- ✅ Consistent visual language
- ✅ Single source of truth

## Configuration

**WordPress Blog**: Update API URL in `src/Pages/BlogPage.js`

**Contact Form**: Add Formspree ID in `src/Pages/ContactPage.js`

**Portfolio Projects**: Edit `src/data/portfoliosData.js`

## Documentation

- [SPEC.md](SPEC.md) - Complete technical specification

## Recent Updates (2025-12-30)

- ✅ Fixed home page animation to trigger on every visit
- ✅ Resolved bottom white space issue with flexbox layout
- ✅ Refactored styles to use design tokens (69% code reduction)
- ✅ Added brand colors and icon animation mixins
- ✅ Improved code maintainability and consistency

---

**Author**: Jason Ma | [GitHub](https://github.com/jasonma1127) | [Blog](https://jasonmablog.wordpress.com)
