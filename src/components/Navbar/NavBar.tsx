import React from 'react';
import {
  Container,
  Box,
  AppBar,
  Typography,
  Toolbar,
  IconButton
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import './NavBar.scss';

export default function NavBar(props: any) {
  return (
    <Box>
      <AppBar
        className="header p-4"
        style={{ backgroundColor: '#252525', boxShadow: 'none' }}
      >
        <div className="container">
          <Toolbar className="p-0">
            <Typography
              variant="h6"
              noWrap
              component="h1"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              className="logo"
              style={{
                fontSize: '2rem',
                fontFamily: 'Poppins',
                fontWeight: 'bold'
              }}
            >
              Industry codes
            </Typography>
            <IconButton size="large" aria-label="search" color="inherit">
              <SearchIcon style={{ fontSize: '3rem' }} />
            </IconButton>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon style={{ fontSize: '3rem' }} />
            </IconButton>
          </Toolbar>
        </div>
      </AppBar>
    </Box>
  );
}
