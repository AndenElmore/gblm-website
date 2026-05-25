# GBLM Website — Development Roadmap

> **What this file is:** The single source of truth for all planned, in-progress, and completed development work on the GBLM website. All AI agents and developers execute work from this file.
>
> **What this file is NOT:** A Telegram log. Raw client messages live in `Roadmap.md`. Before starting any session, check `Roadmap.md` for new logged requests, triage them into the correct phase below, then execute from here.
>
> **Triage workflow:**
> 1. Pull latest from GitHub
> 2. Read `Roadmap.md` → identify new unreviewed items
> 3. Add them to the correct phase in this file as `[ ]` items
> 4. Mark the item in `Roadmap.md` as moved (move it to the Archive section)
> 5. Execute work from this file only

---

## 🏗️ Phase A: Branding & Experience Refinement
*Objective: Solidify the Hero, Services, and Navigation for a "World-Class" first impression.*

- [x] **Step 1: The 'iPhone Swipe' Hero** — Staggered scroll-linked animations for text and logo. *(Completed March 23)*
- [x] **Step 2: Traveling Word Highlight** — Sequential gold highlights on h1 title for directed reading. *(Completed March 23)*
- [x] **Step 3: Service Card Redesign** — Converted hover-reveal into permanent high-contrast "Green Box" cards. *(Completed March 23)*
- [x] **Step 4: Social Icon Integration** — Added Facebook/Instagram to top-bar and footer. *(Completed March 23)*
- [ ] **Step 5: Review Carousel** — Refine transition and layout of customer reviews for a more premium "testimony" feel.
- [x] **Step 6: Before & After Showcase** — High-performance carousel highlighting property transformations. *(Completed April 15)*
- [x] **Services Section Update** *(from David, May 7)* — Edit the blurb under "Our Services" to: *"Land management is a major investment. We offer flexible, stress-free payment plans so you can start your property improvement today!"* Add 2 new service cards: (1) Spraying weed control and fertilizer, (2) Bushhogging fields and pastures — use photos David provided in Telegram.
- [x] **Project Showcase Video Update** *(from David, May 7)*. Delete the straight overhead shot of brush clearing from the project showcase video. Replace with bushhogging field footage. Incorporate before/after shots of the mowed field. *Also add new lawn rolling video to the project showcase.* *(Completed May 25)*
- [x] **Lawn Rolling Service** *(from David, May 7)* — Create a new service card for lawn rolling. *(Completed May 10)*
- [x] **Service Cards Image Updates** *(from David, May 7)* — Change picture for "Seeding & Tilling" to the picture currently used on "Grading & Site Prep". Replace picture for "Grading & Site Prep" with new provided picture. *(Completed May 10)*
- [x] **Instagram Icon Investigation/Removal** *(from David, May 10)* — Investigate why the Instagram icon isn't working (currently links to `href="#"`) and either link it to their actual Instagram profile or remove it. *(Completed May 20)*
- [x] **Before & After Showcase Update** *(from Anden, May 25)*. Added a new lot clearing before/after showcase as the second project in the carousel. *(Completed May 25)*
- [x] **Shrub & Bush Removal Service** *(from David, May 25)*. Create a new service card for shrub and bush removal using the provided tractor photo. *(Completed May 25)*

---

## 📈 Phase B: Trust & Conversion
*Objective: Establish instant credibility to prevent bounces from ready-to-buy traffic.*

- [ ] **Step 1: Social Proof Injection**
    - Add 3-5 real reviews with Name, Location, and 5-star icons.
    - Build a `ProjectGallery` component (raw land vs. cleared sites) using `next/image` lazy loading.
- [ ] **Step 2: Objection Handling (FAQ)**
    - Add an interactive `FAQ` accordion near the contact form.
    - Questions: "Do you offer free estimates?", "What areas do you serve?", "Are you insured?" (Emphasize **Fully Insured**).

---

## 🔍 Phase C: Local SEO & "Answer Engine" Optimization
*Objective: Feed Google Business Profile and AI search engines exactly what they want.*

- [ ] **Step 1: JSON-LD Schema & Metadata Injection**
    - Add Local Business schema to `layout.tsx`.
    - Synchronize official street address visually in the `<Footer />` for NAP (Name, Address, Phone) consistency.
- [ ] **Step 2: Service Area Landing Pages**
    - Implement dynamic routes (`locations/[city]/page.tsx`) for town-specific pages: Bogart, Watkinsville, Athens, etc.

---

## 💡 Brainstorming & Ideas Bucket
*Drop ideas here before committing to a phase. Not scheduled yet.*

- [ ] **Interactive Land Management Quote Tool** — Multi-step form asking for acreage and service type to produce a tailored estimate request.
- [ ] **Blog Foundation** — Set up `/blog` route structure for inbound land management content marketing.
- [ ] **Glassmorphism Footer** — Update footer to match the premium glass theme of the Hero section.
