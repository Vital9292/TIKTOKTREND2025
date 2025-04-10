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
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import TagIcon from '@mui/icons-material/Tag';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import WhatshotIcon from '@mui/icons-material/Whatshot';

const TrendDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [trend, setTrend] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTrendDetails = async () => {
      try {
        // In a real implementation, this would be an actual API call to your backend
        // For MVP, we'll use mock data
        const mockTrends = [
          {
            name: 'fitness',
            type: 'hashtag',
            viewCount: 15000000,
            videoCount: 250000,
            growthRate: 5.2,
            trendScore: 92,
            description: 'Der Fitness-Hashtag umfasst alle Arten von Workout-Videos, Trainingstipps und Fitnessroutinen. Besonders beliebt sind kurze, intensive Workouts, die ohne Geräte zu Hause durchgeführt werden können.',
            timeline: [
              { date: '2025-03-01', viewCount: 12000000 },
              { date: '2025-03-15', viewCount: 13500000 },
              { date: '2025-04-01', viewCount: 15000000 }
            ],
            prediction: {
              expectedDuration: 60,
              peakDate: '2025-05-15',
              maxViewEstimate: 18000000,
              confidenceScore: 85
            },
            topVideos: [
              { 
                title: '5-Minuten Bauchmuskeltraining',
                creator: 'fitnesscoach2025',
                viewCount: 2500000,
                likeCount: 350000
              },
              { 
                title: 'Ganzkörper-Workout ohne Geräte',
                creator: 'homefitness',
                viewCount: 1800000,
                likeCount: 280000
              },
              { 
                title: '30-Tage Fitness Challenge',
                creator: 'fitnessmotivation',
                viewCount: 1500000,
                likeCount: 220000
              }
            ],
            relatedHashtags: ['workout', 'homeworkout', 'gymlife', 'healthylifestyle']
          },
          {
            name: 'workout',
            type: 'hashtag',
            viewCount: 12000000,
            videoCount: 180000,
            growthRate: 4.8,
            trendScore: 88,
            description: 'Der Workout-Hashtag konzentriert sich auf spezifische Übungen und Trainingsroutinen. Besonders im Trend liegen kurze, effektive Workouts für bestimmte Körperpartien und HIIT-Training.',
            timeline: [
              { date: '2025-03-01', viewCount: 9500000 },
              { date: '2025-03-15', viewCount: 10800000 },
              { date: '2025-04-01', viewCount: 12000000 }
            ],
            prediction: {
              expectedDuration: 45,
              peakDate: '2025-05-01',
              maxViewEstimate: 14500000,
              confidenceScore: 82
            },
            topVideos: [
              { 
                title: '10-Minuten HIIT Workout',
                creator: 'hiitmaster',
                viewCount: 2200000,
                likeCount: 320000
              },
              { 
                title: 'Beine & Po Workout für zu Hause',
                creator: 'fitgirl2025',
                viewCount: 1600000,
                likeCount: 250000
              },
              { 
                title: 'Perfektes Arm-Workout für Anfänger',
                creator: 'beginnersfitness',
                viewCount: 1300000,
                likeCount: 190000
              }
            ],
            relatedHashtags: ['fitness', 'homeworkout', 'hiitworkout', 'training']
          }
        ];
        
        // Add more mock trends if needed
        const allMockTrends = [
          ...mockTrends,
          {
            name: 'homeworkout',
            type: 'hashtag',
            viewCount: 9500000,
            videoCount: 120000,
            growthRate: 3.7,
            trendScore: 85,
            description: 'Der Home-Workout-Hashtag zeigt Übungen und Routinen, die speziell für das Training zu Hause konzipiert sind. Besonders beliebt sind Workouts mit minimaler Ausrüstung oder nur mit dem eigenen Körpergewicht.',
            timeline: [
              { date: '2025-03-01', viewCount: 7800000 },
              { date: '2025-03-15', viewCount: 8600000 },
              { date: '2025-04-01', viewCount: 9500000 }
            ],
            prediction: {
              expectedDuration: 50,
              peakDate: '2025-05-10',
              maxViewEstimate: 11000000,
              confidenceScore: 80
            },
            topVideos: [
              { 
                title: 'Komplettes Workout ohne Geräte',
                creator: 'homefitpro',
                viewCount: 1900000,
                likeCount: 280000
              },
              { 
                title: '15-Minuten Apartment-freundliches Workout',
                creator: 'apartmentfitness',
                viewCount: 1400000,
                likeCount: 210000
              },
              { 
                title: 'Minimalistisches Workout für kleine Räume',
                creator: 'tinyhomefitness',
                viewCount: 1100000,
                likeCount: 170000
              }
            ],
            relatedHashtags: ['fitness', 'workout', 'noequipment', 'athomefitness']
          }
        ];
        
        // Get trend by ID
        const trendData = allMockTrends[parseInt(id)] || mockTrends[0];
        
        // Mock related products
        const mockRelatedProducts = [
          { 
            name: 'Fitness Resistance Bands Set', 
            category: 'fitness', 
            viewCount: 8500000, 
            trendScore: 92, 
            trendLevel: 'high',
            price: {
              cost: 12.99,
              recommendedRetail: 29.99,
              currency: 'EUR'
            }
          },
          { 
            name: 'Yoga Mat with Alignment Lines', 
            category: 'fitness', 
            viewCount: 5200000, 
            trendScore: 79, 
            trendLevel: 'medium',
            price: {
              cost: 15.99,
              recommendedRetail: 34.99,
              currency: 'EUR'
            }
          },
          { 
            name: 'Adjustable Dumbbell Set', 
            category: 'fitness', 
            viewCount: 6500000, 
            trendScore: 85, 
            trendLevel: 'high',
            price: {
              cost: 89.99,
              recommendedRetail: 149.99,
              currency: 'EUR'
            }
          }
        ];
        
        setTrend(trendData);
        setRelatedProducts(mockRelatedProducts);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching trend details:', error);
        setLoading(false);
      }
    };

    fetchTrendDetails();
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

  const getTrendIcon = (type) => {
    switch (type) {
      case 'hashtag':
        return <TagIcon />;
      case 'sound':
        return <MusicNoteIcon />;
      case 'challenge':
        return <WhatshotIcon />;
      default:
        return <TrendingUpIcon />;
    }
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

  if (!trend) {
    return (
      <Box sx={{ py: 3 }}>
        <Typography variant="h4" gutterBottom>
          Trend nicht gefunden
        </Typography>
        <Button variant="contained" onClick={() => navigate('/trends')}>
          Zurück zum Trend Explorer
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ flexGrow: 1, py: 3 }}>
      <Button 
        variant="outlined" 
        onClick={() => navigate('/trends')}
        sx={{ mb: 3 }}
      >
        &larr; Zurück zum Trend Explorer
      </Button>
      
      <Grid container spacing={4}>
        {/* Trend Overview */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3, borderRadius: 2, mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Box sx={{ 
                mr: 2, 
                bgcolor: 'primary.main', 
                color: 'white', 
                borderRadius: '50%',
                width: 50,
                height: 50,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {trend.type === 'hashtag' ? <TagIcon fontSize="large" /> : <TrendingUpIcon fontSize="large" />}
              </Box>
              <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
                {trend.type === 'hashtag' ? '#' : ''}{trend.name}
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Chip 
                label={trend.type.charAt(0).toUpperCase() + trend.type.slice(1)} 
                size="medium" 
                sx={{ mr: 1 }} 
              />
              <Chip 
                label={`Trend-Score: ${trend.trendScore}`}
                size="medium"
                sx={{ 
                  bgcolor: 'secondary.main',
                  color: 'white'
                }}
              />
              <Chip 
                label={`+${trend.growthRate}% Wachstum`}
                size="medium"
                sx={{ ml: 1 }}
                color="success"
              />
            </Box>
            
            <Typography variant="body1" paragraph>
              {trend.description}
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
                  Views
                </Typography>
                <Typography variant="h6" color="text.primary" sx={{ fontWeight: 'bold' }}>
                  {formatNumber(trend.viewCount)}
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary">
                  Videos
                </Typography>
                <Typography variant="h6" color="text.primary" sx={{ fontWeight: 'bold' }}>
                  {formatNumber(trend.videoCount)}
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary">
                  Wachstumsrate
                </Typography>
                <Typography variant="h6" color="success.main" sx={{ fontWeight: 'bold' }}>
                  +{trend.growthRate}%
                </Typography>
              </Box>
            </Box>
            
            <Divider sx={{ my: 3 }} />
            
            <Typography variant="h6" gutterBottom>
              Verwandte Hashtags
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
              {trend.relatedHashtags.map((hashtag, index) => (
                <Chip 
                  key={index}
                  label={`#${hashtag}`} 
                  clickable
                  onClick={() => navigate(`/trends/${index + 1}`)}
                />
              ))}
            </Box>
          </Paper>
          
          <Paper sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>
              Top Videos mit diesem Trend
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Video</TableCell>
                    <TableCell>Creator</TableCell>
                    <TableCell align="right">Views</TableCell>
                    <TableCell align="right">Likes</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {trend.topVideos.map((video, index) => (
                    <TableRow key={index}>
                      <TableCell>{video.title}</TableCell>
                      <TableCell>{video.creator}</TableCell>
                      <TableCell align="right">{formatNumber(video.viewCount)}</TableCell>
                      <TableCell align="right">{formatNumber(video.likeCount)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
        
        {/* Trend Prediction and Related Products */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, borderRadius: 2, mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Trend-Prognose
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <TrendingUpIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="Erwartete Dauer" 
                  secondary={`${trend.prediction.expectedDuration} Tage`} 
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <WhatshotIcon color="error" />
                </ListItemIcon>
                <ListItemText 
                  primary="Erwarteter Peak" 
                  secondary={formatDate(trend.prediction.peakDate)} 
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <TrendingUpIcon color="primary" />
                </ListItemIcon>
                <ListItemText 
                  primary="Maximale Views (Schätzung)" 
                  secondary={formatNumber(trend.prediction.maxViewEstimate)} 
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="success" />
                </ListItemIcon>
                <ListItemText 
                  primary="Konfidenz" 
                  secondary={`${trend.prediction.confidenceScore}%`} 
                />
              </ListItem>
            </List>
          </Paper>
          
          <Paper sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>
              Empfohlene Produkte
            </Typography>
            {relatedProducts.map((product, index) => (
              <Card key={index} sx={{ mb: 2, bgcolor: 'background.default' }}>
                <CardContent>
                  <Typography variant="subtitle1" sx={{ fontWeight:
(Content truncated due to size limit. Use line ranges to read in chunks)