import { Box } from '@mui/material';
import { useState } from "react";
import { Image6, Image7, Background, Container2ColumnRev, BasicModal, H2 } from '../index';

const Skill = () => {

  return (
    <>
      <Background
        backImg_1={Image7}
        backImg_2={Image6}
      />
      <div className="skill-page">
        <Box sx={{ width: {sm:'70%'},
          maxWidth: '100%',
          mx: "auto",
          p: 2 }}>
          <H2
            h2={'Skill'}
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
          justifyContent: { sm:'space-evenly', xs:'center' }
        }}>
          <BasicModal
            Title = {'HTML & CSS'}
            Content = {'dammydammydammydammydammydammy'}
          />
          <BasicModal
            Title = {'JavaScript'}
            Content = {'dammydammydammydammydammydammy'}
          />
          <BasicModal
            Title = {'jQuery'}
            Content = {'dammydammydammydammydammydammy'}
          />
          <BasicModal
            Title = {'React'}
            Content = {'dammydammydammydammydammydammy'}
          />
          <BasicModal
            Title = {'PHP'}
            Content = {'dammydammydammydammydammydammy'}
          />
          <BasicModal
            Title = {'React'}
            Content = {'dammydammydammydammydammydammy'}
          />
        </Box>
      </div>
    </>
	);
}

export default Skill;
