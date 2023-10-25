const express = require('express');
const authController = require('./controllers/auth');
const authMiddleware = require('./middleware/auth');

const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Registration Endpoint
app.post('/register', authController.register);

// Login Endpoint
app.post('/login', authController.login);

// Protected Route
app.get('/dashboard', authMiddleware.verifyToken, (req, res) => {
  res.status(200).send('Welcome to the protected dashboard!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
