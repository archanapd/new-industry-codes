import React from 'react';
import './Tab.scss';

import { Container, Box } from '@mui/material';

export default function Tab(props: any) {
  return (
    <div className="App">
      <Container maxWidth="md">
        <Box sx={{ bgcolor: 'white', height: '1000px' }}>Tab</Box>
      </Container>
    </div>
  );
}
