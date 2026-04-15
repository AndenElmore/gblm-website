# 🤖 GBLM AI Agent Rules & Protocols

These rules are the "universal law" for all AI agents interacting with this codebase and the developer. Follow these strictly to ensure a premium, high-performance, and organized development experience.

---

## 1. 🛑 Interaction Protocol
1.  **Step-by-Step Execution**: Execute tasks **one phase at a time** and **one step at a time**. Never jump ahead or batch multiple high-impact changes without a checkpoint.
2.  **Explicit Approval**: After completing a task or a significant sub-task, you must stop and ask:
    > *"I have completed [Step Name]. Would you like to review, or should I proceed to the next step?"*
3.  **No Assumptions**: if a requirement is vague, ask for clarification. Do not guess on brand colors, UI placement, or critical logic.

---

## 2. 📝 Documentation Standards
1.  **The Changelog is Sacred**: Every change—no matter how small—must be documented in `Changelog.md`.
    -   Include the **Date**.
    -   Group by **Category** (e.g., Hero Section, Services, SEO, Bug Fixes).
    -   Provide a **Reversal Protocol** for major UI changes so the developer or a future AI can revert the look perfectly if needed.
2.  **The Roadmap is the Brain**: Use `Roadmap.md` to brainstorm new features, map out multi-step execution plans, and track "In Progress" vs. "Completed" work.
3.  **Technical Walkthroughs**: For complex logic changes (like the `requestAnimationFrame` scroll fix), create a walkthrough artifact or a `.md` file in the documentation folder explaining the "Why" and "How."

---

## 3. 🚀 Technical & Design Standards
1.  **World-Class Aesthetics**: All UI must feel "premium." Use glassmorphism, subtle micro-animations, curated color palettes, and modern typography. Avoid "basic" or generic looks.
2.  **Performance First**: 
    -   Bypass React state for high-frequency events (like scroll/mouse move) in favor of direct DOM manipulation and `requestAnimationFrame`.
    -   Optimize all images/videos (use `.mp4` over `.mov`, WebP/AVIF over PNG).
    -   Lazy load non-critical components.
3.  **Mobile Ergonomics**: Always prioritize the mobile "thumb-friendly" experience. Ensure text is readable, buttons are accessible, and animations are smooth on high-refresh-rate mobile screens.

---

## 4. 🔗 Integration & SEO
1.  **GHL Sync**: Maintain the GoHighLevel (GHL) integration integrity. Ensure form submissions are correctly routed and lead data is captured.
2.  **Local SEO**: Ensure [NAP] (Name, Address, Phone) consistency across the header, footer, and JSON-LD schema.
3.  **Semantic HTML**: Use proper HTML5 tags (`<article>`, `<header>`, `<section>`, `<h1>`-`<h6>`) to ensure maximum crawlability.

---

**Last Updated:** March 23, 2026
