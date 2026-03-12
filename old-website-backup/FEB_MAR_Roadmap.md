# GBLM Website Roadmap: Next.js Conversion Infrastructure

## 🛑 AI AGENT PROTOCOL (READ FIRST)
1. **Pacing:** You must execute this roadmap **ONE Phase at a time, and ONE Step at a time**. 
2. **Approval:** After completing a step, stop and ask the developer: *"I have completed [Step Name]. Would you like to review, or should I proceed to the next step?"* Do NOT move on until you receive explicit permission.
3. **Tech Audit Context:** A recent technical audit revealed several severe performance issues on the previous HTML version of this site. You must address these during the rebuild:
    - **Asset Bloat:** The previous site loaded a 12MB logo and over 107MB of background `.mov` videos simultaneously. We now have a compressed `Images.zip` folder and 3.8MB `.mp4` videos. 
    - **UX/Logic Bugs:** All 4 background videos were set to autoplay at once. The email address was unclickable text. The contact form was a visual placeholder with no backend functionality.
    - **Local SEO Missing:** The site code contained GPS coordinates but lacked the physical street address required by Google Business Profile.

**Project Goal:** Transition the Ground Breaker Land Management (GBLM) website from a static, slow single-page HTML site into a high-performance, Next.js-powered Conversion Infrastructure and Local SEO engine.

---

## Phase 1: Next.js Foundation & Asset Migration (Priority: Critical)
*Objective: Rebuild the current UI in Next.js using the newly optimized files.*

### Step 1: Initialize Tech Stack
- Scaffold a new Next.js project using the App Router (`/app`).
- Install and configure Tailwind CSS for styling. Convert existing `style.css` variables (`--primary-green`, `--accent-gold`) into the `tailwind.config.js` theme block.

### Step 2: Swap Massive Assets (Audit Implementation)
- Delete the old large logo and `.mov` videos. Use the newly provided optimized `.mp4` background videos and compressed images.
- Update all codebase references from `.mov` to `.mp4`.
- *AI Check-in:* Ask developer for the unzipped optimized asset folder.

### Step 3: Rebuild UI as React Components
- Break the single-page HTML layout into modular Next.js components (`<Header />`, `<HeroVideo />`, `<Services />`, `<Footer />`).
- Ensure exact visual parity with the original design.
- *AI Check-in:* Pause for developer review of the visual layout.

---

## Phase 2: Fixing Friction Points & Functionality (Priority: High)
*Objective: Resolve the UX and logic errors from the previous static build.*

### Step 1: Media Logic Fixes
- **Video Autoplay Bug:** Write React state/Effect logic that *only* loads and autoplays the specific background video currently visible on the screen, OR efficiently rotate a single video array.
- Ensure all background videos have the `muted`, `playsInline`, and `loop` attributes.

### Step 2: Contact & Communication Routing
- **Email/Phone Links:** Update the email text to a clickable `<a href="mailto:...">`. Ensure mobile numbers use `<a href="tel:+1...">`. Add a floating `<a href="sms:+1...">` "Text Us" CTA for mobile users.
- **The "Success Loop" Form:** Add `data-netlify="true"` to the Next.js `<form>` component (or build a Next.js `/api/contact` route). 
- Create a React state that replaces the form with a clear "Thank You - We'll call you shortly" message upon successful submission.
- *AI Check-in:* Pause for developer to test form submission.

---

## Phase 3: Trust & Conversion Elements (Priority: High)
*Objective: Establish instant credibility to prevent bounces from ready-to-buy traffic.*

### Step 1: Social Proof Injections
- Add a new `<Reviews />` component below "About Us". Feature 3-5 real reviews with Name, Location, and 5-star icons.
- Build a `<ProjectGallery />` component showcasing raw land vs. cleared sites. Utilize Next.js `next/image` for automatic lazy loading.

### Step 2: Objection Handling
- Add an interactive `<FAQ />` component (accordion style) near the contact form. 
- Questions: "Do you offer free estimates?", "What areas do you serve?", "Are you insured?" (Emphasize *Fully Insured*).
- *AI Check-in:* Pause for developer review.

---

## Phase 4: Local SEO & "Answer Engine" Optimization (Priority: Medium)
*Objective: Feed Google Business Profile and AI search engines exactly what they want.*

### Step 1: JSON-LD Schema & Metadata
- Inject Local Business JSON-LD structured data into the `layout.tsx` file.
- **Audit Fix:** Add the official street address to the JSON-LD schema AND visually to the `<Footer />` component for NAP (Name, Address, Phone) consistency.

### Step 2: Service Area Landing Pages (Dynamic Routing)
- Utilize Next.js dynamic routes (e.g., `/app/locations/[city]/page.tsx`) to programmatically generate highly optimized landing pages for target towns using a reusable template.
- *AI Check-in:* Pause for developer to verify schema markup.

---

## Phase 5: Content Marketing & Scale (Priority: Medium/Long-Term)
*Objective: Prepare the site for inbound traffic, blogs, and paid ads.*

### Step 1: Legal & Ad Compliance
- Create `/privacy-policy` and `/terms-of-service` pages. Link them in the footer.

### Step 2: Blog Foundation
- Set up a `/blog` directory structure in Next.js to prepare for a headless CMS or markdown integration.
- *AI Check-in:* Final review.