const express = require('express');
const router = express.Router();

// Mock data for products
const products = [
  {
    id: 'prod_001',
    name: 'Fitness Resistance Bands Set',
    description: 'High-quality resistance bands for effective workouts',
    price: 29.99,
    stock: 150,
    category: 'fitness',
    images: ['https://example.com/image1.jpg', 'https://example.com/image2.jpg'],
    sales_count: 87,
    trend_score: 92,
    created_at: '2025-03-15T10:30:00Z'
  },
  {
    id: 'prod_002',
    name: 'Smart Water Bottle with Hydration Tracker',
    description: 'Track your water intake with this smart bottle',
    price: 39.99,
    stock: 75,
    category: 'fitness',
    images: ['https://example.com/image3.jpg', 'https://example.com/image4.jpg'],
    sales_count: 63,
    trend_score: 88,
    created_at: '2025-03-18T14:45:00Z'
  },
  {
    id: 'prod_003',
    name: 'Adjustable Dumbbell Set',
    description: 'Space-saving adjustable dumbbells for home workouts',
    price: 149.99,
    stock: 25,
    category: 'fitness',
    images: ['https://example.com/image5.jpg', 'https://example.com/image6.jpg'],
    sales_count: 42,
    trend_score: 85,
    created_at: '2025-03-20T09:15:00Z'
  }
];

// Get all products
router.get('/', (req, res) => {
  res.json({ products });
});

// Get product by ID
router.get('/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  
  res.json({ product });
});

module.exports = router;
