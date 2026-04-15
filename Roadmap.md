# 🛣️ GBLM Website Roadmap: Execution & Innovations

This file is the **Brain** of the project where the developer (User) and the AI (Agent) brainstorm new features, map out implementation strategies, and track current progress. 

---

## 🏗️ Phase A: Branding & Experience Refinement (In Progress)
*Objective: Solidify the Hero, Services, and Navigation for a "World-Class" first impression.*

- [x] **Step 1: The 'iPhone Swipe' Hero**: Implement staggered scroll-linked animations for the text and logo. (Completed March 23)
- [x] **Step 2: Traveling Word Highlight**: Add sequential gold highlights to the h1 title for directed reading. (Completed March 23)
- [x] **Step 3: Service Card Redesign**: Convert hover-reveal into permanent high-contrast "Green Box" cards. (Completed March 23)
- [x] **Step 4: Social Icon Integration**: Added Facebook/Instagram to top-bar and footer. (Completed March 23)
- [ ] **Step 5: Review Carousel**: Refine the transition and layout of the customer reviews for a more premium "testimony" feel.
- [x] **Step 6: Before & After Showcase**: Implement a high-performance carousel to highlight property transformations. (Completed April 15)

---

## 📈 Phase B: Trust & Conversion (Next Priority)
*Objective: Establish instant credibility to prevent bounces from ready-to-buy traffic.*

- [ ] **Step 1: Social Proof Injection**: 
    -   Add 3-5 real reviews with Name, Location, and 5-star icons.
    -   Build a `ProjectGallery` component (raw land vs. cleared sites) using `next/image` lazy loading.
- [ ] **Step 2: Objection Handling (FAQ)**:
    -   Add an interactive `FAQ` accordion near the contact form.
    -   Questions: "Do you offer free estimates?", "What areas do you serve?", "Are you insured?" (Emphasize **Fully Insured**).

---

## 🔍 Phase C: Local SEO & "Answer Engine" Optimization 
*Objective: Feed Google Business Profile and AI search engines exactly what they want.*

- [ ] **Step 1: JSON-LD Schema & Metadata Injection**:
    -   Add Local Business schema to `layout.tsx`.
    -   Synchronize official street address visually in the `<Footer />` for NAP (Name, Address, Phone) consistency.
- [ ] **Step 2: Service Area Landing Pages**: 
    -   Implement dynamic routes (`locations/[city]/page.tsx`) to generate town-specific landing pages for Bogart, Watkinsville, Athens, etc.

---

## 💡 Brainstorming & Ideas Bucket
*Note: Drop ideas here before fully committing to the roadmap.*

- [ ] **Interactive Land Management Quote Tool**: A multi-step form that asks for acreage and service type to give a more tailored "Estimate Request" experience.
- [ ] **Blog Foundation**: Prepare for inbound content marketing by setting up a `/blog` structure for land management guides.
- [ ] **Glassmorphism Footer**: Update the footer to match the premium glass theme of the Hero.
