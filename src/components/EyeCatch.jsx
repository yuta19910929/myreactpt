import "../css/style.css";
import Box from '@mui/material/Box';
import React, { useEffect, useRef } from "react";
import {gsap} from "gsap";

const EyeCatch = () => {
  const topEyeCatch = useRef();
  useEffect(() => {
    gsap.to(topEyeCatch.current, {
      backgroundImage: "linear-gradient(to left, #4169e1, #fff8dc)",
      duration: 3,
      repeat: 30
    });
  });
  return (
      <div className="topEyeCatch" ref={topEyeCatch}>
        <p>Hello！<br />
        <span>React！</span></p>
      </div>
	);
}

export default EyeCatch;
