import { Box } from '@mui/material';
import { BasicModal, H2 } from '../index';

const Skill = () => {

  const skillitems = [
    { 'title': 'HTML & CSS',
      'content': 'dammydammydammy',
      'Star': 5},
    { 'title': 'JavaScript',
      'content': 'dammydammydammy',
      'Star': 3},
    { 'title': 'jQuery',
      'content': 'dammydammydammy',
      'Star': 3},
    { 'title': 'React',
      'content': 'dammydammydammy',
      'Star': 3},
    { 'title': 'PHP',
      'content': 'dammydammydammy',
      'Star': 2},
  ];

  return (
    <>
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
        {skillitems.map((item) => {
          return <BasicModal
            Title = {item.title}
            Content = {item.content}
            Star = {item.Star}
          />
        })}
        </Box>
      </div>
    </>
	);
}

export default Skill;
