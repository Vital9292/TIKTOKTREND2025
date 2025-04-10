import React from 'react';
import { Box, Typography, Paper, Grid, Button, Card, CardContent, Divider } from '@mui/material';
import ShopIcon from '@mui/icons-material/Shop';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const TikTokShopSetup = () => {
  return (
    <Box sx={{ flexGrow: 1, py: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
        TikTok Shop Einrichtung
      </Typography>
      
      <Paper sx={{ p: 3, mb: 4, borderRadius: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <ShopIcon color="primary" sx={{ mr: 1 }} />
          <Typography variant="h5">
            TikTok Shop verbinden
          </Typography>
        </Box>
        
        <Typography variant="body1" paragraph>
          Verbinden Sie Ihren TikTok Shop mit unserer Plattform, um Ihre Produkte zu verwalten, Trends zu analysieren und Preise automatisch anzupassen.
        </Typography>
        
        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} md={6}>
            <Card variant="outlined" sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Verbindungsstatus
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 3 }}>
                  <Box sx={{ 
                    width: 120, 
                    height: 120, 
                    borderRadius: '50%', 
                    bgcolor: 'error.light',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2
                  }}>
                    <Typography variant="h6" color="white">
                      Nicht verbunden
                    </Typography>
                  </Box>
                </Box>
                <Button 
                  variant="contained" 
                  fullWidth 
                  size="large"
                  sx={{ mt: 2 }}
                >
                  Mit TikTok Shop verbinden
                </Button>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card variant="outlined" sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Verbindungsschritte
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Typography variant="body2" paragraph>
                    1. Klicken Sie auf "Mit TikTok Shop verbinden"
                  </Typography>
                  <Typography variant="body2" paragraph>
                    2. Melden Sie sich bei Ihrem TikTok-Konto an
                  </Typography>
                  <Typography variant="body2" paragraph>
                    3. Erteilen Sie die erforderlichen Berechtigungen
                  </Typography>
                  <Typography variant="body2" paragraph>
                    4. Kehren Sie zu dieser Seite zurück
                  </Typography>
                </Box>
                <Divider sx={{ my: 2 }} />
                <Typography variant="body2" color="text.secondary">
                  Hinweis: Sie benötigen einen aktiven TikTok Shop, um diese Funktion nutzen zu können.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Paper>
      
      <Paper sx={{ p: 3, mb: 4, borderRadius: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <SettingsIcon color="primary" sx={{ mr: 1 }} />
          <Typography variant="h5">
            API-Einstellungen
          </Typography>
        </Box>
        
        <Typography variant="body1" paragraph>
          Für die Verbindung mit dem TikTok Shop werden API-Schlüssel benötigt. Diese werden automatisch generiert, wenn Sie Ihren Shop verbinden.
        </Typography>
        
        <Card variant="outlined" sx={{ mt: 3 }}>
          <CardContent>
            <Typography variant="subtitle1" gutterBottom>
              API-Status
            </Typography>
            <Typography variant="body2" color="text.secondary">
              API-Schlüssel: <span style={{ color: '#f44336' }}>Nicht konfiguriert</span>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              API-Secret: <span style={{ color: '#f44336' }}>Nicht konfiguriert</span>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Access Token: <span style={{ color: '#f44336' }}>Nicht konfiguriert</span>
            </Typography>
            <Button 
              variant="outlined" 
              size="small"
              sx={{ mt: 2 }}
              disabled
            >
              API-Schlüssel anzeigen
            </Button>
          </CardContent>
        </Card>
      </Paper>
      
      <Paper sx={{ p: 3, borderRadius: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <HelpOutlineIcon color="primary" sx={{ mr: 1 }} />
          <Typography variant="h5">
            Hilfe & Support
          </Typography>
        </Box>
        
        <Typography variant="body1" paragraph>
          Benötigen Sie Hilfe bei der Einrichtung Ihres TikTok Shops oder haben Sie Fragen zur Integration?
        </Typography>
        
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={12} sm={6} md={4}>
            <Button variant="outlined" fullWidth>
              Dokumentation
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button variant="outlined" fullWidth>
              FAQ
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button variant="outlined" fullWidth>
              Support kontaktieren
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default TikTokShopSetup;
