const express = require('express');
const fs = require('fs');
const path = require('path');

// NOTE: This is NOT a typical microservice pattern.
// In a real-world scenario, this service would communicate with other services via their APIs or a shared message bus.
// For this simulation, we are directly accessing the mock data files as requested.
const { announcements } = require('../announcement-service/db/mock-data');
const { companies } = require('../company-service/db/mock-data');

const app = express();
const port = 3099; // Admin service port

app.use(express.json());

// --- Middleware for mock auth ---
// A simple check for an admin role.
const isAdmin = (req, res, next) => {
  // In a real app, this would check a JWT token.
  if (req.headers['x-user-role'] === 'admin') {
    next();
  } else {
    res.status(403).json({ error: 'Forbidden: Admin access required' });
  }
};

// All admin routes are protected
app.use(isAdmin);

// --- Dashboard ---
// UI-99-01: 관리자 대시보드
app.get('/dashboard', (req, res) => {
  res.json({
    summary: {
      announcements: announcements.length,
      companies: companies.length,
      // ... other counts
    },
    message: 'Admin dashboard data'
  });
});

// --- Announcement Management ---
// UI-99-02: 공고 관리

// Get all announcements
app.get('/announcements', (req, res) => {
  res.json(announcements);
});

// Create a new announcement
app.post('/announcements', (req, res) => {
  const { title, content, author } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required' });
  }
  const newAnnouncement = {
    id: announcements.length > 0 ? Math.max(...announcements.map(a => a.id)) + 1 : 1,
    title,
    content,
    author: author || 'Administrator',
    createdAt: new Date().toISOString(),
    files: [],
    relatedLinks: []
  };
  announcements.push(newAnnouncement);
  // Note: This only modifies the in-memory array. It does not write back to the file.
  res.status(201).json(newAnnouncement);
});

// Update an announcement
app.put('/announcements/:id', (req, res) => {
  const { id } = req.params;
  const { title, content, author } = req.body;
  const announcementIndex = announcements.findIndex(a => a.id === parseInt(id));

  if (announcementIndex === -1) {
    return res.status(404).json({ error: 'Announcement not found' });
  }

  const updatedAnnouncement = { ...announcements[announcementIndex], title, content, author, updatedAt: new Date().toISOString() };
  announcements[announcementIndex] = updatedAnnouncement;

  res.json(updatedAnnouncement);
});

// Delete an announcement
app.delete('/announcements/:id', (req, res) => {
  const { id } = req.params;
  const announcementIndex = announcements.findIndex(a => a.id === parseInt(id));

  if (announcementIndex === -1) {
    return res.status(404).json({ error: 'Announcement not found' });
  }

  announcements.splice(announcementIndex, 1);
  res.status(204).send(); // No Content
});


// --- Company/Institution Management ---
// UI-99-03: 기관/기업 관리

app.get('/companies', (req, res) => {
  res.json(companies);
});

app.post('/companies', (req, res) => {
  const { name, type, description } = req.body;
  if (!name || !type) {
    return res.status(400).json({ error: 'Name and type are required' });
  }
  const newCompany = {
    id: companies.length > 0 ? Math.max(...companies.map(c => c.id)) + 1 : 1,
    name,
    type,
    description: description || '',
    createdAt: new Date().toISOString()
  };
  companies.push(newCompany);
  res.status(201).json(newCompany);
});

app.put('/companies/:id', (req, res) => {
  const { id } = req.params;
  const { name, type, description } = req.body;
  const companyIndex = companies.findIndex(c => c.id === parseInt(id));

  if (companyIndex === -1) {
    return res.status(404).json({ error: 'Company not found' });
  }

  const updatedCompany = { ...companies[companyIndex], name, type, description, updatedAt: new Date().toISOString() };
  companies[companyIndex] = updatedCompany;

  res.json(updatedCompany);
});

app.delete('/companies/:id', (req, res) => {
  const { id } = req.params;
  const companyIndex = companies.findIndex(c => c.id === parseInt(id));

  if (companyIndex === -1) {
    return res.status(404).json({ error: 'Company not found' });
  }

  companies.splice(companyIndex, 1);
  res.status(204).send();
});


app.get('/', (req, res) => {
  res.send('Admin service is running!');
});

app.listen(port, () => {
  console.log(`Admin service listening at http://localhost:${port}`);
});
