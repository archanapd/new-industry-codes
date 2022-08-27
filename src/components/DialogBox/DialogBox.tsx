import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import './DialogBox.scss';

export default function DialogBox(props: any) {
  let { popup, showPopup } = props;

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClose = () => {
    showPopup(false);
  };

  const [maxWidth, setMaxWidth] = React.useState<DialogProps['maxWidth']>('md');


  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open responsive dialog
      </Button> */}
      <Dialog
        fullScreen={fullScreen}
        open={popup}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        className='tablist-popup'
        maxWidth="md"
      >
        <DialogContent className='tablist-popup-content px-4'>
          <ul className='tablist-popup-item'>
            <li className='d-flex'><strong className='pe-3'>31 -</strong> Food</li>
            <li className='d-flex'><strong className='pe-3'>31 -</strong> Food</li>
            <li className='d-flex'><strong className='pe-3'>31 -</strong> Food</li>
          </ul>
        </DialogContent>
      </Dialog>
    </div>
  );
}
