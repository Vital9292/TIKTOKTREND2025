const mongoose = require('mongoose');

const trendSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  type: {
    type: String,
    enum: ['hashtag', 'sound', 'challenge', 'product'],
    required: true
  },
  description: {
    type: String,
    trim: true
  },
  categories: [{
    type: String,
    trim: true
  }],
  metrics: {
    viewCount: Number,
    likeCount: Number,
    shareCount: Number,
    commentCount: Number,
    videoCount: Number,
    creatorCount: Number,
    growthRate: Number
  },
  timeline: [{
    date: Date,
    viewCount: Number,
    likeCount: Number,
    shareCount: Number,
    commentCount: Number,
    videoCount: Number
  }],
  relatedProducts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  }],
  relatedHashtags: [{
    type: String,
    trim: true
  }],
  topVideos: [{
    videoId: String,
    creatorId: String,
    url: String,
    viewCount: Number,
    likeCount: Number,
    commentCount: Number,
    shareCount: Number
  }],
  prediction: {
    expectedDuration: Number,
    peakDate: Date,
    maxViewEstimate: Number,
    confidenceScore: Number
  },
  trendScore: {
    type: Number,
    default: 0
  },
  trendLevel: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'low'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Trend', trendSchema);
