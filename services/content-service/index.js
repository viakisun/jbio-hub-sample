const express = require('express');
const { news, techs } = require('./db/mock-data');

const app = express();
const port = 3004;

app.use(express.json());

// --- News API Endpoints ---

// UI-04-01: 뉴스/공지 목록
app.get('/news', (req, res) => {
  res.json(news);
});

// UI-04-02: 뉴스/공지 상세
app.get('/news/:id', (req, res) => {
  const { id } = req.params;
  const item = news.find(n => n.id === parseInt(id));
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ error: 'News or notice not found' });
  }
});


// --- Tech/Achievements API Endpoints ---

// UI-05-01: 기술/성과 목록
app.get('/techs', (req, res) => {
  res.json(techs);
});

// UI-05-02: 기술/성과 상세
app.get('/techs/:id', (req, res) => {
  const { id } = req.params;
  const item = techs.find(t => t.id === parseInt(id));
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ error: 'Technology or achievement not found' });
  }
});


app.get('/', (req, res) => {
  res.send('Content service is running!');
});

app.listen(port, () => {
  console.log(`Content service listening at http://localhost:${port}`);
});
