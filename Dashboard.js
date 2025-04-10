import React, { useState, useEffect } from 'react';
import { 
  Grid, 
  Typography, 
  Paper, 
  Box, 
  Card, 
  CardContent, 
  CardMedia, 
  Button,
  Chip,
  CircularProgress,
  Divider
} from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [trendingHashtags, setTrendingHashtags] = useState([]);
  const [trendingProducts, setTrendingProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // In a real implementation, these would be actual API calls to your backend
        const hashtagsResponse = await axios.get('http://localhost:5000/api/tiktok-data/hashtags');
        const productsResponse = await axios.get('http://localhost:5000/api/tiktok-data/products');
        
        setTrendingHashtags(hashtagsResponse.data);
        setTrendingProducts(productsResponse.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
        // For MVP, use mock data if API fails
        setTrendingHashtags([
          { name: 'fitness', viewCount: 15000000, videoCount: 250000, growthRate: 5.2 },
          { name: 'workout', viewCount: 12000000, videoCount: 180000, growthRate: 4.8 },
          { name: 'gymlife', viewCount: 9500000, videoCount: 120000, growthRate: 3.7 },
          { name: 'healthylifestyle', viewCount: 8200000, videoCount: 95000, growthRate: 4.1 },
          { name: 'nutrition', viewCount: 6800000, videoCount: 75000, growthRate: 3.2 }
        ]);
        setTrendingProducts([
          { name: 'Fitness Resistance Bands Set', category: 'fitness', viewCount: 8500000, trendScore: 92, trendLevel: 'high' },
          { name: 'Smart Water Bottle with Hydration Tracker', category: 'fitness', viewCount: 7200000, trendScore: 88, trendLevel: 'high' },
          { name: 'Adjustable Dumbbell Set', category: 'fitness', viewCount: 6500000, trendScore: 85, trendLevel: 'high' },
          { name: 'Protein Shaker Bottle', category: 'fitness', viewCount: 5800000, trendScore: 82, trendLevel: 'high' },
          { name: 'Yoga Mat with Alignment Lines', category: 'fitness', viewCount: 5200000, trendScore: 79, trendLevel: 'medium' }
        ]);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num;
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ flexGrow: 1, py: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
        Dashboard
      </Typography>
      
      <Grid container spacing={4}>
        {/* Trending Overview */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3, borderRadius: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <TrendingUpIcon color="primary" sx={{ mr: 1 }} />
              <Typography variant="h5" component="h2">
                Trend-Übersicht
              </Typography>
            </Box>
            <Typography variant="body1" color="text.secondary" paragraph>
              Aktuelle TikTok-Trends in der Fitness-Nische und verwandten Kategorien.
            </Typography>
            
            <Grid container spacing={2}>
              {trendingHashtags.map((hashtag, index) => (
                <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
                  <Card sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: 6
                    }
                  }}>
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                        #{hashtag.name}
                      </Typography>
                      <Box sx={{ mt: 2 }}>
                        <Typography variant="body2" color="text.secondary">
                          Views: {formatNumber(hashtag.viewCount)}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Videos: {formatNumber(hashtag.videoCount)}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
                          Wachstum: 
                          <Chip 
                            size="small" 
                            label={`+${hashtag.growthRate}%`} 
                            color="success" 
                            sx={{ ml: 1, height: 20 }} 
                          />
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
            
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
              <Button 
                variant="outlined" 
                color="primary" 
                onClick={() => navigate('/trends')}
              >
                Alle Trends anzeigen
              </Button>
            </Box>
          </Paper>
        </Grid>
        
        {/* Top Products */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3, borderRadius: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <WhatshotIcon color="secondary" sx={{ mr: 1 }} />
              <Typography variant="h5" component="h2">
                Top-Produkte Heute
              </Typography>
            </Box>
            <Typography variant="body1" color="text.secondary" paragraph>
              Die meistverkauften und trendenden Produkte basierend auf TikTok-Daten.
            </Typography>
            
            <Grid container spacing={2}>
              {trendingProducts.map((product, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card sx={{ 
                    display: 'flex', 
                    height: '100%',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: 6
                    }
                  }}>
                    <CardMedia
                      component="img"
                      sx={{ width: 120, objectFit: 'cover' }}
                      image={`https://source.unsplash.com/random/300x200?${product.category}`}
                      alt={product.name}
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                      <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h6">
                          {product.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                          Kategorie: {product.category}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <Typography variant="body2" component="span">
                            Trend-Score: 
                          </Typography>
                          <Box sx={{ 
                            ml: 1, 
                            bgcolor: product.trendLevel === 'high' ? 'error.main' : 
                                    product.trendLevel === 'medium' ? 'warning.main' : 'success.main',
                            color: 'white',
                            px: 1,
                            py: 0.5,
                            borderRadius: 1,
                            fontSize: '0.75rem',
                            fontWeight: 'bold'
                          }}>
                            {product.trendScore}
                          </Box>
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                          Views: {formatNumber(product.viewCount)}
                        </Typography>
                      </CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', p: 1 }}>
                        <Button 
                          size="small" 
                          onClick={() => navigate(`/products/${index}`)}
                        >
                          Details
                        </Button>
                      </Box>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
            
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
              <Button 
                variant="outlined" 
                color="primary" 
                onClick={() => navigate('/products')}
              >
                Alle Produkte anzeigen
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
