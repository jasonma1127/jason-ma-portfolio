# Jason Ma Portfolio Website - Technical Specification

**Version:** 1.1.0
**Last Updated:** 2025-12-30
**Status:** Active Development
**Purpose:** Single Source of Truth for Specification-Driven Development (SDD)

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Technology Stack](#2-technology-stack)
3. [Project Structure](#3-project-structure)
4. [Architecture](#4-architecture)
5. [Pages Specification](#5-pages-specification)
6. [Components Specification](#6-components-specification)
7. [Data Structures](#7-data-structures)
8. [API Integration](#8-api-integration)
9. [Styling System](#9-styling-system)
10. [Routing](#10-routing)
11. [Development Guidelines](#11-development-guidelines)
12. [Future Enhancements](#12-future-enhancements)

---

## 1. Project Overview

### 1.1 Purpose
A professional portfolio website for Jason Ma, showcasing technical skills, projects, blog posts, and contact information for job seeking and professional networking.

### 1.2 Target Audience
- Potential employers
- Recruiters
- Technical peers
- Collaborators

### 1.3 Key Features
- **Home Page**: Introduction with animated elements and social media links
- **About Page**: Personal information, education, and technical skills visualization
- **Portfolios Page**: Display of side projects with filtering capabilities
- **Blog Page**: Integration with WordPress blog (https://jasonmablog.wordpress.com)
- **Contact Page**: Contact form and social media links

### 1.4 Design Philosophy
- Professional and clean aesthetic
- Responsive design (mobile, tablet, desktop)
- Dark theme with accent colors
- Smooth animations and transitions

---

## 2. Technology Stack

### 2.1 Core Technologies
```json
{
  "react": "^19.2.3",
  "react-dom": "^19.2.3",
  "react-router-dom": "^7.11.0",
  "react-scripts": "^5.0.1"
}
```

### 2.2 UI Libraries
```json
{
  "@fortawesome/fontawesome-svg-core": "^7.1.0",
  "@fortawesome/free-brands-svg-icons": "^7.1.0",
  "@fortawesome/free-solid-svg-icons": "^7.1.0",
  "@fortawesome/react-fontawesome": "^3.1.1",
  "bootstrap": "^5.1.0",
  "react-bootstrap": "^2.0.0-beta.5"
}
```

### 2.3 Styling
```json
{
  "sass": "^1.35.2"
}
```

### 2.4 Testing
```json
{
  "@testing-library/jest-dom": "^5.14.1",
  "@testing-library/react": "^16.3.1",
  "@testing-library/user-event": "^14.6.1"
}
```

### 2.5 Development Tools
```json
{
  "husky": "^9.1.7",
  "@commitlint/cli": "^20.2.0",
  "@commitlint/config-conventional": "^20.2.0",
  "gh-pages": "^3.2.3"
}
```

### 2.6 Node.js Version
- **Recommended**: Node.js v16.x or v18.x
- **Current Testing**: v23.4.0 (with compatibility adjustments)

---

## 3. Project Structure

```
jason-ma-portfolio/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── Components/
│   │   ├── AboutSection.js
│   │   ├── BlogCard.js
│   │   ├── NavigationBar.js
│   │   ├── PortfoliosCard.js
│   │   ├── ProgressBar.js
│   │   ├── SkillsSection.js
│   │   └── Title.js
│   ├── Pages/
│   │   ├── AboutPage.js
│   │   ├── BlogPage.js
│   │   ├── ContactPage.js
│   │   ├── HomePage.js
│   │   └── PortfoliosPage.js
│   ├── Styles/
│   │   ├── Components/
│   │   │   ├── _aboutSection.scss
│   │   │   ├── _blogCard.scss
│   │   │   ├── _navigationBar.scss
│   │   │   ├── _portfoliosCard.scss
│   │   │   ├── _progressBar.scss
│   │   │   ├── _skillsSection.scss
│   │   │   └── _title.scss
│   │   └── Pages/
│   │       ├── _aboutPage.scss
│   │       ├── _blogPage.scss
│   │       ├── _contactPage.scss
│   │       ├── _homePage.scss
│   │       ├── _pageLayout.scss
│   │       └── _portfoliosPage.scss
│   ├── data/
│   │   └── portfoliosData.js
│   ├── image/
│   │   ├── jason_1.png
│   │   ├── jason_2.png
│   │   └── jason_3.png
│   ├── App.js
│   ├── App.scss
│   └── index.js
├── package.json
├── commitlint.config.js
├── SPEC.md (this file)
└── README.md
```

---

## 4. Architecture

### 4.1 Component Architecture
- **Functional Components**: All components use React functional components with Hooks
- **No Class Components**: Modern React patterns only
- **State Management**: Local state using `useState` hook
- **Side Effects**: `useEffect` for lifecycle operations

### 4.2 Routing Architecture
```javascript
// React Router v7 pattern
<Routes>
  <Route path="/" element={<Layout><HomePage /></Layout>} />
  <Route path="/about" element={<Layout><AboutPage /></Layout>} />
  <Route path="/portfolios" element={<Layout><PortfoliosPage /></Layout>} />
  <Route path="/blog" element={<Layout><BlogPage /></Layout>} />
  <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
</Routes>
```

### 4.3 Data Flow
1. **Static Data**: `src/data/portfoliosData.js` for portfolio projects
2. **External API**: WordPress REST API for blog posts
3. **Props**: Parent to child component communication
4. **Local State**: Component-level state management

---

## 5. Pages Specification

### 5.1 HomePage (`src/Pages/HomePage.js`)

**Purpose**: Landing page with introduction and social links

**Features**:
- Animated entrance with three images (left, main, right)
- Professional title: "Jason Ma - Web Developer X Programmer"
- Call-to-action "Contact Me" button
- Social media icons (GitHub, Facebook, WordPress, YouTube)
- Animation triggered by `useEffect` on every page visit

**Props**: None

**State**:
```javascript
{
  movement: string // Animation class trigger ("" or "move")
}
```

**Animation Lifecycle**:
```javascript
useEffect(() => {
  setMovement("");           // Reset animation
  const timer = setTimeout(() => {
    setMovement("move");     // Trigger animation
  }, 50);
  return () => clearTimeout(timer);
}, []);
```
This ensures animation plays on every visit, not just page refresh

**External Links**:
- GitHub: https://github.com/jasonma1127
- Facebook: https://www.facebook.com/jason.ma.1297
- WordPress: https://jasonmablog.wordpress.com/
- YouTube: https://www.youtube.com/channel/UCzOVp14LJtd6Go4mpzfNFvw

**Images Required**:
- `jason_1.png` (main)
- `jason_2.png` (left)
- `jason_3.png` (right)

---

### 5.2 AboutPage (`src/Pages/AboutPage.js`)

**Purpose**: Display personal information and technical skills

**Components Used**:
- `Title` (title="about", span="about")
- `AboutSection`
- `SkillsSection`

**Layout**:
```
┌─────────────────────┐
│   Title: ABOUT      │
├─────────────────────┤
│  AboutSection       │
│  - Name, Age        │
│  - Email            │
│  - Education        │
│  - Download CV      │
├─────────────────────┤
│  SkillsSection      │
│  - Progress Bars    │
└─────────────────────┘
```

**Props**: None

---

### 5.3 PortfoliosPage (`src/Pages/PortfoliosPage.js`)

**Purpose**: Showcase side projects and technical work

**Features**:
- Project filtering (All, Featured)
- Grid layout of project cards
- Technology tags
- Links to GitHub, Live Demo, Blog Posts

**Props**: None

**State**:
```javascript
{
  filter: string // "all" | "featured" | <technology-name>
}
```

**Data Source**: `src/data/portfoliosData.js`

**Filtering Logic**:
1. "all" - Show all projects
2. "featured" - Show only `featured: true` projects
3. By technology - Show projects containing specific technology

---

### 5.4 BlogPage (`src/Pages/BlogPage.js`)

**Purpose**: Display blog posts from WordPress

**Features**:
- Fetch posts from WordPress REST API
- Filter by category (All, Tech, Life)
- Loading state
- Error handling
- Responsive grid layout

**Props**: None

**State**:
```javascript
{
  posts: Array<WordPressPost>,
  loading: boolean,
  error: string | null,
  filter: string // "all" | "tech" | "life"
}
```

**API Endpoint**:
```
https://public-api.wordpress.com/rest/v1.1/sites/jasonmablog.wordpress.com/posts/
```

**Components Used**:
- `Title` (title="blog", span="blog")
- `BlogCard` (multiple instances)

---

### 5.5 ContactPage (`src/Pages/ContactPage.js`)

**Purpose**: Contact form and contact information

**Features**:
- Form with validation (name, email, subject, message)
- Integration with Formspree (configurable)
- Success/Error status messages
- Contact information display
- Social media links

**Props**: None

**State**:
```javascript
{
  formData: {
    name: string,
    email: string,
    subject: string,
    message: string
  },
  status: string, // "" | "success" | "error"
  isSubmitting: boolean
}
```

**Form Endpoint**:
```
https://formspree.io/f/YOUR_FORM_ID
```
*Note: Requires Formspree account setup*

**Contact Information**:
- Email: jasonma1127@gmail.com
- Location: Taiwan

---

## 6. Components Specification

### 6.1 NavigationBar (`src/Components/NavigationBar.js`)

**Purpose**: Main navigation menu

**Props**:
```typescript
{
  page: string // Current page identifier for styling
}
```

**State**:
```javascript
{
  click: boolean // Mobile menu toggle state
}
```

**Features**:
- Responsive design (desktop/tablet/mobile)
- Mobile hamburger menu
- Active route highlighting
- Logo: "JASON MA"

**Navigation Links**:
1. Home (`/`)
2. About (`/about`)
3. Portfolios (`/portfolios`)
4. Blog (`/blog`)
5. Contact (`/contact`)

**Behavior**:
- Desktop: Horizontal navigation bar
- Mobile/Tablet: Hamburger menu with slide-in panel

---

### 6.2 Title (`src/Components/Title.js`)

**Purpose**: Reusable page title component

**Props**:
```typescript
{
  title: string,  // Main title text
  span: string    // Span text (usually same as title for styling)
}
```

**Usage**:
```jsx
<Title title="about" span="about" />
<Title title="portfolios" span="portfolios" />
<Title title="blog" span="blog" />
<Title title="contact" span="contact" />
```

---

### 6.3 AboutSection (`src/Components/AboutSection.js`)

**Purpose**: Display personal information

**Props**: None

**Content**:
```javascript
{
  Name: "Jason Ma",
  Age: "23",
  Email: "jasonma1127@gmail.com",
  Education: "NTUST Taiwan TECH",
  Major: "Computer Science"
}
```

**Features**:
- Download CV button (to be implemented)

---

### 6.4 SkillsSection (`src/Components/SkillsSection.js`)

**Purpose**: Display technical skills with visual progress bars

**Props**: None

**Skills**:
```javascript
[
  { title: "C++", percentage: "80%" },
  { title: "Java", percentage: "76%" },
  { title: "Python", percentage: "70%" },
  { title: "HTML", percentage: "60%" },
  { title: "CSS", percentage: "52%" },
  { title: "JavaScript", percentage: "43%" }
]
```

**Components Used**:
- `ProgressBar` (6 instances)

---

### 6.5 ProgressBar (`src/Components/ProgressBar.js`)

**Purpose**: Visual representation of skill proficiency

**Props**:
```typescript
{
  title: string,      // Skill name
  percentage: string  // Percentage value (e.g., "80%")
}
```

**State**:
```javascript
{
  percentage: string // Animated percentage value
}
```

**Behavior**:
- Animates from 0 to target percentage on mount
- Visual bar fills to percentage width

---

### 6.6 PortfoliosCard (`src/Components/PortfoliosCard.js`)

**Purpose**: Display individual project information

**Props**:
```typescript
{
  project: {
    id: number,
    title: string,
    description: string,
    image: string | null,
    technologies: string[],
    githubUrl: string | null,
    liveUrl: string | null,
    blogPostUrl: string | null,
    featured: boolean
  }
}
```

**Features**:
- Optional project image
- Technology tags
- Conditional rendering of links (GitHub, Live Demo, Blog Post)
- Featured project styling

**Icons Used**:
- `faGithub` - GitHub link
- `faExternalLinkAlt` - Live demo link
- `faNewspaper` - Blog post link

---

### 6.7 BlogCard (`src/Components/BlogCard.js`)

**Purpose**: Display individual blog post from WordPress

**Props**:
```typescript
{
  post: WordPressPost {
    ID: number,
    title: string,
    excerpt: string,
    content: string,
    date: string,
    URL: string,
    featured_image: string | null,
    categories: {
      [key: string]: {
        name: string,
        slug: string
      }
    }
  }
}
```

**Features**:
- Featured image display
- HTML stripping for excerpt
- Date formatting (zh-TW locale)
- Category tags
- "Read More" link to WordPress post

**Helper Functions**:
```javascript
getExcerpt(content, length = 150) // Strip HTML and truncate
formatDate(dateString) // Format to Chinese locale
getCategories() // Extract category names
```

---

## 7. Data Structures

### 7.1 Portfolio Project Schema

**File**: `src/data/portfoliosData.js`

```typescript
interface PortfolioProject {
  id: number;                    // Unique identifier
  title: string;                 // Project name
  description: string;           // Project description
  image: string | null;          // Path to project screenshot
  technologies: string[];        // Array of technology names
  githubUrl: string | null;      // GitHub repository URL
  liveUrl: string | null;        // Live deployment URL
  blogPostUrl: string | null;    // Related blog post URL
  featured: boolean;             // Featured project flag
}

type PortfoliosData = PortfolioProject[];
```

**Example**:
```javascript
{
  id: 1,
  title: "個人作品集網站",
  description: "使用 React 建立的響應式個人作品集網站，整合 WordPress 部落格 API",
  image: null,
  technologies: ["React", "SCSS", "WordPress API", "React Router"],
  githubUrl: "https://github.com/jasonma1127/jason-ma-portfolio",
  liveUrl: null,
  blogPostUrl: null,
  featured: true
}
```

---

### 7.2 WordPress Post Schema

**Source**: WordPress REST API v1.1

```typescript
interface WordPressPost {
  ID: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;              // ISO 8601 format
  modified: string;          // ISO 8601 format
  URL: string;               // Canonical post URL
  short_URL: string;
  featured_image: string | null;
  author: {
    ID: number;
    name: string;
    // ... additional author fields
  };
  categories: {
    [slug: string]: {
      ID: number;
      name: string;
      slug: string;
      description: string;
      post_count: number;
    }
  };
  tags: {
    [slug: string]: {
      ID: number;
      name: string;
      slug: string;
      description: string;
      post_count: number;
    }
  };
  // ... additional fields
}

interface WordPressAPIResponse {
  found: number;             // Total posts found
  posts: WordPressPost[];    // Array of post objects
}
```

---

### 7.3 Contact Form Data

```typescript
interface ContactFormData {
  name: string;              // Required
  email: string;             // Required, email format
  subject: string;           // Required
  message: string;           // Required
}
```

---

## 8. API Integration

### 8.1 WordPress REST API

**Base URL**:
```
https://public-api.wordpress.com/rest/v1.1/sites/jasonmablog.wordpress.com
```

**Endpoint**:
```
GET /posts/
```

**Query Parameters** (optional):
```
?number=<number>     // Posts per page (default: 20)
?offset=<number>     // Pagination offset
?category=<slug>     // Filter by category
?tag=<slug>          // Filter by tag
?search=<query>      // Search posts
```

**Implementation**:
```javascript
// Location: src/Pages/BlogPage.js
const fetchWordPressPosts = async () => {
  try {
    setLoading(true);
    const response = await fetch(
      "https://public-api.wordpress.com/rest/v1.1/sites/jasonmablog.wordpress.com/posts/"
    );
    const data = await response.json();
    setPosts(data.posts || []);
    setLoading(false);
  } catch (err) {
    setError("無法載入文章，請稍後再試");
    setLoading(false);
    console.error("Error fetching WordPress posts:", err);
  }
};
```

**Error Handling**:
- Network errors
- API unavailable
- Invalid response format
- Display user-friendly error message

---

### 8.2 Formspree Contact Form API

**Endpoint**:
```
POST https://formspree.io/f/YOUR_FORM_ID
```

**Setup Required**:
1. Register at https://formspree.io/
2. Create a new form
3. Replace `YOUR_FORM_ID` in `src/Pages/ContactPage.js`

**Request Format**:
```javascript
{
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: string,
    email: string,
    subject: string,
    message: string
  })
}
```

**Response Handling**:
- Success: Display success message, reset form
- Error: Display error message, keep form data

---

## 9. Styling System

### 9.1 Design Tokens Architecture

**Three-Tier Token System**:
1. **Primitive Tokens** - Base colors (never used directly in components)
2. **Semantic Tokens** - Purpose-based (e.g., `$text-primary-dark`, `$surface-secondary`)
3. **Component Tokens** - Component-specific (e.g., `$home-img-height`, `$button-radius`)

**Benefits**:
- ✅ No hardcoded values
- ✅ Easy theming and maintenance
- ✅ Consistent visual language
- ✅ Single source of truth

**File Structure**:
- `src/Styles/_design-tokens.scss` - Primitive & semantic tokens
- `src/Styles/_component-tokens.scss` - Component-specific tokens
- `src/Styles/_mixins.scss` - Reusable mixins

### 9.2 Color Palette

**Primitive Colors** (Base - Do not use directly):
```scss
$primitive-blue-400: #89acd2;
$primitive-green-400: #90d5b1;
$primitive-gray-700: #595d64;
$primitive-gray-100: #f3f5f8;
// Additional shades defined in _design-tokens.scss
```

**Semantic Tokens** (Use in components):
```scss
$surface-secondary: $primitive-gray-700;      // Dark pages background
$text-primary-dark: $primitive-white;         // Primary text on dark bg
$text-secondary-dark: $primitive-gray-200;    // Secondary text on dark bg
$interactive-primary: $primitive-blue-400;    // Primary interactive color
$interactive-secondary: $primitive-green-400; // Secondary interactive color
```

**Brand Colors** (Social Media):
```scss
$brand-github: #6e5494;
$brand-facebook: #4267b2;
$brand-wordpress: #21759b;
$brand-youtube: #ff0000;
```

**Glass Effect Tokens**:
```scss
$glass-bg-dark: rgba(60, 64, 67, 0.72);
$glass-border-dark: rgba(255, 255, 255, 0.15);
$glass-blur: saturate(180%) blur(20px);
$glass-shadow-md: 0 8px 32px rgba(0, 0, 0, 0.12);
```

### 9.3 Component Tokens

**Home Page Animation**:
```scss
$home-img-container-width: 40%;
$home-img-height: 40vh;
$home-img-height-mobile: 30vh;
$home-img-move-distance: 5%;
$home-title-letter-spacing: 4px;
$home-title-letter-spacing-mobile: 2px;
$home-animation-duration: 1s;
$home-animation-delay: 1s;
$home-animation-timing: ease;
```

**Button Tokens**:
```scss
$button-radius: $radius-md;  // 12px
$button-shadow: $glass-shadow-sm;
$button-shadow-hover: $glass-shadow-lg;
```

### 9.4 Spacing System (8pt Grid)

```scss
$spacing-1: 0.5rem;     // 8px
$spacing-2: 1rem;       // 16px
$spacing-3: 1.5rem;     // 24px
$spacing-4: 2rem;       // 32px
$spacing-5: 2.5rem;     // 40px
$spacing-6: 3rem;       // 48px
$spacing-8: 4rem;       // 64px
$spacing-10: 5rem;      // 80px
$spacing-12: 6rem;      // 96px
$spacing-16: 8rem;      // 128px
```

All spacing must use tokens from the 8pt grid system

---

### 9.5 Typography

**Font Stack**:
```scss
$font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
```

**Font Sizes** (Modular scale: 1.25 ratio):
```scss
$text-xs: 0.75rem;      // 12px
$text-sm: 0.875rem;     // 14px
$text-base: 1rem;       // 16px
$text-lg: 1.125rem;     // 18px
$text-xl: 1.25rem;      // 20px
$text-2xl: 1.5rem;      // 24px
$text-3xl: 1.875rem;    // 30px
$text-4xl: 2.25rem;     // 36px
$text-5xl: 3rem;        // 48px
$text-6xl: 3.75rem;     // 60px
```

**Font Weights**:
```scss
$font-normal: 400;
$font-medium: 500;
$font-semibold: 600;
$font-bold: 700;
```

**Line Heights**:
```scss
$leading-tight: 1.25;
$leading-normal: 1.5;
$leading-relaxed: 1.625;
$leading-loose: 2;
```

---

### 9.6 Responsive Breakpoints

```scss
@mixin mobile {
  @media (max-width: 480px) {
    @content;
  }
}

@mixin pad {
  @media (max-width: 1024px) {
    @content;
  }
}
```

**Breakpoints**:
- Desktop: > 1024px
- Tablet/Pad: ≤ 1024px
- Mobile: ≤ 480px

---

### 9.7 Mixins

**Glass Surface Mixin**:
```scss
@mixin glass-surface($bg-color, $border-color) {
  background: $bg-color;
  backdrop-filter: $glass-blur;
  -webkit-backdrop-filter: $glass-blur;
  border: 1px solid $border-color;
  box-shadow: $glass-shadow-md, $glass-inset-highlight;
}
```

**Home Icon Animation Mixin**:
```scss
@mixin home-icon-animation($brand-color) {
  opacity: 1;
  transition: $home-animation-duration all $home-animation-timing;
  transition-delay: $home-animation-delay;

  &:hover {
    color: $brand-color;
    transform: translateY(-3px) scale(1.1);
    filter: drop-shadow(0 4px 8px rgba($brand-color, 0.3));
    transition-delay: 0s;
  }
}
```

### 9.8 Layout System

**Page Layout** (Flexbox for viewport height):
```scss
html, body, #root {
  height: 100%;
}

.App {
  height: 100%;
  display: flex;
  flex-direction: column;

  .nav-bar {
    height: 10vh;
    min-height: 64px;
    flex-shrink: 0;
  }

  .main-content {
    flex: 1;  // Fills remaining space, prevents bottom whitespace
    background: $surface-secondary;
  }
}
```

**Grid Systems**:
```scss
// Blog grid
.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

// Portfolios grid
.portfolios-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}
```

---

### 9.9 Animation System

**Home Page Animations**:

All animations controlled by design tokens for easy maintenance:
```scss
// Animation timing
$home-animation-duration: 1s;
$home-animation-delay: 1s;
$home-animation-timing: ease;
```

**Animation Trigger**:
- React useEffect resets animation on every page visit
- "move" class applied after component mount
- Ensures animation plays when navigating between pages

**Animation Classes**:
```scss
.move {
  // Applied to trigger entrance animations
  // Specific properties defined per component
}
```

---

## 10. Routing

### 10.1 Route Configuration

**Router**: React Router v7

**Base Configuration**:
```jsx
// src/index.js
<BrowserRouter>
  <App />
</BrowserRouter>
```

**Routes**:
```jsx
// src/App.js
<Routes>
  <Route path={process.env.PUBLIC_URL + "/"} element={...} />
  <Route path={process.env.PUBLIC_URL + "/about"} element={...} />
  <Route path={process.env.PUBLIC_URL + "/portfolios"} element={...} />
  <Route path={process.env.PUBLIC_URL + "/blog"} element={...} />
  <Route path={process.env.PUBLIC_URL + "/contact"} element={...} />
</Routes>
```

---

### 10.2 Navigation Patterns

**Internal Navigation**:
```jsx
import { Link } from "react-router-dom";
<Link to="/contact">Contact Me</Link>
```

**External Navigation**:
```jsx
<Link to={{ pathname: "https://github.com/..." }} target="_blank">
  GitHub
</Link>
```

**Active Route Detection**:
```jsx
<NavLink
  to="/about"
  className={({ isActive }) => isActive ? "active" : ""}
>
  About
</NavLink>
```

---

## 11. Development Guidelines

### 11.1 Code Style

**React Patterns**:
- Use functional components only
- Use Hooks for state and effects
- Keep components small and focused
- Extract reusable logic into custom hooks (when needed)

**Naming Conventions**:
- Components: PascalCase (e.g., `BlogCard.js`)
- Files: Match component name
- CSS classes: kebab-case (e.g., `blog-card`)
- Constants: UPPER_SNAKE_CASE
- Variables/Functions: camelCase

**Import Order**:
1. React imports
2. Third-party libraries
3. Components
4. Utilities/Helpers
5. Data
6. Assets (images, styles)

---

### 11.2 Component Structure Template

```jsx
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types"; // If using prop validation

function ComponentName({ prop1, prop2 }) {
  // State declarations
  const [state, setState] = useState(initialValue);

  // Effect hooks
  useEffect(() => {
    // Side effects
  }, [dependencies]);

  // Helper functions
  const helperFunction = () => {
    // Logic
  };

  // Render
  return (
    <div className="component-name">
      {/* JSX */}
    </div>
  );
}

// Prop validation (optional but recommended)
ComponentName.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.number
};

export default ComponentName;
```

---

### 11.3 State Management Guidelines

**When to use local state**:
- Component-specific UI state
- Form inputs
- Toggle states
- Loading/Error states

**When to consider global state** (future):
- User authentication
- Theme preferences
- Shared data across multiple pages

---

### 11.4 ESLint Rules

**Current Warnings to Fix**:
1. `useEffect` dependencies warnings
2. Unused variables
3. Missing dependency arrays

**Recommended Fixes**:
```javascript
// Before
useEffect(() => {
  setPercentage(props.percentage);
}); // Missing dependency array

// After
useEffect(() => {
  setPercentage(props.percentage);
}, [props.percentage]); // Added dependency array
```

---

### 11.5 Git Commit Guidelines

**Using Commitlint** (configured):
```bash
# Format
<type>(<scope>): <subject>

# Types
feat: New feature
fix: Bug fix
docs: Documentation
style: Formatting
refactor: Code restructuring
test: Testing
chore: Maintenance
```

**Examples**:
```bash
git commit -m "feat(blog): add WordPress API integration"
git commit -m "fix(navigation): resolve mobile menu toggle issue"
git commit -m "docs(spec): update component specifications"
```

---

## 12. Future Enhancements

### 12.1 Planned Features

**High Priority**:
1. CV Download functionality
2. Formspree form integration completion
3. Project image uploads
4. Blog post image optimization
5. Dark/Light theme toggle

**Medium Priority**:
1. Search functionality for blog posts
2. Pagination for blog and portfolios
3. Contact form spam protection
4. SEO optimization (meta tags, sitemap)
5. Analytics integration (Google Analytics)

**Low Priority**:
1. Multi-language support (EN/ZH)
2. Blog comments integration
3. Portfolio filtering by technology
4. Animations library (Framer Motion)
5. Progressive Web App (PWA) features

---

### 12.2 Technical Debt

**Current Issues**:
1. ✅ React Router v5 → v7 migration (COMPLETED)
2. ✅ React 17 → React 19 upgrade (COMPLETED)
3. ESLint warnings in `useEffect` hooks
4. Missing error boundaries
5. No loading skeletons for async data
6. No unit tests
7. No integration tests

**Recommended Actions**:
1. Fix all ESLint warnings
2. Add error boundaries for API calls
3. Implement loading skeletons
4. Write unit tests for components
5. Add integration tests for pages
6. Set up CI/CD pipeline

---

### 12.3 Performance Optimization

**Opportunities**:
1. Lazy load route components
2. Image optimization and lazy loading
3. Code splitting
4. Bundle size optimization
5. Caching strategy for WordPress API

**Implementation Plan**:
```javascript
// Lazy loading example
const BlogPage = lazy(() => import('./Pages/BlogPage'));
const PortfoliosPage = lazy(() => import('./Pages/PortfoliosPage'));

<Suspense fallback={<LoadingSpinner />}>
  <Routes>
    <Route path="/blog" element={<BlogPage />} />
  </Routes>
</Suspense>
```

---

### 12.4 Accessibility (a11y)

**Current State**: Basic accessibility

**Improvements Needed**:
1. ARIA labels for interactive elements
2. Keyboard navigation support
3. Screen reader optimization
4. Focus management
5. Color contrast compliance (WCAG AA)
6. Alt text for all images

---

## 13. Deployment

### 13.1 Build Configuration

**Build Command**:
```bash
npm run build
```

**Output**: `build/` directory

**Environment Variables**:
- `PUBLIC_URL`: Base URL for deployment

---

### 13.2 Deployment Targets

**Recommended**:
- Vercel (automatic CI/CD)
- Netlify
- GitHub Pages (configured via `gh-pages` package)

**Commands**:
```bash
npm run predeploy  # Builds the project
npm run deploy     # Deploys to gh-pages
```

**Additional Options**:
- AWS S3 + CloudFront
- Firebase Hosting

---

### 13.3 CI/CD Pipeline (Future)

**Recommended Setup**:
1. GitHub Actions workflow
2. Automated testing on PR
3. Automatic deployment on merge to main
4. Build size monitoring
5. Lighthouse CI for performance tracking

---

## 14. Maintenance & Support

### 14.1 Regular Updates

**Monthly**:
- Dependency updates (security patches)
- Content updates (portfolios, blog posts)

**Quarterly**:
- Major dependency updates
- Performance audits
- Accessibility audits

---

### 14.2 Monitoring

**Recommended Tools**:
1. Google Analytics - User behavior
2. Sentry - Error tracking
3. Lighthouse - Performance monitoring
4. Uptime monitoring service

---

### 14.3 Backup Strategy

**Source Code**: Git repository (GitHub)

**Data**:
- Portfolio projects: Version controlled in `portfoliosData.js`
- Blog posts: Hosted on WordPress (external backup)
- Images: Store in Git or CDN with backup

---

## 15. Contact & Support

**Developer**: Jason Ma
**Email**: jasonma1127@gmail.com
**GitHub**: https://github.com/jasonma1127
**WordPress**: https://jasonmablog.wordpress.com/

---

## Document Changelog

| Version | Date       | Author    | Changes                                             |
|---------|------------|-----------|-----------------------------------------------------|
| 1.1.0   | 2025-12-30 | Jason Ma  | Added design tokens architecture, updated styling system, documented Home page animation fixes |
| 1.0.0   | 2025-12-28 | Jason Ma  | Initial specification document                      |

---

**END OF SPECIFICATION**

*This document serves as the Single Source of Truth for the Jason Ma Portfolio Website project. All development decisions should reference and update this specification accordingly.*
