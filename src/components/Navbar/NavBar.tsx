import React from 'react';
import './NavBar.scss';

import { Container, Box } from '@mui/material';

export default function NavBar(props: any) {
  return (
    <div className="App">
      <Container maxWidth="md">
        <Box sx={{ bgcolor: 'white', height: '1000px' }}>NavBar</Box>
      </Container>
    </div>
  );
}
