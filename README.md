# Dhrumil Beladiya – Portfolio (Vite + React + Tailwind)

A clean, professional portfolio based on your resume. Built with **React**, **Vite**, and **Tailwind CSS**.

## Run locally

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Customize

- Update your links and contact in `src/data/resumeData.js`:
  - `email`, `phone`, `github`, `linkedin`, and `resumeUrl` if needed.
- Replace the placeholder photo box in **Hero** with your image/logo.
- Add more projects to the `projects` array.
- Colors live in `tailwind.config.js` under `theme.extend.colors.brand`.

## Notes

- No external UI library “Create Button” is used; all buttons are hand‑made with Tailwind (`.btn` and `.btn-outline` utilities).
- Professional palette: cool blues and slates; supports **Dark Mode** toggle in the navbar.
