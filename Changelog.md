# Changelog - Ground Breaker Land Management (GBLM)

This document tracks all modifications and improvements made to the GBLM Website project, providing a chronological history for transparency and future development context.

---

### March 12, 2026
- **Cross-Device Image Consistency**:
  - **Hard-Coded Rotation & Cache Busting**: Diagnosed a cross-device desynchronization where desktop and mobile read EXIF properties differently despite previous fixes. Solved this by extracting the raw pixels from the original landscape photos, permanently deleting all EXIF rotation tags, and serving them under brand new cache-busting filenames (`service-clearing-final.jpg`, `service-bush-hogging-final.jpg`) to force all devices to download the true, identical image.

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
