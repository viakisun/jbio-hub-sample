const express = require('express');
const { companies } = require('./db/mock-data');

const app = express();
const port = 3002;

app.use(express.json());

// --- API Endpoints ---

// UI-02-01: 기업/기관 목록 (Get list of companies/institutions)
app.get('/companies', (req, res) => {
  // In a real app, you could filter by type, e.g., /companies?type=기업
  const { type } = req.query;
  if (type) {
    const filteredCompanies = companies.filter(c => c.type === type);
    return res.json(filteredCompanies);
  }
  res.json(companies);
});

// UI-02-02: 기업/기관 상세 (Get a single company/institution by ID)
app.get('/companies/:id', (req, res) => {
  const { id } = req.params;
  const company = companies.find(c => c.id === parseInt(id));

  if (company) {
    res.json(company);
  } else {
    res.status(404).json({ error: 'Company or institution not found' });
  }
});

app.get('/', (req, res) => {
  res.send('Company/Institution service is running!');
});

app.listen(port, () => {
  console.log(`Company/Institution service listening at http://localhost:${port}`);
});
