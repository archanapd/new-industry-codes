import React from 'react';
import './TextField.scss';

import { Container, Box } from '@mui/material';

export default function TextField(props: any) {
  return (
    <div className="App">
      <Container maxWidth="md">
        <Box sx={{ bgcolor: 'white', height: '1000px' }}>
        TextField
        </Box>
      </Container>
    </div>
  );
}
