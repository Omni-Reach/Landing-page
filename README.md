# OmniReach landing page

Front-end only Next.js App Router site for OmniReach. Forms validate locally and display a coming soon dialog; the site has no backend or network calls.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

- `src/app/`: landing, login, signup, not-found pages, global layout, and styles
- `src/components/`: navigation, branding, landing page cards, auth layout/forms, and coming soon dialog
- `tailwind.config.ts`: brand color and font tokens
