# Layout Variants

This document outlines two alternative layout concepts, "Safe Modern" and "Experimental", as variants of the primary "Bold" redesign.

## 1. Safe Modern

This layout provides a minimal-risk refresh of the existing site flow. It adopts the new design token system (colors, typography, spacing) but preserves the original page structure and component order.

### Key Changes:
- **Styling:** All components are updated to use the new SCSS tokens and BEM classes (`.card`, `.btn`, etc.). This ensures visual consistency with the new brand identity.
- **Hierarchy:** The original section order from `HomePage` is maintained: Hero, Stats, Services, Content Grid.
- **Grids:** Standard, symmetric grids are used. For instance, the `grid--cards-3` class would be used for services, resulting in a simple, predictable layout.
- **Hero:** The hero section would use the `.hero` class without the `--split` modifier, resulting in a traditional full-width hero with centered text.

### Implementation Notes:
- A new page component, `SafeHomePage.tsx`, could be created.
- It would use the same `BoldMainLayout`.
- The JSX would be very similar to the original `HomePage.tsx`, but with the new BEM class names applied to the elements.

## 2. Experimental

This layout pushes the boundaries of the design system, introducing more editorial and dynamic elements. It prioritizes visual impact and motion to create a more immersive experience.

### Key Concepts:
- **Overlapping Layers:** The hero section could feature the visual element (`.hero__visual`) overlapping the text element (`.hero__text`), creating a sense of depth. This could be achieved with negative margins and z-index stacking.
- **Sticky Sub-Nav:** A sticky sub-navigation bar could appear after scrolling past the hero. This bar would contain links to the different sections of the page (e.g., "Services", "Insights", "Stats"), allowing for quick navigation.
- **Motion Cues:**
    - **Scroll-triggered animations:** As the user scrolls, elements could fade in or slide in, guiding the eye and adding energy. Libraries like `framer-motion` could be used for this.
    - **Parallax effects:** The background of the hero section could scroll at a different speed than the foreground content, adding to the sense of depth.
- **Asymmetric Grids:** The masonry grid for the content could be made even more dynamic, with cards of varying widths and heights, creating a more scrapbook-like feel.

### Implementation Notes:
- This would likely require a more complex `ExperimentalHomePage.tsx`.
- Additional CSS/SCSS would be needed for the animations, parallax, and complex grid layouts.
- JavaScript would be required for the scroll-triggered events and animations.
- The `z-index` stacking context would need to be carefully managed to ensure proper layering.
