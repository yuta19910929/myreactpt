import "../../assets/css/style.css";
import React, { useEffect, useRef } from "react";
import {gsap} from "gsap";

const EyeCatch = () => {
  const topEyeCatch = useRef();
  const topEyeCatch_c = useRef();
  useEffect(() => {
    gsap.to(topEyeCatch.current, {
      backgroundImage: "linear-gradient(to left, #4169e1, #fff8dc)",
      duration: 4,
      repeat: 200
    });
    gsap.to(topEyeCatch_c.current, {
      backgroundImage: "linear-gradient(to left, #4169e1, #fff8dc)",
      duration: 5,
      repeat: 200
    });
  });
  return (
      <div className="topEyeCatch" ref={topEyeCatch}>
        <p>Hello！<br />
        <span className="topEyeCatch_c" ref={topEyeCatch_c}>React！</span></p>
      </div>
	);
}

export default EyeCatch;
