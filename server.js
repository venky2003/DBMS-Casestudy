const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

// Your existing routes...

// Add a route to handle user registration
app.post('/api/user', (req, res) => {
  const { f_name, i_name, password, gender, martial, DOB, ans, Mobile } = req.body;

  if (!f_name || !i_name || !password || !gender || !martial || !DOB || !ans || !Mobile) {
    res.status(400).json({ error: 'Invalid request. Please provide all required user information.' });
    return;
  }

  db.run(
    'INSERT INTO users (f_name, i_name, password, gender, martial, DOB, ans, Mobile) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
    [f_name, i_name, password, gender, martial, DOB, ans, Mobile],
    function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ id: this.lastID });
    }
  );
});

// Change the route for adding a booking
app.post('/api/books', (req, res) => {
  const { train_no, train_name, origin, destination, arrival, doj, Class, tatkal, seat_type } = req.body;

  if (!train_no || !train_name || !origin || !destination || !arrival || !doj || !Class || !seat_type) {
    res.status(400).json({ error: 'Invalid request. Please provide all required booking information.' });
    return;
  }

  db.run(
    'INSERT INTO bookings (train_no, train_name, origin, destination, arrival, doj, Class, tatkal, seat_type) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
    [train_no, train_name, origin, destination, arrival, doj, Class, tatkal || 0, seat_type],
    function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ id: this.lastID });
    }
  );
});

// Your existing routes...

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
