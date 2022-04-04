import { Grid } from '@material-ui/core';
import { palette } from '@material-ui/system';
import Box from '@mui/material/Box';
import '../css/style.css';

const TopLinkButton = (props) => {
  const {contentImg, title} = props;
  return (
		<Box sx={{ width: 350, m: 5, border: 1, borderColor:'grey.400', borderRadius: 2, display: 'block'}} className="LinkButoonBgColor">
      <img src={contentImg} className="TopLinkImg" alt={title} />
      <p className="TopLinkTxt">{title}</p>
		</Box>
	);
};

export default TopLinkButton;
