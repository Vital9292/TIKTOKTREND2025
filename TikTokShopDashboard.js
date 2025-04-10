import React, { useState, useEffect } from 'react';
import { 
  Grid, 
  Typography, 
  Paper, 
  Box, 
  Card, 
  CardContent, 
  Button,
  Chip,
  CircularProgress,
  TextField,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Alert
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import axios from 'axios';

const TikTokShopDashboard = () => {
  const [loading, setLoading] = useState(true);
  const [shopProducts, setShopProducts] = useState([]);
  const [salesAnalytics, setSalesAnalytics] = useState(null);
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [editPriceDialog, setEditPriceDialog] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [newPrice, setNewPrice] = useState('');
  const [priceUpdateSuccess, setPriceUpdateSuccess] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch products from TikTok Shop
        const productsResponse = await axios.get('/api/tiktok-shop/products');
        
        // Fetch sales analytics
        const analyticsResponse = await axios.get('/api/tiktok-shop/analytics/sales');
        
        // Fetch trending products
        const trendingResponse = await axios.get('/api/tiktok-shop/trending');
        
        setShopProducts(productsResponse.data.data.products);
        setSalesAnalytics(analyticsResponse.data.data);
        setTrendingProducts(trendingResponse.data.data.trending_products);
        setFilteredProducts(productsResponse.data.data.products);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching TikTok Shop data:', error);
        // For MVP, use mock data if API fails
        const mockProducts = [
          {
            id: 'prod_001',
            name: 'Fitness Resistance Bands Set',
            description: 'High-quality resistance bands for effective workouts',
            price: 29.99,
            stock: 150,
            category: 'fitness',
            images: ['https://example.com/image1.jpg', 'https://example.com/image2.jpg'],
            sales_count: 87,
            trend_score: 92
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
            trend_score: 88
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
            trend_score: 85
          }
        ];
        
        const mockAnalytics = {
          period: 'last_30_days',
          total_sales: 12567.89,
          total_orders: 342,
          average_order_value: 36.75,
          top_products: [
            { id: 'prod_001', name: 'Fitness Resistance Bands Set', sales: 87, revenue: 2609.13 },
            { id: 'prod_002', name: 'Smart Water Bottle with Hydration Tracker', sales: 63, revenue: 2519.37 },
            { id: 'prod_003', name: 'Adjustable Dumbbell Set', sales: 42, revenue: 6299.58 }
          ],
          sales_by_day: [
            { date: '2025-03-15', sales: 345.67 },
            { date: '2025-03-16', sales: 456.78 },
            { date: '2025-03-17', sales: 567.89 }
          ]
        };
        
        const mockTrending = [
          {
            id: 'prod_001',
            name: 'Fitness Resistance Bands Set',
            trend_score: 92,
            view_count: 8500000,
            engagement_rate: 4.8,
            sales_growth: 35.2
          },
          {
            id: 'prod_002',
            name: 'Smart Water Bottle with Hydration Tracker',
            trend_score: 88,
            view_count: 7200000,
            engagement_rate: 4.2,
            sales_growth: 28.7
          },
          {
            id: 'prod_003',
            name: 'Adjustable Dumbbell Set',
            trend_score: 85,
            view_count: 6500000,
            engagement_rate: 3.9,
            sales_growth: 22.5
          }
        ];
        
        setShopProducts(mockProducts);
        setSalesAnalytics(mockAnalytics);
        setTrendingProducts(mockTrending);
        setFilteredProducts(mockProducts);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Filter products based on search term
    if (shopProducts) {
      const filtered = shopProducts.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchTerm, shopProducts]);

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num;
  };

  const formatCurrency = (num) => {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(num);
  };

  const handleEditPrice = (product) => {
    setCurrentProduct(product);
    setNewPrice(product.price.toString());
    setEditPriceDialog(true);
  };

  const handleUpdatePrice = async () => {
    try {
      // Call API to update price
      await axios.patch(`/api/tiktok-shop/products/${currentProduct.id}/price`, {
        price: parseFloat(newPrice)
      });
      
      // Update local state
      const updatedProducts = shopProducts.map(product => {
        if (product.id === currentProduct.id) {
          return { ...product, price: parseFloat(newPrice) };
        }
        return product;
      });
      
      setShopProducts(updatedProducts);
      setFilteredProducts(updatedProducts);
      setPriceUpdateSuccess(true);
      
      // Close dialog after a short delay
      setTimeout(() => {
        setEditPriceDialog(false);
        setPriceUpdateSuccess(false);
      }, 1500);
    } catch (error) {
      console.error('Error updating price:', error);
      // Handle error
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
        TikTok Shop Dashboard
      </Typography>
      
      {/* Sales Overview */}
      <Paper sx={{ p: 3, mb: 4, borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom>
          Verkaufsübersicht
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%', bgcolor: 'primary.light' }}>
              <CardContent>
                <Typography variant="subtitle2" color="text.secondary">
                  Gesamtumsatz (30 Tage)
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 'bold', my: 1 }}>
                  {formatCurrency(salesAnalytics.total_sales)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="subtitle2" color="text.secondary">
                  Bestellungen
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 'bold', my: 1 }}>
                  {salesAnalytics.total_orders}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="subtitle2" color="text.secondary">
                  Durchschnittlicher Bestellwert
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 'bold', my: 1 }}>
                  {formatCurrency(salesAnalytics.average_order_value)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%', bgcolor: 'secondary.light' }}>
              <CardContent>
                <Typography variant="subtitle2" color="text.secondary">
                  Top-Produkt Umsatz
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 'bold', my: 1 }}>
                  {formatCurrency(salesAnalytics.top_products[0].revenue)}
                </Typography>
                <Typography variant="body2">
                  {salesAnalytics.top_products[0].name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Paper>
      
      {/* Trending Products */}
      <Paper sx={{ p: 3, mb: 4, borderRadius: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <TrendingUpIcon color="primary" sx={{ mr: 1 }} />
          <Typography variant="h5">
            Trending Produkte
          </Typography>
        </Box>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Produkt</TableCell>
                <TableCell align="right">Trend-Score</TableCell>
                <TableCell align="right">Views</TableCell>
                <TableCell align="right">Engagement</TableCell>
                <TableCell align="right">Wachstum</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {trendingProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell align="right">
                    <Chip 
                      label={product.trend_score} 
                      color={product.trend_score > 85 ? "error" : "primary"}
                      size="small"
                    />
                  </TableCell>
                  <TableCell align="right">{formatNumber(product.view_count)}</TableCell>
                  <TableCell align="right">{product.engagement_rate}%</TableCell>
                  <TableCell align="right" sx={{ color: 'success.main' }}>+{product.sales_growth}%</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      
      {/* Shop Products */}
      <Paper sx={{ p: 3, borderRadius: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <ShoppingBagIcon color="primary" sx={{ mr: 1 }} />
          <Typography variant="h5">
            Shop-Produkte
          </Typography>
        </Box>
        
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
          sx={{ mb: 3 }}
        />
        
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Produkt</TableCell>
                <TableCell>Kategorie</TableCell>
                <TableCell align="right">Preis</TableCell>
                <TableCell align="right">Bestand</TableCell>
                <TableCell align="right">Verkäufe</TableCell>
                <TableCell align="right">Trend-Score</TableCell>
                <TableCell align="right">Aktionen</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell align="right">{formatCurrency(product.price)}</TableCell>
                  <TableCell align="right">{product.stock}</TableCell>
                  <TableCell align="right">{product.sales_count}</TableCell>
                  <TableCell align="right">
                    <Chip 
                      label={product.trend_score} 
                      color={product.trend_score > 85 ? "error" : "primary"}
                      size="small"
                    />
                  </TableCell>
                  <TableCell align="right">
                    <IconButton 
                      size="small" 
                      color="primary"
                      onClick={() => handleEditPrice(product)}
                    >
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      
      {/* Edit Price Dialog */}
      <Dialog open={editPriceDialog} onClose={() => setEditPriceDialog(false)}>
        <DialogTitle>Preis bearbeiten</DialogTitle>
        <DialogContent>
          {priceUpdateSuccess ? (
            <Alert severity="success" sx={{ mt: 2 }}>
              Preis erfolgreich aktualisiert!
            </Alert>
          ) : (
            <>
              <Typography variant="body1" sx={{ mb: 2 }}>
                {currentProduct?.name}
              </Typography>
              <TextField
                autoFocus
                margin="dense"
                label="Neuer Preis"
                type="number"
                fullWidth
                variant="outlined"
                value={newPrice}
                onChange={(e) => setNewPrice(e.target.value)}
                InputProps={{
                  startAdornment: <InputAdornment position="start">€</InputAdornment>,
                }}
              />
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditPriceDialog(false)}>Abbrechen</Button>
          <Button onClick={handleUpdatePrice} variant="contained" disabled={priceUpdateSuccess}>
            Aktualisieren
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default TikTokShopDashboard;
