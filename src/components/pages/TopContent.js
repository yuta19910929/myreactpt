import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import TopSubArea from '../elements/TopSubArea';
import { TopLinkButton, EyeCatch, Image1, Image2, Image4 } from '../index';
import "../../assets/css/style.css";

const TopContent = (props) => {

  const topitems = [
    { 'link': '/About',
      'Image': Image1,
      'title': 'About',
      'txt': 'Aboutdammydammydammy'},
    { 'link': '/Skill',
      'Image': Image2,
      'title': 'Skill',
      'txt': 'Skilldammydammydammy'},
    { 'link': '/Contact',
      'Image': Image4,
      'title': 'Conact',
      'txt': 'Contactdammydammydammy'},
  ];

  return (
    <>
      <EyeCatch />
      <div id="topSelect">
        <Box sx={{ width: '70%',
          maxWidth: '100%',
          mx: "auto",
          p: 2 }}>
          <Box sx={{ display: 'flex',
            width: '100%',
            maxWidth: '100%',
            flexWrap: 'wrap',
            justifyContent: 'center',
            flexDirection: { sm:'row', xs: 'column'}}}>
            {topitems.map((item) => {
              return <Box sx={{ display: 'flex',
                width:{ xs:'90%', sm:'30%' },
                maxWidth: '100%',
                flexDirection: 'column',
                mx: "auto"}}>
                <Link to={item.link} className="topSubAreaBox">
                  <TopLinkButton
                    contentImg={item.Image}
                  />
                  <TopSubArea
                    h2={item.title}
                    subTxt={item.txt}
                  />
                </Link>
              </Box>
            })}
          </Box>
        </Box>
      </div>
    </>
	);
}

export default TopContent;
