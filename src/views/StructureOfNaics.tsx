import React from 'react';

import { Container, Box, Button } from '@mui/material';
import NavBar from 'components/Navbar/NavBar';
import Footer from 'components/Footer/Footer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import OutlinedInput from '@mui/material/OutlinedInput';
import SelectDropDown from 'components/SelectDropDown/SelectDropDown';
import arrowsImg from 'assets/arrows.png';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Switch from '@mui/material/Switch';
import BasicAccordion from 'components/BasicAccordion/BasicAccordion';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function Structure(props: any) {
  return (
    <div className="App inner-pages">
      <NavBar className="inner-header" />
      <Box sx={{ bgcolor: '#fff', paddingTop: '94px' }}>
        <section className="inner-banner">
          <div className="container py-5">
            <div className="inner-banner-wrap d-flex flex-column  justify-content-center">
              <h2 className='mb-0 text-start'>Structure of NAICS Code 44-45</h2>
              <p className='inner-su-title'>Section 44 - Retailers of Motor Vehicle & Parts Dealers, Furniture, Electronics/Appliances,<br/> Building Material, Garden Supplies, Food, Beverages, Health Care, Gas Stations</p>
              <a className='text-light' href=""><ArrowBackIcon className='lnk-back-icon' /> Back to Home</a>
            </div>
          </div>
        </section>
        <main className='pb-5'>
          <section className="py-5">
            <div className="container py-5">
              <div className="circle-connectors mb-5">
                <ul className='connector-one'>
                  <li className='circle circle-pink'>
                    <span>General</span>
                  </li>
                  <li className='circle-pink'>
                    <ChevronRightIcon/>
                  </li>
                  <li className='circle circle-green'>
                  </li>
                  <li className='circle-green'>
                  <ChevronRightIcon/>
                  </li>
                  <li className='circle circle-yellow'>
                  </li>
                  <li className='circle-yellow'>
                  <ChevronRightIcon/>
                  </li>
                  <li className='circle circle-blue'>
                    <span>specific</span>
                  </li>
                </ul>
              </div>
              <ul className='digit-block d-flex flex-md-row flex-column pt-5'>
                <li className='col-3'>3 Digit</li>
                <li className='col-3'>4 Digit</li>
                <li className='col-3'>5 Digit</li>
                <li className='col-3'>6 Digit</li>
              </ul>
              <div className='text-end my-3'>
                <Switch className='custom-switch' {...label} />
                <span>Expand all rows</span>
              </div>
              <div className='accordion-one'>
                <BasicAccordion />
              </div>
            </div>
          </section>

        </main>
      </Box>
      <Footer />
    </div>
  );
}
