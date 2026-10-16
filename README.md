# Canada Travel Co.

*Canada, made for you.* Marketing site for a small team of Canada specialists.

Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · Framer Motion · next-intl (English / Français) · MDX stories · @react-pdf/renderer.

```bash
npm install
npm run dev          # http://localhost:3000 → redirects to /en
npm run build        # every page is statically generated per locale
npm run lint
npm run typecheck
npm run i18n:report  # French strings still waiting for a native speaker
```

## Where things live

| What | Where |
|---|---|
| Brand settings: name, contact, address, provincial travel seller registration, site URL | `config/site.ts` |
| Budget fit ("journeys generally start around CA$X per person per day") | `config/pricing.ts` |
| Currency rates (indicative, CAD base) | `config/currency.ts` |
| Season boundaries (summer = May–Oct, winter = Nov–Apr) | `config/seasons.ts` |
| Content types (read this first) | `data/types.ts` |
| Provinces, regions, journeys, experiences, stays, Wild Calendar, team, testimonials, FAQ, press | `data/*.ts` |
| Distance tool: place coordinates / editable travel time estimates / world comparison pairs | `data/places.ts`, `data/travel-times.ts`, `data/world-pairs.ts` |
| Long-form pages (Indigenous Canada, About, How we work) | `data/pages.ts` |
| Hero films and homepage imagery | `data/media.ts` |
| UI strings | `messages/en.json`, `messages/fr.json` |
| Stories | `content/stories/{en,fr}/*.mdx` (+ slug list in `lib/stories.ts`) |
| Voice, French and placeholder rules for writers | `docs/CONTENT_BRIEF.md` |

Italic emphasis in titles is written inline: `'Rockies to the *Pacific*'`.

## Images and films

Every image slot (`Img` in `data/types.ts`) describes the photo it wants (`subject`, `tone`, bilingual `alt`).
Until our own photography exists, slots show **temporary Unsplash stock photos** (Unsplash License),
hand-matched per subject in `data/photos.ts` (`photoBySubject`, with keyword and tone fallbacks for new content).
Each stock photo carries its own alt text describing what is actually shown.

To use a real photo, give the slot a `src` (a file in `/public` or an Unsplash URL); it always wins.
`lib/image-loader.ts` resizes Unsplash images through Unsplash's CDN. Hero films: add `video` in `data/media.ts`;
only the active season's film loads.

## Season switch

`<html data-season>` is set before first paint by an inline script (`lib/boot-script.ts`): the visitor's saved choice
(localStorage, then cookie), otherwise the current Northern Hemisphere season. Seasonal content is swapped with CSS
(`.summer-only` / `.winter-only` / `.season-order`), so pages stay static and never flash.

## French review

English is the source. French is a machine-assisted draft:

- every `/data` record carries `frReview: 'needs-human-review'`;
- every UI message key is listed in `data/translation-review.json` (run `npm run i18n:sync` after adding keys);
- French stories carry `frReview` in their `meta` and open with a "Brouillon de traduction" note.

A native speaker approves by switching the status to `'approved'`. `npm run i18n:report -- --list` shows what's left.

## Leads

`POST /api/enquire`, `POST /api/itinerary` (returns the branded PDF) and `POST /api/newsletter` validate with zod
and log through `lib/leads.ts`. **TODO: CRM integration** is marked there and in each route. Forms use a honeypot;
add Cloudflare Turnstile before launch.

## Before launch (placeholders)

- `config/site.ts`: company name/address, phone, email, registration numbers (TICO / Consumer Protection BC / OPC as applicable), `NEXT_PUBLIC_SITE_URL`.
- `config/pricing.ts`: the real per-day figure. `config/currency.ts`: rates.
- Team, testimonials, press and stays are invented placeholders (`placeholder: true`); replace with real, consented content.
- Facts marked `verify` (entry requirements: canada.ca) and every Wild Calendar event (`verifyYearly`).
- Privacy policy, terms (deposits and cancellations) and the accessibility statement need a lawyer's pass.
- French review (above).
