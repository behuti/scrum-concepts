# Scrum Agile Guide

Interactive reference guide for the **Scrum Agile** methodology. Browse 20 Scrum topics with search, category filtering, and a detail modal — all with a polished dark/light theme.

## Stack

| Layer | Technology |
|---|---|
| Backend API | Node.js, Express 4 |
| Frontend | **Next.js 16**, **React 19**, **TypeScript** |
| Styling | CSS custom properties (dark/light theme) |
| Typography | Fraunces (headings) + Sora (body) — Google Fonts |
| Data | 20 Scrum topics in memory (JSON) |
| Unit Tests | **Vitest** + Testing Library |
| E2E Tests | **Playwright** |

## Architecture

```
scrum-agile-api/
├── server.js               # Express API server (port 3000)
├── data/
│   └── topics.js           # 20 static Scrum topics
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── layout.tsx       # Root layout (fonts, theme, metadata)
│   │   │   ├── page.tsx         # Main page (orchestrator client component)
│   │   │   └── globals.css      # Full design system
│   │   ├── components/
│   │   │   ├── Header.tsx       # Sticky header + brand
│   │   │   ├── ThemeToggle.tsx  # Dark/light toggle (localStorage)
│   │   │   ├── SearchBar.tsx    # Search input (controlled)
│   │   │   ├── FilterBar.tsx    # Category filter buttons
│   │   │   ├── TopicCard.tsx    # Card (keyboard accessible)
│   │   │   ├── TopicGrid.tsx    # Grid (handles loading/error/empty)
│   │   │   └── TopicModal.tsx   # Modal (focus trap, Escape)
│   │   └── lib/
│   │       ├── types.ts         # Topic interface
│   │       └── api.ts           # fetchTopics, fetchTopic
│   ├── __tests__/
│   │   ├── setup.ts
│   │   └── components/          # 4 test suites, 16 tests
│   ├── e2e/
│   │   └── app.spec.ts          # 7 Playwright tests
│   ├── vitest.config.ts
│   ├── playwright.config.ts
│   └── package.json
├── package.json
└── .gitignore
```

## API Endpoints

### `GET /api/topics`
Lists all topics. Supports filtering via query string.

| Query | Type | Example | Description |
|---|---|---|---|
| `category` | string | `?category=event` | Filter by category (accents normalized) |
| `search` | string | `?search=sprint` | Search in title, description, keywords |

### `GET /api/topics/:id`
Gets a topic by ID. Returns `404` if not found.

### `GET /api/categories`
Returns `[{ id: "event", label: "Event" }, ...]`

### `GET /api/stats`
Content statistics with counts by category.

## Security & Performance Improvements

| Fix | Details |
|---|---|
| **Security headers** | `helmet()` middleware (CSP, X-Frame-Options, X-Content-Type-Options, etc.) |
| **Rate limiting** | 100 requests per 15 min window per IP on `/api/*` |
| **CORS restricted** | Reads `CORS_ORIGIN` env var, defaults to `localhost:3000` |

## Accessibility Improvements

| Fix | Details |
|---|---|
| **Modal focus management** | Focus moves into modal on open, returns to trigger on close |
| **Focus trap** | Tab/Shift+Tab cycles through modal elements; listener added/removed on open/close |
| **Keyboard nav for cards** | `tabindex="0"`, `role="button"`, handles Enter/Space |
| **Search labeled** | `<label>` linked via `for` attribute |
| **Modal labeled** | `aria-labelledby` pointing to title |
| **SVG icons** | Marked `aria-hidden="true"` |

## How to run

### Backend API

```bash
npm install
npm start
# Server at http://localhost:3000
```

### Frontend (Next.js)

```bash
cd frontend
npm install
npm run dev
# Frontend at http://localhost:3001 (proxies /api/* to :3000)
```

### Both (development)

Run the backend and frontend in separate terminals:

```bash
# Terminal 1 — API
npm start

# Terminal 2 — Frontend
cd frontend && npm run dev
```

## Available scripts

### Backend (`package.json`)

| Script | Command | Description |
|---|---|---|
| `npm start` | `node server.js` | Start Express API on port 3000 |
| `npm run dev` | `node --watch server.js` | Start with auto-restart on changes |

### Frontend (`frontend/package.json`)

| Script | Command | Description |
|---|---|---|
| `npm run dev` | `next dev` | Start dev server (port 3001) |
| `npm run build` | `next build` | Production build |
| `npm start` | `next start` | Start production server |
| `npm test` | `vitest run` | Run unit tests (CI) |
| `npm run test:watch` | `vitest` | Run unit tests in watch mode |
| `npm run test:e2e` | `playwright test` | Run Playwright E2E tests |

## Testing

### Unit tests (Vitest)

```bash
cd frontend
npm test                   # Run once (CI mode)
npm run test:watch         # Watch mode
```

16 tests across 4 suites:
- `TopicCard` — render, keywords, click, Enter, Space
- `TopicModal` — null state, render, close button, overlay click
- `SearchBar` — placeholder, onChange, value display
- `FilterBar` — render, active state, category click, All click

### E2E tests (Playwright)

```bash
cd frontend
npm run test:e2e           # Starts Next.js, mocks API, runs 7 tests
```

Tests: load topics, search filter, category filter, modal open/close, modal content, theme toggle, results count.

Playwright auto-starts the Next.js dev server. API data is mocked via `page.route()` so the Express backend is not required.

## Categories

| Category | Count |
|---|---|
| Framework | 1 |
| Event | 5 |
| Artifact | 4 |
| Role | 3 |
| Concept | 3 |
| Practice | 2 |
| Metric | 2 |

## Authorship

Project developed by **Behuti** with assistance from **opencode** (big-pickle).  
Frontend design based on the `frontend-design` skill.

Data based on the [Scrum Guide](https://scrumguides.org).
