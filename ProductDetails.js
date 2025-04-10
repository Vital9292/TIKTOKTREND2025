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
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import VideocamIcon from '@mui/icons-material/Videocam';

const ProductDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const [relatedTrends, setRelatedTrends] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        // In a real implementation, this would be an actual API call to your backend
        // For MVP, we'll use mock data
        const mockProducts = [
          { 
            name: 'Fitness Resistance Bands Set', 
            category: 'fitness', 
            viewCount: 8500000, 
            trendScore: 92, 
            trendLevel: 'high',
            description: 'Hochwertige Resistance Bands für effektives Training zu Hause oder unterwegs. Das Set enthält 5 verschiedene Widerstandsstufen, Türanker, Griffe und eine Tragetasche.',
            price: {
              cost: 12.99,
              recommendedRetail: 29.99,
              currency: 'EUR'
            },
            supplier: {
              name: 'FitGear Pro',
              shippingTime: 7,
              shippingCost: 3.99
            },
            images: [
              'https://source.unsplash.com/random/800x600?resistance,bands',
              'https://source.unsplash.com/random/800x600?fitness,bands',
              'https://source.unsplash.com/random/800x600?workout,bands'
            ],
            trendData: {
              firstDetected: '2025-03-15',
              peakDate: '2025-04-20',
              trendDirection: 'rising',
              relatedHashtags: ['fitness', 'homeworkout', 'resistancebands', 'workout']
            },
            contentIdeas: [
              {
                hook: 'Wie du mit Resistance Bands in nur 10 Minuten täglich deinen ganzen Körper trainieren kannst',
                script: 'Hey! Heute zeige ich euch, wie ihr mit diesen Resistance Bands in nur 10 Minuten euren ganzen Körper trainieren könnt. Diese Bänder sind perfekt für zu Hause oder unterwegs...'
              },
              {
                hook: '5 Übungen mit Resistance Bands, die Fitnessstudio-Geräte ersetzen',
                script: 'Wer braucht schon ein teures Fitnessstudio? Mit diesen 5 Übungen mit Resistance Bands könnt ihr die gleichen Ergebnisse erzielen wie mit teuren Geräten...'
              }
            ]
          },
          { 
            name: 'Smart Water Bottle with Hydration Tracker', 
            category: 'fitness', 
            viewCount: 7200000, 
            trendScore: 88, 
            trendLevel: 'high',
            description: 'Smarte Wasserflasche mit integriertem Hydration Tracker. Die Flasche erinnert dich daran, regelmäßig zu trinken und synchronisiert deine Wasseraufnahme mit deiner Fitness-App.',
            price: {
              cost: 18.50,
              recommendedRetail: 39.99,
              currency: 'EUR'
            },
            supplier: {
              name: 'HydroTech',
              shippingTime: 5,
              shippingCost: 4.99
            },
            images: [
              'https://source.unsplash.com/random/800x600?water,bottle',
              'https://source.unsplash.com/random/800x600?smart,bottle',
              'https://source.unsplash.com/random/800x600?hydration,tracker'
            ],
            trendData: {
              firstDetected: '2025-02-28',
              peakDate: '2025-04-15',
              trendDirection: 'rising',
              relatedHashtags: ['hydration', 'fitness', 'smartbottle', 'healthylifestyle']
            },
            contentIdeas: [
              {
                hook: 'Diese smarte Wasserflasche hat meine Haut komplett verändert',
                script: 'Ich habe diese smarte Wasserflasche seit einem Monat benutzt und meine Haut sieht komplett anders aus! Hier ist, wie sie funktioniert...'
              },
              {
                hook: 'Warum du wahrscheinlich dehydriert bist, ohne es zu wissen',
                script: 'Die meisten Menschen trinken nicht genug Wasser. Diese smarte Flasche hat mir gezeigt, dass ich nur halb so viel getrunken habe, wie ich dachte...'
              }
            ]
          }
        ];
        
        // Add more mock products if needed
        const allMockProducts = [
          ...mockProducts,
          { 
            name: 'Adjustable Dumbbell Set', 
            category: 'fitness', 
            viewCount: 6500000, 
            trendScore: 85, 
            trendLevel: 'high',
            description: 'Verstellbare Hanteln, die 15 traditionelle Hanteln in einem kompakten Set ersetzen. Gewicht von 2,5 kg bis 25 kg pro Hantel einstellbar.',
            price: {
              cost: 89.99,
              recommendedRetail: 149.99,
              currency: 'EUR'
            },
            supplier: {
              name: 'PowerFit',
              shippingTime: 10,
              shippingCost: 12.99
            },
            images: [
              'https://source.unsplash.com/random/800x600?dumbbell,adjustable',
              'https://source.unsplash.com/random/800x600?weights,gym',
              'https://source.unsplash.com/random/800x600?fitness,equipment'
            ],
            trendData: {
              firstDetected: '2025-03-01',
              peakDate: '2025-04-10',
              trendDirection: 'stable',
              relatedHashtags: ['fitness', 'homegym', 'dumbbells', 'workout']
            },
            contentIdeas: [
              {
                hook: 'Komplettes Ganzkörpertraining mit nur einem Hantelset',
                script: 'Mit diesem verstellbaren Hantelset könnt ihr euer komplettes Ganzkörpertraining zu Hause durchführen. Hier sind 7 Übungen...'
              }
            ]
          }
        ];
        
        // Get product by ID
        const productData = allMockProducts[parseInt(id)] || mockProducts[0];
        
        // Mock related trends
        const mockRelatedTrends = [
          {
            name: productData.trendData.relatedHashtags[0],
            type: 'hashtag',
            viewCount: Math.floor(Math.random() * 5000000) + 5000000,
            videoCount: Math.floor(Math.random() * 100000) + 50000,
            growthRate: (Math.random() * 5) + 2,
            trendScore: Math.floor(Math.random() * 15) + 80
          },
          {
            name: productData.trendData.relatedHashtags[1],
            type: 'hashtag',
            viewCount: Math.floor(Math.random() * 4000000) + 4000000,
            videoCount: Math.floor(Math.random() * 80000) + 40000,
            growthRate: (Math.random() * 4) + 2,
            trendScore: Math.floor(Math.random() * 15) + 75
          },
          {
            name: productData.trendData.relatedHashtags[2],
            type: 'hashtag',
            viewCount: Math.floor(Math.random() * 3000000) + 3000000,
            videoCount: Math.floor(Math.random() * 60000) + 30000,
            growthRate: (Math.random() * 3) + 2,
            trendScore: Math.floor(Math.random() * 15) + 70
          }
        ];
        
        setProduct(productData);
        setRelatedTrends(mockRelatedTrends);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product details:', error);
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num;
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('de-DE', options);
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

  if (!product) {
    return (
      <Box sx={{ py: 3 }}>
        <Typography variant="h4" gutterBottom>
          Produkt nicht gefunden
        </Typography>
        <Button variant="contained" onClick={() => navigate('/products')}>
          Zurück zum Produktkatalog
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ flexGrow: 1, py: 3 }}>
      <Button 
        variant="outlined" 
        onClick={() => navigate('/products')}
        sx={{ mb: 3 }}
      >
        &larr; Zurück zum Produktkatalog
      </Button>
      
      <Grid container spacing={4}>
        {/* Product Images and Basic Info */}
        <Grid item xs={12} md={6}>
          <Card sx={{ mb: 3 }}>
            <CardMedia
              component="img"
              height="400"
              image={product.images[0]}
              alt={product.name}
            />
            <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
              {product.images.map((image, index) => (
                <Box 
                  key={index}
                  component="img"
                  src={image}
                  sx={{ 
                    width: 80, 
                    height: 60, 
                    objectFit: 'cover', 
                    borderRadius: 1,
                    mx: 1,
                    cursor: 'pointer',
                    border: index === 0 ? '2px solid' : 'none',
                    borderColor: 'primary.main'
                  }}
                />
              ))}
            </Box>
          </Card>
          
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Produktdetails
              </Typography>
              <TableContainer>
                <Table size="small">
                  <TableBody>
                    <TableRow>
                      <TableCell component="th" scope="row">Kategorie</TableCell>
                      <TableCell>{product.category}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">Lieferant</TableCell>
                      <TableCell>{product.supplier.name}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">Lieferzeit</TableCell>
                      <TableCell>{product.supplier.shippingTime} Tage</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">Versandkosten</TableCell>
                      <TableCell>{product.supplier.shippingCost} {product.price.currency}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">Trend erkannt am</TableCell>
                      <TableCell>{formatDate(product.trendData.firstDetected)}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">Erwarteter Peak</TableCell>
                      <TableCell>{formatDate(product.trendData.peakDate)}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
        
        {/* Product Details and Actions */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, mb: 3, borderRadius: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
              <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
                {product.name}
              </Typography>
              <Box sx={{ 
                bgcolor: getTrendLevelColor(product.trendLevel),
                color: 'white',
                px: 2,
                py: 1,
                borderRadius: 2,
                fontWeight: 'bold',
                fontSize: '1.2rem'
              }}>
                {product.trendScore}
              </Box>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Chip 
                label={product.category} 
                size="medium" 
                sx={{ mr: 1 }} 
              />
              <Chip 
                label={`Trend: ${product.trendLevel}`}
                size="medium"
                sx={{ 
                  bgcolor: getTrendLevelColor(product.trendLevel),
                  color: 'white'
                }}
              />
              <Chip 
                label={product.trendData.trendDirection}
                size="medium"
                sx={{ ml: 1 }}
                color={product.trendData.trendDirection === 'rising' ? 'success' : 'default'}
              />
            </Box>
            
            <Typography variant="body1" paragraph>
              {product.description}
            </Typography>
            
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between',
              bgcolor: 'background.default',
              p: 2,
              borderRadius: 2,
              mb: 3
            }}>
              <Box>
                <Typography variant="body2" color="text.secondary">
                  Einkaufspreis
                </Typography>
                <Typography variant="h6" color="text.primary" sx={{ fontWeight: 'bold' }}>
                  {product.price.cost} {product.price.currency}
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary">
                  Empf. Verkaufspreis
                </Typography>
                <Typography variant="h6" color="text.primary" sx={{ fontWeight: 'bold' }}>
                  {product.price.recommendedRetail} {product.price.currency}
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary">
                  Potenzielle Marge
                </Typography>
                <Typography variant="h6" color="success.main" sx={{ fontWeight: 'bold' }}>
                  {((product.price.recommendedRetail - product.price.cost) / product.price.cost * 100).toFixed(0)}%
                </Typography>
              </Box>
            </Box>
            
            <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
              <Button 
                variant="contained" 
                size="large"
                fullWidth
                startIcon={<ShoppingBagIcon />}
              >
                Zum TikTok-Shop hinzufügen
              </Button>
              <Button 
                variant="outlined" 
                size="large"
                fullWidth
              >
                Speichern
              </Button>
            </Box>
            
            <Divider sx={{ my: 3 }} />
    
(Content truncated due to size limit. Use line ranges to read in chunks)