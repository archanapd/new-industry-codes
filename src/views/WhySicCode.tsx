import React from 'react';

import { Container, Box, Button } from '@mui/material';
import NavBar from 'components/Navbar/NavBar';
import Footer from 'components/Footer/Footer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import OutlinedInput from '@mui/material/OutlinedInput';
import SelectDropDown from 'components/SelectDropDown/SelectDropDown';
import arrowsImg from 'assets/arrows.png';
import { display } from '@mui/system';
import { grey } from '@mui/material/colors';

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
          <section className="why-sic-timeline py-5">
            <div className="container px-4 py-5 ">
              <div style={{height: '110px', display: 'flex',justifyContent: 'space-between'}}>
                <div>
              <div className="step-1"></div>
              <div className="step-1-a"></div>
              <div className="step-1"></div>
             <div className="step-1-b"><h5 className="head-1">Step 1</h5><br/>
             <p className="para">Aliquam ac neque nisl. Cras <br/> nec elit in mauris sember<br/>mollis. Nam ultricies  lectus sit</p>
             </div>
             </div>
              <div>
              <div className="step-2"></div>
              <div className="step-2-a"></div>
              <div className="step-2"></div>
              <div className="step-1-b"><h5 className="head-2">Step 1</h5><br/>
             <p className="para">Aliquam ac neque nisl. Cras <br/> nec elit in mauris sember<br/>mollis. Nam ultricies  lectus sit</p>
             </div>
            </div>
            <div>
            <div className="step-3"></div>
            <div className="step-3-a"></div>
             <div className="step-3"></div>
             <div className="step-1-b"><h5 className="head-3">Step 1</h5><br/>
             <p className="para">Aliquam ac neque nisl. Cras <br/> nec elit in mauris sember<br/>mollis. Nam ultricies  lectus sit</p>
             </div>
            </div>
            <div>
            <div className="step-4"></div>
            <div className="step-4-a"></div>
            <div className="step-4"></div>
            <div className="step-1-b"><h5 className="head-4">Step 1</h5><br/>
             <p className="para">Aliquam ac neque nisl. Cras <br/> nec elit in mauris sember<br/>mollis. Nam ultricies lectus sit</p>
             </div>
            </div>
             </div>
             <div style={{height:'80px',display: 'flex',}}>
              
              <div className='square-1'>
                <div style={{display:'flex',justifyContent: 'center',alignItems:'center',color:'#fff',height:'100%'}}>
                <div>1995</div>
                </div>
                <div className='shape'></div>
                <div className='hr-line'></div>
              </div>


               <div className='square-2'>
                <div style={{display:'flex',justifyContent: 'center',alignItems:'center',color:'#fff',height:'100%'}}>
                <div>1995</div>
                </div>
                <div className='shape-a'></div>
                <div className='hr-line-a'></div>
              </div>

              <div className='square-3'>
                <div style={{display:'flex',justifyContent: 'center',alignItems:'center',color:'#fff',height:'100%'}}>
                <div>1995</div>
                </div>
                <div className='shape-b'></div>
                <div className='hr-line-b'></div>
              </div>

              <div className='square-4'>
                <div style={{display:'flex',justifyContent: 'center',alignItems:'center',color:'#fff',height:'100%'}}>
                <div>1995</div>
                </div>
                <div className='shape-c'></div>
                <div className='hr-line-c'></div>
              </div>
               
              <div className='square-5'>
                <div style={{display:'flex',justifyContent: 'center',alignItems:'center',color:'#fff',height:'100%'}}>
                <div>1995</div>
                </div>
                <div className='shape-d'></div>
                <div className='hr-line-d'></div>
              </div>

              <div className='square-6'>
                <div style={{display:'flex',justifyContent: 'center',alignItems:'center',color:'#fff',height:'100%'}}>
                <div>1995</div>
                </div>
                <div className='shape-f'></div>
                <div className='hr-line-f'></div>
              </div>

              <div className='square-7'>
                <div style={{display:'flex',justifyContent: 'center',alignItems:'center',color:'#fff',height:'100%'}}>
                <div>1995</div>
                </div>
                <div className='shape-g'></div>
              </div>

              


             </div>
            </div> 
          </section>
          <section className="code bg-grey code-conversion-block py-5 mt--600">
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
