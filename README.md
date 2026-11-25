# NOVA ULTRA

An interactive electric performance concept by **Ultragem tech** ([ultragemtech.com](https://ultragemtech.com)).
Contact: hello@ultragemtech.com

A single scene with four hotspots: hover the propulsion or energy core points to see the car open up, click to enter a technical cutaway, or use the Finish and Wheelset points to try other looks.

## Run it

Requires Node.js 22+ and pnpm 10.15.1.

```sh
pnpm install --frozen-lockfile
pnpm dev        # http://127.0.0.1:5220
pnpm test
pnpm build      # output in dist/
```

## Where to edit

- `src/content.ts` — system titles, descriptions, component notes, hotspot labels and positions
- `src/appearance.ts` — finish and wheel option names and images
- `src/App.tsx` — page copy, header and footer (including the Ultragem tech credit and email)
- `src/index.css` — colours (`--accent`, `--panel`, `--studio`), type and layout
- `public/media/` — all images and hover videos
