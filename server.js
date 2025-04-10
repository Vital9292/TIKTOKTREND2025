const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Import routes
const trendsRoutes = require('./routes/trends');
const productsRoutes = require('./routes/products');
const tiktokDataRoutes = require('./routes/tiktok-data');
const tiktokShopRoutes = require('./routes/tiktok-shop'); // New TikTok Shop routes

// Use routes
app.use('/api/trends', trendsRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/tiktok-data', tiktokDataRoutes);
app.use('/api/tiktok-shop', tiktokShopRoutes); // Add TikTok Shop routes

// Serve the React app for any other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/tiktok-platform', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
