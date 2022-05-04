import * as React from "react";
import { useState } from "react";
import { Box, Button, Typography, Modal, Rating } from '@mui/material';

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
    <>
      <Button sx={{ textTransform: 'capitalize',
        width:{ xs:'90%', sm:'30%' },
        mb:3,
        height:'200px',
        border: 1,
        display: 'block',
        fontSize: 25,
        fontWeight: 'bold'}}
        onClick={handleOpen}>{props.Title}<br />
        <Rating name="read-only" value={props.Star} readOnly />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" sx={{fontSize: 25, fontWeight: 'bold'}}>
            {props.Title}
          </Typography>
          <Box sx={{mt:2}}>
            <Rating name="read-only" value={props.Star} readOnly />
          </Box>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {props.Content}
          </Typography>
        </Box>
      </Modal>
    </>
  );
}

export default BasicModal;
