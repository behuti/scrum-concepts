# Scrum Agile Guide

API RESTful + SPA para consultar tópicos de la metodología **Scrum Agile**. Construida con Node.js + Express y vanilla HTML/CSS/JS con sistema de tema dark/light.

## Stack

| Capa | Tecnología |
|---|---|
| Backend | Node.js, Express 4, CORS |
| Frontend | HTML5, CSS3 (vanilla), JavaScript (ES6+) |
| Tipografía | Fraunces (headings) + Sora (body) — Google Fonts |
| Datos | 20 tópicos de Scrum en memoria (JSON) |

## Arquitectura

```
scrum-agile-api/
├── server.js              # Entry point — Express server + rutas API
├── data/
│   └── topics.js          # Datos estáticos: 20 tópicos con id, título, descripción, keywords
├── public/
│   ├── index.html         # SPA con header, buscador, filtros, modal
│   ├── styles.css         # Sistema de diseño: dark/light theme, animaciones, responsive
│   └── app.js             # Lógica del cliente: fetch, filtros, theme toggle, modal
├── package.json
└── .gitignore
```

### Frontend (skill: frontend-design)

El frontend sigue los lineamientos de la skill `frontend-design`:

- **Dark mode por defecto** con toggle a light mode persistido en localStorage
- **Tipografía expresiva**: Fraunces (variable font con ejes SOFT/WONK) para títulos, Sora para cuerpo
- **Paleta audaz**: fondos oscuros profundos (#0b0d14), acentos en ámbar (#f59e0b) y violeta (#8b5cf6)
- **Animaciones**: entrada escalonada de tarjetas con `animation-delay`, micro-interacciones en hover, modal con backdrop blur
- **Textura**: noise overlay vía SVG filter (opacidad 2.5%, mezcla fija)
- **Sin frameworks CSS**: todo el diseño es vanilla, sin dependencias frontend

## API Endpoints

### `GET /api/topics`
Lista todos los tópicos. Soporta filtros vía query string.

**Parámetros:**
| Query | Tipo | Ejemplo | Descripción |
|---|---|---|---|
| `category` | string | `?category=evento` | Filtra por categoría (normaliza acentos) |
| `search` | string | `?search=sprint` | Busca en título, descripción y keywords |

**Respuesta:** `200 OK` — Array de tópicos.

### `GET /api/topics/:id`
Obtiene un tópico por su ID.

**Respuesta:** `200 OK` — Objeto del tópico. `404` si no existe.

### `GET /api/categories`
Lista las categorías disponibles con sus etiquetas.

**Respuesta:** `200 OK` — `[{ id: "evento", label: "Evento" }, ...]`

### `GET /api/stats`
Estadísticas del contenido.

**Respuesta:** `200 OK`
```json
{
  "total": 20,
  "categories": 7,
  "byCategory": [
    { "category": "evento", "count": 5, "label": "Evento" }
  ]
}
```

## Categorías

| Categoría | Cantidad |
|---|---|
| Framework | 1 |
| Evento | 5 |
| Artefacto | 4 |
| Rol | 3 |
| Concepto | 3 |
| Práctica | 2 |
| Métrica | 2 |

## Cómo ejecutar

```bash
npm install
npm start
# Servidor en http://localhost:3000
```

## Autoría

Proyecto desarrollado por **Behuti** con asistencia de **opencode** (big-pickle).  
Diseño frontend basado en la skill `frontend-design`.

Datos basados en la [Guía Scrum](https://scrumguides.org).
