import { Box } from '@mui/material';
import { H3 } from '../index';
import  "../../assets/css/style.css";

const Container2ColumnRev = (props) => {

  return(
    <Box sx={{
      display: 'flex',
      height:'400px',
      width: '100%',
      mx:"auto",
      mt:0,
      mb:0,
      flexDirection:{sm:'row', xs:'column-reverse'}
    }}>
      <Box sx={{
        ml:0,
        width:{sm:'50%', xs:'100%'},
        display:{sm:'block'}
      }}>
        <p className="m-20">{props.Txt}</p>
        <p className="m-20">{props.Txt_2}</p>
      </Box>
      <Box sx={{
          mx:'auto',
          mb:0,
          height:'100%',
          width:{sm:'50%', xs:'100%'},
          display:{sm:'block'},
          textAlign:'center',
        }}
        className={props.Style}>
        <H3
          H3={props.H3}
          />
      </Box>
    </Box>
  )
}

export default Container2ColumnRev;
