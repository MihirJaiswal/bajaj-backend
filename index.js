const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
// Middleware (if any, e.g., body-parser, CORS)
app.use(express.json());

// Define the root route
app.get('/', (req, res) => {
  res.send('Welcome to the BFHL API!');
});

// Add other routes
app.get('/api/data', (req, res) => {
  res.json({ message: 'This is a sample API endpoint.' });
});

// Export the app
module.exports = app;
