# Changelog - Ground Breaker Land Management (GBLM)

This document tracks all modifications and improvements made to the GBLM Website project, providing a chronological history for transparency and future development context.

---

### May 10, 2026
- **Services Section Updates**:
  - Added new **Lawn Rolling** service card.
  - Re-routed image paths for **Seeding & Tilling** and updated the image for **Grading & Site Prep**.
  - Adjusted the image framing (`object-top`) for the Grading & Site Prep photo to ensure the actual site, rather than just the foreground dirt, is visible.

### May 7, 2026
- **Project Documentation Restructure**:
  - Split `Roadmap.md` into two separate files with distinct purposes: `Roadmap.md` (Telegram notes log, written by automation) and `Development_Roadmap.md` (developer execution file, used by AI and developer to plan and build).
  - Updated `AI_Rules.md` with a file role table and a 5-step triage workflow so any AI agent entering this project knows exactly how to handle both files.
  - All original phase content (A, B, C, Ideas Bucket) moved to `Development_Roadmap.md`. David's May 7 requests added there as actionable `[ ]` items.
  - **🔂 REVERSAL PROTOCOL**: To revert, copy all phase content from `Development_Roadmap.md` back into `Roadmap.md` and delete `Development_Roadmap.md`.

- **n8n: GBLM Website Updates Workflow — Telegram Bot Fixes** (`HcIoYILkNCd1PTLF`):
  - **Bug fixed: Bot was re-acknowledging old messages on every 4-hour run.** Root cause: n8n's `$getWorkflowStaticData` was not persisting between manual executions and after API workflow pushes, causing `lastUpdateId` and `lastAckedUpdateId` to reset to 0. This made the bot treat already-seen messages as new on every run.
  - **Fix: Telegram offset confirmation.** Added two new nodes — `Confirm Ack Offset` (after acknowledgment branch) and `Confirm Roadmap Offset` (after roadmap branch). Each calls Telegram's `getUpdates` API with the high-water-mark `offset+1`, which permanently tells Telegram to forget those updates. Even if n8n static data resets, Telegram will not return already-confirmed messages.
  - **Fix: `is_bot` filter added** to `Filter & Queue` node. Bot messages (this bot or any other in the chat) are now explicitly excluded from triggering acknowledgments.
  - **Fix: `lastUpdateId` always saved** even on runs with no new matching messages, preventing offset drift.
  - **Manual cleanup:** Confirmed all 10 previously-stuck Telegram updates (up to update_id 535709740) directly via the Telegram API so the bot starts fresh.
  - **n8n AI prompt updated** in `Decode & Prepare` node: bot now writes entries to `Roadmap.md` in clean `[YYYY-MM-DD] Sender: Summary` format under a "Pending Review" section, instead of scattering items into development phases.
  - **n8n API key and MCP limitation documented** in `~/.claude/CLAUDE.md` and project memory so future AI agents know to use the REST API for workflow edits.

- **Services Section & Before/After Showcase Updates**:
  - **Services Blurb**: Updated financing copy to "Land management is a major investment. We offer flexible, stress-free payment plans so you can start your property improvement today!"
  - **New Service Cards**: Added `Spraying Weed Control` and `Bushhogging Fields & Pastures` service cards using newly provided images. Removed the duplicate older Bush Hogging card.
  - **Before & After Carousel**: Added the new Bushhogging fields before/after transformation photos as the primary (first) slide.
  - **Roadmap Synchronization**: Successfully executed the new triage workflow by moving all 3 "Pending Review" items from `Roadmap.md` into `Development_Roadmap.md` and clearing the log for new incoming Telegram requests.

---

### April 28, 2026
- **Promotional & Financing Banner**:
  - Added a global, infinite-scrolling marquee to the absolute top of the site (above the top-bar) to notify visitors that financing options are available.
  - Implemented custom CSS animation (`marquee`) in `globals.css` to handle the smooth infinite scroll without JavaScript overhead.
  - **🔂 REVERSAL PROTOCOL**: To remove the marquee, simply delete the `<div className="marquee-container">...</div>` block from the top of `src/components/Header.tsx` and optionally remove the `.marquee-container` CSS from `globals.css`.
- **Services Section Refinements**:
  - Upgraded the plain text financing message into a highly styled, premium "Financing Banner" directly beneath the "Our Services" section header. 
  - The banner utilizes a gradient blur backdrop, an icon, and a direct Call to Action ("Get Details") to encourage conversions.
  - **🔂 REVERSAL PROTOCOL**: To revert to the standard layout, delete the `<div className="max-w-4xl mx-auto mb-14 relative group">...</div>` wrapper from the `section-header` in `src/components/Services.tsx`.

### April 15, 2026
- **Before & After Showcase Finalization**:
  - Successfully converted 8 HEIC images to web-compatible JPEG format via `sips` for cross-browser support.
  - Implemented a fully automated, synchronized carousel that simultaneously transitions "Before" and "After" views.
  - Added "Current Featured Project" dynamic badging with custom typography.
  - Enhanced mobile ergonomics with touch-friendly navigation dots and smooth 5-second auto-transitions.
  - **🔂 REVERSAL PROTOCOL**: To remove the section, simply delete the `<BeforeAfter />` import and component call in `src/app/page.tsx` and delete `src/components/BeforeAfter.tsx`.

### March 22, 2026
- **Social Media Integration**:
  - Added Facebook and Instagram icons to the **Header Top Bar** and the **Footer** for better social connectivity.
  - Linked the Facebook profile: `https://www.facebook.com/profile.php?id=61584159944480`.
  - Icons are styled to match the brand identity using gold accents with hover transitions.
- **Hero Animation Overhaul (V5)**:
  - **Extended Logo Exposure**: Pushed the logo's scroll threshold to **1300px** so it remains visible almost 3x longer than the main headline text. This eliminates the "dead green" gap between sections.
  - **Dramatic 'Swipe Away' Motion**: Changed the logo's fade-out into a more pronounced upward swipe (`-180px`). The logo now feels like it’s being physically swiped off-screen rather than dissolving, with transparency only reducing gradually.
  - **Sequential Word Highlight**: Replaced the general headline glow with a precise "traveling gold" effect. Words highlight one-by-one in sequence.
  - **Performance Fix (Scroll Jitter)**: Refactored the iPhone swipe logic to map directly to the DOM using `requestAnimationFrame`, bypassing React state entirely. This ensures 60fps native scroll performance perfectly synced with the user's thumb movement.
- **Services Section Redesign**:
  - Replaced the hover-to-reveal interaction with a permanent "Green Box" layout.
  - Each service now features a stacked image and content block that is always visible for better accessibility and user engagement.
- **Hero & Video Layout Restructure (Split-Screen Design)**:
  - Transitioned the Hero section to a **split-screen layout** (Text on Left / Logo on Right).
  - The content box now uses a left-accented gold border, while the optimized GBLM logo (`logo-web.png`) occupies the right half of the screen on desktop.
  - Maintained the dedicated `VideoSection` below the hero for project showcases.
  - Responsive logic ensures a clean vertical stack for mobile users.
  - **🔂 REVERSAL PROTOCOL**: To return to the previous "Background Video" look:
    1. In `src/app/page.tsx`, remove the `<VideoSection />` component and its import.
    2. In `src/components/Hero.tsx`, change the parent `<section>` class from `hero-v2` back to `hero`.
    3. Re-insert the `<video>` block inside a `div` with class `hero-slider` and `slide active` (Refer to git commit `a03da98` for exact JSX structure).
    4. Ensure `.hero-overlay` is restored for text legibility.

### March 22, 2026 (Earlier Updates)
- **Hero Section Optimization**:
  - Simplified the Hero background to use a single, hand-edited looping video (`David_Hero_Main.mp4`).
  - Removed the multi-video slider logic to reduce bandwidth consumption and simplify the codebase.

### March 12, 2026
- **Cross-Device Image Consistency**:
  - **True Pixel Rotation & Cache Busting**: Diagnosed a cross-device desynchronization where desktop and mobile rendered physical pixel data and EXIF properties differently. Overcame this by using an image manipulation script (`PIL.ImageOps.exif_transpose`) to physically read the original EXIF rotation and apply it structurally to the raw tracking pixels. Resaved the permanently upright images without any invisible Apple EXIF metadata under new cache-busting filenames (`service-clearing-upright.jpg`, `service-bush-hogging-upright.jpg`) to command all devices to download the unified, landscape image naturally.

### March 11, 2026
- **CRM Integration & Functionality**:
  - **GoHighLevel (GHL) API Capture**: Implemented server-side lead injection to GoHighLevel. Created a secure API route (`/api/ghl`) that uses high-security environment variables (PIT and Location ID) to create new contacts upon form submission.
  - **Enhanced Contact Form**: Added a validated Email field to the contact form to ensure higher lead quality and match-rates within the CRM.
  - **Stability & Extension Support**: Implemented a mounting guard and hydration suppression for the contact form to eliminate console errors caused by browser extensions (NordPass, 1Password) injecting attributes into the DOM.
- **Mobile-First Optimizations**:
  - **Image Orientation Normalization**: Re-processed high-resolution service images (specifically Clearing & Demolition) to strip conflicting iPhone EXIF metadata, ensuring they remain landscape on all mobile browsers.
  - **Horizontal Bleed Prevention**: Implemented a global CSS "No-Bleed" reset (`overflow-x: hidden`) and modernized the viewport handling to prevent content from exceeding screen boundaries. Fixed specific contact info overflow by forcing email address word-breaks.
  - **Mobile Form UX Guidance**: Added a mobile-only "Get an Estimate" guidance header inside the contact form and optimized input padding for narrower screens.
  - **Video Compatibility Upgrade**: Added `video/quicktime` support and `preload="metadata"` settings to the Hero carousel to improve loading performance and reliability for `.mov` files on iOS and Android.
- **UX & Visual Polish**:
  - **Subtle Auto-Scroll**: Enabled `scroll-behavior: smooth` site-wide, providing a premium feel when users click internal navigation links (About, Services, Contact).
  - **Service Image Swaps**: Realigned the services grid based on specific visual feedback. "Grading & Site Prep" now uses the high-quality field photo (`IMG_0026.JPG`), and "Driveways & Roads" uses the maintenance action shot (`IMG_0019.JPG`).
  - **Logo Sharpness Optimization**: Created a web-optimized 1000px wide master logo (`logo-web.png`) from the 11MB source. Configured the Header to use this file with `unoptimized={true}` and `priority` loading, ensuring crystal-clear branding on high-DPI screens without the heavy bandwidth cost.
  - **Hero Video Reordering**: Moved the aerial drone shot to the second slot in the carousel to ensure high-action movement is visible immediately after the initial stump grinding video.
  - **Business Hours Optimization**: Expanded the footer hours into a detailed daily list (Monday - Saturday 9am-5pm, Sunday Closed) to align with Google Business Profile best practices and local SEO requirements.
- **Phase 5 Execution**:
  - **Legal Infrastructure**: Created `/privacy-policy` and `/terms-of-service` landing pages with professional data handling language. Integrated links into the `<Footer />`.
  - **Blog Foundation**: Initialized `/blog` directory with a "Coming Soon" placeholder layout.
  - **Global Navigation Upgrade**: Swapped raw `<a>` tags for Next.js `<Link />` components in the footer and main navigation for instantaneous page loads.

### March 10, 2026
- **Local SEO & Answer Engine Optimization**:
  - **JSON-LD Schema**: Injected Local Business JSON-LD schema into `layout.tsx` with a 100-mile `geoRadius` centered near Athens, GA.
  - **Dynamic Location Routing**: Built a dynamic routing template at `src/app/locations/[city]/page.tsx` for generating SEO-optimized landing pages for local towns.
  - **Service Card Audit**: Performed a deep visual audit of all service cards. Replaced the low-res "Bush Hogging" image with a high-definition sharp pasture reclamation photo (`IMG_8395.png`).
  - **Content Refinement**: Rewrote the "Bush Hogging" description to explicitly define the heavy-duty nature of the service.

### March 9, 2026
- **Trust & Conversion Elements**:
  - **Social Proof**: Created `<Reviews />` component featuring real customer testimonials.
  - **Project Gallery**: Built `<ProjectGallery />` using `next/image` for a high-performance grid of completed work.
  - **Objection Handling**: Added an interactive `<FAQ />` component (accordion style) to address common customer concerns regarding estimates, service areas, and insurance.

### March 8-9, 2026
- **UX & Logic Fixes**:
  - **Media Rotation Logic**: Optimized the `Hero` section to only load and autoplay visible videos, significantly saving data for mobile users.
  - **Contact Routing**: Upgraded all contact text to actionable `mailto:`, `tel:`, and `sms:` links.
  - **Success States**: Implemented a "Success Loop" for the contact form, providing immediate visual feedback (thank you message) upon submission.

### March 4-7, 2026
- **Next.js Foundation & Asset Migration**:
  - **Project Scaffold**: Successfully migrated the legacy HTML codebase to a modern Next.js 15 project (App Router, Tailwind CSS, TypeScript).
  - **Component Architecture**: Modularized the monolithic HTML into reusable React components (`Header`, `Hero`, `Services`, `About`, `Contact`, `Footer`).
  - **Asset Audit**: Purged massive 100MB+ legacy videos and replaced them with optimized, high-fidelity versions while maintaining visual parity.

---
*Note: This log is updated chronologically as new features are authorized and implemented.*
