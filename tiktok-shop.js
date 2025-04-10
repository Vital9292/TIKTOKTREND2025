const express = require('express');
const router = express.Router();
const tiktokShopAPI = require('../services/tiktokShopAPI');

// Get all products from TikTok Shop
router.get('/products', async (req, res) => {
  try {
    const response = await tiktokShopAPI.getProducts(req.query);
    res.json(response);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get product details from TikTok Shop
router.get('/products/:id', async (req, res) => {
  try {
    const response = await tiktokShopAPI.getProductDetails(req.params.id);
    res.json(response);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update product price in TikTok Shop
router.patch('/products/:id/price', async (req, res) => {
  try {
    const { price } = req.body;
    if (!price) {
      return res.status(400).json({ message: 'Price is required' });
    }
    
    const response = await tiktokShopAPI.updateProductPrice(req.params.id, price);
    res.json(response);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get orders from TikTok Shop
router.get('/orders', async (req, res) => {
  try {
    const response = await tiktokShopAPI.getOrders(req.query);
    res.json(response);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get sales analytics from TikTok Shop
router.get('/analytics/sales', async (req, res) => {
  try {
    const response = await tiktokShopAPI.getSalesAnalytics(req.query);
    res.json(response);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get trending products from TikTok Shop
router.get('/trending', async (req, res) => {
  try {
    const response = await tiktokShopAPI.getTrendingProducts(req.query);
    res.json(response);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
