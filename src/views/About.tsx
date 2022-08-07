import React from 'react';

import { Container, Box } from '@mui/material';
import NavBar from 'components/Navbar/NavBar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import aboutImgOne from '../assets/about-1.png';
import aboutImgTwo from '../assets/about-2.png';
import Footer from 'components/Footer/Footer';

export default function About(props: any) {
  return (
    <div className="App inner-pages">
      <NavBar />
      <Box sx={{ bgcolor: '#fff', paddingTop: '94px' }}>
        <section className="inner-banner">
          <div className="container py-5">
            <div className="inner-banner-wrap d-flex flex-column  justify-content-center align-items-center">
              <h2 className="mb-3">About Industry Codes</h2>
              <a href="">
                <ArrowBackIcon className="lnk-back-icon" /> Back to Home
              </a>
            </div>
          </div>
        </section>
        <main className="container mt-5 pt-5 pb-5">
          <section className="about-list">
            <ul className="row">
              <li className="col-sm-6 col-lg-3 mb-4">
                <div className="card">
                  <img src={aboutImgOne} className="card-img-top" alt="..." />
                  <div className="card-body p-5">
                    <h5 className="card-title mb-3">Lorem ipsum title</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas pulvinar scelerisque metus, a porttitor nisl
                      dapibus ac. Suspendisse vitae mi massa
                    </p>
                  </div>
                </div>
              </li>
              <li className="col-sm-6 col-lg-3 mb-4">
                <div className="card">
                  <img src={aboutImgOne} className="card-img-top" alt="..." />
                  <div className="card-body p-5">
                    <h5 className="card-title mb-3">Lorem ipsum title</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas pulvinar scelerisque metus, a porttitor nisl
                      dapibus ac. Suspendisse vitae mi massa
                    </p>
                  </div>
                </div>
              </li>
              <li className="col-sm-6 col-lg-3 mb-4">
                <div className="card">
                  <img src={aboutImgOne} className="card-img-top" alt="..." />
                  <div className="card-body p-5">
                    <h5 className="card-title mb-3">Lorem ipsum title</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas pulvinar scelerisque metus, a porttitor nisl
                      dapibus ac. Suspendisse vitae mi massa
                    </p>
                  </div>
                </div>
              </li>
              <li className="col-sm-6 col-lg-3 mb-4">
                <div className="card">
                  <img src={aboutImgOne} className="card-img-top" alt="..." />
                  <div className="card-body p-5">
                    <h5 className="card-title mb-3">Lorem ipsum title</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas pulvinar scelerisque metus, a porttitor nisl
                      dapibus ac. Suspendisse vitae mi massa
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </section>
          <section className="about-img-col row mt-md-5 pt-5">
            <div className="col-lg-6">
              <img src={aboutImgTwo} />
            </div>
            <div className="col-lg-6 ps-lg-5 align-self-center">
              <div className="row">
                <div className="col-md-10">
                  <h4 className="my-4">Lorem ipsum dolor title</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas pulvinar scelerisque metus, a porttitor nisl
                    dapibus ac. Suspendisse vitae mi massa.{' '}
                  </p>
                  <p>
                    Aliquam ac neque nisl. Cras nec elit in mauris semper
                    mollis. Nam ultricies lectus sit amet nulla convallis, sit
                    amet condimentum augue dignissim. Sed sit amet nisl tempus,
                    congue diam at, dictum nisl. Maecenas maximus turpis at
                    mauris imperdiet,
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="about-img-col row mt-md-5 pt-5 flex-md-row-reverse">
            <div className="col-lg-6">
              <img src={aboutImgTwo} />
            </div>
            <div className="col-lg-6 pe-md-5 align-self-center">
              <div className="row">
                <div className="col-md-10">
                  <h4 className="my-4">Lorem ipsum dolor title</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas pulvinar scelerisque metus, a porttitor nisl
                    dapibus ac. Suspendisse vitae mi massa.{' '}
                  </p>
                  <p>
                    Aliquam ac neque nisl. Cras nec elit in mauris semper
                    mollis. Nam ultricies lectus sit amet nulla convallis, sit
                    amet condimentum augue dignissim. Sed sit amet nisl tempus,
                    congue diam at, dictum nisl. Maecenas maximus turpis at
                    mauris imperdiet,
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Box>
      <Footer />
    </div>
  );
}
