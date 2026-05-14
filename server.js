const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const path = require('path');
const topics = require('./data/topics');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN || 'http://localhost:3000' }));
app.use(express.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});
app.use('/api/', limiter);

app.use(express.static(path.join(__dirname, 'public')));

const CATEGORY_LABELS = {
  event: 'Event',
  role: 'Role',
  artifact: 'Artifact',
  concept: 'Concept',
  metric: 'Metric',
  practice: 'Practice',
  framework: 'Framework'
};

app.get('/api/topics', (req, res) => {
  const { category, search } = req.query;
  let result = [...topics];

  if (category) {
    const normalized = category.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    result = result.filter((t) => {
      const catNorm = t.category.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      return catNorm === normalized;
    });
  }

  if (search) {
    const q = search.toLowerCase();
    result = result.filter(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        t.summary.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.keywords.some((k) => k.toLowerCase().includes(q))
    );
  }

  res.json(result);
});

app.get('/api/topics/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const topic = topics.find((t) => t.id === id);

  if (!topic) {
    return res.status(404).json({ error: 'Topic not found' });
  }

  res.json(topic);
});

app.get('/api/categories', (_req, res) => {
  const cats = [...new Set(topics.map((t) => t.category))];
  res.json(cats.map((c) => ({ id: c, label: CATEGORY_LABELS[c] || c })));
});

app.get('/api/stats', (_req, res) => {
  res.json({
    total: topics.length,
    categories: [...new Set(topics.map((t) => t.category))].length,
    byCategory: Object.entries(
      topics.reduce((acc, t) => {
        acc[t.category] = (acc[t.category] || 0) + 1;
        return acc;
      }, {})
    ).map(([category, count]) => ({ category, count, label: CATEGORY_LABELS[category] || category }))
  });
});

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use((err, _req, res, _next) => {
  console.error('Error:', err.message);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`Scrum Agile API running at http://localhost:${PORT}`);
});
