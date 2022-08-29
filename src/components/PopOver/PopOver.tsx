import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import './PopOver.scss';

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
        className="list-popover"
      >
       <ul className='tablist-popup-item px-3'>
            <li className='d-flex'><strong className='pe-3'>31 -</strong> Food</li>
            <li className='d-flex'><strong className='pe-3'>31 -</strong> Food</li>
            <li className='d-flex'><strong className='pe-3'>31 -</strong> Food</li>
          </ul>
      </Popover>
    </div>
  );
}
