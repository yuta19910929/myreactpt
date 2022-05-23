import React from 'react';
import Box from '@mui/material/Box';
import { commonType } from '../../types/common';

const TopLinkButton = (props: commonType) => {
  return (
		  <Box sx={{ 
        width:'70%',
        m: 5,
        display: 'block'}}
        className="LinkButtonBgColor">
        <img 
          src={props.contentImg} 
          className="TopLinkImg"
          alt={props.Title} />
      </Box>
	);
}

export default TopLinkButton;
