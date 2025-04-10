const mongoose = require('mongoose');

const TikTokShopSchema = new mongoose.Schema({
  shop_id: {
    type: String,
    required: true,
    unique: true
  },
  shop_name: {
    type: String,
    required: true
  },
  api_key: {
    type: String,
    required: true
  },
  api_secret: {
    type: String,
    required: true
  },
  access_token: {
    type: String,
    required: true
  },
  token_expires_at: {
    type: Date,
    required: true
  },
  connected_at: {
    type: Date,
    default: Date.now
  },
  last_sync: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'expired'],
    default: 'active'
  }
});

module.exports = mongoose.model('TikTokShop', TikTokShopSchema);
