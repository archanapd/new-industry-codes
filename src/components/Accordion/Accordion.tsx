import React from 'react';
import './Accordion.scss';

import { Container, Box } from '@mui/material';

export default function Accordion(props: any) {
  return (
    <div className="App">
      <Container maxWidth="md">
        <Box sx={{ bgcolor: 'white', height: '1000px' }}>Accordion</Box>
      </Container>
    </div>
  );
}
