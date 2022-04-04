import { Grid } from '@material-ui/core';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { FaUserAlt, FaRegObjectUngroup, FaChalkboardTeacher, FaRegEnvelope } from 'react-icons/fa';
import { IconContext } from 'react-icons'
import { TopLinkButton, Background } from './index';
import Image1 from '../img/yellow_about.png';
import Image2 from '../img/blue_skill.png';
import Image3 from '../img/green_career.png';
import Image4 from '../img/red_contact.png';
import Image6 from '../img/logo512.png';
import Image7 from '../img/gear_line.png';

function TopContent(props) {

  return (
    <div>
      <Box sx={{ width: '75%', mx: "auto", p: 2 }} className="unRotate">
        <Background
          backImg_1={Image7}
          backImg_2={Image6}
        />
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
    </div>
	);
}

export default TopContent;
