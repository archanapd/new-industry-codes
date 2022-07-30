import React from 'react';

import { Container, Box, Grid } from '@mui/material';
import SelectDropDown from 'components/SelectDropDown/SelectDropDown';
import PaginationLink from 'components/PaginationLink/PaginationLink';

export default function SearchResults(props: any) {
  return (
    <div className="App">
      <Container maxWidth="xl">
        <Box className='page-not-found d-flex align-items-center' sx={{ height: '100%' }}>
          <div>
            <h2 className='mb-4 mt-5 pt-4'>311- Food Manufacturing showing 30 results</h2>
            <Grid container spacing={2}>
              <Grid item xs={5}>
                <SelectDropDown />
              </Grid>
              <Grid item xs={3}>
                <SelectDropDown />
              </Grid>
            </Grid>
            <ul className=" mt-5  mb-5 row search-result-list">
            <li className='col-md-3 mb-4'>
                <div className='p-5'>
                  <h5>Aliquam ac neque nisl.</h5>
                  <p>Aliquam ac neque nisl. Cras nec elit in mauris semper mollis. Nam ultricies lectus sit amet nulla</p>
                </div>

              </li>
              <li className='col-md-3 mb-4'>
                <div className='p-5'>
                  <h5>Aliquam ac neque nisl.</h5>
                  <p>Aliquam ac neque nisl. Cras nec elit in mauris semper mollis. Nam ultricies lectus sit amet nulla</p>
                </div>

              </li>
              <li className='col-md-3 mb-4'>
                <div className='p-5'>
                  <h5>Aliquam ac neque nisl.</h5>
                  <p>Aliquam ac neque nisl. Cras nec elit in mauris semper mollis. Nam ultricies lectus sit amet nulla</p>
                </div>

              </li>
              <li className='col-md-3 mb-4'>
                <div className='p-5'>
                  <h5>Aliquam ac neque nisl.</h5>
                  <p>Aliquam ac neque nisl. Cras nec elit in mauris semper mollis. Nam ultricies lectus sit amet nulla</p>
                </div>

              </li>
              <li className='col-md-3 mb-4'>
                <div className='p-5'>
                  <h5>Aliquam ac neque nisl.</h5>
                  <p>Aliquam ac neque nisl. Cras nec elit in mauris semper mollis. Nam ultricies lectus sit amet nulla</p>
                </div>

              </li>
              <li className='col-md-3 mb-4'>
                <div className='p-5'>
                  <h5>Aliquam ac neque nisl.</h5>
                  <p>Aliquam ac neque nisl. Cras nec elit in mauris semper mollis. Nam ultricies lectus sit amet nulla</p>
                </div>

              </li>
              <li className='col-md-3 mb-4'>
                <div className='p-5'>
                  <h5>Aliquam ac neque nisl.</h5>
                  <p>Aliquam ac neque nisl. Cras nec elit in mauris semper mollis. Nam ultricies lectus sit amet nulla</p>
                </div>

              </li>
              <li className='col-md-3 mb-4'>
                <div className='p-5'>
                  <h5>Aliquam ac neque nisl.</h5>
                  <p>Aliquam ac neque nisl. Cras nec elit in mauris semper mollis. Nam ultricies lectus sit amet nulla</p>
                </div>

              </li>
              <li className='col-md-3 mb-4'>
                <div className='p-5'>
                  <h5>Aliquam ac neque nisl.</h5>
                  <p>Aliquam ac neque nisl. Cras nec elit in mauris semper mollis. Nam ultricies lectus sit amet nulla</p>
                </div>

              </li>
              <li className='col-md-3 mb-4'>
                <div className='p-5'>
                  <h5>Aliquam ac neque nisl.</h5>
                  <p>Aliquam ac neque nisl. Cras nec elit in mauris semper mollis. Nam ultricies lectus sit amet nulla</p>
                </div>

              </li>
              <li className='col-md-3 mb-4'>
                <div className='p-5'>
                  <h5>Aliquam ac neque nisl.</h5>
                  <p>Aliquam ac neque nisl. Cras nec elit in mauris semper mollis. Nam ultricies lectus sit amet nulla</p>
                </div>

              </li>
              <li className='col-md-3 mb-4'>
                <div className='p-5'>
                  <h5>Aliquam ac neque nisl.</h5>
                  <p>Aliquam ac neque nisl. Cras nec elit in mauris semper mollis. Nam ultricies lectus sit amet nulla</p>
                </div>

              </li>
            </ul>
            <div className="d-flex justify-content-end mb-5">
              <PaginationLink/>
            </div>            
          </div>
        </Box>
      </Container>
    </div>
  );
}
