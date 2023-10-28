const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../database/db');

exports.login = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.get('SELECT * FROM users WHERE username = ?', [username], (err, user) => {
    if (err) return res.status(500).send('Error on the server.');
    if (!user) return res.status(400).send('Username not found.');

    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) return res.status(400).send('Invalid password.');

    const token = jwt.sign({ id: user.id }, 'asdfghjklkjhgfdsasdfghjmu76ytgyggh7g', {
      expiresIn: 86400 // expires in 24 hours
    });

    res.status(200).send({ auth: true, token: token });
  });
};

exports.register = (req, res) => {
  const username = req.body.username;
  const password = bcrypt.hashSync(req.body.password, 8); // Hash the password

  // Check if username already exists
  db.get('SELECT * FROM users WHERE username = ?', [username], (err, user) => {
    if (err) return res.status(500).send('Error on the server.');
    if (user) return res.status(400).send('Username already exists.');

    // Insert new user into the database
    db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], (err) => {
      if (err) return res.status(500).send('There was a problem registering the user.');

      // Fetch the newly registered user
      db.get('SELECT * FROM users WHERE username = ?', [username], (err, user) => {
        if (err) return res.status(500).send('Error on the server.');

        const token = jwt.sign({ id: user.id }, 'your-secret-key', {
          expiresIn: 86400 // expires in 24 hours
        });

        res.status(200).send({ auth: true, token: token });
      });
    });
  });
};
