import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const TopSubArea = (props) => {
  return (
    <>
      <h2>{props.h2}</h2>
      <p>{props.subTxt}</p>
    </>
	);
}

export default TopSubArea;
