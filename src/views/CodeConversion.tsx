import React from 'react';

import { Container, Box, Button } from '@mui/material';
import NavBar from 'components/Navbar/NavBar';
import Footer from 'components/Footer/Footer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import OutlinedInput from '@mui/material/OutlinedInput';
import SelectDropDown from 'components/SelectDropDown/SelectDropDown';
import arrowsImg from 'assets/arrows.png';

export default function CodeConversion(props: any) {
  return (
    <div className="App inner-pages">
      <NavBar className="inner-header" />
      <Box sx={{ bgcolor: '#fff', paddingTop: '94px' }}>
        <section className="inner-banner">
          <div className="container py-5">
            <div className="inner-banner-wrap d-flex flex-column  justify-content-center align-items-center">
              <h2 className='mb-3'>Code Conversion</h2>
              <a href=""><ArrowBackIcon className='lnk-back-icon' /> Back to Home</a>
            </div>
          </div>
        </section>
        <main className='pb-5'>
          <section className="code bg-grey code-conversion-block py-5">
            <div className="container px-4 py-5">
              <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar scelerisque
                <br />metus, a porttitor nisl dapibus ac. Suspendisse vitae mi massa. Aliquam ac neque nisl.</p>
              <div className="row g-3 my-4 pt-5">

                <div className="col-md-5">
                  <OutlinedInput className="box-outline" fullWidth placeholder="Enter code or keyword" />
                </div>
                <div className="col-md-7">

                  <ul className="d-flex g-3 list-search">
                    <li className="">
                      <SelectDropDown />
                    </li>
                    <li className="list-search-btn"><button className="btn-filter"><img src={arrowsImg} /></button></li>
                    <li className="">
                      <SelectDropDown />
                    </li>
                  </ul>
                </div>

                <div className="col-md-12 text-center mt-5">
                  <Button style={{
                    backgroundColor: "#f06240",
                    borderRadius: '3px',
                    minWidth: '160px',
                    minHeight: '48px',
                    textTransform: 'none',
                    fontSize: '1.2rem',
                  }} variant="contained">Convert</Button>              </div>
              </div>
            </div>
          </section>
          <section className='container code-mapping-block py-5'>
            <h2 className='block-title text-center pt-md-5 pb-md-5 mb-5'>NAICS to SIC Code Mapping for <span className='txt-red'>"0711"</span></h2>
            <ul className="row">
              <li className="col-lg-6 mb-4">
                <h6 className='txt-black-light-color mb-3'>SIC CODE</h6>
                <span className='color-bar green-bar p-4'><span>0711</span> Soil Preparation Services</span>
              </li>
              <li className="col-lg-6 mb-4">
                <h6 className='txt-black-light-color mb-3'>NAICS CODE</h6>
                <span className='color-bar yellow-bar p-4'><span>115112</span> Soil Preparation, Planting, and Cultivating</span>
              </li>
            </ul>
          </section>
        </main>
      </Box>
      <Footer />
    </div>
  );
}
