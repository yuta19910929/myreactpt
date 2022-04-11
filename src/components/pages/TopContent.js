import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import TopSubArea from '../elements/TopSubArea';
import { TopLinkButton, Background, EyeCatch, Image1, Image2, Image3, Image4, Image6, Image7 } from '../index';

const TopContent = (props) => {

  return (
    <>
      <Background
        backImg_1={Image7}
        backImg_2={Image6}
      />
      <EyeCatch />
      <div id="topSelect">
        <Box sx={{ width: '70%', maxWidth: '100%', mx: "auto", p: 2 }}>
          <Box sx={{ display: 'flex', width: '100%', maxWidth: '100%', flexWrap: 'wrap', justifyContent: 'center', flexDirection: { sm:'row', xs: 'column'}}}>
            <Box sx={{ display: 'flex', width:{ xs:'90%', sm:'40%' }, maxWidth: '100%', flexDirection: 'column', mx: "auto"}}>
              <TopLinkButton
                contentImg={Image1}
              />
              <Link to="about" className="topSubAreaBox">
                <TopSubArea
                  h2={'About'}
                  subTxt={'Aboutdammydammydammydammydammydammydammydammydammydammydammydammydammydammydammy'}
                />
              </Link>
            </Box>
            <Box sx={{ display: 'flex', width:{ xs:'90%', sm:'40%' }, maxWidth: '100%', flexDirection: 'column', mx: "auto"}}>
              <TopLinkButton
                contentImg={Image2} />
              <Link to="skill" className="topSubAreaBox">
                <TopSubArea
                  h2={'Skill'}
                  subTxt={'skilldammydammydammydammydammydammydammydammydammydammydammydammydammydammydammy'}
                  />
              </Link>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', width: '100%', maxWidth: '100%', flexWrap: 'wrap', justifyContent: 'center', flexDirection: { sm:'row', xs: 'column'}}}>
            <Box sx={{ display: 'flex', width:{ xs:'90%', sm:'40%' }, maxWidth: '100%', flexDirection: 'column', mx: "auto"}}>
              <TopLinkButton
                contentImg={Image3}
              />
              <Link to="career" className="topSubAreaBox">
                <TopSubArea
                  h2={'Career'}
                  subTxt={'Aboutdammydammydammydammydammydammydammydammydammydammydammydammydammydammydammy'}
                />
              </Link>
            </Box>
            <Box sx={{ display: 'flex', width:{ xs:'90%', sm:'40%' }, maxWidth: '100%', flexDirection: 'column', mx: "auto"}}>
              <TopLinkButton
                contentImg={Image4} />
              <Link to="contact" className="topSubAreaBox">
                <TopSubArea
                  h2={'Contact'}
                  subTxt={'skilldammydammydammydammydammydammydammydammydammydammydammydammydammydammydammy'}
                  />
              </Link>
            </Box>
          </Box>
        </Box>
      </div>
    </>
	);
}

export default TopContent;
