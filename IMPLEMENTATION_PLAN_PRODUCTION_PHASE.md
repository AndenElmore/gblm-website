w# Implementation Plan: Production Phase Overhaul (Ground Breaker Land Management)

This plan outlines the steps to transition the website from its current prototype state into a production-ready, high-converting local business site. The focus is on technical SEO hierarchy, professional lead capture, and a modern mixed-media experience.

## Phase 1: Hero Section Overhaul (Mixed-Media Carousel)
**Goal:** Replace the static hero with a high-impact, professional slider supporting video and images.

- [x] **Infrastructure Setup**
    - [x] Create `/assets/hero/` directory for slide assets.
    - [x] Implement a full-screen/high-impact slider container (min-height 800px).
- [x] **Carousel Logic (Vanilla JS/CSS)**
    - [x] Add auto-play behavior for images (5-second intervals).
    - [x] Add support for muted, looped, `playsinline` MP4 video backgrounds.
    - [x] Implement smooth fade/slide transitions.
- [x] **Visual Polish**
    - [x] Apply a sleek, dark gradient overlay to ensure H1 readability on any slide.
    - [x] Verify "Inspiring Your Dreams..." H1 remains the focal point.

## Phase 2: Technical SEO Structure (Service Ranking Strategy)
**Goal:** Transition from visual "stars" to a content-rich hierarchy that Google can easily parse for the "Priority 5" services.

- [x] **Restructure Services Section**
    - [x] Maintain the 3 main categories (Clearing, Grading, Farming).
    - [x] Convert "Priority 5" list items into distinct sub-sections or H3/H4 elements with descriptive text.
    - [x] Add context-rich paragraphs for: Seeding, Tilling, Bush Hogging, Driveways, and Tree Cleanup.
- [x] **Asset SEO**
    - [x] Organize and rename client assets using keywords (e.g., `bush-hogging-bogart-ga.jpg`).
    - [x] Apply descriptive Alt tags to all images.
- [x] **Enhanced Schema Markup**
    - [x] Update JSON-LD in `<head>` to include the `hasOfferCatalog` property.
    - [x] Explicitly list the "Priority 5" services within the schema.

## Phase 3: Conversion Optimization (CRO & Forms)
**Goal:** Create a functional funnel that captures high-quality leads.

- [x] **Lead Capture Form**
    - [x] Create a dedicated `#contact` section with a professional form.
    - [x] Implement fields: Name, Phone (with pattern), Service Needed (Dropdown), and Project Notes.
    - [x] Add unique IDs to inputs (e.g., `ghl-name`, `ghl-phone`) for future GoHighLevel integration.
- [x] **Funnel Implementation**
    - [x] Anchor the "Get a Quote" nav button to the form section.
    - [x] Add a secondary CTA in the Footer: "Ready to break ground? [Start Your Project]".
- [x] **Validation & User Feedback**
    - [x] Add basic client-side form validation.
    - [x] Implement a "Success Message" state upon form submission.

## Progress Checklist
- [x] Phase 1: Hero Overhaul
- [x] Phase 2: Technical SEO & Service Hierarchy
- [x] Phase 3: CRO & Lead Capture
- [x] Production Verification & Responsive Testing
