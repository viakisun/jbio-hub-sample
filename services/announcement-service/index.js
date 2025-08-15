const express = require('express');
const { announcements } = require('./db/mock-data');

const app = express();
const port = 3001;

app.use(express.json());

// --- API Endpoints ---

// UI-01-02: 공고 목록 (Get list of announcements)
app.get('/announcements', (req, res) => {
  // In a real app, you might add filtering and pagination here
  // e.g., /announcements?sort=newest&page=1
  res.json(announcements);
});

// UI-01-03: 공고 상세 (Get a single announcement by ID)
app.get('/announcements/:id', (req, res) => {
  const { id } = req.params;
  const announcement = announcements.find(a => a.id === parseInt(id));

  if (announcement) {
    res.json(announcement);
  } else {
    res.status(404).json({ error: 'Announcement not found' });
  }
});

app.get('/', (req, res) => {
  res.send('Announcement service is running!');
});

app.listen(port, () => {
  console.log(`Announcement service listening at http://localhost:${port}`);
});
