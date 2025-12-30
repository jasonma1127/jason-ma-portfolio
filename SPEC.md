# Jason Ma Portfolio Website - Technical Specification

**Version:** 1.2.0
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
- **About Page**: Personal information, GitHub statistics, dynamic language skills, and contact section
- **Portfolios Page**: Display of side projects with filtering capabilities
- **Blog Page**: Integration with WordPress blog (https://jasonmablog.wordpress.com)

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
│   │   ├── ContactSection.js
│   │   ├── GitHubStats.js
│   │   ├── NavigationBar.js
│   │   ├── PortfoliosCard.js
│   │   ├── ProgressBar.js
│   │   ├── SkillsSection.js
│   │   └── Title.js
│   ├── Pages/
│   │   ├── AboutPage.js
│   │   ├── BlogPage.js
│   │   ├── HomePage.js
│   │   └── PortfoliosPage.js
│   ├── Styles/
│   │   ├── _component-tokens.scss
│   │   ├── _design-tokens.scss
│   │   ├── _mixins.scss
│   │   ├── Components/
│   │   │   ├── _aboutSection.scss
│   │   │   ├── _blogCard.scss
│   │   │   ├── _contactSection.scss
│   │   │   ├── _githubStats.scss
│   │   │   ├── _navigationBar.scss
│   │   │   ├── _portfoliosCard.scss
│   │   │   ├── _progressBar.scss
│   │   │   ├── _skillsSection.scss
│   │   │   └── _title.scss
│   │   └── Pages/
│   │       ├── _aboutPage.scss
│   │       ├── _blogPage.scss
│   │       ├── _homePage.scss
│   │       ├── _pageLayout.scss
│   │       └── _portfoliosPage.scss
│   ├── data/
│   │   └── portfoliosData.js
│   ├── services/
│   │   └── githubApi.js
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
</Routes>
```

**Note**: Contact page has been removed. Contact functionality is now integrated into the About page via the ContactSection component.

### 4.3 Data Flow
1. **Static Data**: `src/data/portfoliosData.js` for portfolio projects
2. **External APIs**:
   - WordPress REST API for blog posts
   - GitHub REST API for user statistics and language data
3. **Caching**: localStorage with 24-hour TTL for GitHub API data
4. **Props**: Parent to child component communication
5. **Local State**: Component-level state management

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

**Purpose**: Display personal information, GitHub statistics, dynamic skills, and contact methods

**Components Used**:
- `Title` (title="about", span="about")
- `AboutSection`
- `GitHubStats`
- `SkillsSection`
- `ContactSection`

**Layout**:
```
┌─────────────────────────────┐
│   Title: ABOUT              │
├─────────────────────────────┤
│  AboutSection               │
│  - Professional bio         │
│  - Info cards (6 items)     │
│  - LinkedIn resume link     │
├─────────────────────────────┤
│  GitHubStats                │
│  - Repos, Stars, Forks      │
│  - Followers                │
├─────────────────────────────┤
│  SkillsSection              │
│  - Dynamic language stats   │
│  - Progress bars            │
├─────────────────────────────┤
│  ContactSection             │
│  - Email, LinkedIn          │
│  - GitHub, Phone            │
└─────────────────────────────┘
```

**Props**: None

**State**: None (routing state via useLocation)

**Features**:
- **Scroll-to-Contact**: Hash routing (`/about#contact`) automatically scrolls to ContactSection
- **Scroll Logic**: Multiple retry attempts (300ms, 600ms, 1000ms) to handle async content loading
- **Navigation Offset**: Accounts for fixed navbar (-80px offset)

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

**Purpose**: Display personal information with modern card-based layout

**Props**: None

**Content**:
```javascript
{
  Name: "Shun-Che Ma (Jason)",
  Position: "Software Developer",
  Email: "jasonma1127@gmail.com",
  Education: "M.S. Computer Science, NTUST",
  Location: "Taipei, Taiwan",
  LinkedIn: "https://www.linkedin.com/in/%E9%A0%86%E5%93%B2-%E9%A6%AC-542800125/"
}
```

**Features**:
- **Professional Bio**: Three paragraphs highlighting skills and experience
- **Info Cards**: 6 interactive cards with FontAwesome icons
- **Color Coded**: Each card has a unique color matching the site's design system
- **LinkedIn Integration**: "View Resume on LinkedIn" button instead of CV download
- **Animations**: Staggered entrance animations (0.1s delay per card)

**Note**: Age field intentionally removed for evergreen content. Position is generic "Software Developer" rather than company-specific.

---

### 6.4 SkillsSection (`src/Components/SkillsSection.js`)

**Purpose**: Display dynamic programming language statistics from GitHub

**Props**: None

**State**:
```javascript
{
  languages: Array<{
    name: string,
    percentage: string,
    bytes: number,
    color: string
  }>,
  loading: boolean,
  error: string | null
}
```

**Data Source**:
- **Primary**: GitHub API via `fetchLanguageStats()` from `githubApi.js`
- **Fallback**: Static data if API fails

**Features**:
- **Dynamic Data**: Fetches real language statistics from GitHub repositories
- **Top 8 Languages**: Displays the 8 most used languages by bytes
- **Loading State**: Shows spinner while fetching data
- **Error Handling**: Displays error message and falls back to static data
- **Color Coding**: Each language has GitHub's official color
- **Animations**: Staggered progress bar animations
- **Real-time Sync**: Data updates daily via 24-hour cache

**Components Used**:
- `ProgressBar` (up to 8 instances with color and delay props)

---

### 6.5 ProgressBar (`src/Components/ProgressBar.js`)

**Purpose**: Visual representation of skill proficiency with custom colors

**Props**:
```typescript
{
  title: string,       // Skill/Language name
  percentage: string,  // Percentage value (e.g., "80%")
  color?: string,      // Optional custom color (hex or rgb)
  delay?: number       // Optional animation delay in seconds
}
```

**State**:
```javascript
{
  percentage: number // Animated percentage value (0 to target)
}
```

**Features**:
- **Animated Fill**: Smoothly animates from 0 to target percentage
- **Custom Colors**: Bar color matches language color from GitHub
- **Language Dot**: Small colored circle indicator next to title
- **Staggered Animations**: Delay prop creates cascading effect
- **Responsive**: Adapts to container width

**Behavior**:
- Animation triggers after delay (default 0s)
- useEffect with cleanup to prevent memory leaks
- Visual bar background color can be customized per language

---

### 6.6 GitHubStats (`src/Components/GitHubStats.js`)

**Purpose**: Display real-time GitHub account statistics

**Props**: None

**State**:
```javascript
{
  stats: {
    totalRepos: number,
    totalStars: number,
    totalForks: number,
    followers: number
  } | null,
  loading: boolean,
  error: string | null
}
```

**Data Source**: GitHub API via `fetchGitHubStats()` from `githubApi.js`

**Features**:
- **4 Stat Cards**:
  1. Public Repos (blue #89acd2)
  2. Total Stars (yellow #f1e05a)
  3. Total Forks (green #90d5b1)
  4. Followers (purple #c6538c)
- **Loading State**: Spinner with message
- **Error Handling**: Displays error message if API fails
- **Link to Profile**: "View Full GitHub Profile" link
- **Animations**: Staggered card entrance (0.1s delay per card)
- **Icons**: FontAwesome icons (faCodeBranch, faStar, faCodeFork, faUserGroup)

**External Link**: https://github.com/jasonma1127

---

### 6.7 ContactSection (`src/Components/ContactSection.js`)

**Purpose**: Display interactive contact methods with modern card design

**Props**: None

**Contact Methods**:
```javascript
[
  {
    icon: faEnvelope,
    label: "Email",
    value: "jasonma1127@gmail.com",
    link: "mailto:jasonma1127@gmail.com?subject=Hello from Portfolio",
    color: "#f34b7d",
    description: "Send me an email"
  },
  {
    icon: faLinkedin,
    label: "LinkedIn",
    value: "Connect with me",
    link: "https://www.linkedin.com/in/%E9%A0%86%E5%93%B2-%E9%A6%AC-542800125/",
    color: "#0077b5",
    description: "Let's connect professionally"
  },
  {
    icon: faGithub,
    label: "GitHub",
    value: "Check my projects",
    link: "https://github.com/jasonma1127",
    color: "#6e5494",
    description: "View my repositories"
  },
  {
    icon: faPhone,
    label: "Phone",
    value: "+886 920-257485",
    link: "tel:+886920257485",
    color: "#90d5b1",
    description: "Give me a call"
  }
]
```

**Features**:
- **4 Interactive Cards**: Email, LinkedIn, GitHub, Phone
- **Click-to-Action**: Direct links (mailto:, tel:, https://)
- **Hover Effects**: Background gradient and elevation change
- **Arrow Indicator**: Animated arrow on hover
- **Responsive Grid**: 2x2 on desktop, stacked on mobile
- **Section ID**: `id="contact"` for hash routing from home page
- **Response Time Info**: "I typically respond within 24-48 hours"

**Icons Used**: faEnvelope, faLinkedin, faGithub (brands), faPhone

---

### 6.8 PortfoliosCard (`src/Components/PortfoliosCard.js`)

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

### 6.9 BlogCard (`src/Components/BlogCard.js`)

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

### 7.3 GitHub Data Schemas

**Source**: `src/services/githubApi.js`

**User Profile**:
```typescript
interface GitHubUserProfile {
  name: string;
  bio: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}
```

**Language Statistics**:
```typescript
interface LanguageStats {
  name: string;              // Language name
  bytes: number;             // Total bytes of code
  percentage: string;        // Percentage (e.g., "45.2")
  color: string;             // Hex color from LANGUAGE_COLORS map
}

type LanguageStatsArray = LanguageStats[];  // Sorted by bytes descending
```

**GitHub Statistics**:
```typescript
interface GitHubStats {
  totalRepos: number;        // Total public repositories
  totalStars: number;        // Sum of stars across all repos
  totalForks: number;        // Sum of forks across all repos
  followers: number;         // Account followers
  following: number;         // Accounts following
}
```

**Caching**:
```typescript
interface CachedData<T> {
  data: T;
  timestamp: number;         // Date.now() when cached
}

const CACHE_DURATION = 24 * 60 * 60 * 1000;  // 24 hours
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

### 8.2 GitHub REST API

**Base URL**:
```
https://api.github.com
```

**Endpoints Used**:
```
GET /users/{username}                      // User profile
GET /users/{username}/repos                // User repositories (paginated)
GET /repos/{owner}/{repo}/languages        // Language breakdown per repo
```

**Implementation**: `src/services/githubApi.js`

**Key Functions**:

1. **fetchUserProfile()**
   - Endpoint: `/users/jasonma1127`
   - Returns: User profile data
   - Cache key: `github_user_jasonma1127`

2. **fetchUserRepos()**
   - Endpoint: `/users/jasonma1127/repos?per_page=100&page={n}`
   - Pagination: Fetches all pages until complete
   - Excludes: Forked repositories in language stats
   - Cache key: `github_repos_jasonma1127`

3. **fetchLanguageStats()**
   - Fetches languages for each repository
   - Aggregates bytes across all repos
   - Calculates percentages
   - Maps to GitHub official colors
   - Cache key: `github_languages_jasonma1127`

4. **fetchGitHubStats()**
   - Combines profile + repos data
   - Calculates total stars/forks
   - Cache key: `github_stats_jasonma1127`

**Caching Strategy**:
- **Storage**: localStorage
- **TTL**: 24 hours (86,400,000 ms)
- **Validation**: Timestamp check on each request
- **Auto-cleanup**: Expired cache automatically removed
- **Benefits**: Reduces API calls, avoids rate limiting

**Rate Limiting**:
- Unauthenticated: 60 requests/hour per IP
- Caching mitigates this limit effectively

**Error Handling**:
- Network errors: Caught and logged
- API errors: HTTP status checked
- Component-level: Loading/Error states displayed
- Fallback data: SkillsSection uses static data if API fails

**CORS**: No issues (GitHub API supports CORS)

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
</Routes>
```

**Note**: Contact page route removed. Contact section integrated into About page.

---

### 10.2 Navigation Patterns

**Internal Navigation**:
```jsx
import { Link } from "react-router-dom";
<Link to="/about">About</Link>
```

**Hash Navigation** (scroll to section):
```jsx
// Home page Contact Me button
<Link to="/about#contact">Contact Me</Link>

// AboutPage.js handles scroll
useEffect(() => {
  if (location.hash === '#contact') {
    const scrollToContact = () => {
      const element = document.getElementById('contact');
      if (element) {
        const yOffset = -80;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    };
    setTimeout(scrollToContact, 300);
    setTimeout(scrollToContact, 600);
    setTimeout(scrollToContact, 1000);
  }
}, [location]);
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
1. Project image uploads for portfolio cards
2. Blog post image optimization
3. Dark/Light theme toggle
4. SEO metadata for all pages

**Medium Priority**:
1. Search functionality for blog posts
2. Pagination for blog and portfolios
3. Analytics integration (Google Analytics)
4. Performance monitoring (Web Vitals)
5. GitHub contribution calendar widget

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
| 1.2.0   | 2025-12-30 | Jason Ma  | Major update: Added GitHub API integration, removed Contact page, added GitHubStats and ContactSection components, updated AboutPage structure, added hash routing for contact section, updated all component specifications |
| 1.1.0   | 2025-12-30 | Jason Ma  | Added design tokens architecture, updated styling system, documented Home page animation fixes |
| 1.0.0   | 2025-12-28 | Jason Ma  | Initial specification document                      |

---

**END OF SPECIFICATION**

*This document serves as the Single Source of Truth for the Jason Ma Portfolio Website project. All development decisions should reference and update this specification accordingly.*
