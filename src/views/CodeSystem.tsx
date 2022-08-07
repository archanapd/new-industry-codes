import React from 'react';

import { Container, Box, Button } from '@mui/material';
import NavBar from 'components/Navbar/NavBar';
import Footer from 'components/Footer/Footer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import OutlinedInput from '@mui/material/OutlinedInput';
import SelectDropDown from 'components/SelectDropDown/SelectDropDown';
import arrowsImg from 'assets/arrows.png';

export default function CodeSystem(props: any) {
  return (
    <div className="App inner-pages">
      <NavBar className="inner-header" />
      <Box sx={{ bgcolor: '#fff', paddingTop: '94px' }}>
        <section className="inner-banner">
          <div className="container py-5">
            <div className="inner-banner-wrap d-flex flex-column  justify-content-center align-items-center">
              <h2 className="mb-3">Code System</h2>
              <a href="">
                <ArrowBackIcon className="lnk-back-icon" /> Back to Home
              </a>
            </div>
          </div>
        </section>
        <main className="pb-5">
          <section className="know-about-blok py-5">
            <div className="container px-4 py-5">
              <div className="row mb-3">
                <div className="col-md-3">
                  <span className="d-flex mb-3">Know about</span>
                  <SelectDropDown />
                </div>
              </div>
              <div className="row">
                <div className="col-md-9">
                  <h2 className="block-title pt-md-5 pb-md-4">
                    Lorem ipsum dolor title
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas pulvinar scelerisque metus, a porttitor nisl
                    dapibus ac. Suspendisse vitae mi massa
                  </p>
                  <p>
                    {' '}
                    Aliquam ac neque nisl. Cras nec elit in mauris semper
                    mollis. Nam ultricies lectus sit amet nulla convallis, sit
                    amet condimentum augue dignissim. Sed sit amet nisl tempus,
                    congue diam at, dictum nisl. Maecenas maximus turpis at
                    mauris imperdiet
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-grey py-5">
            <div className="container">
              <h2 className="block-title mb-5">Browse NAICS Code List</h2>
              <div className="row g-3 hover-list pb-4">
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
                    <div className="col-9">Utilities</div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="d-flex p-3 border bg-light">
                    <div className="col-3">
                      <strong>44-45</strong>
                    </div>
                    <div className="col-9">Construction</div>
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
                    <div className="col-9">Utilities</div>
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
                    <div className="col-9">Utilities</div>
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
                    <div className="col-9">Utilities</div>
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
                    <div className="col-9">Utilities</div>
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
                    <div className="col-9">Utilities</div>
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
          </section>
          <section className="container conversion-ref-block py-5 my-5">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <h2 className="block-title mb-4">
                    Conversions / Cross-References
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas pulvinar scelerisque metus, a porttitor nisl
                    dapibus ac. Suspendisse vitae mi massa.
                  </p>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-md-9">
                  <ul className="d-flex">
                    <li className="col-6 pe-4">
                      <SelectDropDown />
                    </li>
                    <li className="col-6">
                      <SelectDropDown />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row pt-5 mt-5">
                <div className="col-md-10">
                  <ul className="row">
                    <li className="col-md-6 pe-md-5">
                      <h2 className="block-title mb-4">
                        What is the SBA NAICS 111992 revenue limit?
                      </h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas pulvinar scelerisque metus, a porttitor nisl
                        dapibus ac. Suspendisse vitae mi massa
                      </p>
                      <p>
                        {' '}
                        Aliquam ac neque nisl. Cras nec elit in mauris semper
                        mollis. Nam ultricies lectus sit amet nulla convallis,
                        sit amet condimentum augue dignissim. Sed sit amet nisl
                        tempus , congue diam at, dictum nisl. Maecenas maximus
                        turpis at mauris imperdiet, in laoreet est posuere.
                        Vestibulum accumsan ac risus quis tristique. Phasellus
                        dolor mauris, hendrerit at sapien in, pellentesque
                        maximus nisl. Nulla at mollis augue. Proin accumsan
                        turpis arcu, at elementum augue congue sed.
                      </p>
                    </li>
                    <li className="col-md-6 ps-md-5">
                      <h2 className="block-title mb-4">
                        What is the SBA NAICS 111992 revenue limit?
                      </h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas pulvinar scelerisque metus, a porttitor nisl
                        dapibus ac. Suspendisse vitae mi massa
                      </p>
                      <p>
                        {' '}
                        Aliquam ac neque nisl. Cras nec elit in mauris semper
                        mollis. Nam ultricies lectus sit amet nulla convallis,
                        sit amet condimentum augue dignissim. Sed sit amet nisl
                        tempus , congue diam at, dictum nisl. Maecenas maximus
                        turpis at mauris imperdiet, in laoreet est posuere.
                        Vestibulum accumsan ac risus quis tristique. Phasellus
                        dolor mauris, hendrerit at sapien in, pellentesque
                        maximus nisl. Nulla at mollis augue. Proin accumsan
                        turpis arcu, at elementum augue congue sed.
                      </p>
                    </li>
                  </ul>
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
