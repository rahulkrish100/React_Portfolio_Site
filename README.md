# Michael Johnson — Portfolio (React)

A six-page personal portfolio site built with React and React Router, created
for **Assignment 1: React Portfolio Site**. The content uses Michael Johnson as
a fictional/placeholder persona, as permitted by the assignment brief.

## Pages

- **Home** — welcome message, mission statement, CTA to About
- **About** — name, profile image, short bio, résumé (PDF) download
- **Projects** — three projects with image, description, role, outcome
- **Education** — qualifications with dates and credentials
- **Services** — services offered
- **Contact** — contact info + form (captures values in state, redirects to Home on submit)

## Tech stack

- React 19 + Vite
- React Router (`react-router-dom`) for client-side routing
- Plain CSS (no external UI framework) — all styling in `src/index.css`
- All icons/logo/portrait are original inline SVG — no external image
  requests, so nothing can fail to load at runtime

## Project structure

```
michael-johnson-portfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf          # placeholder résumé, downloadable from About
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Logo.jsx         # original logo artwork
│   │   ├── Portrait.jsx     # original illustrated profile image
│   │   └── ProjectIcon.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Services.jsx
│   │   └── Contact.jsx
│   ├── App.jsx               # route definitions
│   ├── main.jsx               # app entry point
│   └── index.css
├── index.html
├── netlify.toml               # Netlify build + SPA redirect config
├── package.json
└── vite.config.js
```

## Run locally

```bash
npm install
npm run dev
```

Then open the printed local URL (typically http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Preview it locally with:

```bash
npm run preview
```

## Deploy: GitHub + Netlify

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: project scaffold"
# ...continue committing in stages as you develop, so the
# history shows meaningful progress (required by the rubric)...
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

### 2. Deploy on Netlify (via GitHub)

1. Go to [app.netlify.com](https://app.netlify.com) and log in.
2. Click **Add new site → Import an existing project**.
3. Choose **GitHub** and authorize Netlify to access your repository.
4. Select this repository.
5. Netlify should auto-detect the settings from `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click **Deploy site**.
7. Once the build finishes, Netlify gives you a live URL
   (e.g. `https://your-site-name.netlify.app`). You can rename it under
   **Site settings → Change site name**.

The included `netlify.toml` also adds a catch-all redirect to `index.html`,
which is required so that direct links or refreshes on routes like
`/projects` or `/contact` work correctly (React Router handles routing
client-side, so Netlify needs to always serve `index.html` first).

### 3. What to submit

- A ZIP archive of the complete project (this folder, minus `node_modules`).
- Your GitHub repository link.
- Your live Netlify site link.

## Notes

- All personal details (name, contact info, projects, education) use the
  Michael Johnson persona as placeholder/fictional content, per the assignment's
  allowance for professionally appropriate placeholder information.
- `public/resume.pdf` is a placeholder résumé generated for this project;
  replace it with a real file if desired (keep the filename `resume.pdf`,
  or update the link in `src/pages/About.jsx`).
