import React from 'react';
import { commonType } from '../../types/common';

const TopSubArea = (props: commonType) => {
  return (
    <>
      <h2>{props.H2}</h2>
      <p>{props.subTxt}</p>
    </>
	);
}

export default TopSubArea;
