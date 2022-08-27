import React, { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import './TabLinks.scss';
import Typography from '@mui/material/Typography';
import { callAPI } from 'helpers/api';
import { BASE_URL } from 'config/apiconfig';
import { Link, useNavigate } from 'react-router-dom';
import DialogBox from 'components/DialogBox/DialogBox';

interface TabPanelProps {
  children?: React.ReactNode;
  value: string;
}

function TabPanel(props: TabPanelProps) {
  const { children } = props;
  return (
    <div>{children}</div>
  );
}

export default function TabLinks() {
  const [menuValueSelected, setMenuValue] = React.useState("sic");
  const navigate = useNavigate();

  const menuChange = (event: React.SyntheticEvent, newValue: string) => {
    setMenuValue(newValue);
  };

  const [dialogBox , showDialogBox] = useState(false)

  let [searchResults, setSearchResults]: any = useState<any[]>([]);

  React.useEffect(() => {
    getSearchResults();
  }, []);

  const getSearchResults = () => {
    callAPI({
      method: 'get',
      params : {},
      resource: BASE_URL + 'div/sic-naics',
      success: (jsonResponse) => {
        setSearchResults(jsonResponse);
      },
      error: (error) => console.log(error)
    });
  };

  const navigateToStructure = (type:any, menuValueSelected: any) => {
    console.log(menuValueSelected)
    var data = {
      type : type,
      data : menuValueSelected
    }

    //showDialogBox(true);

    navigate('/structure', {
      replace : true,
      state : data 
    });
  };

  // const navigateToStructure = () => {
  //   navigate('/structure');
  // };
  const [popup , setPop] = useState(false)
  const handleClick = () => {
    setPop(!popup);
    console.log()
   
  }

  return (
    <Box sx={{ width: '100%'}}>
      <Tabs
        value={menuValueSelected}
        onChange={menuChange}
        aria-label="secondary tabs example"
        centered
        className="home-tabs">
         <Tab value="sic" label="SIC" /> 
        <Tab value="naics" label="NAICS" />
      </Tabs>
      <TabPanel value={menuValueSelected}>
        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" style={{ marginTop: '40px' }}>
 
          {/* <div className="row g-2 hover-list " onClick={navigateToStructure}> */}
 
          {/* <div className="row g-2 hover-list " onClick={navigateToStructure}> */}
 
          <div className="row g-2 hover-list ">
            {searchResults?.data?.data?.map((item: any, i: number) => {
              return (
                item?.[menuValueSelected]?.map((data: any, i: number) => {
                  return (
                    <div className="col-md-4" key={i} onClick={() => navigateToStructure(menuValueSelected,data)}>
                      <div className="d-flex align-items-center p-3 border bg-light pointer rangre_data">
                        <div className="col-3">
                           <strong>{data.code_range}</strong> 
                        </div>
                         <div className="col-9 tab-short-desc align-items-center short_desc"> 
                         {/* <div className="col-9 tab-short-desc">  */}
                         {data.short_desc}
                        </div>
                        <div>
                          <div className="drop-circle" onClick={handleClick}>
                            {popup?
                            <div className="popup">
                              <div className='container'><p>hello welcome to reactjs</p></div>
                            </div>:""}
                          </div>
                        </div>
                       
                      </div>
                    </div>
                  );
                })
              )
            })}

            {dialogBox && <DialogBox></DialogBox>}
          </div>
        </div>
      </TabPanel>
    </Box>
  );
}

