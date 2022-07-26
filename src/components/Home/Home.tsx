import React from 'react';
import './Home.scss';

import { Container, Box } from '@mui/material';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Container maxWidth="md">
        <Box sx={{ bgcolor: 'white', height: '1000px' }}>
          My first react app
        </Box>
      </Container>
    </div>
  );
}

export default App;
