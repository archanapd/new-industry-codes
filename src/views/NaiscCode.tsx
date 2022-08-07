import React from 'react';

import { Container, Box, Button } from '@mui/material';
import NavBar from 'components/Navbar/NavBar';
import Footer from 'components/Footer/Footer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import VerticalTab from 'components/VerticalTab/VerticalTab';

export default function NaiscCode(props: any) {
  return (
    <div className="App inner-pages">
      <NavBar className="inner-header" />
      <Box sx={{ bgcolor: '#fff', paddingTop: '94px' }}>
        <section className="inner-banner bg-yellow">
          <div className="container py-5">
            <div className="inner-banner-wrap d-flex flex-column  justify-content-center">
              <h2 className="mb-4">NAICS Code 44111 - New Car Dealers</h2>
              <div className="text-center">
                <a href="">
                  <ArrowBackIcon className="lnk-back-icon" /> Back to Structure
                </a>
              </div>
            </div>
          </div>
        </section>
        <main className="">
          <section className="">
            <div className="container ">
              <VerticalTab />
            </div>
          </section>
        </main>
      </Box>
      <Footer />
    </div>
  );
}
