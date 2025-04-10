const express = require('express');
const router = express.Router();

// Mock data for trends
const trends = [
  {
    id: 'trend_001',
    name: 'HIIT Workouts',
    hashtag: '#HIITworkout',
    growth_rate: 35.2,
    views: 8500000,
    engagement_rate: 4.8,
    category: 'fitness',
    related_hashtags: ['#fitness', '#workout', '#homeworkout'],
    created_at: '2025-03-15T10:30:00Z'
  },
  {
    id: 'trend_002',
    name: 'Protein Shakes',
    hashtag: '#proteinshake',
    growth_rate: 28.7,
    views: 7200000,
    engagement_rate: 4.2,
    category: 'fitness',
    related_hashtags: ['#protein', '#nutrition', '#fitness'],
    created_at: '2025-03-18T14:45:00Z'
  },
  {
    id: 'trend_003',
    name: 'Yoga Flow',
    hashtag: '#yogaflow',
    growth_rate: 22.5,
    views: 6500000,
    engagement_rate: 3.9,
    category: 'fitness',
    related_hashtags: ['#yoga', '#mindfulness', '#flexibility'],
    created_at: '2025-03-20T09:15:00Z'
  }
];

// Get all trends
router.get('/', (req, res) => {
  res.json({ trends });
});

// Get trend by ID
router.get('/:id', (req, res) => {
  const trend = trends.find(t => t.id === req.params.id);
  
  if (!trend) {
    return res.status(404).json({ message: 'Trend not found' });
  }
  
  res.json({ trend });
});

module.exports = router;
