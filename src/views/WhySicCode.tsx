import React from 'react';

import { Container, Box, Button } from '@mui/material';
import NavBar from 'components/Navbar/NavBar';
import Footer from 'components/Footer/Footer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import OutlinedInput from '@mui/material/OutlinedInput';
import SelectDropDown from 'components/SelectDropDown/SelectDropDown';
import arrowsImg from 'assets/arrows.png';

export default function WhySicCode(props: any) {
  return (
    <div className="App inner-pages">
      <NavBar className="inner-header" />
      <Box sx={{ bgcolor: '#fff', paddingTop: '94px' }}>
        <section className="inner-banner">
          <div className="container py-5">
            <div className="inner-banner-wrap d-flex flex-column  justify-content-center align-items-center">
              <h2 className="mb-3">Why SIC Code</h2>
              <a href="">
                <ArrowBackIcon className="lnk-back-icon" /> Back to Home
              </a>
            </div>
          </div>
        </section>
        <main className="">
          <section className="why-sic-timeline"></section>
          <section className="code bg-grey code-conversion-block py-5">
            <div className="container px-4 py-5">
              <div className="row mb-5">
                <div className="col-md-6">
                  <h2 className="block-title mb-4">
                    Lorem ipsum dolor title 1
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas pulvinar scelerisque metus, a porttitor nisl
                    dapibus ac. Suspendisse vitae mi massa. Aliquam ac neque
                    nisl. Cras nec elit in mauris semper mollis. Nam ultricies
                    lectus sit amet nulla convallis, sit amet condimentum augue
                    dignissim. Sed sit amet nisl tempus, congue diam at, dictum
                    nisl. Maecenas maximus turpis at mauris imperdiet, in
                    laoreet est posuere. Vestibulum accumsan ac risus quis
                    tristique. Phasellus dolor mauris, hendrerit at sapien in,
                    pellentesque maximus nisl. Nulla at mollis augue. Proin
                    accumsan turpis arcu, at elementum augue congue sed.
                  </p>
                </div>
                <div className="col-md-6">
                  <h2 className="block-title mb-4">
                    Lorem ipsum dolor title 1
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas pulvinar scelerisque metus, a porttitor nisl
                    dapibus ac. Suspendisse vitae mi massa. Aliquam ac neque
                    nisl. Cras nec elit in mauris semper mollis. Nam ultricies
                    lectus sit amet nulla convallis, sit amet condimentum augue
                    dignissim. Sed sit amet nisl tempus, congue diam at, dictum
                    nisl. Maecenas maximus turpis at mauris imperdiet, in
                    laoreet est posuere. Vestibulum accumsan ac risus quis
                    tristique. Phasellus dolor mauris, hendrerit at sapien in,
                    pellentesque maximus nisl. Nulla at mollis augue. Proin
                    accumsan turpis arcu, at elementum augue congue sed.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <h2 className="block-title mb-4">
                    Lorem ipsum dolor title 1
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas pulvinar scelerisque metus, a porttitor nisl
                    dapibus ac. Suspendisse vitae mi massa. Aliquam ac neque
                    nisl. Cras nec elit in mauris semper mollis. Nam ultricies
                    lectus sit amet nulla convallis, sit amet condimentum augue
                    dignissim. Sed sit amet nisl tempus, congue diam at, dictum
                    nisl. Maecenas maximus turpis at mauris imperdiet, in
                    laoreet est posuere. Vestibulum accumsan ac risus quis
                    tristique. Phasellus dolor mauris, hendrerit at sapien in,
                    pellentesque maximus nisl. Nulla at mollis augue. Proin
                    accumsan turpis arcu, at elementum augue congue sed.
                  </p>
                </div>
                <div className="col-md-6">
                  <h2 className="block-title mb-4">
                    Lorem ipsum dolor title 1
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas pulvinar scelerisque metus, a porttitor nisl
                    dapibus ac. Suspendisse vitae mi massa. Aliquam ac neque
                    nisl. Cras nec elit in mauris semper mollis. Nam ultricies
                    lectus sit amet nulla convallis, sit amet condimentum augue
                    dignissim. Sed sit amet nisl tempus, congue diam at, dictum
                    nisl. Maecenas maximus turpis at mauris imperdiet, in
                    laoreet est posuere. Vestibulum accumsan ac risus quis
                    tristique. Phasellus dolor mauris, hendrerit at sapien in,
                    pellentesque maximus nisl. Nulla at mollis augue. Proin
                    accumsan turpis arcu, at elementum augue congue sed.
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
