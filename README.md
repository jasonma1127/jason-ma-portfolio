# Jason Ma - Portfolio Website

Personal portfolio website built with React, showcasing technical skills, projects, and blog posts.

## Quick Start

```bash
npm install
npm start        # Development server at http://localhost:3000
npm run build    # Production build
npm run deploy   # Deploy to GitHub Pages
```

## Tech Stack

- React 19 + React Router 7
- SCSS for styling
- WordPress REST API integration
- FontAwesome icons

## Project Structure

```
src/
├── Components/     # Reusable UI components
├── Pages/         # Page components (Home, About, Portfolios, Blog, Contact)
├── Styles/        # SCSS stylesheets
├── data/          # Static data (portfoliosData.js)
└── image/         # Image assets
```

## Configuration

**WordPress Blog**: Update API URL in `src/Pages/BlogPage.js`

**Contact Form**: Add Formspree ID in `src/Pages/ContactPage.js`

**Portfolio Projects**: Edit `src/data/portfoliosData.js`

## Documentation

See [SPEC.md](SPEC.md) for complete technical specification.

---

**Author**: Jason Ma | [GitHub](https://github.com/jasonma1127) | [Blog](https://jasonmablog.wordpress.com)
