import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

export default function PopOver(props : any) {

  let { popup, showPopup, targetElement} = props;
  const [anchorEl, setAnchorEl] = React.useState(targetElement);

  const handleClose = () => {
    setAnchorEl(null);
    showPopup(false);
  };

  const open = popup;
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
    </div>
  );
}
