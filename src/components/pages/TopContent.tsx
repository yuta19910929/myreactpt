import React from 'react';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import TopSubArea from '../elements/TopSubArea';
import { TopLinkButton, EyeCatch, Background } from '../index';
import { Image1 ,Image2 ,Image3 } from '../index';

type topData = {
  link: string;
  Image: string;
  Title: string;
  Txt: string;
}[];

const TopContent = () => {

  const topitems: topData = [
    { link: '/About',
      Image: Image1,
      Title: 'About',
      Txt: '簡単な自己紹介とキャリアについて'},
    { link: '/Skill',
      Image: Image2,
      Title: 'Skill',
      Txt: 'これまでに勉強してきた言語やツールについて'},
    { link: '/Contact',
      Image: Image3,
      Title: 'Conact',
      Txt: 'お問合せフォームはこちら'},
  ];

  return (
    <>
      <Background />
      <div id="all-contents" className="topContent">
        <EyeCatch />
        <div id="topSelect">
          <Box sx={{ 
            width: '70%',
            maxWidth: '100%',
            mx: "auto",
            p: 2 }}>
            <Box sx={{ 
              display: 'flex',
              width: '100%',
              maxWidth: '100%',
              flexWrap: 'wrap',
              justifyContent: 'center',
              flexDirection: { sm:'row', xs: 'column'} }}>
              {topitems.map((item) => {
                return <Box sx={{ 
                  display: 'flex',
                  width:{ xs:'90%', sm:'30%' },
                  maxWidth: '100%',
                  flexDirection: 'column',
                  mx: "auto",
                  mb: 5 }}>
                  <Link to={item.link.toLowerCase()} className="topSubAreaBox">
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
    </>
	);
}

export default TopContent;