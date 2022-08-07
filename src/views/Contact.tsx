import React from 'react';

import { Container, Box, Button } from '@mui/material';
import NavBar from 'components/Navbar/NavBar';
import Footer from 'components/Footer/Footer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import TextFields from 'components/TextFields/TextFields';

export default function Contact(props: any) {
  return (
    <div className="App inner-pages">
      <NavBar className="inner-header" />
      <Box sx={{ bgcolor: '#fff', paddingTop: '94px' }}>
        <section className="inner-banner">
          <div className="container py-5">
            <div className="inner-banner-wrap d-flex flex-column  justify-content-center align-items-center">
              <h2 className="mb-3">Contact</h2>
              <a href="">
                <ArrowBackIcon className="lnk-back-icon" /> Back to Home
              </a>
            </div>
          </div>
        </section>
        <main className="pb-5">
          <section className="bg-grey contact-block py-5">
            <div className="container px-4 py-5">
              <div className="row">
                <div className="col-md-4 mb-5 mb-md-0">
                  <TextFields />
                  <Button
                    style={{
                      backgroundColor: '#f06240',
                      borderRadius: '3px',
                      minWidth: '160px',
                      minHeight: '48px',
                      textTransform: 'none',
                      fontSize: '1.2rem'
                    }}
                    variant="contained"
                  >
                    Send Request
                  </Button>
                  {/*
                  <FormControl sx={{ width: '100%' }}>
                     <OutlinedInput
                      className="box-outline mb-4"
                      fullWidth
                      placeholder="Enter your name here."
                    />
                    <OutlinedInput
                      className="box-outline mb-4"
                      fullWidth
                      placeholder="Enter company name"
                    />
                    <OutlinedInput
                      className="box-outline mb-4"
                      fullWidth
                      placeholder="Enter your email"
                    />
                    <OutlinedInput
                      className="box-outline mb-4"
                      fullWidth
                      placeholder="Enter your contact number"
                    />
                    <OutlinedInput
                      className="box-outline mb-4"
                      fullWidth
                      placeholder="Describe your request here."
                    /> 
                    
                  </FormControl>*/}
                </div>
                <div className="col-md-7 ms-md-auto">
                  <h2 className="block-title">We’re here to help</h2>
                  <p>Get in touch with sales team</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas pulvinar scelerisque metus, a porttitor nisl
                    dapibus ac. Suspendisse vitae mi massa
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="container py-5 my-5">
            <div className="row pb-5">
              <div className="col-md-8">
                <h2 className="block-title mb-4">
                  Lorem ipsum dolor sub title 1
                </h2>
                <p>
                  Aliquam ac neque nisl. Cras nec elit in mauris semper mollis.
                  Nam ultricies lectus sit amet nulla convallis, sit amet
                  condimentum augue dignissim. Sed sit amet nisl tempus, congue
                  diam at, dictum nisl. Maecenas maximus turpis at mauris
                  imperdiet, in laoreet est posuere. Vestibulum accumsan ac
                  risus quis tristique. Phasellus dolor mauris, hendrerit at
                  sapien in, pellentesque maximus nisl. Nulla at mollis augue.
                  Proin accumsan turpis arcu, at elementum augue congue sed.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8">
                <h2 className="block-title mb-4">
                  Lorem ipsum dolor sub title 1
                </h2>
                <p>
                  Aliquam ac neque nisl. Cras nec elit in mauris semper mollis.
                  Nam ultricies lectus sit amet nulla convallis, sit amet
                  condimentum augue dignissim. Sed sit amet nisl tempus, congue
                  diam at, dictum nisl. Maecenas maximus turpis at mauris
                  imperdiet, in laoreet est posuere. Vestibulum accumsan ac
                  risus quis tristique. Phasellus dolor mauris, hendrerit at
                  sapien in, pellentesque maximus nisl. Nulla at mollis augue.
                  Proin accumsan turpis arcu, at elementum augue congue sed.
                </p>
              </div>
            </div>
          </section>
        </main>
      </Box>
      <Footer />
    </div>
  );
}
