# Jason Ma - Portfolio Website

Personal portfolio website built with React, showcasing technical skills, projects, and blog posts.

🌐 **Live Site**: [https://jason-ma-portfolio.vercel.app](https://jason-ma-portfolio.vercel.app)

🎨 **Design System**: Apple Liquid Glass Design (2025) with comprehensive design tokens architecture.

## Quick Start

```bash
npm install
npm start        # Development server at http://localhost:3000
npm run build    # Production build
```

## Deployment

**Vercel** (Production - Automatic CI/CD)
- Live at: [https://jason-ma-portfolio.vercel.app](https://jason-ma-portfolio.vercel.app)
- Push to GitHub triggers automatic deployment
- Configure at [vercel.com](https://vercel.com)

**GitHub Pages** (Alternative)
```bash
npm run deploy   # Manual deployment to gh-pages
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
│   ├── NavigationBar.js
│   ├── AboutSection.js
│   ├── ContactSection.js
│   ├── GitHubStats.js
│   ├── SkillsSection.js
│   ├── ProgressBar.js
│   ├── PortfoliosCard.js
│   ├── BlogCard.js
│   ├── ErrorBoundary.js
│   └── Title.js
├── Pages/              # Page components
│   ├── HomePage.js         # Landing page with image animations
│   ├── AboutPage.js        # About + GitHub Stats + Skills + Contact
│   ├── PortfoliosPage.js
│   ├── BlogPage.js
│   └── NotFoundPage.js     # 404 error page
├── Styles/             # SCSS with Design Tokens
│   ├── design-tokens.scss      # Primitive & semantic tokens
│   ├── component-tokens.scss   # Component-specific tokens
│   ├── mixins.scss            # Reusable mixins
│   ├── Components/            # Component styles
│   └── Pages/                 # Page styles
├── data/               # Static data
│   ├── portfoliosData.js
│   └── githubApi.js    # GitHub API integration
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
```javascript
const API_URL = 'https://your-blog.wordpress.com/wp-json/wp/v2/posts';
```

**GitHub Stats**: Update username in `src/data/githubApi.js`
```javascript
const GITHUB_USERNAME = 'your-username';
```

**Portfolio Projects**: Edit `src/data/portfoliosData.js`

**Google Analytics**: Uncomment and add your tracking ID in `public/index.html`

## Documentation

- [SPEC.md](SPEC.md) - Complete technical specification

## Recent Updates (2025-12-30)

**Version 1.2.0 - Major Feature Update**
- ✅ Removed Contact page, integrated ContactSection into About page
- ✅ Added GitHub API integration for live statistics
- ✅ Added 404 Not Found page with animations
- ✅ Added Error Boundary for crash protection
- ✅ Comprehensive SEO optimization (meta tags, Open Graph, Twitter Cards)
- ✅ Fixed favicon display issues on Vercel deployment
- ✅ Privacy improvements (removed phone number from public display)
- ✅ Fixed home page animation to trigger on every visit
- ✅ Resolved bottom white space issue with flexbox layout
- ✅ Refactored styles to use design tokens (69% code reduction)
- ✅ Added brand colors and icon animation mixins

---

**Author**: Jason Ma | [GitHub](https://github.com/jasonma1127) | [Blog](https://jasonmablog.wordpress.com)
