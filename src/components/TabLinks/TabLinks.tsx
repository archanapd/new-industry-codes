import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import './TabLinks.scss';

export default function TabLinks() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="secondary tabs example"
        centered
        className='home-tabs'
      >
        <Tab value="one" label="SIC" />
        <Tab value="two" label="NAICS" />
        <Tab value="three" label="ISIC" />
        <Tab value="four" label="NACE" />
      </Tabs>
    </Box>
  );
}
