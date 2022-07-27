import React from 'react';
import './Footer.scss';

import { Container, Box } from '@mui/material';

export default function Footer(props: any) {
  return (
    <div className="App">
      <Container maxWidth="md">
        <Box sx={{ bgcolor: 'white', height: '1000px' }}>
        Footer
        </Box>
      </Container>
    </div>
  );
}

