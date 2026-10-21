# AshArrow — MBBS Workspace

A responsive, static MBBS study workspace built with vanilla HTML, CSS and JavaScript. No framework or build step is required.

## Features
- Responsive glassmorphism UI, light/dark theme, animated cards and scroll-reveal transitions
- 19 MBBS subject overview with year filters and subject topic modal
- Personal lecture shelf with user-added video/embed links, search and subject filtering
- Lecture room with best-effort embeds for YouTube, Vimeo, Google Drive preview, Dailymotion and Loom
- Local notes editor with search, subject labels and formatting buttons
- Flashcards with reveal, keyboard navigation, and recall ratings
- Study planner, task checklist, 25-minute focus timer, daily intention checklist
- Progress dashboard, subject progress and activity chart
- Optional Gemini answer generator using a user-supplied API key
- Export study data as JSON, local persistence and a basic service worker for offline shell caching

## Run locally
Open `index.html` in a browser. Most features work locally. Service-worker/PWA behaviour requires serving the folder over HTTP/HTTPS, for example with GitHub Pages.

## Deploy on GitHub Pages
1. Create or open a repository for the site.
2. Upload all files and the `assets` folder, preserving the folder structure.
3. In GitHub, open **Settings → Pages**.
4. Select **Deploy from a branch**, choose the main branch and root (`/`), then save.
5. Open the published URL after GitHub Pages finishes building.

## Important notes
- This is a static frontend; notes, tasks, cards and progress are saved in the current browser using localStorage. They are not synced across devices.
- The lecture list contains sample topic entries with no video URLs. Add your own authorised links.
- Some video providers block iframe playback; use the original-link action in that case.
- The AI answer studio only calls Gemini if the user supplies their own API key. The key is stored locally in this browser. Avoid saving it on shared devices.
- Generated visual asset is a decorative concept image, not medical reference material.
- Sample topics and sample flashcards are starter examples; verify medical content against prescribed textbooks and faculty guidance.
