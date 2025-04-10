const express = require('express');
const router = express.Router();

// Mock data for TikTok trending hashtags
const hashtags = [
  {
    id: 'hashtag_001',
    name: '#HIITworkout',
    views: 8500000,
    growth_rate: 35.2,
    engagement_rate: 4.8,
    category: 'fitness',
    related_hashtags: ['#fitness', '#workout', '#homeworkout'],
    trending_since: '2025-03-15T10:30:00Z'
  },
  {
    id: 'hashtag_002',
    name: '#proteinshake',
    views: 7200000,
    growth_rate: 28.7,
    engagement_rate: 4.2,
    category: 'fitness',
    related_hashtags: ['#protein', '#nutrition', '#fitness'],
    trending_since: '2025-03-18T14:45:00Z'
  },
  {
    id: 'hashtag_003',
    name: '#yogaflow',
    views: 6500000,
    growth_rate: 22.5,
    engagement_rate: 3.9,
    category: 'fitness',
    related_hashtags: ['#yoga', '#mindfulness', '#flexibility'],
    trending_since: '2025-03-20T09:15:00Z'
  }
];

// Mock data for TikTok trending videos
const videos = [
  {
    id: 'video_001',
    title: 'Quick 15-min HIIT Workout',
    creator: '@fitnesscoach',
    views: 2500000,
    likes: 350000,
    comments: 12000,
    shares: 45000,
    hashtags: ['#HIITworkout', '#fitness', '#workout'],
    created_at: '2025-03-25T10:30:00Z'
  },
  {
    id: 'video_002',
    title: 'Best Protein Shake Recipe',
    creator: '@nutritionexpert',
    views: 1800000,
    likes: 280000,
    comments: 9500,
    shares: 32000,
    hashtags: ['#proteinshake', '#nutrition', '#fitness'],
    created_at: '2025-03-27T14:45:00Z'
  },
  {
    id: 'video_003',
    title: '10-min Morning Yoga Flow',
    creator: '@yogainstructor',
    views: 1500000,
    likes: 220000,
    comments: 8000,
    shares: 28000,
    hashtags: ['#yogaflow', '#yoga', '#mindfulness'],
    created_at: '2025-03-29T09:15:00Z'
  }
];

// Mock data for TikTok trending products
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
    related_hashtags: ['#HIITworkout', '#fitness', '#workout'],
    supplier: 'AliExpress',
    shipping_time: '7-14 days',
    profit_margin: 65
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
    related_hashtags: ['#proteinshake', '#nutrition', '#fitness'],
    supplier: 'AliExpress',
    shipping_time: '7-14 days',
    profit_margin: 58
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
    related_hashtags: ['#HIITworkout', '#fitness', '#workout'],
    supplier: 'AliExpress',
    shipping_time: '10-20 days',
    profit_margin: 45
  }
];

// Get trending hashtags
router.get('/hashtags', (req, res) => {
  res.json({ hashtags });
});

// Get trending videos
router.get('/videos', (req, res) => {
  res.json({ videos });
});

// Get trending products
router.get('/products', (req, res) => {
  res.json({ products });
});

// Analyze trend
router.post('/analyze', (req, res) => {
  const { trend } = req.body;
  
  // Mock analysis response
  const analysis = {
    trend_name: trend?.name || 'Unknown Trend',
    growth_prediction: 'Increasing',
    estimated_duration: '4-6 weeks',
    audience_demographics: {
      age_groups: ['18-24', '25-34'],
      primary_regions: ['Germany', 'Austria', 'Switzerland'],
      interests: ['Fitness', 'Health', 'Wellness']
    },
    recommended_products: products.slice(0, 2),
    content_suggestions: [
      'Create before/after transformation videos',
      'Share quick tips and tutorials',
      'Collaborate with fitness influencers'
    ]
  };
  
  res.json({ analysis });
});

module.exports = router;
