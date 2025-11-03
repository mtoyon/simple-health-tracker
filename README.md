# Health Tracker — React (Single-page)

Simple single-page React application to track medications and log daily vital signs.

Features
- User login by username (no password)
- Per-user medication list: add, view, remove
- Per-user vitals log: add entries; each entry includes a timestamp and displays newest-first
- Data persistence in browser Local Storage (per user keys)
- Auto-logout after 5 minutes of inactivity (mouse/keyboard/touch)

Assumption
- The project requirements mention auto-logout after both 10 minutes and 5 minutes in different places; to satisfy acceptance criteria this implementation uses 5 minutes (300,000 ms). You can change the constant in `src/App.jsx` (INACTIVITY_MS) if you prefer 10 minutes.

Getting started

Requirements: Node.js (16+) and npm

Install and run locally:

```powershell
cd health-tracker
npm install
npm run dev
```

Open http://localhost:5173 in your browser (Vite default).

Project structure (important files)
- `src/App.jsx` — main app, handles login state and inactivity auto-logout
- `src/components/Login.jsx` — login screen
- `src/components/MedicationForm.jsx` — add medication
- `src/components/MedicationList.jsx` — list and remove meds
- `src/components/VitalsForm.jsx` — add vitals
- `src/components/VitalsLog.jsx` — display vitals sorted newest-first
- `src/utils/storage.js` — helpers for per-user localStorage keys

Local Storage keys
- Medications are saved under key `meds-<username>`
- Vitals are saved under key `vitals-<username>`

Sample credentials
- alice
- bob

Acceptance checklist
- Add medication -> appears in list and persists after refresh
- Remove medication -> removed and persists
- Add vitals -> appears in vitals log with timestamp (newest first)
- Data separated per username
- Logout button clears session
- Auto-logout after 5 minutes inactivity

Next steps (recommended)
- Add light form validation/feedback
- Add tests (Jest/React Testing Library)
- Add small UX improvements (confirmation before delete)

## GitHub Repository
https://github.com/mtoyon/simple-health-tracker

## Live Demo
You can set up GitHub Pages to host a live demo at:
https://mtoyon.github.io/simple-health-tracker
