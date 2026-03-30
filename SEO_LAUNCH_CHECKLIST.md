# SEO Launch Checklist — Landika

## Pre-Launch (Done Automatically)

- [x] Title tags optimized (<60 chars) on all pages
- [x] Meta descriptions (150-160 chars) on all pages
- [x] Canonical URLs set on all pages
- [x] Open Graph tags (title, description, image) on all pages
- [x] Twitter card meta tags configured
- [x] Sitemap at /sitemap.xml (2,000+ URLs)
- [x] Robots.txt configured (allows all except /api/, /_next/)
- [x] Schema markup: BreadcrumbList, FAQPage, HowTo, Article, Service, WebSite, RealEstateAgent
- [x] Author schema with Person + Organization + EARB credentials
- [x] Image optimization: AVIF + WebP via Next.js Image component
- [x] Dynamic OG image generation (/opengraph-image)
- [x] Web manifest for PWA
- [x] Favicon (icon.svg)
- [x] Internal linking (5-12 links per page)
- [x] External authority links (lands.go.ke, itax.kra.go.ke, ardhisasa, earb.go.ke, nlc.or.ke)
- [x] H1 tags: one per page, keyword-optimized
- [x] FAQ sections targeting People Also Ask
- [x] Quick Answer boxes targeting Featured Snippets

---

## Manual Steps Required (You Must Do These)

### 1. Google Search Console Setup
1. Go to https://search.google.com/search-console
2. Add property: `https://landika.co.ke`
3. Verify ownership via DNS TXT record (recommended) or HTML file upload
4. After verification, submit sitemap:
   - Go to Sitemaps > Add a new sitemap
   - Enter: `sitemap.xml`
   - Click Submit
5. Request indexing for key pages:
   - `/` (homepage)
   - `/plots-for-sale`
   - `/guides/how-to-buy-land-in-kenya`
   - `/guides/title-deed-search-kenya`
   - `/guides/stamp-duty-kenya`

### 2. Google Business Profile
1. Go to https://business.google.com
2. Create a business profile for "Landika Real Estate Agent"
3. Category: "Real Estate Agent"
4. Address: Westlands, Nairobi, Kenya
5. Phone: +254 700 000 000
6. Website: https://landika.co.ke
7. Add business hours, photos, and services
8. Request reviews from past clients

### 3. Bing Webmaster Tools
1. Go to https://www.bing.com/webmasters
2. Add site: `https://landika.co.ke`
3. Import from Google Search Console (fastest)
4. Submit sitemap

### 4. Replace Placeholder Images
1. Take real photos at your plot sites (red soil, beacons, fencing, access roads)
2. Save as `plot-1.jpg` through `plot-10.jpg` (min 800px wide)
3. Replace files in `public/assets/mock-plots/`
4. Update the image source in `src/lib/data_layer.ts`:
   - Change the `getDynamicImage` function to use local files:
   ```js
   const imageNumber = ((index - 1) % 10) + 1;
   return `/assets/mock-plots/plot-${imageNumber}.jpg`;
   ```

### 5. Update Contact Details
Replace placeholder contact info across the site:
- Phone: `+254 700 000 000` → your real number
- Email: `agent@landika.co.ke` → your real email
- Files to update:
  - `src/app/layout.tsx` (footer + organization schema)
  - `src/app/agent-services/page.tsx`
  - `src/app/terms/page.tsx`
  - `src/app/privacy/page.tsx`

### 6. Backlink Building (Ongoing)
Priority link targets:
- Kenya diaspora community forums (Kenyans in USA, UK, Canada)
- Property listing aggregators (BuyRentKenya, Property24)
- Kenya business directories
- Real estate blogs and media
- County government websites (if possible)
- Chamber of Commerce listings

### 7. Google Analytics Setup
1. Create a Google Analytics 4 property
2. Add the tracking script to `src/app/layout.tsx` (before closing `</head>`)
3. Set up conversion tracking for:
   - Consultation form submissions
   - WhatsApp button clicks
   - Guide page views (engagement signal)

---

## Monthly SEO Tasks

- [ ] Check Search Console for crawl errors
- [ ] Review keyword rankings for target terms
- [ ] Monitor indexed page count (target: 2,000+)
- [ ] Check for any manual actions or security issues
- [ ] Review and update "Best Places" guide with current year data
- [ ] Update "Land Rates" guide if county rates change
- [ ] Publish 1-2 new guides per month (target keywords from KEYWORD_STRATEGY.md)
- [ ] Build 3-5 backlinks per month

---

## Key URLs

| Resource | URL |
|----------|-----|
| Sitemap | https://landika.co.ke/sitemap.xml |
| Robots.txt | https://landika.co.ke/robots.txt |
| OG Image | https://landika.co.ke/opengraph-image |
| Search Console | https://search.google.com/search-console |
| Google Business | https://business.google.com |
| Bing Webmaster | https://www.bing.com/webmasters |
