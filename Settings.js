import React from 'react';
import { Typography, Box, Paper, Grid, Button } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const Settings = () => {
  return (
    <Box sx={{ flexGrow: 1, py: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
        Einstellungen
      </Typography>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 2, borderRadius: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Button 
                variant="contained" 
                startIcon={<AccountCircleIcon />}
                sx={{ mb: 1, justifyContent: 'flex-start', py: 1.5 }}
              >
                Profil
              </Button>
              <Button 
                variant="outlined" 
                startIcon={<NotificationsIcon />}
                sx={{ mb: 1, justifyContent: 'flex-start', py: 1.5 }}
              >
                Benachrichtigungen
              </Button>
              <Button 
                variant="outlined" 
                startIcon={<SettingsIcon />}
                sx={{ mb: 1, justifyContent: 'flex-start', py: 1.5 }}
              >
                Allgemein
              </Button>
              <Button 
                variant="outlined" 
                startIcon={<HelpOutlineIcon />}
                sx={{ mb: 1, justifyContent: 'flex-start', py: 1.5 }}
              >
                Hilfe & Support
              </Button>
            </Box>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={9}>
          <Paper sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h5" gutterBottom>
              Profil
            </Typography>
            
            <Box sx={{ mb: 4 }}>
              <Typography variant="subtitle1" gutterBottom>
                Persönliche Informationen
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Diese Funktion wird in der vollständigen Version verfügbar sein. Im MVP können Sie die Benutzeroberfläche erkunden, aber die Einstellungen können noch nicht gespeichert werden.
              </Typography>
            </Box>
            
            <Box sx={{ mb: 4 }}>
              <Typography variant="subtitle1" gutterBottom>
                TikTok-Shop Verbindung
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Verbinden Sie Ihren TikTok-Shop, um Produkte direkt aus der Plattform hinzuzufügen. Diese Funktion wird in der vollständigen Version verfügbar sein.
              </Typography>
              <Button 
                variant="contained" 
                sx={{ mt: 2 }}
                disabled
              >
                TikTok-Shop verbinden
              </Button>
            </Box>
            
            <Box sx={{ mb: 4 }}>
              <Typography variant="subtitle1" gutterBottom>
                Nischen-Präferenzen
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Wählen Sie Ihre bevorzugten Nischen, um relevantere Produktempfehlungen zu erhalten. Diese Funktion wird in der vollständigen Version verfügbar sein.
              </Typography>
            </Box>
            
            <Box sx={{ mt: 4 }}>
              <Typography variant="body2" color="text.secondary">
                Dies ist eine MVP-Version der Plattform. Weitere Funktionen werden in der vollständigen Version verfügbar sein.
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Settings;
