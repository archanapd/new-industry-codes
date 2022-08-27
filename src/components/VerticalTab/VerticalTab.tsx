import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import './VerticalTab.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { callAPI } from 'helpers/api';
import { BASE_URL } from 'config/apiconfig';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const {children, ...other } = props;

  return (
    <div
      role="tabpanel"
      id={`vertical-tabpanel-0`}
      aria-labelledby={`vertical-tab-0`}
      {...other}
    >
      
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      
    </div>
  );
}

const scrollToRef = (ref:any) => window.scrollTo(0, ref.current.offsetTop - 90)   
function moveToRef(ref: any) {
  scrollToRef(ref)
}



export default function VerticalTab(props : any) {

  const descriptionRef = React.useRef(null);
  const classificationRef = React.useRef(null);
  const crossRef = React.useRef(null);
  const examplesRef = React.useRef(null);

  useEffect(() => {
    getStructureDetail();
  }, []);

  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const { state } = useLocation();
  const propsData:any = React.useState(state)[0];

  const getStructureDetail = () => {
    callAPI({
      method: 'get',
      resource: BASE_URL + 'code/BasedOnId',
      params :{
        [propsData.type] : Number(propsData?.data?.code_range) || Number(propsData?.data?.naics_code),
        "code" : "[3,4,5,6,7,8]"
      },
      success: (jsonResponse) => {
        setStructureDetails(jsonResponse);
      },
      error: (error) => console.log(error)
    });
  };

  let [structureDetails, setStructureDetails]: any = useState<any[]>([]);

  return (
    <Box
      className="v-tab"
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
        className="col-md-3 me-5 vtab-aside pt-5"
      >
        <Tab label="Description"  onClick={() => moveToRef(descriptionRef)} />
        <Tab label="Classification Hierarchy" onClick={() => moveToRef(classificationRef)} />
        <Tab label="Cross-References" onClick={() => moveToRef(crossRef)} />
        <Tab label="Industry Examples" onClick={() => moveToRef(examplesRef)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <div className="tab-panel-wrapper py-5" ref={descriptionRef}>
          <h2 className="mb-4 block-title">{propsData.type.toUpperCase()} Code {propsData.data.naics_code || propsData.data.code_range} Description</h2>
            {
              structureDetails?.data?.map((data1:any) => {
                return(
                  data1?.data?.map((data2:any) => {
                    console.log(structureDetails);
                    if((data2?.naics_code == propsData.data.naics_code) && data2?.long_desc){
                      return(
                        <p>{data2?.long_desc}</p>
                      )
                    }
                  })
                )
              })
            }
        
          {/* <div className="row mt-5">
            <div className="col-md-4 d-flex mb-5">
              <span>
                <SettingsOutlinedIcon className="code-ico-color-red" />
              </span>
              <div className="code-ico-desc ps-2">
                <small>Industry Sector</small> Retail Trade
              </div>
            </div>
            <div className="col-md-4 d-flex mb-5">
              <span>
                <BusinessOutlinedIcon className="code-ico-color-red" />
              </span>
              <div className="code-ico-desc ps-2">
                <small>Total Companies</small> 28,606
              </div>
            </div>
            <div className="col-md-4 d-flex mb-5">
              <span>
                <BusinessOutlinedIcon className="code-ico-color-red" />
              </span>
              <div className="code-ico-desc ps-2">
                <small>Verified Companies</small> 28,606
              </div>
            </div>
            <div className="col-md-4 d-flex mb-5">
              <span>
                <WorkOutlineOutlinedIcon className="code-ico-color-red" />
              </span>
              <div className="code-ico-desc ps-2">
                <small>Est. Employment</small> 28,606
              </div>
            </div>
            <div className="col-md-4 d-flex mb-5">
              <span>
                <MonetizationOnOutlinedIcon className="code-ico-color-red" />
              </span>
              <div className="code-ico-desc ps-2">
                <small>Annual Payroll </small> $62,740,453,000
              </div>
            </div>
            <div className="col-md-4 d-flex mb-5">
              <span>
                <MonetizationOnOutlinedIcon className="code-ico-color-red" />
              </span>
              <div className="code-ico-desc ps-2">
                <small>Total Revenu</small> $908,952,627,000
              </div>
            </div>
          </div> */}
          <div className="dot-border pt-3 mb-5 mt-4" ref={classificationRef}></div>
          <h2 className="mb-4 block-title">Classification Hierarchy for {propsData.type.toUpperCase()} Code {propsData.data.naics_code || propsData.data.code_range}</h2>
          <ul className="row classification-bar pb-4">
            <li className="col-md-6 d-flex flex-column mb-4 mb-md-0">
              <small className="txt-small">Parent Category</small>
              <div className="color-bar d-flex bg-light-green mt-2">
                <span className="bar-nom">4411</span> Automobile Dealers
              </div>
            </li>
            <li className="col-md-6 d-flex flex-column ">
              <small className="txt-small">Subcategories</small>
              <div className="color-bar d-flex bg-light-yellow mt-2">
                <span className="bar-nom">44111</span> New Car Dealers
              </div>
            </li>
          </ul>
          <div className="dot-border pt-3 mb-5 mt-4" ref={crossRef}></div>
          <h2 className="mb-4 block-title">Cross-References</h2>
        
          {
              structureDetails?.data?.map((data1:any) => {
                return(
                  data1?.data?.map((data2:any) => {
                    if((data2?.naics_code == propsData.data.naics_code) && data2?.crossref_desc){
                      return(
                        <p>{data2?.crossref_desc}</p>
                      )
                    }
                  })
                )
              })
            }

          <div className="dot-border pt-3 mb-5 mt-4" ref={examplesRef}></div>
          <h2 className="mb-4 block-title"> Industry Examples of {propsData.type.toUpperCase()} {propsData.data.naics_code || propsData.data.code_range}</h2>
          {
              structureDetails?.data?.map((data1:any) => {
                return(
                  data1?.data?.map((data2:any) => {
                    if((data2?.naics_code == propsData.data.naics_code) && data2?.example_desc){
                      return(
                        <p>{data2?.example_desc}</p>
                      )
                    }
                  })
                )
              })
            }

        </div>
      </TabPanel>
    </Box>
  );
}
