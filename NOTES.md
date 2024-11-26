- The Landing View, that is, what the user sees when they first visit the site, should be a simple and direct design.
- Use animations to make the content appear in the screen more fluidly, either with fade-ins or Y/X translations.
- Add translation support using i18n (EN, ES, DE, CAT)

- Improve project information: Each project should have it's own page with a detailed description, a list of technologies used, tasks done, challenges faces, and a link to the live site.
- Improve studies information: Each study should have it's own page with a detailed description, a list of skills learned, where I struggled and what I did to overcome it.
- Migrate project to Astro, using React islands with Motion where necessary. This way, the enhanced project and study pages can be written in markdown files.
- The whole site should have a strong design, with a consistent color scheme and typography. Could use very bold colors and big shadows, almost like a comic book.

- Add a new learning blog, where I write about stuff I learned or am currently learning, and explain it in a way that is easy to understand for a beginner.
- Add a new monthly blog, where I write about what I've done, what I've learned, what problems I struggled with, how I solved them, etc. A monthly catch-up.

- Look to incorporate DaisyUI for basic components and MagicUI for more out-there components.

The stack will look something like this:

Astro
React (or preact)
Jotai (if state management gets too complex)
Tailwind + DaisyUI + MagicUI
Motion
AstroIcons with Solar icons
Fonts: Inter (Display) + Open Sans (Body)
