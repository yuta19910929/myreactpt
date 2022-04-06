import { Background } from './index';
import Box from '@mui/material/Box';
import Image6 from '../img/logo512.png';
import Image7 from '../img/gear_line.png';

const About = () => {

  return (
    <div>
      <p>aboutページ</p>
      <Box sx={{ width: '75%', mx: "auto", p: 2 }}>
        <Background
          backImg_1={Image7}
          backImg_2={Image6}
        />
      </Box>
    </div>
	);
}

export default About;
