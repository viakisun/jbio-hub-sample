const express = require('express');
const { consultations } = require('./db/mock-data');

const app = express();
const port = 3005;

app.use(express.json());

// --- API Endpoints ---

// UI-06-01: 상담 신청 (Submit a consultation request)
app.post('/consultations', (req, res) => {
  const { name, email, phone, organization, subject, body } = req.body;

  if (!name || !email || !subject || !body) {
    return res.status(400).json({ error: 'Missing required fields: name, email, subject, body' });
  }

  const newConsultation = {
    id: consultations.length + 1, // simple id generation
    name,
    email,
    phone,
    organization,
    subject,
    body,
    status: 'submitted',
    createdAt: new Date().toISOString()
  };

  consultations.push(newConsultation);

  console.log('New consultation submitted:', newConsultation);
  res.status(201).json(newConsultation);
});

// Helper endpoint to view submitted consultations
app.get('/consultations', (req, res) => {
  res.json(consultations);
});

app.get('/', (req, res) => {
  res.send('Consultation service is running!');
});

app.listen(port, () => {
  console.log(`Consultation service listening at http://localhost:${port}`);
});
