import React, { useState, useEffect } from 'react';
import { callAPI } from '../helpers/api';
import { BASE_URL } from '../config/apiconfig';

import { Container, Box, Grid } from '@mui/material';
import SelectDropDown from 'components/SelectDropDown/SelectDropDown';
import PaginationLink from 'components/PaginationLink/PaginationLink';

export default function SearchResults(props: any) {
  let [searchResults, setSearchResults]: any = useState<any[]>([]);

  React.useEffect(() => {
    getSearchResults();
  }, []);

  const getSearchResults = () => {
    callAPI({
      method: 'get',
      resource: BASE_URL + 'search?naics=111',
      success: (jsonResponse) => {
        setSearchResults(jsonResponse);
      },
      error: (error) => console.log(error)
    });
  };

  return (
    <div className="App">
      <Container maxWidth="xl">
        <Box
          className="page-not-found d-flex align-items-center"
          sx={{ height: '100%' }}
        >
          {searchResults && searchResults.data && (
            <div>
              <h2 className="mb-4 mt-5 pt-4">
                311- Food Manufacturing showing 30 results
              </h2>
              <Grid container spacing={2}>
                <Grid item xs={5}>
                  <SelectDropDown />
                </Grid>
                <Grid item xs={3}>
                  <SelectDropDown />
                </Grid>
              </Grid>
              <ul className=" mt-5  mb-5 row search-result-list">
                {searchResults.data.data.map((item: any, i: number) => {
                  return (
                    <li className="col-md-3 mb-4" key={i}>
                      <div className="p-5">
                        <h5>{item.short_desc}</h5>
                        <p>{item.long_desc}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <div className="d-flex justify-content-end mb-5">
                <PaginationLink totalPages={searchResults.data.rowCount} />
              </div>
            </div>
          )}
        </Box>
      </Container>
    </div>
  );
}
