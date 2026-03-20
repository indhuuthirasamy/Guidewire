const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Link our Routes
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send("RiderShield AI Server is running!");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is zooming on http://localhost:${PORT}`);
});