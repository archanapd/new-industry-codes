import React, { useEffect } from 'react';

import { Container, Box, Button } from '@mui/material';
import NavBar from 'components/Navbar/NavBar';
import Footer from 'components/Footer/Footer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import VerticalTab from 'components/VerticalTab/VerticalTab';
import { useLocation, useNavigate } from 'react-router-dom';

export default function NaiscCode(props: any) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const { state } = useLocation();
  const propsData:any = React.useState(state)[0];

  const navigate = useNavigate();
  const navigateToStructure = () => {
    console.log(propsData)
    var data = {
      type : propsData.type,
      data : propsData.data
    }
    navigate('/structure', {
      replace : false,
      state : data 
    });
  };

  var parentToChildData = {
    type : propsData.type,
    data : propsData.data
  }
  
  return (
    <div className="App inner-pages">
      <NavBar className="inner-header" />
      <Box sx={{ bgcolor: '#fff', paddingTop: '94px' }}>
        <section className="inner-banner bg-yellow">
          <div className="container py-5">
            <div className="inner-banner-wrap d-flex flex-column  justify-content-center">
              <h2 className="mb-4">{propsData.type.toUpperCase()} Code {propsData.data.naics_code || propsData.data.code_range} - {propsData.data.short_desc}</h2>
              <div className="text-center" onClick={() => navigateToStructure()}>
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
              <VerticalTab detailsData={parentToChildData}/>
            </div>
          </section>
        </main>
      </Box>
      <Footer />
    </div>
  );
}
