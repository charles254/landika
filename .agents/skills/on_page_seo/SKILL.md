---
name: On-Page SEO Mastery
description: A comprehensive skill for auditing and fixing on-page SEO with a focus on JavaScript-powered applications (Next.js/React).
---

# On-Page SEO Mastery Skill

This skill provides a systematic approach to ensuring a web application is fully discoverable, crawlable, and indexable by search engines, specifically Google. It incorporates the "JavaScript SEO Basics" and modern web development best practices.

## Core Directives

### 1. Metadata & Authority
- **Unique Titles**: Every page MUST have a unique `<title>` tag that includes the primary keyword and the brand (e.g., "[Category] in [Town] | Landika").
- **Meta Descriptions**: Provide a descriptive summary (150-160 characters) that encourages clicks. Use dynamic indicators if possible.
- **Canonical Tags**: ALWAYS set a `rel="canonical"` link to the preferred version of the page to avoid duplicate content issues.
- **Robots Meta**: Use `noindex, nofollow` ONLY for error pages or private/admin views.

### 2. Crawlability & Architecture
- **History API over Fragments**: Use standard `<a>` tags with `href` attributes. In Next.js, use the `<Link>` component. NEVER use hash fragments (`#`) for primary navigation.
- **Semantic HTML**: Use `<h1>` for the main page title (one per page), `<h2>`-`<h6>` for hierarchy, and `<article>`, `<section>`, `<nav>` for structure.
- **Meaningful Status Codes**: Ensure the server returns `404` for missing content rather than a "soft 404" (a 200 page saying "not found").

### 3. Rich Content & Structured Data
- **JSON-LD Schema**: Inject structured data for specific types:
  - `FAQPage` for FAQs.
  - `Product` or `RealEstateListing` for specific items.
  - `BreadcrumbList` for navigation paths.
  - `Organization` for the brand.
- **Image Optimization**:
  - Use descriptive `alt` text for every image.
  - Use modern formats (WebP/AVIF).
  - Implement search-friendly lazy loading (standard in Next.js `Image`).

### 4. JavaScript Specifics
- **Pre-rendering/SSR**: Prefer Server-Side Rendering (SSR) or Static Site Generation (SSG) to ensure content is in the initial HTML.
- **Shadow DOM**: If using Web Components, ensure content is reachable through `<slot>` elements so Googlebot can "flatten" the DOM.

## Troubleshooting Workflow
1. **Initial HTML Check**: View page source (Ctrl+U) to see what content exists before JS execution.
2. **Rendered HTML Check**: Use the Browser tool to inspect the final DOM after JS has run. Compare with initial HTML.
3. **Structured Data Validation**: Check for the presence of `application/ld+json` blocks.
4. **Canonical Check**: Verify the `<link rel="canonical" ...>` exists and is correct.
