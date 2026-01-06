# Jason Ma - Portfolio Website

Personal portfolio website built with React, showcasing technical skills, projects, and blog posts.

🌐 **Live Site**: [https://jason-ma-portfolio.vercel.app](https://jason-ma-portfolio.vercel.app)

## Features

- **Modern Stack**: React 19 + React Router 7 + SCSS
- **Design System**: Apple Liquid Glass with three-tier design tokens architecture
- **Auto-Sync**: Portfolio projects automatically synced from GitHub repos
- **Blog Integration**: WordPress REST API with dynamic categories
- **GitHub Stats**: Live statistics and language breakdown from GitHub API
- **Responsive**: Mobile-first design with glassmorphism effects

## Quick Start

```bash
# Install dependencies
npm install

# Development server
npm start        # http://localhost:3000

# Production build
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Tech Stack

- **Frontend**: React 19.2.3, React Router 7
- **Styling**: SCSS with Design Tokens
- **APIs**: WordPress REST API, GitHub REST API
- **Deployment**: Vercel (auto-deploy on push)
- **Icons**: FontAwesome 7

## Project Structure

```
src/
├── Components/         # Reusable UI components
├── Pages/             # Page components
├── Styles/            # SCSS with design tokens
├── data/              # Static data & API integration
├── services/          # API services (GitHub)
└── image/             # Image assets
```

## Configuration

### WordPress Blog
Update API URL in `src/Pages/BlogPage.js`:
```javascript
const API_URL = 'https://your-blog.wordpress.com/wp-json/wp/v2/posts';
```

### GitHub Username
Update username in `src/services/githubApi.js`:
```javascript
const GITHUB_USERNAME = 'your-username';
```

### Portfolio Projects
Add GitHub topic `portfolio-display` to your repos to automatically include them. See [SPEC.md](SPEC.md) for detailed configuration.

## Documentation

- **[SPEC.md](SPEC.md)** - Complete technical specification and development guide

## License

MIT License - feel free to use this as a template for your own portfolio!

---

**Author**: Jason Ma | [GitHub](https://github.com/jasonma1127) | [Blog](https://jasonmablog.wordpress.com)
