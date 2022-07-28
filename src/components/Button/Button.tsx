import React from 'react';
import './Button.scss';

import { Container, Box } from '@mui/material';

export default function Button(props: any) {
  return (
    <div className="App">
      <Container maxWidth="md">
        <Box sx={{ bgcolor: 'white', height: '1000px' }}>Button</Box>
      </Container>
    </div>
  );
}
