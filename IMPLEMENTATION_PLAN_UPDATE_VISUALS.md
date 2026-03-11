# Implementation Plan: Update Visuals & SEO Strategy (Ground Breaker Land Management)

This plan outlines the steps to reorganize the codebase into a production-ready structure and implement specific client requests regarding branding, service prioritization, and Local SEO.

## Phase 1: Environment & Structure Setup
**Goal:** Split the single-file codebase into a scalable directory structure.

- [x] **Create Directory Structure**
    - [x] Create `css/` directory.
    - [x] Create `assets/` or `images/` directory.
- [x] **File Extraction**
    - [x] Move CSS from `index.html` to `css/style.css`.
    - [x] Link `css/style.css` in `index.html`.
- [x] **Asset Management**
    - [x] Move `logo.png` to `assets/`.
    - [x] Download and save placeholder images locally to `assets/`.
    - [x] Update all image paths in `index.html`.

## Phase 2: Strategic Architecture (Vision & SEO)
**Goal:** Balance the client's emotional branding with Search Engine Optimization requirements.

- [x] **Headline Strategy (The H1/H2 Split)**
    - [x] Update H1: "Inspiring Your Dreams, One Project at a Time."
    - [x] Add/Update H2 (Immediate sub-headline): "Professional Land Management, Seeding, and Site Prep for Oconee County & Beyond."
- [x] **Priority 5 Ranking Strategy**
    - [x] Identify Priority 5: **Seeding, Tilling, Bush Hogging, Driveways, and Tree Cleanup**.
    - [x] Modify Services section to visually highlight these 5 services (e.g., bolding or adding custom icons).

## Phase 3: Content & Technical Implementation
**Goal:** Execute the specific text changes and technical SEO requirements.

- [x] **Content Injection**
    - [x] **Header:** Apply new H1 "Inspiring Dreams" copy.
    - [x] **About Section:**
        - [x] Update text block to: "Oconee County and beyond..." copy.
        - [x] Replace bottom paragraph with: "We’re here to help you achieve your dreams..." copy.
        - [x] Verify Local SEO keywords (Bogart, Watkinsville, Athens) are preserved.
    - [x] **Trust Signals:**
        - [x] Add `<li><i class="fa-solid fa-shield-check"></i> Fully Insured</li>` to About or Services.
- [x] **Service List Refinement**
    - [x] Remove sub-headline: "Comprehensive land solutions..." in the Services header.
    - [x] Update **Clearing** card: Add "Shrubbery and Bush Removal".
    - [x] Update **Stump Grinding**: Add text "(Up to 24 inches in diameter)".
- [x] **Technical SEO (Invisible Infrastructure)**
    - [x] **Meta Title:** Update to "Ground Breaker Land Management | Seeding, Grading & Bush Hogging in Bogart, GA".
    - [x] **Meta Description:** Update to include "Priority 5" services and locations.
    - [x] **Schema Markup:** Add JSON-LD script for Local Business (Type: Landscaping) with Bogart location details.

## Progress Checklist
- [x] Phase 1: Environment Setup
- [x] Phase 2: Strategic Content
- [x] Phase 3: Technical & Final Edits
- [x] Final Verification & Linting
