import * as React from "react";
import { useState } from "react";
import { Box, Button, Typography, Modal, } from '@mui/material';
import { Type } from '../MuiCustam';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BasicModal = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button sx={{ textTransform: 'capitalize'}} onClick={handleOpen}>{props.Title}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title">
            {props.Title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {props.Content}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default BasicModal;
