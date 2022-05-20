import React from 'react';
import  "../../assets/css/style.css";
import { commonType } from '../../types/common';

const H3 = (props: commonType) => {

  return (
    <>
      <h3 className="h3">{props.H3}</h3>
    </>
	);
}

export default H3;
