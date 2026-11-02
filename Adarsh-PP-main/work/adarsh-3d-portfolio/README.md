# Adarsh — 3D Freelancer Portfolio

An animated MERN portfolio using React, Tailwind CSS, Express, MongoDB, and Motion.

## Highlights

- Immersive 3D hero, tilt cards, looping technology rails, and project-follow cursor
- Scroll-in animations, a compact Apple-style dock, dark/light mode, and accessible FAQs
- WhatsApp CTAs point to `+91 7974278003`
- Resume download currently serves `client/public/Adarsh-Namdeo-Resume-Template.html`; replace it with your final PDF when ready
- Contact messages are posted to the Express API and persisted to MongoDB when `MONGODB_URI` is configured

## Run locally

1. Copy `server/.env.example` to `server/.env` and add your MongoDB connection string (optional for UI-only mode).
2. Install packages with `npm install`.
3. Run `npm run dev`.
4. Open the client URL shown in the terminal, typically `http://localhost:5173`.

For a production frontend build run `npm run build`. Set `VITE_API_URL` in `client/.env` if the API is hosted separately.

## Personalise

Edit the project data, social URLs, and service copy at the top of `client/src/App.jsx`. The full requested color scale is in `client/src/index.css`.
