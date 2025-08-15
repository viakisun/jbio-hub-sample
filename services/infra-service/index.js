const express = require('express');
const { infrastructure } = require('./db/mock-data');

const app = express();
const port = 3003;

app.use(express.json());

// --- API Endpoints ---

// UI-03-01: 클러스터 지도 (Get all infrastructure points for the map)
app.get('/infra/map', (req, res) => {
  res.json(infrastructure);
});

app.get('/', (req, res) => {
  res.send('Infrastructure service is running!');
});

app.listen(port, () => {
  console.log(`Infrastructure service listening at http://localhost:${port}`);
});
