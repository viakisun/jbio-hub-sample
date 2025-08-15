const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 3000;

const services = [
  { route: '/api/announcements', target: 'http://localhost:3001' },
  { route: '/api/companies', target: 'http://localhost:3002' },
  { route: '/api/infra', target: 'http://localhost:3003' },
  { route: '/api/news', target: 'http://localhost:3004' },
  { route: 'api/techs', target: 'http://localhost:3004' },
  { route: '/api/consultations', target: 'http://localhost:3005' },
  { route: '/api/auth', target: 'http://localhost:3006' },
  { route: '/api/me', target: 'http://localhost:3006' },
  { route: '/api/admin', target: 'http://localhost:3099' }
];

services.forEach(({ route, target }) => {
  app.use(route, createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: (path, req) => {
      // Rewrite /api/announcements to /announcements
      return path.replace('/api', '');
    }
  }));
});

app.get('/', (req, res) => {
  res.send('API Gateway is running!');
});

app.listen(port, () => {
  console.log(`API Gateway listening at http://localhost:${port}`);
});
