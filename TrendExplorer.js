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
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Tabs,
  Tab
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import TagIcon from '@mui/icons-material/Tag';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TrendExplorer = () => {
  const [loading, setLoading] = useState(true);
  const [trends, setTrends] = useState([]);
  const [filteredTrends, setFilteredTrends] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [tabValue, setTabValue] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTrends = async () => {
      try {
        // In a real implementation, this would be an actual API call to your backend
        const hashtagsResponse = await axios.get('http://localhost:5000/api/tiktok-data/hashtags');
        
        // Mock data for different trend types
        const mockTrends = [
          // Hashtags (from API)
          ...hashtagsResponse.data.map(hashtag => ({
            ...hashtag,
            type: 'hashtag',
            trendScore: Math.floor(Math.random() * 30) + 70
          })),
          
          // Sounds
          {
            name: 'fitness_motivation_beat',
            type: 'sound',
            viewCount: 12500000,
            videoCount: 180000,
            growthRate: 6.3,
            trendScore: 89
          },
          {
            name: 'workout_remix_2025',
            type: 'sound',
            viewCount: 9800000,
            videoCount: 145000,
            growthRate: 5.7,
            trendScore: 85
          },
          {
            name: 'energy_boost_track',
            type: 'sound',
            viewCount: 7600000,
            videoCount: 110000,
            growthRate: 4.9,
            trendScore: 82
          },
          
          // Challenges
          {
            name: '30DayFitnessChallenge',
            type: 'challenge',
            viewCount: 18500000,
            videoCount: 320000,
            growthRate: 7.2,
            trendScore: 94
          },
          {
            name: 'HomeWorkoutChallenge',
            type: 'challenge',
            viewCount: 14200000,
            videoCount: 260000,
            growthRate: 6.8,
            trendScore: 91
          },
          {
            name: 'ProteinRecipeChallenge',
            type: 'challenge',
            viewCount: 8900000,
            videoCount: 130000,
            growthRate: 5.4,
            trendScore: 83
          }
        ];
        
        setTrends(mockTrends);
        setFilteredTrends(mockTrends);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching trends:', error);
        // For MVP, use mock data if API fails
        const mockTrends = [
          // Hashtags
          {
            name: 'fitness',
            type: 'hashtag',
            viewCount: 15000000,
            videoCount: 250000,
            growthRate: 5.2,
            trendScore: 92
          },
          {
            name: 'workout',
            type: 'hashtag',
            viewCount: 12000000,
            videoCount: 180000,
            growthRate: 4.8,
            trendScore: 88
          },
          {
            name: 'gymlife',
            type: 'hashtag',
            viewCount: 9500000,
            videoCount: 120000,
            growthRate: 3.7,
            trendScore: 85
          },
          {
            name: 'healthylifestyle',
            type: 'hashtag',
            viewCount: 8200000,
            videoCount: 95000,
            growthRate: 4.1,
            trendScore: 82
          },
          {
            name: 'nutrition',
            type: 'hashtag',
            viewCount: 6800000,
            videoCount: 75000,
            growthRate: 3.2,
            trendScore: 79
          },
          
          // Sounds
          {
            name: 'fitness_motivation_beat',
            type: 'sound',
            viewCount: 12500000,
            videoCount: 180000,
            growthRate: 6.3,
            trendScore: 89
          },
          {
            name: 'workout_remix_2025',
            type: 'sound',
            viewCount: 9800000,
            videoCount: 145000,
            growthRate: 5.7,
            trendScore: 85
          },
          {
            name: 'energy_boost_track',
            type: 'sound',
            viewCount: 7600000,
            videoCount: 110000,
            growthRate: 4.9,
            trendScore: 82
          },
          
          // Challenges
          {
            name: '30DayFitnessChallenge',
            type: 'challenge',
            viewCount: 18500000,
            videoCount: 320000,
            growthRate: 7.2,
            trendScore: 94
          },
          {
            name: 'HomeWorkoutChallenge',
            type: 'challenge',
            viewCount: 14200000,
            videoCount: 260000,
            growthRate: 6.8,
            trendScore: 91
          },
          {
            name: 'ProteinRecipeChallenge',
            type: 'challenge',
            viewCount: 8900000,
            videoCount: 130000,
            growthRate: 5.4,
            trendScore: 83
          }
        ];
        
        setTrends(mockTrends);
        setFilteredTrends(mockTrends);
        setLoading(false);
      }
    };

    fetchTrends();
  }, []);

  useEffect(() => {
    // Filter trends based on search term, category filter, and tab value
    const filtered = trends.filter(trend => {
      const matchesSearch = trend.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = categoryFilter === 'all' || (
        categoryFilter === 'fitness' && 
        ['fitness', 'workout', 'gymlife'].includes(trend.name.toLowerCase())
      ) || (
        categoryFilter === 'nutrition' && 
        ['nutrition', 'healthylifestyle', 'protein'].includes(trend.name.toLowerCase())
      );
      
      // Filter by tab (trend type)
      const matchesType = tabValue === 0 || // All trends
                         (tabValue === 1 && trend.type === 'hashtag') || // Hashtags
                         (tabValue === 2 && trend.type === 'sound') || // Sounds
                         (tabValue === 3 && trend.type === 'challenge'); // Challenges
      
      return matchesSearch && matchesCategory && matchesType;
    });
    
    setFilteredTrends(filtered);
  }, [searchTerm, categoryFilter, tabValue, trends]);

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num;
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
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
        Trend Explorer
      </Typography>
      
      {/* Search and Filters */}
      <Paper sx={{ p: 3, mb: 4, borderRadius: 2 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={8}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Trends suchen..."
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
          <Grid item xs={12} md={4}>
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
        </Grid>
      </Paper>
      
      {/* Tabs for trend types */}
      <Paper sx={{ mb: 4, borderRadius: 2 }}>
        <Tabs 
          value={tabValue} 
          onChange={handleTabChange} 
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Alle Trends" icon={<TrendingUpIcon />} iconPosition="start" />
          <Tab label="Hashtags" icon={<TagIcon />} iconPosition="start" />
          <Tab label="Sounds" icon={<MusicNoteIcon />} iconPosition="start" />
          <Tab label="Challenges" icon={<WhatshotIcon />} iconPosition="start" />
        </Tabs>
      </Paper>
      
      {/* Trends Grid */}
      <Grid container spacing={3}>
        {filteredTrends.map((trend, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
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
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box sx={{ 
                    mr: 2, 
                    bgcolor: 'primary.main', 
                    color: 'white', 
                    borderRadius: '50%',
                    width: 40,
                    height: 40,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {getTrendIcon(trend.type)}
                  </Box>
                  <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                    {trend.type === 'hashtag' ? '#' : ''}{trend.name}
                  </Typography>
                </Box>
                
                <Chip 
                  label={trend.type.charAt(0).toUpperCase() + trend.type.slice(1)} 
                  size="small" 
                  sx={{ mb: 2 }} 
                />
                
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" color="text.secondary">
                    Views: {formatNumber(trend.viewCount)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Videos: {formatNumber(trend.videoCount)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
                    Wachstum: 
                    <Chip 
                      size="small" 
                      label={`+${trend.growthRate}%`} 
                      color="success" 
                      sx={{ ml: 1, height: 20 }} 
                    />
                  </Typography>
                </Box>
                
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  mb: 2,
                  p: 1,
                  bgcolor: 'background.default',
                  borderRadius: 2
                }}>
                  <Typography variant="body1" component="span" sx={{ mr: 1 }}>
                    Trend-Score:
                  </Typography>
                  <Box sx={{ 
                    bgcolor: 'secondary.main',
                    color: 'white',
                    px: 2,
                    py: 0.5,
                    borderRadius: 10,
                    fontWeight: 'bold'
                  }}>
                    {trend.trendScore}
                  </Box>
                </Box>
              </CardContent>
              <Box sx={{ p: 2, pt: 0 }}>
                <Button 
                  variant="contained" 
                  fullWidth
                  onClick={() => navigate(`/trends/${index}`)}
                >
                  Details anzeigen
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
        
        {filteredTrends.length === 0 && (
          <Grid item xs={12}>
            <Paper sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="h6">
                Keine Trends gefunden
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

export default TrendExplorer;
