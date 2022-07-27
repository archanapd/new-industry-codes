import React from 'react';
import './Pagination.scss';

import { Container, Box } from '@mui/material';

export default function Pagination(props: any) {
  return (
    <div className="App">
      <Container maxWidth="md">
        <Box sx={{ bgcolor: 'white', height: '1000px' }}>
        Pagination
        </Box>
      </Container>
    </div>
  );
}
