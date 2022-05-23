import React,{ useState, useEffect } from 'react';
import { Image1, Image2, Image3, Image4, Image7 } from '../index';

const Background = () => {
  const [imageSelect, setImageSelect] = useState<any>();
  useEffect(() => {
    const currentAddres = window.location.href;
    if (currentAddres.match(/about/)) {
        setImageSelect(Image1);
      } else if(currentAddres.match(/skill/)){
        setImageSelect(Image2);
      }else if(currentAddres.match(/contact/)){
        setImageSelect(Image4);
      };
  }, []);

  return (
		<div className="contentsBg">
      <div className="contentsBg_1">
        <img src={Image7} className="contentsBgSpin" alt="" />
      </div>
      <div className="contentsBg_2">
        <img src={imageSelect} alt=""/>
      </div>
    </div>
	);
};

export default Background;