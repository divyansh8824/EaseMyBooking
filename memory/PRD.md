# EaseMyBooking — Farmhouse & Villas Static Site

## Problem Statement (verbatim)
Build a premium Farmhouse & Villa webpage for EaseMyBooking (https://easemybooking.in/) matching the current theme. Pure HTML/CSS/JS (no React, no backend). Must be GitHub Pages compatible. Includes hero slider, listings, filters, featured section, property detail page with WhatsApp-redirect enquiry, FAQ, lead popup, and a separate "List Your Property" page that also redirects to WhatsApp/email.

## Architecture
Pure static site (HTML5 + vanilla CSS + vanilla JS).
- `farmhouse-villas.html` — landing / discovery
- `property-details.html` — detail page (reads `?id=` query param)
- `list-property.html` — owner submission page
- `style.css` — luxury dark + cream paper theme
- `script.js` — PROPERTIES array, hero slider, filters, gallery, popup, WhatsApp deep-link builders
- Files live in `/app/frontend/public/` (served at the preview-URL root; fully portable to GitHub Pages)
- WhatsApp: `+918824880979`  |  Owner email: `info@easemybooking.in`
- 9 sample properties across Goa, Udaipur, Jaipur, Lonavala, Delhi NCR, Jodhpur, Manali, Coorg

## Design System
- Palette: espresso black `#0e0c0a` / warm cream `#f6f1e6` / signature gold `#c9a24a`
- Typography: `Cormorant Garamond` (serif display) + `Outfit` (sans body)
- Patterns: editorial spacing, grain overlay, glass-morphism nav, gold pill CTAs, micro-animations

## Core Requirements (static)
- [x] Hero slider with 4 luxury images + animations + overlay
- [x] Filters: location / guests / type / budget (with reset)
- [x] Featured section (3 curated cards)
- [x] Property cards: gallery on hover, location, capacity, amenities, price, CTA
- [x] Detail page: 6-image gallery, info, amenities, sticky enquiry → WhatsApp
- [x] Lead popup (timed + scroll trigger, sessionStorage gate)
- [x] FAQ accordion
- [x] List-your-property page → WhatsApp & email submit
- [x] Floating WhatsApp on every page
- [x] Fully responsive (1920 → 390 verified)
- [x] SEO meta tags, OG tags, semantic HTML

## What's Implemented (2026-01)
- All 5 deliverable files created
- 9 seeded properties with multi-image galleries
- WhatsApp deep-link builders with formatted multi-line messages
- Email fallback (mailto) on owner form
- Lead popup with one-time-per-session logic
- Tested 100% — 0 console errors, all 13 review requirements verified

## Backlog (P1)
- Replace placeholder Unsplash images with real EaseMyBooking property photos when supplied
- Plug in the brand logo file once uploaded (currently text wordmark)
- Add Google Analytics / Meta Pixel for lead tracking
- Add a sitemap.xml + robots.txt for SEO

## Backlog (P2)
- Add property comparison feature (side-by-side)
- Implement testimonial carousel from EaseMyBooking guests
- Integrate calendar availability widget
- Add image lightbox on gallery thumbs
