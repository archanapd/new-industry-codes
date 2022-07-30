import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { marginBottom: 2, width: '100%' }
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-error"
          label="Enter your name here."
          placeholder='Enter your name here.'
          style={{ fontSize: '2rem' }}
        />
        <TextField
          id="outlined-error-helper-text"
          label="Enter company name"
          helperText="Incorrect entry."
          placeholder='Enter company name'
        />
        <TextField
          id="outlined-error-helper-text"
          label="Enter your email"
          helperText="Incorrect entry."
          placeholder='Enter your email'
        />
        <TextField
          id="outlined-error-helper-text"
          label="Enter your contact number"
          helperText="Incorrect entry."
          placeholder='Enter your contact number'
        />
        <TextField
          id="outlined-error-helper-text"
          label="Enter your contact number"
          helperText="Incorrect entry."
          placeholder='Enter your contact number'
        />
      </div>
      {/* <div>
        <TextField
          error
          id="filled-error"
          label="Error"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          error
          id="filled-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
          variant="filled"
        />
      </div>
      <div>
        <TextField
          error
          id="standard-error"
          label="Error"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          error
          id="standard-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
          variant="standard"
        />
      </div> */}
    </Box>
  );
}
