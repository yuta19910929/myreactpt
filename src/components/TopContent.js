import { TopLinkButton } from './index';
import { Grid } from '@material-ui/core';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { FaUserAlt, FaRegObjectUngroup, FaChalkboardTeacher, FaRegEnvelope } from 'react-icons/fa';
import { IconContext } from 'react-icons'
import Image1 from '../img/human.svg';
import Image2 from '../img/skills.svg';
import Image3 from '../img/career.svg';
import Image4 from '../img/contact.svg';

function TopContent(props) {

  return (
    <Box sx={{ width: '75%', mx: "auto", mt:"50px" }}>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <TopLinkButton
          contentImg={Image1}
          title={'About'}
        />
        <TopLinkButton
          contentImg={Image2}
          title={'Skills'}
        />
        <TopLinkButton
          contentImg={Image3}
          title={'career'}
        />
        <TopLinkButton
          contentImg={Image4}
          title={'Contact'}
        />
      </Box>
    </Box>
	);
}

export default TopContent;
