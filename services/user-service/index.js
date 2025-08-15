const express = require('express');
const { users } = require('./db/mock-data');

const app = express();
const port = 3006;

app.use(express.json());

// --- API Endpoints ---

// UI-07-01: 로그인 (Login)
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    // In a real app, generate a real JWT token.
    const mockToken = `fake-jwt-token-for-user-${user.id}`;
    res.json({
      message: 'Login successful',
      token: mockToken,
      user: { id: user.id, username: user.username, fullName: user.fullName, role: user.role }
    });
  } else {
    res.status(401).json({ error: 'Invalid username or password' });
  }
});

// UI-07-02: 마이페이지 (My Page)
// This is a mock protected route.
app.get('/me', (req, res) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized: No token provided' });
  }

  // In a real app, you would verify the token.
  // Here, we'll just pretend to and return the first user's data.
  const token = authHeader.split(' ')[1];
  if (token.startsWith('fake-jwt-token-for-user-')) {
    const userId = parseInt(token.replace('fake-jwt-token-for-user-', ''));
    const user = users.find(u => u.id === userId);
    if (user) {
      // Return a subset of user data for My Page
      const { password, ...userProfile } = user;
      return res.json(userProfile);
    }
  }

  res.status(401).json({ error: 'Unauthorized: Invalid token' });
});

app.get('/', (req, res) => {
  res.send('User service is running!');
});

app.listen(port, () => {
  console.log(`User service listening at http://localhost:${port}`);
});
