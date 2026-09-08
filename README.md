# Saint Mary's Possession Tracker

A courtside possession/PPP tracker built with React + Vite.

## One-time setup

1. **Create the repo.** On github.com, click "New repository," give it a
   name (e.g. `st-marys-tracker`), leave it empty (no README), and create it.

2. **Edit one line before you push.** Open `vite.config.js` and change:
   ```js
   base: "./",
   ```
   to:
   ```js
   base: "/<your-repo-name>/",
   ```
   using the exact name you gave the repo (with slashes on both sides).
   This is the only manual edit you'll ever need to make.

3. **Push it up:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```

4. **Turn on Pages, once.** In your repo on GitHub: Settings → Pages →
   under "Build and deployment," set Source to **GitHub Actions**.
   That's it — no further settings needed.

## After that

Every time you `git push`, GitHub automatically builds the site and
publishes it — you never run `npm install` or `npm run build` yourself
again. Check the "Actions" tab on your repo to watch it happen; it
takes about a minute. Your live site is at:

```
https://<your-username>.github.io/<repo-name>/
```

## About data storage

Data is saved in the browser's `localStorage` via
`src/storage-polyfill.js`. Once the site is live at a real `https://`
URL (as opposed to opening the HTML file directly), this works
reliably — your roster and games persist between visits on that
browser/device.

Note this means data lives in *that one browser*, not synced across
devices. If you ever want the same roster on your phone and a laptop
at once, the fix is swapping `storage-polyfill.js`'s internals for a
real backend (Supabase and Firebase both have generous free tiers) —
`App.jsx` wouldn't need to change at all, since it only ever calls
`window.storage.get/set/delete/list`.

## Local development (optional)

If you want to preview changes before pushing:
```bash
npm install
npm run dev
```
