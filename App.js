import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import TrendExplorer from './pages/TrendExplorer';
import ProductCatalog from './pages/ProductCatalog';
import ProductDetails from './pages/ProductDetails';
import TrendDetails from './pages/TrendDetails';
import Settings from './pages/Settings';
import TikTokShopDashboard from './pages/TikTokShopDashboard';
import TikTokShopSetup from './pages/TikTokShopSetup';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff4d4f',
      light: '#ff7875',
      dark: '#cf1322',
    },
    secondary: {
      main: '#722ed1',
      light: '#9254de',
      dark: '#531dab',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex' }}>
          <Navbar />
          <Sidebar />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              width: { sm: `calc(100% - 240px)` },
              ml: { sm: '240px' },
              mt: '64px',
            }}
          >
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/trends" element={<TrendExplorer />} />
              <Route path="/trends/:id" element={<TrendDetails />} />
              <Route path="/products" element={<ProductCatalog />} />
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/tiktok-shop" element={<TikTokShopDashboard />} />
              <Route path="/tiktok-shop/setup" element={<TikTokShopSetup />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
