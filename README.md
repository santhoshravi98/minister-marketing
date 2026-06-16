# Minister — Marketing Site

The public marketing landing page for **Minister**, the screen-time app that helps
you *"Stop scrolling. Start ruling."* Built from the approved Claude Design handoff
(`Minister Marketing.dc.html`) in the **Gilded Throne** night-kingdom theme.

## Stack

Plain static **HTML / CSS / JS** — no build step, no dependencies. It opens directly
in any browser and deploys to any static host (Netlify, Vercel, GitHub Pages, S3, …).

## Structure

```
minister_marketing/
├── index.html        # The full landing page (markup + inline visual styles)
├── css/
│   └── styles.css    # Resets, keyframe animations, and :hover states
├── js/
│   └── main.js       # Light progressive enhancement (smooth scroll, nav shadow)
└── README.md
```

### Why styles are partly inline

The design was authored in HTML/CSS, where every element's layout and color is
expressed as an inline `style`. To guarantee **pixel-perfect fidelity** with the
approved design, that styling is preserved exactly in `index.html`. Cross-cutting
concerns that can't live inline — keyframe `@keyframes` animations and `:hover`
states — were lifted into `css/styles.css`.

## Run locally

No tooling required. Either open the file directly:

```bash
open index.html        # macOS
```

…or serve it (recommended, so relative paths and fonts behave like production):

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Page sections

Hero (headline + app-store badges + phone mockup) → intro line → **How it works**
(3 steps) → **Features** (The Gates / The Chronicle / Your throne room) →
**The Keeper** differentiator → honest stats + testimonials → final CTA → footer.

## Notes for editing

- **Copy & links:** App Store / Google Play buttons and footer links point to `#`
  placeholders — swap in real URLs before launch.
- **Placeholder content:** stats (e.g. "4 days streak", "6h 12m saved") and the
  "no reviews yet" testimonial block are intentional launch placeholders.
- **Fonts:** Cinzel, Cormorant Garamond, Manrope, and Space Mono load from Google
  Fonts via `<link>` in `index.html`.

© 2026 Minister.
