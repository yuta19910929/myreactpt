import { Box } from '@mui/material';
import { Image6, Image7, Background, Container1Column, Container2Column, Container2ColumnRev, H2 } from '../index';
import  "../../assets/css/style.css";

const About = () => {

  return (
    <>
      <Background
        backImg_1={Image7}
        backImg_2={Image6}
      />
      <div className="about-page">
        <Box sx={{ width: {sm:'70%'}, maxWidth: '100%', mx: "auto", p: 2 }}>
          <H2
            h2={'About'}
          />
        </Box>
          <Container1Column
            H3={'このサイトについて'}
            Txt={`このサイトはReact + Material UI + GSAPで制作をしたポートフォリオサイトです。`}
          />
          <Container2Column
            H3={'Profile'}
            Txt={'dammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammy'}
            Style={'Column2 cyan-op'}
          />
          <Container2ColumnRev
            H3={'Webに興味を持ったきっかけ'}
            Txt={'dammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammy'}
            Style={'Column2 magenta-op'}
          />
          <Container1Column
            H3={'キャリア'}
            Txt={`dammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammydammy`}
          />
      </div>
    </>
	);
}

export default About;
