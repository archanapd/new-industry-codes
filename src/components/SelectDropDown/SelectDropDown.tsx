import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import './SelectDropDown.scss';

export default function SelectDropDown() {
  const [sic, setAge] = React.useState('ANZSIC');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
         <Select
          id="demo-simple-select"
          value={sic}
          displayEmpty
          onChange={handleChange}
          inputProps={{ 'aria-label': 'Without label' }}
          className="box-white">
          <MenuItem value={'ANZSIC'}>ANZSIC</MenuItem>
          <MenuItem value={'CNAE'}>CNAE</MenuItem>
          <MenuItem value={'HSIC'}>HSIC</MenuItem>
          <MenuItem value={'ICNEA'}>ICNEA</MenuItem>
          <MenuItem value={'ISIC'}>ISIC</MenuItem>
          <MenuItem value={'JSIC'}>JSIC</MenuItem>
          <MenuItem value={'KSIC'}>KSIC</MenuItem>
          <MenuItem value={'NACE'}>NACE</MenuItem>
          <MenuItem value={'NAF'}>NAF</MenuItem>
          <MenuItem value={'NAICS'}>NAICS</MenuItem>
          <MenuItem value={'NIC'}>NIC</MenuItem>
          <MenuItem value={'SCIAN'}>SCIAN</MenuItem>
          <MenuItem value={'SIC'}>SIC</MenuItem>
          <MenuItem value={'SNI'}>SNI</MenuItem>
          <MenuItem value={'UKSIC'}>UKSIC</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
