import React,{ useState, useEffect } from 'react';
import { Image1, Image2, Image3, Image7 } from '../index';

const Background = () => {
  const currentAddres = window.location.href;

  return (
		<div className="contentsBg">
      <div className="contentsBg_1">
        <img src={Image7} className="contentsBgSpin" alt="" />
      </div>
      <div className="contentsBg_2">
        { currentAddres.match(/about/) && <img src={Image1} alt="" /> }
        { currentAddres.match(/skill/) && <img src={Image2} alt="" /> }
        { currentAddres.match(/contact/) && <img src={Image3} alt="" /> }
      </div>
    </div>
	);
};

export default Background;