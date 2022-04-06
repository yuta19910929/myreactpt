import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { palette } from '@material-ui/system';
import Box from '@mui/material/Box';
import '../css/style.css';

const TopLinkButton = (props) => {
  return (
		  <Box sx={{ width:'70%', m: 5,  display: 'block'}} className="LinkButtonBgColor">
        <img src={props.contentImg} className="TopLinkImg" alt={props.title} />
      </Box>
	);
}

export default TopLinkButton;
