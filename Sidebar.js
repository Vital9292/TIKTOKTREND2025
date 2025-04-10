import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Typography } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SettingsIcon from '@mui/icons-material/Settings';
import StoreIcon from '@mui/icons-material/Store';
import LinkIcon from '@mui/icons-material/Link';

const drawerWidth = 240;

const Sidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
    { text: 'Trend Explorer', icon: <TrendingUpIcon />, path: '/trends' },
    { text: 'Produkt Katalog', icon: <ShoppingBagIcon />, path: '/products' },
    { text: 'TikTok Shop', icon: <StoreIcon />, path: '/tiktok-shop' },
    { text: 'Shop Verbinden', icon: <LinkIcon />, path: '/tiktok-shop/setup' },
    { text: 'Einstellungen', icon: <SettingsIcon />, path: '/settings' },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { 
          width: drawerWidth, 
          boxSizing: 'border-box',
          mt: '64px',
          backgroundColor: '#fff',
          borderRight: '1px solid rgba(0, 0, 0, 0.12)'
        },
      }}
    >
      <Box sx={{ overflow: 'auto', mt: 2 }}>
        <List>
          {menuItems.map((item, index) => (
            <ListItem 
              button 
              key={item.text}
              component={Link}
              to={item.path}
              selected={location.pathname === item.path}
              sx={{ 
                mb: 0.5, 
                borderRadius: '0 8px 8px 0', 
                mr: 1,
                '&.Mui-selected': {
                  backgroundColor: 'primary.light',
                  '&:hover': {
                    backgroundColor: 'primary.light',
                  },
                  '& .MuiListItemIcon-root': {
                    color: 'primary.dark',
                  },
                  '& .MuiListItemText-primary': {
                    color: 'primary.dark',
                    fontWeight: 'bold',
                  },
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
        <Divider sx={{ my: 2 }} />
        <Box sx={{ px: 2, mt: 4 }}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            TikTok Trend & Produkt-Empfehlungsplattform
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Version 1.0.0 (MVP)
          </Typography>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
