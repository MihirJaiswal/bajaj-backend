const express = require('express');
const bodyParser = require('body-parser');
const bfhlRoutes = require('./routes/bfhlRoutes');
const cors = require('cors');

const app = express();

// CORS Configuration
const corsOptions = {
    origin: '*', // Allow requests from this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Include OPTIONS for preflight
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
    credentials: true, // Enable cookies or authentication (if needed)
};

// Middleware
app.use(cors(corsOptions)); // Apply CORS middleware
app.use(bodyParser.json());

// Handle Preflight Requests
app.options('*', cors(corsOptions)); // Preflight for all routes

// Routes
app.use('/bfhl', bfhlRoutes);

module.exports = app;
