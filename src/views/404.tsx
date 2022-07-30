import React from 'react';
import { Container, Box } from '@mui/material';

import bgImg from 'assets/404.jpg';

export default function PageNotFound(props: any) {
  return (
    <div className="App">
      <img alt="" className="page-not-bg" src={bgImg} />
      <Container maxWidth="lg">
        <Box
          className="page-not-found d-flex align-items-center"
          sx={{ height: '100vh' }}
        >
          <div>
            <h2 className="mb-4">Page not found</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
              Maecenas pulvinar scelerisque metus,
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-4">
              <a href="blank" className="btn btn-primary btn-lg px-4 me-md-2">
                Back to Home
              </a>
            </div>
          </div>
        </Box>
      </Container>
    </div>
  );
}
