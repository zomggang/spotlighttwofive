# 2025 인물 퀴즈 (React + Vite)
# Spotlight2025 — 2025 Year-End Quiz (React + Vite)

Short summary
---------------
Spotlight2025 is a lightweight React/Vite quiz app that shows one media item at a time (person photo or meme), lets the player view a fast countdown, then reveals the answer. It includes two quiz types: a people quiz and a mixed-media meme quiz (images, GIFs, videos, YouTube, and text-first items).

Key features
------------
- Single-item display with configurable countdown and a manual reveal flow
- People quiz (photo → black screen → reveal name)
- Meme quiz supporting mixed media formats and text-first sequences
- Genre selection and prioritization of unseen items
- Simple, mobile-friendly UI with animated countdown

Tech stack
----------
- React 18 + Vite
- React Router for routing (/, /quiz, /meme)
- Plain CSS for styling

Run locally
-----------
1. Install dependencies:
```powershell
npm install
```
2. Start dev server:
```powershell
npm run dev
```
3. Open the URL Vite reports (e.g. http://localhost:5173/)

Data & copyrighted media (important)
-----------------------------------
- The project currently contains hard-coded media in `src/data/people.js` and `src/data/memes.js` for beta/testing.
- For public release, replace copyrighted images with licensed assets (CC0, your own photos, or properly attributed CC BY/CC BY-SA sources).
- If you must remove sensitive files from history before making the repo public, use tools like `git filter-repo` or BFG — I can help with that.

Deployment
----------
- I recommend deploying to Vercel for a fast, zero-config experience. Vercel supports private GitHub repos for beta deployments.
- Typical steps: push to GitHub (private), connect the repo in Vercel, and deploy.

How you can help the project
----------------------------
- Provide a list of people and legal image URLs to populate `src/data/people.js`.
- Replace local copyrighted media with placeholders or licensed images before making the repo public.

Notes
-----
- This repository is intended as a beta/demo. Treat media assets as placeholders until you confirm licensing.

If you want, I can prepare a short `CONTRIBUTING.md`, scrub large media from git history, or push a cleaned public-ready branch — tell me which and I'll help.
