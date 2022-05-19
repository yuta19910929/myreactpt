import React from 'react';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import TopSubArea from '../elements/TopSubArea';
import { TopLinkButton, EyeCatch } from '../index';
import "../../assets/css/style.css";
import { topitems } from '../../data/Data';

const TopContent = () => {

  return (
    <div className="topContent">
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
            flexDirection: { sm:'row', xs: 'column'} }}>
            {topitems.map((item) => {
              return <Box sx={{ display: 'flex',
                width:{ xs:'90%', sm:'30%' },
                maxWidth: '100%',
                flexDirection: 'column',
                mx: "auto",
                mb: 5 }}>
                <Link to={item.link} className="topSubAreaBox">
                  <TopLinkButton
                    contentImg={item.Image}
                  />
                  <TopSubArea
                    H2={item.Title}
                    subTxt={item.Txt}
                  />
                </Link>
              </Box>
            })}
          </Box>
        </Box>
      </div>
    </div>
	);
}

export default TopContent;
