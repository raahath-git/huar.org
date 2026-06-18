# Portfolio Website — Web Design Studio

A premium, light-themed, glassmorphism portfolio to showcase your web design service and win clients. Built from the chosen "Vibrant glass architecture" direction.

## Look & Feel (locked from chosen direction)
- Light theme only, soft mesh gradient background (rose, amber, cyan glows)
- Pure glassmorphism: frosted translucent white panels, backdrop blur, subtle ring borders
- Font: Instrument Sans
- Accent palette: rose `#fb7185`, amber `#fbbf24`, cyan `#22d3ee`
- Rounded corners, generous whitespace, gentle hover lift/scale

## Sections
1. **Floating glass nav** — studio name, links (Work, Services, Process), Contact button
2. **Hero** — bold headline, subheadline, "Start a project" + "View work" buttons, rose glow backdrop
3. **Portfolio grid** — glass project cards with images, project name + category, hover arrow (4 sample projects)
4. **Services** — 3-column: Strategy, Visual fidelity, Clean engineering with colored icon tiles
5. **Process** — simple numbered steps (Discover → Design → Build → Launch)
6. **Testimonials** — glass quote cards from clients
7. **Final CTA** — frosted panel with colored glow blobs, "Book an intro call"
8. **Footer** — copyright + social links

## Technical
- Replace `src/routes/index.tsx` placeholder with the full landing page, split into small components under `src/components/` (Nav, Hero, PortfolioGrid, Services, Process, Testimonials, CTA, Footer)
- Add design tokens (brand colors, mesh gradient, glass utilities) to `src/styles.css` via `@theme`; no hardcoded color classes where tokens fit
- Load Instrument Sans via `<link>` in `src/routes/__root.tsx`
- Generate real images for portfolio cards (replacing placeholders) with `imagegen`, saved to `src/assets/`
- Set SEO: title, meta description, single H1, semantic HTML, alt text, og tags
- Smooth scroll anchors for nav links; fade-up reveals on scroll

## Notes
- Static marketing site — no backend needed yet. Contact button can link to email/anchor for now.
- A working contact form (storing leads) or booking can be added later with Lovable Cloud if you want.
