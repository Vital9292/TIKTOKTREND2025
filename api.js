import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

// Trend-related API calls
export const fetchTrends = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/tiktok-data/hashtags`);
    return response.data;
  } catch (error) {
    console.error('Error fetching trends:', error);
    throw error;
  }
};

// Product-related API calls
export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/tiktok-data/products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

// TikTok data-related API calls
export const fetchTrendingVideos = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/tiktok-data/videos`);
    return response.data;
  } catch (error) {
    console.error('Error fetching trending videos:', error);
    throw error;
  }
};

export const analyzeTrend = async (trendData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/tiktok-data/analyze`, trendData);
    return response.data;
  } catch (error) {
    console.error('Error analyzing trend:', error);
    throw error;
  }
};

// Utility function to format numbers
export const formatNumber = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num;
};

// Utility function to format dates
export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('de-DE', options);
};

// Utility function to get trend level color
export const getTrendLevelColor = (level) => {
  switch (level) {
    case 'high':
      return 'error.main';
    case 'medium':
      return 'warning.main';
    case 'low':
      return 'success.main';
    default:
      return 'primary.main';
  }
};
