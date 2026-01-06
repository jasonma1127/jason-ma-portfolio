#!/usr/bin/env node

/**
 * Fetch Portfolio Data from GitHub
 *
 * This script fetches repository data from GitHub and generates a static JSON file
 * for the portfolio page. It runs during build time (prebuild script).
 *
 * Features:
 * - Fetches repos with 'portfolio-display' topic
 * - Optionally reads .github/portfolio.json from each repo for custom metadata
 * - Generates public/portfolios-data.json for fast client-side loading
 * - Graceful error handling with fallback to existing data
 */

const fs = require('fs');
const path = require('path');

const GITHUB_USERNAME = 'jasonma1127';
const GITHUB_API_BASE = 'https://api.github.com';
const OUTPUT_FILE = path.join(__dirname, '../public/portfolios-data.json');

// Topics that control behavior
const DISPLAY_TOPIC = 'portfolio-display';
const FEATURED_TOPIC = 'portfolio-featured';

/**
 * Fetch data from GitHub API
 */
async function fetchGitHub(url) {
  try {
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Portfolio-Sync-Script'
      }
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Failed to fetch ${url}:`, error.message);
    return null;
  }
}

/**
 * Fetch all repositories for the user
 */
async function fetchUserRepos() {
  console.log(`📦 Fetching repositories for ${GITHUB_USERNAME}...`);

  const repos = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const url = `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?per_page=100&page=${page}`;
    const data = await fetchGitHub(url);

    if (!data || data.length === 0) {
      hasMore = false;
    } else {
      repos.push(...data);
      hasMore = data.length === 100;
      page++;
    }
  }

  console.log(`✅ Found ${repos.length} total repositories`);
  return repos;
}

/**
 * Fetch custom portfolio metadata from .github/portfolio.json if it exists
 */
async function fetchPortfolioMetadata(username, repoName, branch = 'main') {
  const url = `https://raw.githubusercontent.com/${username}/${repoName}/${branch}/.github/portfolio.json`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      // Try 'master' branch if 'main' fails
      if (branch === 'main') {
        return fetchPortfolioMetadata(username, repoName, 'master');
      }
      return null;
    }

    const metadata = await response.json();
    console.log(`  ✓ Found portfolio.json for ${repoName}`);
    return metadata;
  } catch (error) {
    // Silently fail - portfolio.json is optional
    return null;
  }
}

/**
 * Transform GitHub repo data to portfolio format
 */
async function transformRepo(repo) {
  const metadata = await fetchPortfolioMetadata(GITHUB_USERNAME, repo.name);

  // Filter topics to exclude control topics
  const technologies = repo.topics
    .filter(topic => topic !== DISPLAY_TOPIC && topic !== FEATURED_TOPIC)
    .map(topic => topic.charAt(0).toUpperCase() + topic.slice(1)); // Capitalize

  // Add primary language if available (avoid duplicates by case-insensitive check)
  if (repo.language) {
    const languageLower = repo.language.toLowerCase();
    const isDuplicate = technologies.some(tech => tech.toLowerCase() === languageLower);
    if (!isDuplicate) {
      technologies.unshift(repo.language);
    }
  }

  return {
    id: repo.id,
    title: repo.name,
    description: metadata?.customDescription || repo.description || '',
    image: metadata?.image || null,
    technologies: technologies,
    githubUrl: repo.html_url,
    liveUrl: repo.homepage || null,
    blogPostUrl: metadata?.blogPostUrl || null,
    featured: repo.topics.includes(FEATURED_TOPIC),
    // Additional metadata for sorting/filtering
    stars: repo.stargazers_count,
    updatedAt: repo.updated_at,
    createdAt: repo.created_at
  };
}

/**
 * Main execution
 */
async function main() {
  console.log('🚀 Starting portfolio data fetch...\n');

  try {
    // Fetch all repos
    const allRepos = await fetchUserRepos();

    if (!allRepos || allRepos.length === 0) {
      console.error('❌ No repositories found. Exiting.');
      process.exit(1);
    }

    // Filter repos with portfolio-display topic
    const portfolioRepos = allRepos.filter(repo =>
      repo.topics && repo.topics.includes(DISPLAY_TOPIC)
    );

    console.log(`\n🎯 Found ${portfolioRepos.length} portfolio projects (with '${DISPLAY_TOPIC}' topic)`);

    if (portfolioRepos.length === 0) {
      console.warn(`\n⚠️  No repositories have the '${DISPLAY_TOPIC}' topic.`);
      console.warn('   Add this topic to your repos to display them in the portfolio.');
      console.warn('   Using empty array for now.\n');
    }

    // Transform repos to portfolio format
    console.log('\n📝 Processing portfolio data...');
    const portfolioData = await Promise.all(
      portfolioRepos.map(repo => transformRepo(repo))
    );

    // Sort by: featured first, then by stars, then by update date
    portfolioData.sort((a, b) => {
      if (a.featured !== b.featured) return b.featured - a.featured;
      if (a.stars !== b.stars) return b.stars - a.stars;
      return new Date(b.updatedAt) - new Date(a.updatedAt);
    });

    // Write to file
    const outputDir = path.dirname(OUTPUT_FILE);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(portfolioData, null, 2));

    console.log(`\n✅ Successfully generated portfolio data!`);
    console.log(`   Output: ${OUTPUT_FILE}`);
    console.log(`   Projects: ${portfolioData.length}`);
    console.log(`   Featured: ${portfolioData.filter(p => p.featured).length}\n`);

    // Log summary
    if (portfolioData.length > 0) {
      console.log('📊 Projects summary:');
      portfolioData.forEach((project, index) => {
        const badge = project.featured ? '⭐' : '  ';
        console.log(`   ${badge} ${index + 1}. ${project.title} (${project.technologies.join(', ')})`);
      });
      console.log('');
    }

  } catch (error) {
    console.error('\n❌ Error fetching portfolio data:', error.message);
    console.error('   The build will continue, but portfolio data may be incomplete.');
    console.error('   The site will fall back to static data from portfoliosData.js\n');

    // Don't fail the build - allow fallback to work
    process.exit(0);
  }
}

// Run the script
main();
