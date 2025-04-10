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
  TextField,
  InputAdornment,
  MenuItem,
  Select,
  FormControl,
  InputLabel
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProductCatalog = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [trendLevelFilter, setTrendLevelFilter] = useState('all');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // In a real implementation, this would be an actual API call to your backend
        const response = await axios.get('http://localhost:5000/api/tiktok-data/products');
        
        // Add more mock products for the catalog view
        const mockProducts = [
          ...response.data,
          { name: 'Fitness Tracker with Heart Rate Monitor', category: 'fitness', viewCount: 4800000, trendScore: 76, trendLevel: 'medium' },
          { name: 'Massage Gun for Muscle Recovery', category: 'fitness', viewCount: 4500000, trendScore: 74, trendLevel: 'medium' },
          { name: 'Collapsible Water Bottle', category: 'fitness', viewCount: 4200000, trendScore: 72, trendLevel: 'medium' },
          { name: 'Wireless Earbuds for Workouts', category: 'fitness', viewCount: 3900000, trendScore: 70, trendLevel: 'medium' },
          { name: 'Protein Powder Organizer', category: 'nutrition', viewCount: 3600000, trendScore: 68, trendLevel: 'medium' },
          { name: 'Digital Food Scale', category: 'nutrition', viewCount: 3300000, trendScore: 65, trendLevel: 'medium' },
          { name: 'Meal Prep Containers Set', category: 'nutrition', viewCount: 3000000, trendScore: 62, trendLevel: 'medium' },
          { name: 'Blender Bottle with Storage', category: 'nutrition', viewCount: 2700000, trendScore: 60, trendLevel: 'medium' },
          { name: 'Foam Roller for Muscle Recovery', category: 'fitness', viewCount: 2400000, trendScore: 58, trendLevel: 'low' },
          { name: 'Resistance Bands with Handles', category: 'fitness', viewCount: 2100000, trendScore: 55, trendLevel: 'low' },
          { name: 'Yoga Block Set', category: 'fitness', viewCount: 1800000, trendScore: 52, trendLevel: 'low' },
          { name: 'Gym Bag with Shoe Compartment', category: 'fitness', viewCount: 1500000, trendScore: 50, trendLevel: 'low' }
        ];
        
        setProducts(mockProducts);
        setFilteredProducts(mockProducts);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        // For MVP, use mock data if API fails
        const mockProducts = [
          { name: 'Fitness Resistance Bands Set', category: 'fitness', viewCount: 8500000, trendScore: 92, trendLevel: 'high' },
          { name: 'Smart Water Bottle with Hydration Tracker', category: 'fitness', viewCount: 7200000, trendScore: 88, trendLevel: 'high' },
          { name: 'Adjustable Dumbbell Set', category: 'fitness', viewCount: 6500000, trendScore: 85, trendLevel: 'high' },
          { name: 'Protein Shaker Bottle', category: 'fitness', viewCount: 5800000, trendScore: 82, trendLevel: 'high' },
          { name: 'Yoga Mat with Alignment Lines', category: 'fitness', viewCount: 5200000, trendScore: 79, trendLevel: 'medium' },
          { name: 'Fitness Tracker with Heart Rate Monitor', category: 'fitness', viewCount: 4800000, trendScore: 76, trendLevel: 'medium' },
          { name: 'Massage Gun for Muscle Recovery', category: 'fitness', viewCount: 4500000, trendScore: 74, trendLevel: 'medium' },
          { name: 'Collapsible Water Bottle', category: 'fitness', viewCount: 4200000, trendScore: 72, trendLevel: 'medium' },
          { name: 'Wireless Earbuds for Workouts', category: 'fitness', viewCount: 3900000, trendScore: 70, trendLevel: 'medium' },
          { name: 'Protein Powder Organizer', category: 'nutrition', viewCount: 3600000, trendScore: 68, trendLevel: 'medium' },
          { name: 'Digital Food Scale', category: 'nutrition', viewCount: 3300000, trendScore: 65, trendLevel: 'medium' },
          { name: 'Meal Prep Containers Set', category: 'nutrition', viewCount: 3000000, trendScore: 62, trendLevel: 'medium' },
          { name: 'Blender Bottle with Storage', category: 'nutrition', viewCount: 2700000, trendScore: 60, trendLevel: 'medium' },
          { name: 'Foam Roller for Muscle Recovery', category: 'fitness', viewCount: 2400000, trendScore: 58, trendLevel: 'low' },
          { name: 'Resistance Bands with Handles', category: 'fitness', viewCount: 2100000, trendScore: 55, trendLevel: 'low' },
          { name: 'Yoga Block Set', category: 'fitness', viewCount: 1800000, trendScore: 52, trendLevel: 'low' },
          { name: 'Gym Bag with Shoe Compartment', category: 'fitness', viewCount: 1500000, trendScore: 50, trendLevel: 'low' }
        ];
        setProducts(mockProducts);
        setFilteredProducts(mockProducts);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    // Filter products based on search term and filters
    const filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
      const matchesTrendLevel = trendLevelFilter === 'all' || product.trendLevel === trendLevelFilter;
      
      return matchesSearch && matchesCategory && matchesTrendLevel;
    });
    
    setFilteredProducts(filtered);
  }, [searchTerm, categoryFilter, trendLevelFilter, products]);

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num;
  };

  const getTrendLevelColor = (level) => {
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
        Produkt Katalog
      </Typography>
      
      {/* Search and Filters */}
      <Paper sx={{ p: 3, mb: 4, borderRadius: 2 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Produkte suchen..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth variant="outlined">
              <InputLabel id="category-filter-label">Kategorie</InputLabel>
              <Select
                labelId="category-filter-label"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                label="Kategorie"
              >
                <MenuItem value="all">Alle Kategorien</MenuItem>
                <MenuItem value="fitness">Fitness</MenuItem>
                <MenuItem value="nutrition">Ernährung</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth variant="outlined">
              <InputLabel id="trend-level-filter-label">Trend Level</InputLabel>
              <Select
                labelId="trend-level-filter-label"
                value={trendLevelFilter}
                onChange={(e) => setTrendLevelFilter(e.target.value)}
                label="Trend Level"
              >
                <MenuItem value="all">Alle Levels</MenuItem>
                <MenuItem value="high">Hoch</MenuItem>
                <MenuItem value="medium">Mittel</MenuItem>
                <MenuItem value="low">Niedrig</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Paper>
      
      {/* Products Grid */}
      <Grid container spacing={3}>
        {filteredProducts.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
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
              <CardMedia
                component="img"
                height="200"
                image={`https://source.unsplash.com/random/400x200?${product.category},${product.name.split(' ')[0]}`}
                alt={product.name}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="div">
                  {product.name}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Chip 
                    label={product.category} 
                    size="small" 
                    sx={{ mr: 1 }} 
                  />
                  <Chip 
                    label={`Trend: ${product.trendLevel}`}
                    size="small"
                    sx={{ 
                      bgcolor: getTrendLevelColor(product.trendLevel),
                      color: 'white'
                    }}
                  />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Typography variant="body2" component="span">
                    Trend-Score: 
                  </Typography>
                  <Box sx={{ 
                    ml: 1, 
                    bgcolor: getTrendLevelColor(product.trendLevel),
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
              <Box sx={{ p: 2, pt: 0 }}>
                <Button 
                  variant="contained" 
                  fullWidth
                  onClick={() => navigate(`/products/${index}`)}
                >
                  Details anzeigen
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
        
        {filteredProducts.length === 0 && (
          <Grid item xs={12}>
            <Paper sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="h6">
                Keine Produkte gefunden
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Bitte passen Sie Ihre Suchkriterien an.
              </Typography>
            </Paper>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default ProductCatalog;
