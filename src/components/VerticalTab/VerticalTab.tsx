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

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`
  };
}

export default function VerticalTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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
        <Tab label="Description    " {...a11yProps(0)} />
        <Tab label="Hierarchy" {...a11yProps(1)} />
        <Tab label="Industry Examples" {...a11yProps(2)} />
        <Tab label="Companies" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <div className="tab-panel-wrapper py-5">
          <h2 className="mb-4 block-title">NAICS Code 44111 Description</h2>
          <p>
            Aliquam ac neque nisl. Cras nec elit in mauris semper mollis. Nam
            ultricies lectus sit amet nulla convallis, sit amet condimentum
            augue dignissim. Sed sit amet nisl tempus, congue diam at, dictum
            nisl. Maecenas maximus turpis at mauris imperdiet, in laoreet est
            posuere. Vestibulum accumsan ac risus quis tristique. Phasellus
            dolor mauris, hendrerit at sapien in, pellentesque maximus nisl.
            Nulla at mollis augue. Proin accumsan turpis arcu, at elementum
            augue congue sed.
          </p>
          <div className="row mt-5">
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
          </div>
          <div className="dot-border pt-3 mb-5 mt-4"></div>
          <h2 className="mb-4 block-title">NAICS Code 44111 Description</h2>
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
          <div className="dot-border pt-3 mb-5 mt-4"></div>
          <h2 className="mb-4 block-title">Companies</h2>
          <p>
            Aliquam ac neque nisl. Cras nec elit in mauris semper mollis. Nam
            ultricies lectus sit amet nulla convallis, sit amet condimentum
            augue dignissim. Sed sit amet nisl tempus, congue diam at, dictum
            nisl. Maecenas maximus turpis at mauris imperdiet, in laoreet est
            posuere. Vestibulum accumsan ac risus quis tristique. Phasellus
            dolor mauris, hendrerit at sapien in, pellentesque maximus nisl.
            Nulla at mollis augue. Proin accumsan turpis arcu, at elementum
            augue congue sed.
          </p>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="tab-panel-wrapper py-5">
          <h2 className="mb-4 block-title">NAICS Code 44111 Description 1</h2>
          <p>
            Aliquam ac neque nisl. Cras nec elit in mauris semper mollis. Nam
            ultricies lectus sit amet nulla convallis, sit amet condimentum
            augue dignissim. Sed sit amet nisl tempus, congue diam at, dictum
            nisl. Maecenas maximus turpis at mauris imperdiet, in laoreet est
            posuere. Vestibulum accumsan ac risus quis tristique. Phasellus
            dolor mauris, hendrerit at sapien in, pellentesque maximus nisl.
            Nulla at mollis augue. Proin accumsan turpis arcu, at elementum
            augue congue sed.
          </p>
          <div className="row mt-5">
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
          </div>
          <div className="dot-border pt-3 mb-5 mt-4"></div>
          <h2 className="mb-4 block-title">NAICS Code 44111 Description 2</h2>
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
          <div className="dot-border pt-3 mb-5 mt-4"></div>
          <h2 className="mb-4 block-title">Companies</h2>
          <p>
            Aliquam ac neque nisl. Cras nec elit in mauris semper mollis. Nam
            ultricies lectus sit amet nulla convallis, sit amet condimentum
            augue dignissim. Sed sit amet nisl tempus, congue diam at, dictum
            nisl. Maecenas maximus turpis at mauris imperdiet, in laoreet est
            posuere. Vestibulum accumsan ac risus quis tristique. Phasellus
            dolor mauris, hendrerit at sapien in, pellentesque maximus nisl.
            Nulla at mollis augue. Proin accumsan turpis arcu, at elementum
            augue congue sed.
          </p>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="tab-panel-wrapper py-5">
          <h2 className="mb-4 block-title">NAICS Code 44111 Description 3</h2>
          <p>
            Aliquam ac neque nisl. Cras nec elit in mauris semper mollis. Nam
            ultricies lectus sit amet nulla convallis, sit amet condimentum
            augue dignissim. Sed sit amet nisl tempus, congue diam at, dictum
            nisl. Maecenas maximus turpis at mauris imperdiet, in laoreet est
            posuere. Vestibulum accumsan ac risus quis tristique. Phasellus
            dolor mauris, hendrerit at sapien in, pellentesque maximus nisl.
            Nulla at mollis augue. Proin accumsan turpis arcu, at elementum
            augue congue sed.
          </p>
          <div className="row mt-5">
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
          </div>
          <div className="dot-border pt-3 mb-5 mt-4"></div>
          <h2 className="mb-4 block-title">NAICS Code 44111 Description</h2>
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
          <div className="dot-border pt-3 mb-5 mt-4"></div>
          <h2 className="mb-4 block-title">Companies</h2>
          <p>
            Aliquam ac neque nisl. Cras nec elit in mauris semper mollis. Nam
            ultricies lectus sit amet nulla convallis, sit amet condimentum
            augue dignissim. Sed sit amet nisl tempus, congue diam at, dictum
            nisl. Maecenas maximus turpis at mauris imperdiet, in laoreet est
            posuere. Vestibulum accumsan ac risus quis tristique. Phasellus
            dolor mauris, hendrerit at sapien in, pellentesque maximus nisl.
            Nulla at mollis augue. Proin accumsan turpis arcu, at elementum
            augue congue sed.
          </p>
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div className="tab-panel-wrapper py-5">
          <h2 className="mb-4 block-title">NAICS Code 44111 Description 4</h2>
          <p>
            Aliquam ac neque nisl. Cras nec elit in mauris semper mollis. Nam
            ultricies lectus sit amet nulla convallis, sit amet condimentum
            augue dignissim. Sed sit amet nisl tempus, congue diam at, dictum
            nisl. Maecenas maximus turpis at mauris imperdiet, in laoreet est
            posuere. Vestibulum accumsan ac risus quis tristique. Phasellus
            dolor mauris, hendrerit at sapien in, pellentesque maximus nisl.
            Nulla at mollis augue. Proin accumsan turpis arcu, at elementum
            augue congue sed.
          </p>
          <div className="row mt-5">
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
          </div>
          <div className="dot-border pt-3 mb-5 mt-4"></div>
          <h2 className="mb-4 block-title">NAICS Code 44111 Description</h2>
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
          <div className="dot-border pt-3 mb-5 mt-4"></div>
          <h2 className="mb-4 block-title">Companies</h2>
          <p>
            Aliquam ac neque nisl. Cras nec elit in mauris semper mollis. Nam
            ultricies lectus sit amet nulla convallis, sit amet condimentum
            augue dignissim. Sed sit amet nisl tempus, congue diam at, dictum
            nisl. Maecenas maximus turpis at mauris imperdiet, in laoreet est
            posuere. Vestibulum accumsan ac risus quis tristique. Phasellus
            dolor mauris, hendrerit at sapien in, pellentesque maximus nisl.
            Nulla at mollis augue. Proin accumsan turpis arcu, at elementum
            augue congue sed.
          </p>
        </div>
      </TabPanel>
    </Box>
  );
}
