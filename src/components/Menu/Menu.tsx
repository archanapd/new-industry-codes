import React from 'react';
import './Menu.scss';

import { Container, Box } from '@mui/material';

export default function Menu(props: any) {
  return (
    <div className="App">
      <Container maxWidth="md">
        <Box sx={{ bgcolor: 'white', height: '1000px' }}>Menu</Box>
      </Container>
    </div>
  );
}
