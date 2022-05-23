import React from 'react';
import { Box } from '@mui/material';
import { H3 } from '../index';
import { commonType } from '../../types/common';

const Container1Column = (props: commonType) => {

  return(
    <Box sx={{ width: '70%',
      mx:'auto',
      mt:5, mb:9,
      display:{sm:'block'} }}>
      <H3
        H3={props.H3}
      />
      <p>{props.Txt}</p>
    </Box>
  )
}

export default Container1Column;
