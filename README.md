# ValueVantage — Standard React App

A standard Vite + React + TypeScript + Tailwind CSS SPA, converted from Lovable/TanStack Start.

## Getting Started

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
```

Output goes to `dist/`. Deploy that folder anywhere.

---

## Deploy Options (pick one)

### Vercel (recommended — free)
1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project → Import repo
3. Framework: **Vite** (auto-detected)
4. Click Deploy ✓

### Netlify (free)
1. Push to GitHub
2. Go to [netlify.com](https://netlify.com) → Add new site → Import from Git
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add a `_redirects` file in `public/`:
   ```
   /* /index.html 200
   ```
6. Click Deploy ✓

### GitHub Pages (free)
1. Install gh-pages: `npm install -D gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
3. Set `base: '/your-repo-name/'` in `vite.config.ts`
4. Run: `npm run build && npm run deploy`

---

## What Changed from Lovable

| Before (Lovable) | After (Standard) |
|---|---|
| `@tanstack/react-start` (SSR) | Plain Vite SPA |
| `@lovable.dev/vite-tanstack-config` | Standard `@vitejs/plugin-react` |
| `@tanstack/react-router` | `react-router-dom` v6 |
| `@cloudflare/vite-plugin` | Removed (not needed) |
| `bun` package manager | `npm` |
| Cloudflare Workers deploy | Any static host |
