import React from 'react';

import { Container, Box } from '@mui/material';
import flagImg from 'assets/flag.png';
import arrowdownImg from 'assets/arrowdown.png';


export default function Menu(props: any) {
  return (
    // <div className="App">
    //    <Container maxWidth="md">
    //     <Box sx={{ bgcolor: 'white', height: '1000px',backgroundColor: 'blue'}}>About</Box>
    //   </Container> 
    // </div>
    <div>
       <section className="main-banner">
          <div className="container">
            <div className='menu-a'>
              <div className='menu-a-1'>
                
                <div><img  src={flagImg}/>United States</div>
                <div><img  src={arrowdownImg}/></div>
               
              
              </div>
              <div className='menu-a-2'>
              
              </div>
               {/* <div className='menu-a-3'></div> */}
              
            </div> 

            <div className='box-1'>
              <div className='stage-1'>
              <div className='content-1'>
                <div className='content-head'>Home</div>
                <div>liquam ac neque nisl. Cras nec elit in mauris semper mollis. Nam ultricies lectus 
                sit amet nulla convallis,  sit amet condimentum augue dignissim. Sed sit amet nisl tempus.</div>
              </div>
              <div className='content-1'>
                <div className='content-head'>About</div>
                <div>liquam ac neque nisl. Cras nec elit in mauris semper mollis. Nam ultricies lectus sit amet nulla convallis, sit amet
                   condimentum augue dignissim. Sed sit amet nisl tempus.</div>
              </div>
              <div className='content-1'>
                <div className='content-head'>Codesystem</div>
                <div>liquam ac neque nisl. Cras nec elit in mauris semper mollis. Nam ultricies lectus 
                sit amet nulla convallis,  sit amet condimentum augue dignissim. Sed sit amet nisl tempus.</div>
              </div>
              
              </div>
              <div className='stage-2'>
              <div className='content-1'>
                <div className='content-head'>Code Convertion</div>
                <div>liquam ac neque nisl. Cras nec elit in mauris semper mollis. Nam ultricies lectus 
                sit amet nulla convallis,  sit amet condimentum augue dignissim. Sed sit amet nisl tempus.</div>
              </div>

              <div className='content-1'>
                <div className='content-head'>Contact</div>
                <div>liquam ac neque nisl. Cras nec elit in mauris semper mollis. Nam ultricies lectus 
                sit amet nulla convallis,  sit amet condimentum augue dignissim. Sed sit amet nisl tempus.</div>
              </div>

              <div className='content-1'>
                <div className='content-head'>What is SIC Code?</div>
                <div>liquam ac neque nisl. Cras nec elit in mauris semper mollis. Nam ultricies lectus 
                sit amet nulla convallis,  sit amet condimentum augue dignissim. Sed sit amet nisl tempus.</div>
              </div>
              </div>
              <div className='stage-3'>Terms $ conditions</div>


            </div>
 
           

            
           
          </div>
        </section>
    </div>

  );
}
