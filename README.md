# EATS Website — Project Structure

```
eats-website/
│
├── index.html              ← Main entry point (open this in a browser)
│
├── css/
│   ├── variables.css       ← CSS custom properties (colors, spacing tokens)
│   ├── base.css            ← Reset, typography, buttons, animations
│   ├── components.css      ← All section & UI component styles
│   └── responsive.css      ← Media queries / mobile overrides
│
├── js/
│   └── main.js             ← Cursor, nav scroll behavior, scroll reveal
│
├── components/             ← Standalone HTML snippets for each section
│   ├── nav.html            ← Navigation bar
│   ├── hero.html           ← Hero section
│   ├── about.html          ← About section
│   ├── projects.html       ← Projects grid (includes photo guide)
│   ├── team.html           ← Team cards (includes photo guide)
│   └── alumni.html         ← Alumni logos grid (includes logo guide)
│
└── images/
    ├── logo.png            ← Site logo (optional)
    ├── team/               ← Team member headshots
    │   ├── president.jpg
    │   ├── vp.jpg
    │   └── ...
    ├── projects/           ← Project photos
    │   ├── line-follower.jpg
    │   └── ...
    └── logos/              ← Alumni company logos (PNG with transparent bg)
        ├── spacex.png
        └── ...
```

---

## How to Add Photos

### Company Logos (Alumni Section)
1. Drop a PNG with transparent background in `images/logos/`
2. In `index.html`, find an empty `.logo-slot`
3. Replace `<span class="placeholder-text">Add Logo</span>` with:
   ```html
   <img src="images/logos/spacex.png" alt="SpaceX">
   ```
   Logos are auto-styled to white-tinted and dimmed to match the dark theme.

### Site Logo (Nav)
1. Drop your logo in `images/` (e.g. `logo.png`)
2. In `index.html`, find the `.nav-logo` anchor
3. Replace the `<span>` with:
   ```html
   <img src="images/logo.png" alt="EATS Logo">
   ```

---

## Editing Tips

- **Colors / theme** → `css/variables.css`
- **Section content** → `index.html` (each section is clearly labeled)
- **Animations / layout** → `css/base.css`
- **Component appearance** → `css/components.css`
- **Mobile layout** → `css/responsive.css`
- **JS behavior** → `js/main.js`
