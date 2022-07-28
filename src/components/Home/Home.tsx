import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.scss';

import { Container, Box } from '@mui/material';

import NavBar from 'components/Navbar/NavBar';
import bannerImg from 'assets/banner.png';
import avatarImgOne from 'assets/avatar-1.png';
import avatarImgTwo from 'assets/avatar-2.png';
import avatarImgThree from 'assets/avatar-3.png';
import countryImg from 'assets/countries.svg';
import arrowsImg from 'assets/arrows.png';
import buildingImg from 'assets/img-1.png';
import SelectDropDown from 'components/SelectDropDown/SelectDropDown';
import Footer from 'components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Box sx={{ bgcolor: 'white' }}>
        <section className="banner">
          <div className="container py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
              <div className="col-10 col-sm-8 col-lg-6">
                <img src={bannerImg} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700"
                  height="500" loading="lazy" />
              </div>
              <div className="col-lg-6">
                <h1 className="display-5 fw-bold mb-5">Maecenas pulvinar scelerisque metus, a porttitor nisl dapibus ac.</h1>
                <p className="lead">Maecenas pulvinar scelerisque metus,<br /> a porttitor nisl dapibus ac. Suspendisse vitae <br />mi
                  massa.</p>
                <div className="gap-2 d-md-flex justify-content-md-start mt-4">
                  <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Button</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-search p-4">
          <div className="container">
            <div className="row g-3">
              <div className="col-md-4">
                <SelectDropDown />
              </div>
              <div className="col-md-5">
                <input type="text" className="form-control input-search-ico" id="firstName" placeholder="Search" value="" required />
              </div>
              <div className="col-md-3">
                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Button</button>
              </div>
            </div>
          </div>
        </section>
        <section className="home-list p-5">
          <div className="container">
            <ul className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active px-5" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home"
                  type="button" role="tab" aria-controls="pills-home" aria-selected="true">SIC</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link px-5" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile"
                  type="button" role="tab" aria-controls="pills-profile" aria-selected="false">NAICS</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link px-5" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact"
                  type="button" role="tab" aria-controls="pills-contact" aria-selected="false">ISIC</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link px-5" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled"
                  type="button" role="tab" aria-controls="pills-disabled" aria-selected="false">NACE</button>
              </li>
            </ul>
            <div className="tab-content mt-5" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <div className="row g-3 hover-list">
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Agriculture, Forestry, Fishing, Hunting
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>44-45</strong>
                      </div>
                      <div className="col-9">
                        Mining, Quarrying, Oil, Gas Extraction
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Utilities
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>44-45</strong>
                      </div>
                      <div className="col-9">
                        Construction
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Agriculture, Forestry, Fishing, Hunting
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Mining, Quarrying, Oil, Gas Extraction
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Utilities
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>44-45</strong>
                      </div>
                      <div className="col-9">
                        Agriculture, Forestry, Fishing, Hunting
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Mining, Quarrying, Oil, Gas Extraction
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Utilities
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Agriculture, Forestry, Fishing, Hunting
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Mining, Quarrying, Oil, Gas Extraction
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Utilities
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Agriculture, Forestry, Fishing, Hunting
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Mining, Quarrying, Oil, Gas Extraction
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Utilities
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Agriculture, Forestry, Fishing, Hunting
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Mining, Quarrying, Oil, Gas Extraction
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Utilities
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Agriculture, Forestry, Fishing, Hunting
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Mining, Quarrying, Oil, Gas Extraction
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                <div className="row g-3 hover-list">
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Agriculture, Forestry, Fishing, Hunting
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>44-45</strong>
                      </div>
                      <div className="col-9">
                        Mining, Quarrying, Oil, Gas Extraction
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Utilities
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>44-45</strong>
                      </div>
                      <div className="col-9">
                        Construction
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Agriculture, Forestry, Fishing, Hunting
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Mining, Quarrying, Oil, Gas Extraction
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Utilities
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>44-45</strong>
                      </div>
                      <div className="col-9">
                        Agriculture, Forestry, Fishing, Hunting
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Mining, Quarrying, Oil, Gas Extraction
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Utilities
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Agriculture, Forestry, Fishing, Hunting
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Mining, Quarrying, Oil, Gas Extraction
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Utilities
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Agriculture, Forestry, Fishing, Hunting
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Mining, Quarrying, Oil, Gas Extraction
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Utilities
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Agriculture, Forestry, Fishing, Hunting
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Mining, Quarrying, Oil, Gas Extraction
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Utilities
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Agriculture, Forestry, Fishing, Hunting
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Mining, Quarrying, Oil, Gas Extraction
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" >
                <div className="row g-2 hover-list">
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Agriculture, Forestry, Fishing, Hunting
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>44-45</strong>
                      </div>
                      <div className="col-9">
                        Mining, Quarrying, Oil, Gas Extraction
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Utilities
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>44-45</strong>
                      </div>
                      <div className="col-9">
                        Construction
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Agriculture, Forestry, Fishing, Hunting
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Mining, Quarrying, Oil, Gas Extraction
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Utilities
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>44-45</strong>
                      </div>
                      <div className="col-9">
                        Agriculture, Forestry, Fishing, Hunting
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Mining, Quarrying, Oil, Gas Extraction
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Utilities
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Agriculture, Forestry, Fishing, Hunting
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Mining, Quarrying, Oil, Gas Extraction
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Utilities
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Agriculture, Forestry, Fishing, Hunting
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Mining, Quarrying, Oil, Gas Extraction
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Utilities
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Agriculture, Forestry, Fishing, Hunting
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Mining, Quarrying, Oil, Gas Extraction
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Utilities
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Agriculture, Forestry, Fishing, Hunting
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Mining, Quarrying, Oil, Gas Extraction
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab">
                <div className="row g-3 hover-list">
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Agriculture, Forestry, Fishing, Hunting
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>44-45</strong>
                      </div>
                      <div className="col-9">
                        Mining, Quarrying, Oil, Gas Extraction
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Utilities
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>44-45</strong>
                      </div>
                      <div className="col-9">
                        Construction
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Agriculture, Forestry, Fishing, Hunting
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Mining, Quarrying, Oil, Gas Extraction
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Utilities
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>44-45</strong>
                      </div>
                      <div className="col-9">
                        Agriculture, Forestry, Fishing, Hunting
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Mining, Quarrying, Oil, Gas Extraction
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Utilities
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Agriculture, Forestry, Fishing, Hunting
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Mining, Quarrying, Oil, Gas Extraction
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Utilities
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Agriculture, Forestry, Fishing, Hunting
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Mining, Quarrying, Oil, Gas Extraction
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Utilities
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Agriculture, Forestry, Fishing, Hunting
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Mining, Quarrying, Oil, Gas Extraction
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Utilities
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Agriculture, Forestry, Fishing, Hunting
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="d-flex p-3 border bg-light">
                      <div className="col-3">
                        <strong>10</strong>
                      </div>
                      <div className="col-9">
                        Mining, Quarrying, Oil, Gas Extraction
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="regions">
          <div className="container px-4 py-5">
            <h2 className="pb-2 text-center">World Regions and Industry Classifications</h2>
            <div className="text-center my-5">
              <img src={countryImg} alt="" />
            </div>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 ">
              <div className="col d-flex align-items-start">
                <div>
                  <h4 className="fw-bold mb-2">Text here</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar scelerisque metus, a porttitor
                    nisl dapibus ac. Suspendisse vitae mi massa.</p>
                </div>
              </div>
              <div className="col d-flex align-items-start">
                <div>
                  <h4 className="fw-bold mb-2">Text here</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar scelerisque metus, a porttitor
                    nisl dapibus ac. Suspendisse vitae mi massa.</p>
                </div>
              </div>
              <div className="col d-flex align-items-start">
                <div>
                  <h4 className="fw-bold mb-2">Text here</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar scelerisque metus, a porttitor
                    nisl dapibus ac. Suspendisse vitae mi massa.</p>
                </div>
              </div>
              <div className="col d-flex align-items-start">
                <div>
                  <h4 className="fw-bold mb-2">Text here</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar scelerisque metus, a porttitor
                    nisl dapibus ac. Suspendisse vitae mi massa.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="code">
          <div className="container px-4 py-5">
            <h2 className="pb-2 text-center text-light">Code Conversion</h2>
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar scelerisque
              <br />metus, a porttitor nisl dapibus ac. Suspendisse vitae mi massa. Aliquam ac neque nisl.</p>
            <div className="row g-3 my-4">

              <div className="col-md-5">
                <input type="text" className="form-control input-search-ico" id="firstName" placeholder="Enter code or keyword" value=""
                  required />
              </div>
              <div className="col-md-7">

                <ul className="d-flex g-3 list-search">
                  <li className=""><select className="form-select" id="country" required >
                    <option value="">Placeholder</option>
                    <option>United States</option>
                  </select></li>
                  <li className="list-search-btn"><button className="btn-filter"><img src={arrowsImg} /></button></li>
                  <li className="">
                    <select className="form-select" id="country" required >
                      <option value="">Placeholder</option>
                      <option>United States</option>
                    </select>
                  </li>
                </ul>
              </div>

              <div className="col-md-12 text-center mt-5">
                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Convert</button>
              </div>
            </div>
          </div>
        </section>
        <section className="download py-5">
          <div className="container px-4 py-5">
            <h2 className="pb-2 text-center">Download detailed classifications</h2>
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar scelerisque
              <br />metus, a porttitor nisl dapibus ac. Suspendisse vitae mi massa. Aliquam ac neque nisl.</p>
            <div className="row g-3 my-4">

              <div className="col-md-4">
                <select className="form-select" id="country" required>
                  <option value="">Placeholder</option>
                  <option>United States</option>
                </select>
              </div>
              <div className="col-md-4">
                <select className="form-select" id="country" required>
                  <option value="">Placeholder</option>
                  <option>United States</option>
                </select>
              </div>
              <div className="col-md-4">
                <select className="form-select" id="country" required>
                  <option value="">Placeholder</option>
                  <option>United States</option>
                </select>
              </div>
              <div className="col-md-12 text-center mt-5">
                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Download</button>
              </div>
            </div>
          </div>
        </section>
        <section className="img-block">
          <div className="row m-0">
            <div className="col-md-4">
              <img src={buildingImg} alt="" />
            </div>
            <div className="col-md-8 d-flex align-self-center p-5">
              <h2 className="text-light p-5">Maecenas pulvinar<br /> scelerisque metus, a porttitor<br /> nisl dapibus ac.</h2>
            </div>
          </div>
        </section>
        <section className="industry-strip py-5">
          <ul className="d-flex align-self-center flex-column flex-md-row  text-center text-md-left ">
            <li className="col"><a href="">Industry codes</a></li>
            <li className="col"><a href="">Industry codes</a></li>
            <li className="col"><a href="">Industry codes</a></li>
            <li className="col"><a href="">Industry codes</a></li>
            <li className="col"><a href="">Industry codes</a></li>
          </ul>
        </section>
        <section className="testimonials my-5">
          <div className="container px-4 py-5">
            <h2 className="pb-4 text-center mb-5">What client say</h2>

            <div id="carouselExampleInterval" className="carousel slide testimonial-slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item" data-bs-interval="10000">
                  <ul className="row">
                    <li className="col-md-4">
                      <div className="card border-0" >
                        <img src={avatarImgOne} className="card-img-top" alt="..." />
                        <div className="card-body pt-5">
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <h5 className="card-title pt-5">Jeffery Erhunse</h5>
                        </div>
                      </div>
                    </li>
                    <li className="col-md-4">
                      <div className="card border-0">
                        <img src={avatarImgTwo} className="card-img-top" alt="..." />
                        <div className="card-body pt-5">
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <h5 className="card-title pt-5">Charles Etoroma</h5>
                        </div>
                      </div>
                    </li>
                    <li className="col-md-4">
                      <div className="card border-0" >
                        <img src={avatarImgThree} className="card-img-top" alt="..." />
                        <div className="card-body pt-5">
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <h5 className="card-title pt-5">Philip Martin</h5>
                        </div>
                      </div>
                    </li>
                  </ul>

                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <ul className="row">
                    <li className="col-md-4">
                      <div className="card border-0" >
                        <img src={avatarImgThree} className="card-img-top" alt="..." />
                        <div className="card-body pt-5">
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <h5 className="card-title pt-5">Jeffery Erhunse</h5>
                        </div>
                      </div>
                    </li>
                    <li className="col-md-4">
                      <div className="card border-0">
                        <img src={avatarImgThree} className="card-img-top" alt="..." />
                        <div className="card-body pt-5">
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <h5 className="card-title pt-5">Charles Etoroma</h5>
                        </div>
                      </div>
                    </li>
                    <li className="col-md-4">
                      <div className="card border-0" >
                        <img src={avatarImgThree} className="card-img-top" alt="..." />
                        <div className="card-body pt-5">
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <h5 className="card-title pt-5">Philip Martin</h5>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="carousel-item active">
                  <ul className="row">
                    <li className="col-md-4">
                      <div className="card border-0" >
                        <img src={avatarImgOne} className="card-img-top" alt="..." />
                        <div className="card-body pt-5">
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <h5 className="card-title pt-5">Jeffery Erhunse</h5>
                        </div>
                      </div>
                    </li>
                    <li className="col-md-4">
                      <div className="card border-0">
                        <img src={avatarImgTwo} className="card-img-top" alt="..." />
                        <div className="card-body pt-5">
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <h5 className="card-title pt-5">Charles Etoroma</h5>
                        </div>
                      </div>
                    </li>
                    <li className="col-md-4">
                      <div className="card border-0" >
                        <img src={avatarImgThree} className="card-img-top" alt="..." />
                        <div className="card-body pt-5">
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <h5 className="card-title pt-5">Philip Martin</h5>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>

          </div>
        </section>
      </Box>
      <Footer />
    </div>
  );
}

export default App;
