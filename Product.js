const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  images: [{
    type: String,
    trim: true
  }],
  categories: [{
    type: String,
    trim: true
  }],
  primaryNiche: {
    type: String,
    trim: true
  },
  tags: [{
    type: String,
    trim: true
  }],
  price: {
    cost: Number,
    recommendedRetail: Number,
    currency: {
      type: String,
      default: 'EUR'
    }
  },
  supplier: {
    name: String,
    website: String,
    contactInfo: String,
    shippingTime: Number,
    shippingCost: Number
  },
  tiktokShop: {
    available: {
      type: Boolean,
      default: false
    },
    url: String,
    productId: String
  },
  stats: {
    viewCount: {
      type: Number,
      default: 0
    },
    saveCount: {
      type: Number,
      default: 0
    },
    conversionRate: {
      type: Number,
      default: 0
    },
    averageRating: {
      type: Number,
      default: 0
    }
  },
  trendData: {
    trendScore: {
      type: Number,
      default: 0
    },
    trendLevel: {
      type: String,
      enum: ['low', 'medium', 'high'],
      default: 'low'
    },
    trendDirection: {
      type: String,
      enum: ['rising', 'stable', 'falling'],
      default: 'stable'
    },
    firstDetected: Date,
    peakDate: Date,
    relatedHashtags: [{
      type: String,
      trim: true
    }],
    relatedVideos: [{
      type: String,
      trim: true
    }]
  },
  contentIdeas: [{
    hook: String,
    script: String,
    exampleVideoUrl: String
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Product', productSchema);
