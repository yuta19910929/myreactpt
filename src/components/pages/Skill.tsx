import React from 'react';
import { Box } from '@mui/material';
import { BasicModal, H2, Background } from '../index';
import { returnCodeToBr } from '../helper';
import { skillitems } from '../../data/Data';

const Skill = () => {

  return (
    <>
      <Background />
      <div id="all-contents" className="skill-page">
        <Box sx={{ width: {sm:'70%'},
          maxWidth: '100%',
          mx: 'auto',
          mt: 10,
          mb: 10,
          textAlign: 'center',
          p: 2 }}>
          <H2
            H2={'Skill'}
          />
        </Box>
        <Box sx={{ width: {sm:'70%', xs:'100%'},
          maxWidth: '100%',
          mx: "auto",
          mb: 4,
          p: 2,
          display: 'flex',
          flexDirection: { xs:'column', sm:'row' },
          flexWrap: 'wrap',
          justifyContent: { sm:'space-between', xs:'center' }
        }}>
        {skillitems.map((item) => {
          return <BasicModal
            Title = {returnCodeToBr(item.Title)}
            Content = {returnCodeToBr(item.Content)}
            Star = {item.Star}
          />
        })}
        </Box>
      </div>
    </>
	);
}

export default Skill;
