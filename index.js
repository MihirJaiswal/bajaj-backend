const express = require('express');
const app = express();
const PORT = 3000;
const { getBfhl, postBfhl } = require('./controllers/bfhlController');
const upload = require('./middleware/upload');
const router = express.Router();

// Middleware (e.g., body-parser)
app.use(express.json());

// Define the /bfhl route for GET and POST requests
router.get('/', getBfhl); // Handles GET /bfhl
router.post('/', upload.single('file'), postBfhl); // Handles POST /bfhl

// Use the routes
app.use('/bfhl', router);

// Root route for API overview
app.get('/', (req, res) => {
  res.json({
    message: 'Available Routes:',
    routes: [
      { method: 'GET', path: '/bfhl' },
      { method: 'POST', path: '/bfhl' }
    ]
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Export the app for testing (optional)
module.exports = app;
