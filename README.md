# Scrum Agile Guide

RESTful API + SPA for browsing **Scrum Agile** methodology topics. Built with Node.js + Express and vanilla HTML/CSS/JS with a dark/light theme system.

## Stack

| Layer | Technology |
|---|---|
| Backend | Node.js, Express 4, CORS |
| Frontend | HTML5, CSS3 (vanilla), JavaScript (ES6+) |
| Typography | Fraunces (headings) + Sora (body) — Google Fonts |
| Data | 20 Scrum topics in memory (JSON) |

## Architecture

```
scrum-agile-api/
├── server.js              # Entry point — Express server + API routes
├── data/
│   └── topics.js          # Static data: 20 topics with id, title, description, keywords
├── public/
│   ├── index.html         # SPA with header, search, filters, modal
│   ├── styles.css         # Design system: dark/light theme, animations, responsive
│   └── app.js             # Client logic: fetch, filters, theme toggle, modal
├── package.json
└── .gitignore
```

### Frontend (skill: frontend-design)

The frontend follows the `frontend-design` skill guidelines:

- **Dark mode by default** with light mode toggle persisted in localStorage
- **Expressive typography**: Fraunces (variable font with SOFT/WONK axes) for titles, Sora for body
- **Bold palette**: deep dark backgrounds (#0b0d14), amber (#f59e0b) and violet (#8b5cf6) accents
- **Animations**: staggered card entrance with `animation-delay`, hover micro-interactions, modal with backdrop blur
- **Texture**: noise overlay via SVG filter (2.5% opacity, overlay blend)
- **No CSS frameworks**: all vanilla, zero frontend dependencies

## API Endpoints

### `GET /api/topics`
Lists all topics. Supports filtering via query string.

**Parameters:**
| Query | Type | Example | Description |
|---|---|---|---|
| `category` | string | `?category=event` | Filter by category (normalizes accents) |
| `search` | string | `?search=sprint` | Search in title, description and keywords |

**Response:** `200 OK` — Array of topics.

### `GET /api/topics/:id`
Gets a topic by ID.

**Response:** `200 OK` — Topic object. `404` if not found.

### `GET /api/categories`
Lists available categories with their labels.

**Response:** `200 OK` — `[{ id: "event", label: "Event" }, ...]`

### `GET /api/stats`
Content statistics.

**Response:** `200 OK`
```json
{
  "total": 20,
  "categories": 7,
  "byCategory": [
    { "category": "event", "count": 5, "label": "Event" }
  ]
}
```

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

## How to run

```bash
npm install
npm start
# Server at http://localhost:3000
```

## Authorship

Project developed by **Behuti** with assistance from **opencode** (big-pickle).  
Frontend design based on the `frontend-design` skill.

Data based on the [Scrum Guide](https://scrumguides.org).
