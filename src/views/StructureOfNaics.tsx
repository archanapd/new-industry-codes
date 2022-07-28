import React from 'react';

import { Container, Box } from '@mui/material';

export default function Structure(props: any) {
  return (
    <div className="App">
      <Container maxWidth="md">
        <Box sx={{ bgcolor: 'white', height: '1000px' }}>About</Box>
      </Container>
    </div>
  );
}
